import React from "react";
import Header from "../../common/header";
import MinecraftPlan from "./plan";
import Footer from "../../common/footer";
// import Catagory from "../../common/catagory";
import Info from "./info";

export default function Plan() {
	return (
		<div>
			<Header />
			{/* <Catagory /> */}
			<MinecraftPlan />
			<Info />
			<Footer />
		</div>
	);
}
