import React from 'react'
import CoverComp from "./CoverComp";
import BlogComp from "./BlogComp";
import FaqComp from "./FaqComp";

import "../App.css";
const TopCoin = () => {
	return (
		<div>
			<CoverComp/>
			<BlogComp />
			<FaqComp />
		</div>
	)
}
export default TopCoin