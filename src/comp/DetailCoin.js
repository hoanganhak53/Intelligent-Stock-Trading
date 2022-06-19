import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { AdvancedChart,FundamentalData, CompanyProfile,TechnicalAnalysis} from 'react-tradingview-embed';
import { Button, Divider } from '@mui/material';

const DetailCoin = () => {
	let params = useParams();
	const [stockData, setStockData] = useState({
		"results":{
			"branding":{}
		}
	})
	const [id,setId] = useState('AAPL');
	const [indexStock,setIndex] = useState({
		"results":[{'o':'','c':''}]
	})
	const [notFound,setNF] = useState(false);
	const analyst =   {
		"interval": "1m",
		"width": 425,
		"isTransparent": false,
		"height": 400,
		"symbol": id,
		"showIntervalTabs": true,
		"locale": "vi_VN",
		"colorTheme": "light"
	  }

	const symbolInfor =   {
		"symbol": id,
		"width": 480,
		"height": 450,
		"colorTheme": "light",
		"isTransparent": false,
		"locale": "vi_VN"
	  }
	const fundamenta =   {
		"symbol": id,
		"colorTheme": "light",
		"isTransparent": false,
		"largeChartUrl": "",
		"displayMode": "regular",
		"width": 480,
		"height": 850,
		"locale": "vi_VN"
	  }
	const chart =   {
		"width": "1080",
		"height": "500",
		"symbol": id,
		"interval": "D",
		"timezone": "Asia/Ho_Chi_Minh",
		"theme": "light",
		"style": "2",
		"locale": "vi_VN",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"hide_top_toolbar": true,
		"container_id": "tradingview_d01d5"
	  }

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	useEffect(() => {
		fetch(`https://api.polygon.io/v2/aggs/ticker/${params.id}/prev?adjusted=true&apiKey=lBNpgaoR6SlQW6j7Xl_eqF6uWaqLdbzD`, {
			method: 'GET',
			headers: myHeaders
		})
		.then(res => res.json())
		.then(res => {
			setIndex(res)
			if(res.resultsCount !== 0){
				setNF(true);
			}
		})
		fetch(`https://api.polygon.io/v3/reference/tickers/${params.id}?apiKey=lBNpgaoR6SlQW6j7Xl_eqF6uWaqLdbzD`, {
			method: 'GET',
			headers: myHeaders
		})
		.then(res => res.json())
		.then(res => {
			setStockData(res)
			setId(res.results.ticker)
		})
	}, []);

	
	const formatMoney = (n, currency) => {
		if(Number(n) >= 1)
			return currency + Number(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
		else
			return currency +  Number(n).toFixed(8)
	}

	return (
		<div >
			{notFound
				? 
			<div className='coin_detail'>
				<div className='header_detail'>
				<div className='logo_detail'>
					<div>
						<img alt='image' src={stockData.results.branding.icon_url + '?apiKey=lBNpgaoR6SlQW6j7Xl_eqF6uWaqLdbzD'}></img>
					</div>
					<div className='name_detail'>
						<p style={{fontSize:'2.1rem',fontWeight:'1000'}}>{stockData.results.name}</p>
						<p>{stockData.results.ticker}</p>
					</div>
					<div>
					<Button sx={{marginLeft:'130px',marginTop:'30px',textTransform:'none'}} variant='outlined'>
					
						<a style={{textDecoration:'none', color:'rgba(25, 118, 210)'}} href={'https://vn.tradingview.com/chart/FQsUNQeU/?symbol=NYSE%3A' + stockData.results.ticker} target='_blank'>
						Xem trên biểu đồ nâng cao
						</a>						
					</Button>							
					</div>
				
				</div>
				<div className='index_detail'>
					<div style={{display:'flex',flexDrection:'row',alignItems:'flex-end'}}>
						<p style={{fontSize:'1.8rem',fontWeight:'800'}}>{indexStock.results[0].o}</p>
						<p style={{fontSize:'0.7rem',fontWeight:'600',paddingLeft:'3px'}}>USD</p>
						<p className={indexStock.results[0].o - indexStock.results[0].c > 0 ? 'color_green' : 'color_red'
							} style={{paddingLeft:'15px',fontSize:'1.0rem'}}>
							{(indexStock.results[0].o - indexStock.results[0].c).toFixed(2) + " "}
						 	({((indexStock.results[0].o - indexStock.results[0].c)/indexStock.results[0].o*100).toFixed(2)}%)
						</p>
					</div>
					<div>
						<p style={{fontSize:'1.2rem'}}>{indexStock.results[0].n}</p>
						<p style={{color:'#666'}}>Số lượng giao dịch</p>
					</div>
					<div>
						<p style={{fontSize:'1.2rem'}}>{indexStock.results[0].v} USD</p>
						<p style={{color:'#666'}}>Khối lượng giao dịch</p>
					</div>
					<div>
						<p style={{fontSize:'1.2rem'}}>{formatMoney(stockData.results.market_cap, '$')}</p>
						<p style={{color:'#666'}}>Vốn hóa</p>
					</div>
					<div>
						<p style={{fontSize:'1.2rem'}}>{new Date(indexStock.results[0].t).toDateString()}</p>
						<p style={{color:'#666'}}>Lần cập nhật cuối</p>
					</div>
				</div>
			</div>
			<Divider />
			<div className='header_detail'>
				<div className='row_container'>
					<p className='db_p'>Biểu đồ {stockData.results.ticker}</p>
					{
						localStorage.login ?
					<Button sx={{marginLeft:'800px',marginTop:'30px',textTransform:'none'}} variant='outlined'>Theo dõi</Button>					 
						:
					null
					}
				</div>
				<div style={{paddingBottom:'50px',paddingTop:'60px'}}>
					<AdvancedChart widgetProps={chart}></AdvancedChart>
				</div>
					
				<div>
					<p style={{  paddingBottom: '20px',fontSize: '1.6rem'}}>Hồ sơ</p>
					<div style={{display:'flex', flexDirection:'row'}}>
						<FundamentalData widgetProps={fundamenta}></FundamentalData>
						<div style={{marginLeft:'50px'}}>
							<CompanyProfile widgetProps={symbolInfor}></CompanyProfile>
							<TechnicalAnalysis widgetProps={analyst}></TechnicalAnalysis>
						</div>
					</div>
				</div>
			</div>
			</div>
				: 
			<div style={{fontSize:'2rem',fontWeight:'500',textAlign:'center',height:'200px',paddingTop:'200px'}}>
				Không có mã giao dịch nào khớp với tiêu chí của bạn
			</div>
			}	
		</div>
	)
}

export default DetailCoin