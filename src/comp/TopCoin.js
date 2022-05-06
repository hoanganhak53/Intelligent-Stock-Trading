import React from 'react'
import CoverComp from "./CoverComp";
import BlogComp from "./BlogComp";
import ProductComp from "./ProductComp";
import FaqComp from "./FaqComp";

import "../App.css";
const TopCoin = () => {
	return (
		<div>
			<CoverComp/>
			<BlogComp />
			<ProductComp />
			<FaqComp />
		</div>
	)
}

export default TopCoin