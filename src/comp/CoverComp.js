import React from 'react';
import { Screener } from "react-tradingview-embed";

const CoverComp = () => {
    const cophieu =    {
        "width": "1200",
        "height": "1000",
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "market": "vietnam",
        "showToolbar": true,
        "colorTheme": "light",
        "locale": "vi_VN",
      }
	return (
        <div style={{padding:'50px 0px 50px 11%'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
                <img style={{width:'40px',height:'40px',borderRadius:'100%',marginRight:'15px'}} src='https://s3-symbol-logo.tradingview.com/country/VN.svg' ></img>
                <p style={{padding:'0px 0px 50px 0px', fontSize:'36px',fontWeight:'700', fontFamily:'Arial,sans-serif',lineHeight:'34px'}}>THỊ TRƯỜNG  CHỨNG KHOÁN VIỆT NAM</p>
            </div>
            <Screener widgetProps={cophieu}></Screener>
        </div>
	)
}

export default CoverComp