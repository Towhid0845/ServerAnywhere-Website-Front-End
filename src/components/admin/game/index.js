import React from "react";
import Footer from "../../common/footer";
import Header from "../../common/header";
import Gameserver from "./gameserver";

export default function Game() {
	return (
		<div>
			<Header />
			<Gameserver />
			<Footer />
		</div>
	);
}
