import axios from "axios";
import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "@mui/material";
import { useState } from "react";
// import { Link } from "react-router-dom";
var port = 8010;
var user = 109;
var allocation = 1000;

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
	// const encodedToken = Buffer.from(token).toString("base64");
	let axiosConfig = {
		headers: {
			//  "Access-Control-Allow-Origin": "*",
			// "Access-Control-Allow-Headers": "*",
			// "Accept": "application/json",
			// "Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		// },
		// token: {
		// 	pterodactyl_session:
		// 		"eyJpdiI6InhIVXp5ZE43WlMxUU1NQ1pyNWRFa1E9PSIsInZhbHVlIjoiQTNpcE9JV3FlcmZ6Ym9vS0dBTmxXMGtST2xyTFJvVEM5NWVWbVFJSnV6S1dwcTVGWHBhZzdjMHpkN0RNdDVkQiIsIm1hYyI6IjAxYTI5NDY1OWMzNDJlZWU2OTc3ZDYxYzIyMzlhZTFiYWY1ZjgwMjAwZjY3MDU4ZDYwMzhjOTRmYjMzNDliN2YifQ%3D%3D",
		// },
	};
	const postinfo = (e) => {
		e.preventDefault();
		console.log(formValues);
		port++;
		user++;
		allocation++;
		console.log(port);
		console.log(user);
		console.log(allocation);
		Promise.all([
			axios.post(
				//game server user creation
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
			// setTimeout(function() {
			axios.post(
				// game server allocation
				"https://test-panel.serveranywhere.net/api/application/nodes/2/allocations",
				{
					ip: "103.191.240.110",
					ports: [" " + port],
				},
				axiosConfig
			),
			// }, 5000),
			axios.get(
				// game server allocation
				"https://test-panel.serveranywhere.net/api/application/nodes/2/allocations",
				axiosConfig
			),
			// .then((res) => {
			// 	const alloc = res.data.attributes.assigned;
			// 	console.log(alloc);
			// }),

			// axios.post(
			// 	// send mail to the user
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
					// axios.spread((res1, res2, res3, res4) => {
					console.log(res1.data);
					console.log(res2.data);
					// console.log(res3.data);
					// console.log(res3.data.items[1]);
					// const xy = temp.length;
					// console.log(Object.keys(temp.data));
					const temp = res3.data;
					console.log(temp);
					// const xy = Object.keys(temp.data).length;
					// console.log(xy);
					const temp3 = temp.meta.pagination.total - 1;
					console.log(temp3);
					console.log(temp.data[temp3]);
					// const temp2 = temp.data[temp3].attributes.assigned;
					// console.log(temp2);
					// if (temp2 === false) {
					// 	allocation = temp.data[temp3].attributes.id;
					// 	console.log(allocation);
					// 	alert("Success......");
					// }
					// console.log(res4.data);
				})
			)
			.catch((error) => {
				console.log(error);
			});
		// port++;
		// user++;
		// allocation++;
	};
	const serverinfo = (e) => {
		e.preventDefault();
		setTimeout(function() {
			//your code to be executed after 1 second
			axios
				.post(
					// server creattion
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
					console.log(res);
				})
				.catch((error) => {
					console.log(error);
				});
		}, 5000);
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
								{/* <p className="text-danger">{formErrors.password}</p> */}
								<br />

								{/* <p className="text-danger">{formErrors.password_confirm}</p> */}
								{/* <br /> */}
								{/* <div className="text-denger error">{isError}</div> */}

								<div className="mx-auto text-center">
									{/* {error && <div className={styles.error_msg}>{error}</div>} */}
									{/* {msg && <div className={styles.success_msg}>{msg}</div>} */}
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
