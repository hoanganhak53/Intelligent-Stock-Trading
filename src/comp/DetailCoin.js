import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip} from 'recharts';


const DetailCoin = () => {
	let params = useParams();
	const [coinData, setCoinData] = useState({
		image: {},
		market_data: {
			current_price: {},
			price_change_percentage_24h_in_currency: {},
			market_cap: {},
			total_volume: {},
			fully_diluted_valuation: {}
		}
	})
	const [chartData, setChartData] = useState({prices: []})
	const [srcImage, setSrc] = useState()
	const [timeMode, setTimeMode] = useState("7")
	const [priceMode, setPriceMode] = useState("prices")


	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/coins/${params.id}?sparkline=true`, {
			method: 'GET',
			headers: myHeaders
		})
		.then(res => res.json())
		.then(res => {
			setCoinData(res)
			setSrc(res.image.large)
			console.log(res)
		})
	}, []);

	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=${timeMode}&interval=${timeMode == '1'? 'minutely':'hourly'}`, {
			method: 'GET',
			headers: myHeaders
		})
		.then(res => res.json())
		.then(res => {
			setChartData(res)
		})
	}, [timeMode, priceMode]);

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
		  return (
			<div className="custom_tooltip">
				<div className='time'><b>{`${label}`}</b></div>
				<p><b>{priceMode == 'prices'? 'Price' : 'Market Cap'}: </b>{`$${payload[0].value}`}</p>
			</div>
		  );
		}
		return null;
	  };
	
	const formatMoney = (n, currency) => {
		if(Number(n) >= 1)
			return currency + Number(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
		else
			return currency +  Number(n).toFixed(8)
	}
	const formatData = (it) => {
		let data = []
		if(priceMode == 'prices')
		{
			it.prices.forEach(e => {
				const d = new Date(e[0])
				data.push({
					"time": d.toUTCString(),
					"prices": e[1] >= 1 ? e[1].toFixed(2): e[1].toFixed(8)
				})			
			})			
		}
		else
		{
			it.market_caps.forEach(e => {
				const d = new Date(e[0])
				data.push({
					"time": d.toUTCString(),
					"market_caps": e[1] >= 1 ? e[1].toFixed(2): e[1].toFixed(8)
				})			
			})
		}
		return data
	}

	return (
		<div className='coin_detail'>
			<div className="detail_price_header">
				<div className="rank">
					<p>Rank#{coinData.market_cap_rank}</p>
				</div>
				<div className='detail_coin_data'>
					<img src={srcImage} />
					<p>{coinData.name} ({String(coinData.symbol).toUpperCase()})</p>
				</div>
				<div>
					<div className='detail_coin_data'>
						<h3>{formatMoney(coinData.market_data.current_price.usd, '$')}</h3>
						{Number(coinData.market_data.price_change_percentage_24h_in_currency.usd) >= 0 
											? 
										<h4 className="color_green">{Number(coinData.market_data.price_change_percentage_24h_in_currency.usd).toFixed(2)}%</h4>
										: 
										<h4 className="color_red">{Number(coinData.market_data.price_change_percentage_24h_in_currency.usd).toFixed(2)}%</h4>
									}
					</div>
				</div>
			</div>
			<div className='prices_coin'>
				<div>
					<div className='market_data'>
						{
							coinData.market_data.market_cap.usd != null ?
								<div>
									<span className='title'>Market Cap </span>
									<span className='value'>{formatMoney(coinData.market_data.market_cap.usd, '$')}</span>
								</div>
								: <div></div>						
						}
					</div>
					<div className='market_data'>
						{
							coinData.market_data.total_volume.usd != null ?
								<div>
									<span className='title'>24 Hour Trading Vol </span>
									<span className='value'>{formatMoney(coinData.market_data.total_volume.usd, '$')}</span>									
								</div>
								: <div></div>						
						}
					</div>
					<div className='market_data'>
						{
							coinData.market_data.fully_diluted_valuation.usd != null ?
								<div>
									<span className='title'>Fully Diluted Valuation </span>
									<span className='value'>{formatMoney(coinData.market_data.fully_diluted_valuation.usd,'$')}</span>									
								</div>
								: <div></div>						
						}
					</div>
				</div>
				<div>
					<div className='market_data'>
						{
							coinData.market_data.circulating_supply != null ?
								<div>
									<span className='title'>Circulating Supply </span>
									<span className='value'>{formatMoney(coinData.market_data.circulating_supply, '')}</span>									
								</div>
								: <div></div>						
						}
					</div>
					<div className='market_data'>
					{
							coinData.market_data.total_supply != null ?
								<div>
									<span className='title'>Total Supply </span>
									<span className='value'>{formatMoney(coinData.market_data.total_supply, '')}</span>									
								</div>
								: <div></div>						
						}

					</div>
					<div className='market_data'>
						{
							coinData.market_data.max_supply != null ?
								<div>
									<span className='title'>Max Supply </span>
									<span className='value'>{formatMoney(coinData.market_data.max_supply,'')}</span>									
								</div>
								: <div></div>						
						}
					</div>
				</div>
			</div>
			<h3>{coinData.name} Price Chart ({String(coinData.symbol).toUpperCase()})</h3>
			<div className='chose_button_coin'>
				<div className='price_chart_mode'>
					<button  onClick={() => {setPriceMode("prices")}} style={{
						borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}}>Price</button>
					<button onClick={() => {setPriceMode("market_cap")}} style={{
						borderTopRightRadius:'5px', borderBottomRightRadius:'5px' }}>Market Cap</button>
					<button onClick={() => {setPriceMode("chart_tradingview")}} style={{
						borderTopRightRadius:'5px', borderBottomRightRadius:'5px' }}>Trading view</button>
				</div>
				<div className='time_chart_mode'>
					<button onClick={() => {setTimeMode("1")}} style={{
						borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}}>24h</button>
					<button onClick={() => {setTimeMode("7")}}>7d</button>
					<button onClick={() => {setTimeMode("14")}}>14d</button>
					<button onClick={() => {setTimeMode("30")}}>30d</button>
					<button onClick={() => {setTimeMode("90")}} style={{
						borderTopRightRadius:'5px', borderBottomRightRadius:'5px'}}>90d</button>
				</div>
			</div>
			{priceMode == 'chart_tradingview' ? 
				<div className='tradingview'>
					<iframe src='http://127.0.0.1:5501/kk.html'></iframe>
				</div>
			: 
				<div style={{paddingTop: '50px',paddingBottom:'50px'}}>
					<AreaChart width={900} height={400} data={formatData(chartData)}
						margin={{ top: 10, right: 0, left: 100, bottom: 10 }}>
						<XAxis dataKey="time" hide="true"/>
						<YAxis type="number" domain={['dataMin', 'dataMax']} padding={{ top: 20, bottom: 20 }}/>
						<CartesianGrid strokeDasharray="3" />
						<Tooltip content={<CustomTooltip />}/>
						<Area type="monotone" dataKey={priceMode=='prices'?'prices':'market_caps'} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"  />
					</AreaChart>
				</div>
			}

			
		</div>
	)
}

export default DetailCoin