import React from 'react'
import "./App.css";
import HeaderComp from './comp/HeaderComp';
import FooterComp from './comp/FooterComp';
import TrangChu from './comp/TrangChu';
import { Routes, Route } from "react-router-dom";
import Coin from './comp/Coin';
import Money from './comp/Money';
import { SettingProfile } from './comp/settingProfile/SettingProfile';
import { Recomment } from './comp/Recomment/Recomment';
import { Profile } from './comp/profile/Profile';  
  
const App = () => {
	return (
	<React.Fragment>
		<HeaderComp />
		<div>
		<Routes>
			<Route path="co_phieu/*" element={<Coin/>} />
			<Route path="/*" element={<TrangChu/>} />
			<Route path="tien_te/*" element={<Money/>} />
			<Route path="setting_profile/*" element={<SettingProfile/>} />
			<Route path={`profile/:id`} element={<Profile/>} />
			<Route path="y_tuong/*" element={<Recomment/>} />
		</Routes>
		</div>
		<FooterComp />
	</React.Fragment>
	)
}

export default App