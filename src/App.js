import React from 'react'
import "./App.css";
import HeaderComp from './comp/HeaderComp';
import FooterComp from './comp/FooterComp';
import TrangChu from './comp/TrangChu';
import { Routes, Route } from "react-router-dom";
import Coin from './comp/Coin';
import Money from './comp/Money';
import Login from './features/login/Login';
  
  
const App = () => {
	return (
	<React.Fragment>
		{/* <HeaderComp />
		<div>
		<Routes>
			<Route path="co_phieu/*" element={<Coin/>} />
			<Route path="/*" element={<TrangChu/>} />
			<Route path="tien_te/*" element={<Money/>} />
		</Routes>
		</div> */}
		<Login />
		{/* <FooterComp /> */}
	</React.Fragment>
	)
}

export default App