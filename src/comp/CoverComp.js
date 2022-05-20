import React from 'react';
import { useEffect, useState } from 'react';
import { AreaChart, Area} from 'recharts';
import { Outlet, Link } from "react-router-dom";


const CoverComp = () => {
	const [coin, setCoin] = useState([]);
	const [trendCoin, setTrendCoin] = useState({coins: []});

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h`, {
			method: 'GET',
			headers: myHeaders
		})
		.then(res => res.json())
		.then(res => {
			setCoin(res);

		})
	}, []);

	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/search/trending`, {
			method: 'GET',
			headers: myHeaders
		})
		.then(res => res.json())
		.then(res => {
			setTrendCoin(res);
		})
	}, []);

	const formatData = (it) => {
		let data = []
		let d0 = it.sparkline_in_7d.price[0]
		it.sparkline_in_7d.price.forEach(e => {
			data.push({"prices":e - d0})			
		})
		return data
	}

	return (
		<div className="cover">
			<div className="cover_top">
				<h1>Buy Bitcoin with INR</h1>
				<p>Join the world's largest crypto exchange.</p>
				<button className="yellow_button">Register Now</button>
			</div>

			<div className="cover_bottom">
				<h1>Market trend</h1>
				<div className="price_table">

					<div className="price_header">
						<div className="name">
							<p>#</p>
						</div>			
						<div className="name">
							<p>Name</p>
						</div>
						<div className="name">
							<p></p>
						</div>
						<div className="name">
							<p>Last Price</p>
						</div>
						<div className="name">
							<p>24th Change</p>
						</div>
						<div className="name">
							<p>Market Cap</p>
						</div>

						<div className="name">
							<p>Last 7 day</p>
						</div>
					</div>

					{coin.map(it => {
						return (
						<div className="price_header">
							<div className="coin_data">
								<h3>{it.market_cap_rank}</h3>
							</div>
							<div className="coin_data">
								<Link to={`/ty-gia/${it.id}`}>
									<img src={it.image} />
								</Link>
								<p>{it.name}</p>

							</div>
							<div className="coin_data">
								<p>{it.symbol.toUpperCase()}</p>
							</div>
							<div className="coin_data">
								<h3>${it.current_price}</h3>
							</div>
							<div className="coin_data">
								{it.price_change_percentage_24h >= 0 
										? 
									<p className="color_green">{it.price_change_percentage_24h}%</p>
									: 
									<p className="color_red">{it.price_change_percentage_24h}%</p>
								}
							</div>
							<div className="coin_data">
								<h3>${it.market_cap}</h3>
							</div>
							<div className="coin_data_graph">
								<AreaChart width={130} height={50} data={formatData(it)}
									margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
									<Area type="monotone" dataKey="prices" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
								</AreaChart>
							</div>

						</div>							
						)
					})}
				</div>

			</div>

			<div className="cover_middle cover_grid">	
			{trendCoin.coins.map(it =>{
				return(
						<div className="grid_comp">
							<div className="comp_top">
								<div className="comp_top_head">
									<img src={it.item.large} />
									<div>
										<h2>{it.item.symbol.toUpperCase()}</h2>
										<p> ${it.item.price_btc * 3864500 }</p>
									</div>
								</div>
							</div>
							<div className="comp_middle">
								<h1 className="color_green">{it.current_price} </h1>
							</div>

							<div className="comp_bottom">
		
								<div>
									<img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
								</div>
							</div>
						</div>
				)
			})}
			</div>

			<div className="bottom_line">
				<h2>View More Markets</h2>
				<p>Introducing Unifi Protocol DAO (UNFI) on Binance Launchpool! Farm UNFI By Staking BNB, BUSD & ETH Tokens 11-13 More</p>
			</div>
		</div>
	)
}

export default CoverComp