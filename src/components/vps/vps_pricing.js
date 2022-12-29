import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
// import { Link } from "react-router-dom";

function VPSPricing() {
	const [data, setData] = useState([]);

	useEffect(() => {
		// Axios.get("http://103.191.240.74/api/vpsproduct/")
		// Axios.get("http://103.191.240.74/api/vpsproduct/")
		Axios.get("http://test.serveranywhere.net/api/vpsproduct/")
			.then((res) => {
				console.log("getting data from api :::", res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	// console.log(apiData);
	const arr = data.map((data, index) => {
		if (data.category === "63aa7fa7a93a22c5d2c7725f") {
			return (
				<div className="col-lg-3 col-md-4 col-sm-6 offset-sm-0 col-8 offset-2 pb-5">
					<Card>
						<Card.Body>
							<Card.Title>{data.pacname}</Card.Title>
							<Card.Text>Dedicated Ip: {data.dedicatedIP}</Card.Text>
							<Card.Text>CPU Core: {data.core}</Card.Text>
							<Card.Text>RAM: {data.RAM} GB</Card.Text>
							<Card.Text>Storage: {data.diskspace} GB</Card.Text>
							<Card.Text>Processor: {data.processor}</Card.Text>
							<Card.Text>Bandwidth: {data.bandwidth}</Card.Text>
							<Card.Text className="price">
								<span>{data.price}</span>/ per month
							</Card.Text>
							<div className="d-grid gap-2 mx-4">
								{/* <Button size="lg">Order</Button> */}
								<a
									href="http://clients.serveranywhere.net/order"
									className="btn"
									size="lg"
								>
									Order
								</a>
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
					<div className="section-title pb-5">plans and pricing</div>
				</div>
				<div className="row">{arr}</div>
			</div>
		</div>
	);
}

export default VPSPricing;
