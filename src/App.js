import React from 'react'
import "./App.css";
import HeaderComp from './comp/HeaderComp';
import FooterComp from './comp/FooterComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from './comp/Coin';
  
  
const App = () => {
	return (
		<div className='app'>
			<HeaderComp />

			{/* <TopCoin /> */}
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<Coin />} />
				</Routes>
			</BrowserRouter>

			<FooterComp />			
		</div>
	)
}

export default App