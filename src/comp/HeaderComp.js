import React from 'react';
import logo from "../assets/logo.png";
import "../App.css";
import { Link } from "react-router-dom";
import { useState} from 'react';
import { Avata } from './avata/Avata';
const HeaderComp = () => {
	const [details, setDetails] = useState('')
	const handleKeypress = e => {
        if (e.key === 'Enter') {
            window.location=`http://localhost:3000/co_phieu/${details.toUpperCase()}`;
        }
    };

	return (
		<div className="header">
            <Link to="/">			
				<img src={logo} alt="logo"/>	
			</Link>
			<div className="right_header">
				<input
					type='text'
					placeholder='Tìm kiếm'
						onChange={e => {
							setDetails(e.target.value);				
						}}
						onKeyPress = {handleKeypress} 
						value={details}
				/>
				<div className='header_button'>
					<a className='header_button' href="https://vn.tradingview.com/chart/FQsUNQeU/" target="_blank">Biểu đồ</a>					
				</div>
				<div className='header_button'>
					<a className='header_button' href="http://localhost:3000/co_phieu">Cổ phiếu</a>				
				</div>
				<div className='header_button'>
					<a className='header_button' href="http://localhost:3000/tien_te">Tiền tệ</a>					
				</div>
				<div className='header_button'>
					<a className='header_button'>Tin tức</a>					
				</div>
				<Avata></Avata>
			</div>

		</div>
	)
}

export default HeaderComp