import React from 'react';
import logo from "../assets/logo.png";
import "../App.css";
import { Link } from "react-router-dom";
import { useState} from 'react';
import { Avata } from './avata/Avata';
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
	  padding: theme.spacing(1, 1, 1, 0),
	  // vertical padding + font size from searchIcon
	  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  [theme.breakpoints.up('sm')]: {
		width: '12ch',
		'&:focus': {
		  width: '20ch',
		  
		},
	  },
	},
  }));

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
				<img src={logo} style={{width:'100px',marginRight:'50px'}} alt="logo"/>	
			</Link>
			<div>
					<Search>
					<SearchIconWrapper>
					<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
					placeholder="Search…"
					inputProps={{ 'aria-label': 'search' }}
					onChange={e => {
						setDetails(e.target.value);				
					}}
					onKeyPress = {handleKeypress} 
					value={details}
					/>
				</Search>				
			</div>
			<div className="right_header">
				<div className='header_button'>
					<a className='header_button' href="https://vn.tradingview.com/chart/mPqhJzPT/" target="_blank">Biểu đồ</a>					
				</div>
				<div className='header_button'>
					<a className='header_button' href="http://localhost:3000/co_phieu">Cổ phiếu</a>				
				</div>
				<div className='header_button'>
					<a className='header_button' href="http://localhost:3000/tien_te">Tiền tệ</a>					
				</div>
				<div className='header_button'>
					<a className='header_button'  href="http://localhost:3000/y_tuong">Ý tưởng</a>					
				</div>
				<Avata></Avata>
			</div>

		</div>
	)
}

export default HeaderComp