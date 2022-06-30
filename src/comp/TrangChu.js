import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MarketOverview, TickerTape } from "react-tradingview-embed";
const TrangChu = () => {
  useEffect(() => {
    if(localStorage.login){
      axios.get(`https://62ba7bf7573ca8f832856dda.mockapi.io/api/IST/user/${localStorage.userId}`)
      .then(res => {
        const data = res.data
        localStorage.setItem('link', data.link)
        localStorage.setItem('address', data.address)
        localStorage.setItem('phoneNumber', data.phoneNumber)
        localStorage.setItem('name', data.name)
        localStorage.setItem('img', data.avatar)
        localStorage.setItem('about', data.about)
        localStorage.setItem('username', data.username)
      })
    }
  },[])

  const ticker = {
    "symbols": [
      {
        "proName": "FOREXCOM:SPXUSD",
        "title": "Chỉ số S&P 500"
      },
      {
        "proName": "FOREXCOM:NSXUSD",
        "title": "US 100"
      },
      {
        "proName": "FX_IDC:EURUSD",
        "title": "EUR/USD"
      },
      {
        "proName": "BITSTAMP:BTCUSD",
        "title": "Bitcoin"
      },
      {
        "proName": "BITSTAMP:ETHUSD",
        "title": "Đồng Ethereum"
      },

    ],
    "colorTheme": "light",
    "isTransparent": true,
    "displayMode": "regular",
    "showSymbolLogo": true,
    "locale": "vi_VN"
  }
  const hopdong = {
    "colorTheme": "light",
    "dateRange": "12M",
    "showChart": true,
    "locale": "vi_VN",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "425",
    "height": "660",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(240, 243, 250, 0)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
      {
        "title": "Hợp đồng Tương lai",
        "symbols": [
          {
            "s": "CME_MINI:ES1!",
            "d": "S&P 500"
          },
          {
            "s": "CME:6E1!",
            "d": "Euro"
          },
          {
            "s": "COMEX:GC1!",
            "d": "Gold"
          },
          {
            "s": "NYMEX:CL1!",
            "d": "Crude Oil"
          },
          {
            "s": "NYMEX:NG1!",
            "d": "Natural Gas"
          },
          {
            "s": "CBOT:ZC1!",
            "d": "Corn"
          }
        ],
        "originalTitle": "Futures"
      }
    ]
  }
  const cophieu = {
    "colorTheme": "light",
    "dateRange": "12M",
    "showChart": true,
    "locale": "vi_VN",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "425",
    "height": "660",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(240, 243, 250, 0)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
      {
        "title": "Cổ phiếu",
        "symbols": [
          {
            "s": "NASDAQ:AAPL",
            "d": "Apple Inc"
          },
          {
            "s": "NASDAQ:VOD",
            "d": "Vodafone "
          },
          {
            "s": "NYSE:AIR",
            "d": "Air corp"
          },
          {
            "s": "NYSE:IBM",
            "d": "International Business Machines"
          },
          {
            "s": "NYSE:BP",
            "d": " BP p.l.c."
          },
          {
            "s": "NYSE:DIS",
            "d": "The Walt Disney Company"
          }
        ],
        "originalTitle": "Bonds"
      }
    ]
  }

  const traiphieu = {
    "colorTheme": "light",
    "dateRange": "12M",
    "showChart": true,
    "locale": "vi_VN",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "425",
    "height": "660",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(240, 243, 250, 0)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
      {
        "title": "Trái phiếu",
        "symbols": [
          {
            "s": "CME:GE1!",
            "d": "Eurodollar"
          },
          {
            "s": "CBOT:ZB1!",
            "d": "T-Bond"
          },
          {
            "s": "CBOT:UB1!",
            "d": "Ultra T-Bond"
          },
          {
            "s": "EUREX:FGBL1!",
            "d": "Euro Bund"
          },
          {
            "s": "EUREX:FBTP1!",
            "d": "Euro BTP"
          },
          {
            "s": "EUREX:FGBM1!",
            "d": "Euro BOBL"
          }
        ],
        "originalTitle": "Bonds"
      }
    ]
  }

  const tiente = {
    "colorTheme": "light",
    "dateRange": "12M",
    "showChart": true,
    "locale": "vi_VN",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "425",
    "height": "660",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(240, 243, 250, 0)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
      {
        "title": "Ngoại hối",
        "symbols": [
          {
            "s": "FX_IDC:USDVND",
            "d": "USD/VND"
          },
          {
            "s": "FX_IDC:JPYVND",
            "d": "JPY/VND"
          },
          {
            "s": "FX_IDC:EURVND",
            "d": "EUR/VND"
          },
          {
            "s": "FX_IDC:GBPVND",
            "d": "GBP/VND"
          },
          {
            "s": "FX_IDC:CNYVND",
            "d": "CNY/VND"
          },
          {
            "s": "FX:USDJPY",
            "d": "USD/JPY"
          }
        ],
        "originalTitle": "Forex"
      }
    ]
  }

  return (
    <div className='TrangChu'>
      <div>
        <TickerTape widgetProps={ticker}></TickerTape>
      </div>
      <div style={{ margin: '60px 0 50px 100px' }}>
        <p style={{ fontSize: '1.7rem', fontWeight: '700', fontFamily: 'Arial,sans-serif' }}>Tổng hợp Thị trường</p>
      </div>
      <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div className='trang_chu_index'>
            <img src='https://s3-symbol-logo.tradingview.com/metal/gold--big.svg' />
            <div style={{ paddingLeft: '15px' }}>
              <a style={{ fontSize: '1.1rem', fontWeight: '600' }} href='https://vn.tradingview.com/chart/FQsUNQeU/?symbol=COMEX%3AGC1%21' target='_blank'>Vàng</a>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }} >
                <p style={{ fontWeight: '600' }}>1857.3</p>
                <p style={{ fontSize: '0.7rem', color: 'gray' }}>USD</p>
                <p style={{ fontSize: '0.9rem', color: 'green', paddingLeft: '10px' }}>+0.53%</p>
              </div>
            </div>
          </div>
          <div className='trang_chu_index'>
            <img src='https://s3-symbol-logo.tradingview.com/indices/vietnam-index--big.svg' />
            <div style={{ paddingLeft: '15px' }}>
              <a style={{ fontSize: '1.1rem', fontWeight: '600' }} href='https://vn.tradingview.com/chart/FQsUNQeU/?symbol=HOSE%3AVNINDEX' target='_blank'>VIETNAM INDEX</a>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }} >
                <p style={{ fontWeight: '600' }}>1285.45</p>
                <p style={{ fontSize: '0.7rem', color: 'gray' }}>VND</p>
                <p style={{ fontSize: '0.9rem', color: 'green', paddingLeft: '10px' }}>+1.33%</p>
              </div>
            </div>
          </div>
          <div className='trang_chu_index'>
            <img src='https://s3-symbol-logo.tradingview.com/crude-oil--big.svg' />
            <div style={{ paddingLeft: '15px' }}>
              <a style={{ fontSize: '1.1rem', fontWeight: '600' }} href='https://vn.tradingview.com/chart/FQsUNQeU/?symbol=NYMEX%3ACL1%21' target='_blank'>Dầu thô</a>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }} >
                <p style={{ fontWeight: '600' }}>115.07</p>
                <p style={{ fontSize: '0.7rem', color: 'gray' }}>USD</p>
                <p style={{ fontSize: '0.9rem', color: 'green', paddingLeft: '10px' }}>+0.86%</p>
              </div>
            </div>
          </div>
          <div className='trang_chu_index'>
            <img src='https://s3-symbol-logo.tradingview.com/indices/dow-30--big.svg' />
            <div style={{ paddingLeft: '15px' }}>
              <a style={{ fontSize: '1.1rem', fontWeight: '600' }} href='https://vn.tradingview.com/chart/FQsUNQeU/?symbol=TVC%3ADJI' target='_blank'>DOW 30</a>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }} >
                <p style={{ fontWeight: '600' }}>33212.97</p>
                <p style={{ fontSize: '0.7rem', color: 'gray' }}>USD</p>
                <p style={{ fontSize: '0.9rem', color: 'green', paddingLeft: '10px' }}>+1.76%</p>
              </div>
            </div>
          </div>
          <div className='trang_chu_index'>
            <img src='https://s3-symbol-logo.tradingview.com/country/US--big.svg' />
            <div style={{ paddingLeft: '15px' }}>
              <a style={{ fontSize: '1.1rem', fontWeight: '600' }} href='https://vn.tradingview.com/chart/FQsUNQeU/?symbol=FX_IDC%3AUSDVND' target='_blank'>USD/VND</a>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }} >
                <p style={{ fontWeight: '600' }}>23195</p>
                <p style={{ fontSize: '0.7rem', color: 'gray' }}>VND</p>
                <p style={{ fontSize: '0.9rem', color: 'red', paddingLeft: '10px' }}>-0.04%</p>
              </div>
            </div>
          </div>
        </div>

        <div className='thi_truong'>
          <div className='overview'>
            <p>Hợp đồng Tương lai</p>
            <MarketOverview widgetProps={hopdong} />
          </div>
          <div className='overview'>
            <p>Cổ phiếu</p>
            <MarketOverview widgetProps={cophieu} />
          </div>
          <div className='overview'>
            <p>Trái phiếu</p>
            <MarketOverview widgetProps={traiphieu} />
          </div>
          <div className='overview'>
            <p>Tiền tệ</p>
            <MarketOverview widgetProps={tiente} />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default TrangChu