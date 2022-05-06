import React from 'react'
import TopCoin from "./TopCoin";
import {
    Routes,
    Route,
} from 'react-router-dom'
import "../App.css";
import DetailCoin from './DetailCoin';
const Coin = () => {
	return (
        <Routes>
            <Route path='' element={<TopCoin />} />
            <Route path='ty-gia'>
                <Route path={`:id`} element={<DetailCoin type='1' />}></Route>
            </Route>
        </Routes>
	)
}

export default Coin