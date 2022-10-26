import React, { useEffect, useState } from "react";
import "./admin.css";
import Create from "./create/create";
import Read from "./read/read";
// import Header from "../../home/header";
// import { Dropdown } from "semantic-ui-react";

// const Options = [
// 	{
// 		key: "1",
// 		text: "Catagory 1",
// 		value: "xyz",
// 	},
// 	{
// 		key: "1",
// 		text: "Catagory 2",
// 		value: "abc",
// 	},
// 	{
// 		key: "3",
// 		text: "Catagory 3",
// 		value: "pqr",
// 	},
// ];

const Admin_page = () => {
	return (
		<div>
			{/* <Header /> */}
			{/* <div>
				<div className="main">
					<h1>Welcome to Admin Panel</h1>
				</div>
				<div style={{ width: 400, marginLeft: 200, marginTop: 20 }}>
					<h3>Catagory</h3>
					<Dropdown
						placeholder="Select Catarory"
						fluid
						selection
						options={Options}
					/>
				</div>
			</div> */}
			<div style={{ width: 400, marginLeft: 200, marginTop: 20 }}>
				<h3>Add a Package</h3>
				<Create />
			</div>
			<div style={{ marginTop: 20 }}>
				<Read />
			</div>
		</div>
	);
};
export default Admin_page;
