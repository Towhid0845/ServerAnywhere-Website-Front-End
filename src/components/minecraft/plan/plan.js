import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";

function Plan() {
	const [data, setData] = useState([]);

	useEffect(() => {
		// Axios.get("https://6313b715a8d3f673ffcf5d61.mockapi.io/CRUD")
		Axios.get("http://test.serveranywhere.net/api/vpsproduct/")
			.then((res) => {
				console.log("getting data from api :::", res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	// console.log(apiData);
	const arr = data.map((data, index) => {
		if (data.category === "63aa7f7ba93a22c5d2c7725c") {
			return (
				<div className="col-6 pb-5">
					<Card>
						<Card.Body className="customcard">
							{/* <Card.Title>{data.id}</Card.Title> */}
							<div className="row">
								<header className="textleft p-3">
									<Card.Title>{data.pacname}</Card.Title>
								</header>
								<div className="col-6 text-start">
									{/* <strong>Minecraft Java Edition</strong> */}
									<Card.Text>Core: {data.core}</Card.Text>
									<Card.Text>RAM: {data.RAM} GB</Card.Text>
									<Card.Text>Storage: {data.diskspace} GB</Card.Text>
									<Card.Text>Up Time: {data.uptime}%</Card.Text>
								</div>
								<div className="col-6">
									<Card.Text className="price">
										starting from
										<br />
										<span>{data.price}</span>/ per month
									</Card.Text>
									<div className="d-grid gap-2 mx-4">
										<Button size="lg">Order Now</Button>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			);
		}
		return null;
	});

	return (
		<div id="pricing">
			<div className="container">
				<div className="row">
					<div className="section-title pb-5">Minecraft Server Hosting</div>
				</div>

				<div className="row">{arr}</div>
			</div>
		</div>
	);
}

export default Plan;
