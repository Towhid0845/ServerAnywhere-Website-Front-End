import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
	let navigate = useNavigate();
	const [Catagory, setCatagory] = useState("");
	const [CPU, setCpu] = useState("");
	const [RAM, setRam] = useState("");
	const [OS, setOs] = useState("");
	const [Storage, setStorage] = useState("");
	const [Price, setPrice] = useState("");
	const [ID, setID] = useState(null);
	const sendDataToAPI = () => {
		axios
			.put(`https://6313b715a8d3f673ffcf5d61.mockapi.io/CRUD/${ID}`, {
				Catagory,
				CPU,
				RAM,
				OS,
				Storage,
				Price,
			})
			.then(() => {
				navigate("/admin");
			});
	};
	useEffect(() => {
		setCatagory(localStorage.getItem("Catagory"));
		setCpu(localStorage.getItem("CPU"));
		setRam(localStorage.getItem("RAM"));
		setOs(localStorage.getItem("OS"));
		setStorage(localStorage.getItem("Storage"));
		setPrice(localStorage.getItem("Price"));
		setID(localStorage.getItem("ID"));
	}, []);

	return (
		<div>
			<Form style={{ width: 400, marginLeft: 200 }}>
				<Form.Field>
					<label>Catagory</label>
					<input
						name="catagory"
						value={Catagory}
						onChange={(e) => setCatagory(e.target.value)}
						placeholder="catagory"
					/>
				</Form.Field>
				<Form.Field>
					<label>CPU</label>
					<input
						name="cpu"
						value={CPU}
						onChange={(e) => setCpu(e.target.value)}
						placeholder="CPU Name"
					/>
				</Form.Field>
				<Form.Field>
					<label>RAM</label>
					<input
						name="ram"
						value={RAM}
						onChange={(e) => setRam(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>OS</label>
					<input
						name="os"
						value={OS}
						onChange={(e) => setOs(e.target.value)}
						placeholder="Operating System"
					/>
				</Form.Field>
				<Form.Field>
					<label>Storage</label>
					<input
						name="storage"
						value={Storage}
						onChange={(e) => setStorage(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Price</label>
					<input
						name="price"
						value={Price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</Form.Field>

				<Button type="submit" onClick={sendDataToAPI}>
					Update
				</Button>
			</Form>
		</div>
	);
}
