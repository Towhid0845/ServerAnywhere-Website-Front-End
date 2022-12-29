import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		axios
			// axios.get(`http://localhost:3000/api/vpsproduct`).then((getData) => {
			// axios.get(`http://103.191.240.74/api/vpsproduct`).then((getData) => {
			.get(`http://test.serveranywhere.net/api/vpsproduct`)
			.then((getData) => {
				setApiData(getData.data);
			});
	}, []);
	const setData = (
		id,
		catagory,
		pacname,
		dedicatedIP,
		core,
		RAM,
		diskspace,
		processor,
		bandwidth,
		uptime,
		price
	) => {
		// console.log(id);
		localStorage.setItem("ID", id);
		localStorage.setItem("Catagory", catagory);
		localStorage.setItem("Package", pacname);
		localStorage.setItem("DedicatedIP", dedicatedIP);
		localStorage.setItem("Core", core);
		localStorage.setItem("RAM", RAM);
		localStorage.setItem("Storage", diskspace);
		localStorage.setItem("Processor", processor);
		localStorage.setItem("Bandwidth", bandwidth);
		localStorage.setItem("UpTime", uptime);
		localStorage.setItem("Price", price);
	};
	const getData = () => {
		axios
			// axios.get(`http://localhost:3001/api/vpsproduct`).then((getData) => {
			// axios.get(`http://103.191.240.74/api/vpsproduct`).then((getData) => {
			.get(`http://test.serveranywhere.net/api/vpsproduct`)
			.then((getData) => {
				setApiData(getData.data);
			});
	};

	const onDelete = (id) => {
		axios
			// axios.delete(`http://localhost:3001/api/vpsproduct/${id}`).then(() => {
			// axios.delete(`http://103.191.240.74/api/vpsproduct/${id}`).then(() => {
			.delete(`http://test.serveranywhere.net/api/vpsproduct/${id}`)
			.then(() => {
				getData();
			});
	};

	return (
		<div>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>ID</Table.HeaderCell>
						<Table.HeaderCell>Catagory</Table.HeaderCell>
						<Table.HeaderCell>PackageName</Table.HeaderCell>
						<Table.HeaderCell>DedicatedIP</Table.HeaderCell>
						<Table.HeaderCell>CPU</Table.HeaderCell>
						<Table.HeaderCell>RAM</Table.HeaderCell>
						<Table.HeaderCell>Storage</Table.HeaderCell>
						<Table.HeaderCell>Processor</Table.HeaderCell>
						<Table.HeaderCell>Bandwidth</Table.HeaderCell>
						<Table.HeaderCell>UpTime</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Update</Table.HeaderCell>
						<Table.HeaderCell>Delete</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{apiData.map((data) => {
						return (
							<Table.Row>
								<Table.Cell>{data._id}</Table.Cell>
								<Table.Cell>{data.category}</Table.Cell>
								<Table.Cell>{data.pacname}</Table.Cell>
								<Table.Cell>{data.dedicatedIP}</Table.Cell>
								<Table.Cell>{data.core}</Table.Cell>
								<Table.Cell>{data.RAM}</Table.Cell>
								<Table.Cell>{data.diskspace}</Table.Cell>
								<Table.Cell>{data.processor}</Table.Cell>
								<Table.Cell>{data.bandwidth}</Table.Cell>
								<Table.Cell>{data.uptime}</Table.Cell>
								<Table.Cell>{data.price}</Table.Cell>
								<Table.Cell>
									<Link to="/admin/update">
										<Button
											color="green"
											onClick={() =>
												setData(
													data._id,
													data.catagory,
													data.pacname,
													data.dedicatedIP,
													data.core,
													data.RAM,
													data.diskspace,
													data.processor,
													data.bandwidth,
													data.uptime,
													data.price
												)
											}
										>
											Update
										</Button>
									</Link>
								</Table.Cell>
								<Table.Cell>
									<Link to="/admin">
										<Button color="red" onClick={() => onDelete(data._id)}>
											Delete
										</Button>
									</Link>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
}
