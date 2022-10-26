import React from "react";
import Home from "./components/home/index";
import VPS from "./components/vps/index";
import Dedicated from "./components/dedicated/index";
import Web from "./components/web/index";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import Minecraft from "./components/minecraft";
import Plan from "./components/plan";
import RDP from "./components/rdp";
import Client from "./components/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin_page from "./components/admin";
import Create from "./components/admin/create/create";
import Read from "./components/admin/read/read";
import Update from "./components/admin/update/update";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/vps" element={<VPS />}></Route>
					<Route exact path="/dedicated" element={<Dedicated />}></Route>
					<Route exact path="/rdp" element={<RDP />}></Route>
					<Route exact path="/minecraft" element={<Minecraft />}></Route>
					<Route exact path="/plan" element={<Plan />}></Route>
					<Route exact path="/web" element={<Web />}></Route>
					<Route exact path="/login" element={<Signin />}></Route>
					<Route exact path="/signup" element={<Signup />}></Route>
					<Route exact path="/client" element={<Client />}></Route>

					<Route exact path="/admin" element={<Admin_page />}></Route>
					<Route exact path="/admin/create" element={<Create />}></Route>
					<Route exact path="/admin/read" element={<Read />}></Route>
					<Route exact path="/admin/update" element={<Update />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
