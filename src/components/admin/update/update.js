import React from "react";
import { useState, useEffect } from "react";
// import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
	const navigate = useNavigate();
	// const [Catagory, setCatagory] = useState("");
	// const [CPU, setCpu] = useState("");
	// const [RAM, setRam] = useState("");
	// const [OS, setOs] = useState("");
	// const [Storage, setStorage] = useState("");
	// const [Price, setPrice] = useState("");
	const [ID, setID] = useState(null);
	// const sendDataToAPI = () => {
	// 	axios
	// 		.put(`https://glacial-refuge-00597.herokuapp.com/api/vpsproduct/${ID}`, {
	// 			Catagory,
	// 			CPU,
	// 			RAM,
	// 			OS,
	// 			Storage,
	// 			Price,
	// 		})
	// 		.then(() => {
	// 			navigate("/admin");
	// 		});
	// };
	const [values, setValues] = useState({
		categories: [],
		category: "",
		pacname: "",
		dedicatedIP: "",
		core: "",
		RAM: "",
		diskspace: "",
		processor: "",
		bandwidth: "",
		uptime: "",
		price: "",
		formData: "",
		disabled: false,
	});

	const {
		categories,
		category,
		pacname,
		dedicatedIP,
		core,
		RAM,
		diskspace,
		processor,
		bandwidth,
		uptime,
		price,
		formData,
		disabled,
	} = values;

	useEffect(() => {
		axios
			// .get("http://103.191.240.74/api/vpscategory")
			.get("http://test.serveranywhere.net/api/vpscategory")
			.then((response) => {
				setValues({
					...values,
					categories: response.data,
					formData: new FormData(),
				});
			})
			.catch((error) => {
				setValues({
					...values,
					error: "Failed to load categories!",
					formData: new FormData(),
				});
			});
	}, []);

	const handleChange = (e) => {
		const value = e.target.value;
		formData.set(e.target.name, value);
		setValues({
			...values,
			[e.target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({
			...values,
			disabled: true,
		});

		axios
			// .put(`http://103.191.240.74/api/vpsproduct/${ID}`, formData)
			.put(`http://test.serveranywhere.net/api/vpsproduct/${ID}`, formData)
			.then((response) => {
				console.log(response.data);
				setValues({
					...values,
					category,
					pacname,
					dedicatedIP,
					core,
					RAM,
					diskspace,
					processor,
					bandwidth,
					uptime,
					price,
					disabled: false,
				});
				// window.location.href = "http://103.191.240.74:81/order";
				navigate("/admin");
			})
			.catch((error) => {
				let errMsg = "Something went wrong!";
				if (error.response) errMsg = error.response.data;
				setValues({
					...values,
					error: errMsg,
					disabled: false,
				});
			});
	};

	console.log(values);

	// useEffect(() => {
	// 	setCatagory(localStorage.getItem("Catagory"));
	// 	setCpu(localStorage.getItem("CPU"));
	// 	setRam(localStorage.getItem("RAM"));
	// 	setOs(localStorage.getItem("OS"));
	// 	setStorage(localStorage.getItem("Storage"));
	// 	setPrice(localStorage.getItem("Price"));
	// 	setID(localStorage.getItem("ID"));
	// }, []);

	useEffect(() => {
		setID(localStorage.getItem("ID"));
	}, []);

	return (
		<div>
			<div className="main">
				<h1>Welcome to Admin Panel</h1>
			</div>
			<div style={{ width: 400, marginLeft: 200, marginTop: 20 }}>
				{/* <Form style={{ width: 400, marginLeft: 200 }}>
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
			</Form> */}

				<form
					className="mb-3"
					onSubmit={handleSubmit}
					style={{ width: 400, marginLeft: 200 }}
				>
					<div className="form-group">
						<label className="text-muted">Category:</label>
						<select
							name="category"
							value={category}
							onChange={handleChange}
							className="form-control"
							// required
						>
							<option value="">----Select Category----</option>
							{categories &&
								categories.map((item) => (
									<option value={item._id} key={item._id}>
										{item.name}
									</option>
								))}
						</select>
					</div>
					<div className="form-group">
						<label className="text-muted">PackageName:</label>
						<input
							name="pacname"
							onChange={handleChange}
							type="text"
							className="form-control"
							value={pacname}
							// required
						/>
					</div>
					<div className="form-group">
						<label className="text-muted">DedicatedIP:</label>
						<input
							name="dedicatedIP"
							onChange={handleChange}
							type="number"
							className="form-control"
							value={dedicatedIP}
							// required
						/>
					</div>
					<div className="form-group">
						<label className="text-muted">CPU Core:</label>
						<input
							name="core"
							onChange={handleChange}
							className="form-control"
							type="number"
							value={core}
							// required
						/>
					</div>
					<div className="form-group">
						<label className="text-muted">RAM:</label>
						<input
							name="RAM"
							onChange={handleChange}
							className="form-control"
							type="number"
							value={RAM}
							// required
						/>
					</div>
					<div className="form-group">
						<label className="text-muted">DiskSpace:</label>
						<input
							name="diskspace"
							onChange={handleChange}
							className="form-control"
							type="number"
							value={diskspace}
							// required
						/>
					</div>
					<div className="form-group">
						<label className="text-muted">Processor:</label>
						<textarea
							name="processor"
							onChange={handleChange}
							type="text"
							className="form-control"
							value={processor}
							// required
						/>
					</div>
					<div className="form-group">
						<label className="text-muted">Bandwidth:</label>
						<input
							name="bandwidth"
							onChange={handleChange}
							className="form-control"
							type="text"
							value={bandwidth}
							// required
						/>
					</div>
					<div className="form-group">
						<label className="text-muted">Up Time:</label>
						<input
							name="uptime"
							onChange={handleChange}
							className="form-control"
							type="number"
							value={uptime}
							// required
						/>
					</div>
					<div className="form-group">
						<label className="text-muted">Price:</label>
						<input
							name="price"
							onChange={handleChange}
							type="number"
							className="form-control"
							value={price}
							// required
						/>
					</div>
					<button
						className="btn btn-outline-primary"
						type="submit"
						disabled={disabled}
					>
						Update Product
					</button>
				</form>
			</div>
		</div>
	);
}
