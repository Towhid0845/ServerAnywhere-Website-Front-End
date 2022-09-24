import React from "react";
import Banner from "../common/banner";
import Header from "../common/header";
// import Pricing from "../common/pricing";
// import Button from "react-bootstrap/Button";
import BannerText from "./banner_text";
import DedicatedPricing from "./dedicated_pricing";

export default function Dedicated() {
	return (
		<div>
			<Header />
			<Banner>
				<BannerText />
			</Banner>
			<DedicatedPricing />
		</div>
	);
}
