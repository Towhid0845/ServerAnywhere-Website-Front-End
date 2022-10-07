import React from "react";
import Home from "./components/home/index";
import VPS from "./components/vps/index";
import Dedicated from "./components/dedicated/index";
import Web from "./components/web/index";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import  from "./components/auth/signup/signup";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/vps" element={<VPS />}></Route>
					<Route exact path="/dedicated" element={<Dedicated />}></Route>
					<Route exact path="/web" element={<Web />}></Route>
					<Route exact path="/login" element={<Signin />}></Route>
					<Route exact path="/signup" element={<Signup />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
