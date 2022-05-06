import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


const DetailCoin = () => {
	let params = useParams();
	const [coinData, setCoinData] = useState({
		image: {},
		market_data: {
			current_price: {},
			price_change_percentage_1h_in_currency: {},
			market_cap: {},
			total_volume: {},
			fully_diluted_valuation: {}
		}
	})
	const [srcImage, setSrc] = useState()

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

	const formatData = (n, currency) => {
		return currency + Number(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	}
	
	return (
		<div>
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
						<h3>{formatData(coinData.market_data.current_price.usd, '$')}</h3>
						{Number(coinData.market_data.price_change_percentage_1h_in_currency.usd) >= 0 
											? 
										<h4 className="color_green">{Number(coinData.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)}%</h4>
										: 
										<h4 className="color_red">{Number(coinData.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)}%</h4>
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
									<span className='value'>{formatData(coinData.market_data.market_cap.usd, '$')}</span>
								</div>
								: <div></div>						
						}
					</div>
					<div className='market_data'>
						{
							coinData.market_data.total_volume.usd != null ?
								<div>
									<span className='title'>24 Hour Trading Vol </span>
									<span className='value'>{formatData(coinData.market_data.total_volume.usd, '$')}</span>									
								</div>
								: <div></div>						
						}
					</div>
					<div className='market_data'>
						{
							coinData.market_data.fully_diluted_valuation.usd != null ?
								<div>
									<span className='title'>Fully Diluted Valuation </span>
									<span className='value'>{formatData(coinData.market_data.fully_diluted_valuation.usd,'$')}</span>									
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
									<span className='value'>{formatData(coinData.market_data.circulating_supply, '')}</span>									
								</div>
								: <div></div>						
						}
					</div>
					<div className='market_data'>
					{
							coinData.market_data.total_supply != null ?
								<div>
									<span className='title'>Total Supply </span>
									<span className='value'>{formatData(coinData.market_data.total_supply, '')}</span>									
								</div>
								: <div></div>						
						}

					</div>
					<div className='market_data'>
						{
							coinData.market_data.max_supply != null ?
								<div>
									<span className='title'>Max Supply </span>
									<span className='value'>{formatData(coinData.market_data.max_supply,'')}</span>									
								</div>
								: <div></div>						
						}

					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailCoin