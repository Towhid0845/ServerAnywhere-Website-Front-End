import React from "react";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VPS from "./components/vps";
import Dedicated from "./components/dedicated";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/vps" element={<VPS />}></Route>
					<Route exact path="/dedicated" element={<Dedicated />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
