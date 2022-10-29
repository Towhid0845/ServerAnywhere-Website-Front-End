import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export default function Create() {
	// const navigate = useNavigate();
	// const [category, setCategory] = useState("");
	// const [processor, setProcessor] = useState("");
	// const [RAM, setRAM] = useState("");
	// const [OS, setOS] = useState("");
	// const [diskspace, setdiskspace] = useState("");
	// const [price, setPrice] = useState("");
	// const sendDataToAPI = () => {
	// 	axios

	// 		.post(`103.191.240.74/api/vpsproduct/`, {
	// 			category,
	// 			processor,
	// 			RAM,
	// 			OS,
	// 			diskspace,
	// 			price,
	// 		})
	// 		.then(() => {
	// 			navigate("/admin/read");
	// 		});
	// };
	const navigate = useNavigate();
	const [Catagory, setCatagory] = useState("");
	const [CPU, setCpu] = useState("");
	const [RAM, setRam] = useState("");
	const [OS, setOs] = useState("");
	const [Storage, setStorage] = useState("");
	const [Price, setPrice] = useState("");
	// console.log(CPU);
	const sendDataToAPI = () => {
		axios
			.post(`https://6313b715a8d3f673ffcf5d61.mockapi.io/CRUD`, {
				Catagory,
				CPU,
				RAM,
				OS,
				Storage,
				Price,
			})
			.then(() => {
				// navigate("/admin");
				navigate(0);
			});
	};

	return (
		<div>
			<Form>
				<Form.Field>
					<label>Category</label>
					<input
						name="category"
						onChange={(e) => setCatagory(e.target.value)}
						placeholder="select a category"
					/>
				</Form.Field>
				<Form.Field>
					<label>CPU</label>
					<input
						name="processor"
						onChange={(e) => setCpu(e.target.value)}
						placeholder="CPU Name"
					/>
				</Form.Field>
				<Form.Field>
					<label>RAM</label>
					<input name="RAM" onChange={(e) => setRam(e.target.value)} />
				</Form.Field>
				<Form.Field>
					<label>OS</label>
					<input
						name="OS"
						onChange={(e) => setOs(e.target.value)}
						placeholder="Operating System"
					/>
				</Form.Field>
				<Form.Field>
					<label>Storage</label>
					<input
						name="diskspace"
						onChange={(e) => setStorage(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Price</label>
					<input name="price" onChange={(e) => setPrice(e.target.value)} />
				</Form.Field>
				{/* <Link to="/admin/read"> */}
				<Button type="submit" onClick={sendDataToAPI}>
					Submit
				</Button>
				{/* </Link> */}
			</Form>
		</div>
	);
}
