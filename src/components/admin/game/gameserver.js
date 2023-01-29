import axios from "axios";
import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "@mui/material";
import { useState } from "react";

var port = 25529;
var user = 140;
var allocation = 0;
var totalObj = 98;
var pageNumber = Math.ceil(totalObj / 50);
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Gameserver() {
	const initialValues = {
		username: "",
		first_name: "",
		last_name: "",
		email: "",
		password: "",
	};
	const [formValues, setFormValues] = useState(initialValues);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const token = "ptla_AZJBhkEZtKfVwMEnHW84JmHHZ5oKSplOKO2QhGooxBl";
	let axiosConfig = {
		headers: {
			Authorization: "Bearer " + token,
		},
	};

	const postinfo = (e) => {
		e.preventDefault();
		// console.log(formValues);
		// allocation++;
		port++;
		user++;
		totalObj++;
		console.log(port);
		console.log(user);
		console.log(totalObj);
		console.log(pageNumber);

		Promise.all([
			//game server user creation
			axios.post(
				"https://test-panel.serveranywhere.net/api/application/users",
				{
					username: formValues.username,
					first_name: formValues.first_name,
					last_name: formValues.last_name,
					email: formValues.email,
					password: formValues.password,
				},
				axiosConfig
			),
			// game server allocation
			// setTimeout(() => {
			axios.post(
				"https://test-panel.serveranywhere.net/api/application/nodes/2/allocations",
				{
					ip: "103.191.240.110",
					ports: [" " + port],
				},
				axiosConfig
			),
			// }, [5000]), // 5 second
			// getting game server allocation id
			// axios.get(
			// 	`https://test-panel.serveranywhere.net/api/application/nodes/2/allocations?page=${pageNumber}`,
			// 	axiosConfig
			// ),
			// send mail to the user
			// axios.post(
			// 	"http://103.191.240.74:81/api/admin/email/send",
			// 	{
			// 		to: formValues.email,
			// 		to_name: formValues.username,
			// 		from_name: "serveranywhere",
			// 		from: "serveranywhere@gmail.com",
			// 		subject: "Server Created Successfully..",
			// 		content: "string...",
			// 	}
			// 	// axiosConfig
			// ),
		])
			.then(
				axios.spread((res1, res2, res3) => {
					console.log(res1.data);
					console.log(res2.data);
					// console.log(res3.data);

					// const temp = res3.data;
					// const temp2 = temp.meta.pagination.count - 1;
					// console.log(temp2);
					// console.log(temp.data[temp2]);
					// allocation = temp.data[temp2].attributes.id;
					// console.log(allocation);
					// alert("Success......");
					// console.log(res3.data.items[1]);
					// const xy = temp.length;
					// const xy = Object.keys(temp.data).length;
					// console.log(Object.keys(temp.data));
					// const temp2 = temp.data[temp3].attributes.assigned;
					// console.log(temp2);
				})
			)
			.catch((error) => {
				console.log(error);
			});
		// totalObj++;
	};
	const getAllocation = (e) => {
		e.preventDefault();
		axios
			.get(
				`https://test-panel.serveranywhere.net/api/application/nodes/2/allocations?page=${pageNumber}`,
				axiosConfig
			)
			.then((res3) => {
				console.log(res3.data);
				const temp = res3.data;
				const temp2 = temp.meta.pagination.count - 1;
				console.log(temp2);
				console.log(temp.data[temp2]);
				allocation = temp.data[temp2].attributes.id;
				console.log(allocation);
			});
	};

	const serverinfo = (e) => {
		e.preventDefault();
		// setTimeout(function() {
		// server creattion
		axios
			.post(
				"https://test-panel.serveranywhere.net/api/application/servers",
				{
					name: "Building35",
					user: user,
					egg: 1,
					docker_image: "ghcr.io/pterodactyl/yolks:java_17",
					startup: "java -Xms128M -XX:MaxRAMPercentage=95.0 -jar",
					environment: {
						BUNGEE_VERSION: "latest",
						SERVER_JARFILE: "bungeecord.jar",
					},
					limits: {
						memory: 128,
						swap: 0,
						disk: 512,
						io: 500,
						cpu: 0,
					},
					feature_limits: {
						databases: 5,
						backups: 1,
					},
					// allocation: allocation,
					allocation: {
						default: allocation,
					},
				},
				axiosConfig
			)
			.then((res) => {
				setTimeout(() => {
					console.log(res);
				}, 5000);

				window.location.reload(true);
			})
			.catch((error) => {
				console.log(error);
			});
		// }, 5000);
	};
	return (
		<div>
			{/* boxbilling theke info receive korbo */}
			<div className="handleTheLoginBody">
				<div className="container mx-auto">
					<div className="pt-5 forCard  w-50 p-5 rounded mx-auto">
						<div className="mt-4 pt-2">
							<form>
								<InputGroup>
									<InputGroup.Text
										id="basic-addon1"
										className="bg-dark border-0 text-white"
									>
										{/* <BsPersonLinesFill /> */}
									</InputGroup.Text>
									<Form.Control
										style={{ textTransform: "lowercase" }}
										className="inputBackground"
										autoComplete="off"
										value={formValues.username}
										onChange={handleChange}
										// value={name}
										// onChange={handleName}
										placeholder="username"
										aria-label="Username"
										type="text"
										required
										aria-describedby="basic-addon1"
										name="username"
									/>
								</InputGroup>
								<br />
								<InputGroup>
									<InputGroup.Text
										id="basic-addon1"
										className="bg-dark border-0 text-white"
									>
										{/* <BsPersonLinesFill /> */}
									</InputGroup.Text>
									<Form.Control
										style={{ textTransform: "lowercase" }}
										className="inputBackground"
										autoComplete="off"
										value={formValues.first_name}
										onChange={handleChange}
										// value={name}
										// onChange={handleName}
										placeholder="firstname"
										aria-label="Firstname"
										type="text"
										required
										aria-describedby="basic-addon1"
										name="first_name"
									/>
								</InputGroup>
								<br />
								<InputGroup>
									<InputGroup.Text
										id="basic-addon1"
										className="bg-dark border-0 text-white"
									>
										{/* <BsPersonLinesFill /> */}
									</InputGroup.Text>
									<Form.Control
										style={{ textTransform: "lowercase" }}
										className="inputBackground"
										autoComplete="off"
										value={formValues.last_name}
										onChange={handleChange}
										// value={name}
										// onChange={handleName}
										placeholder="lastname"
										aria-label="Lastname"
										type="text"
										required
										aria-describedby="basic-addon1"
										name="last_name"
									/>
								</InputGroup>
								{/* <p className="text-danger">{formErrors.username}</p> */}
								<br />
								<InputGroup>
									<InputGroup.Text
										id="basic-addon1"
										className="bg-dark border-0 text-white"
									>
										{/* <FaEnvelope /> */}
									</InputGroup.Text>
									<Form.Control
										style={{ textTransform: "lowercase" }}
										className="inputBackground"
										autoComplete="off"
										value={formValues.email}
										onChange={handleChange}
										// value={email}
										// onChange={handleEmail}
										placeholder="Email"
										aria-label="Usermail"
										type="email"
										required
										aria-describedby="basic-addon1"
										name="email"
									/>
								</InputGroup>
								{/* <p className="text-danger">{formErrors.email}</p> */}
								<br />
								<InputGroup className="">
									<InputGroup.Text className="bg-dark border-0 text-white">
										{/* <FaLock /> */}
									</InputGroup.Text>
									<Form.Control
										aria-label="Password"
										className="inputBackground"
										placeholder="password"
										autoComplete="off"
										value={formValues.password}
										onChange={handleChange}
										// value={password}
										// onChange={handlePassword}
										// onChange={(e) => handlePassword(e)}
										// type={visiblePassword ? "text" : "password"}
										type="password"
										required
										name="password"
									/>
								</InputGroup>

								<br />

								<div className="mx-auto text-center">
									<Button
										style={{ backgroundColor: "#f74545" }}
										className="button-34 ps-5 pe-5 pt-2 pb-2"
										onClick={postinfo}
										type="submit"
									>
										Sign Up
									</Button>
									<br />
									<br />
									<Button
										style={{ backgroundColor: "#f74545" }}
										className="button-34 ps-5 pe-5 pt-2 pb-2"
										onClick={getAllocation}
										type="submit"
									>
										Get Allocation
									</Button>
									<br />
									<br />
									<Button
										style={{ backgroundColor: "#f74545" }}
										className="button-34 ps-5 pe-5 pt-2 pb-2"
										onClick={serverinfo}
										type="submit"
									>
										Create Server
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* call postinfo */}
		</div>
	);
}
