import React from "react";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VPS from "./components/vps";
import Dedicated from "./components/dedicated";
import Web from "./components/web";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
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
