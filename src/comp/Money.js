import React from 'react';
import { Screener } from "react-tradingview-embed";

const Money = () => {
    const tiente =    {
        "width": "1200",
        "height": "1000",
        "defaultColumn": "overview",
        "defaultScreen": "general",
        "market": "forex",
        "showToolbar": true,
        "colorTheme": "light",
        "locale": "vi_VN"
      }
	return (
        <div style={{padding:'50px 0px 50px 11%'}}>
            <p style={{padding:'0px 0px 50px 0px', fontSize:'36px',fontWeight:'700', fontFamily:'Arial,sans-serif',lineHeight:'34px'}}>THỊ TRƯỜNG TIỀN TỆ</p>
            <Screener widgetProps={tiente}></Screener>
        </div>
	)
}

export default Money