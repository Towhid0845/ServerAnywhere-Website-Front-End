import React from "react";
import { useState, useEffect } from "react";
// import { Button, Form } from "semantic-ui-react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

export default function Create() {
	// const navigate = useNavigate();
	// const [Catagory, setCatagory] = useState("");
	// const [CPU, setCpu] = useState("");
	// const [RAM, setRam] = useState("");
	// const [OS, setOs] = useState("");
	// const [Storage, setStorage] = useState("");
	// const [Price, setPrice] = useState("");
	// // console.log(CPU);
	// const sendDataToAPI = () => {
	//   axios
	//     .post(`https://glacial-refuge-00597.herokuapp.com/api/vpsproduct`, {
	//       category: Catagory,
	//       processor: CPU,
	//       RAM: RAM,
	//       OS: OS,
	//       diskspace: Storage,
	//       price: Price,
	//     })
	//     .then((res) => {
	//       console.log(res.data);
	//       navigate("/admin/read");
	//     });
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
			// .get("http://localhost:3000/api/vpscategory")
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

	// var username = "admin";
	// var password1 = "hAO9qAeDaudMILEwGzoRkdnCbbnxXP8p";

	// const token = `${username}:${password1}`;
	// const encodedToken = Buffer.from(token).toString("base64");
	// let axiosConfig = {
	// 	headers: {
	// 		"Access-Control-Allow-Origin": "*",
	// 		Authorization: "Basic " + encodedToken,
	// 	},
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({
			...values,
			disabled: true,
		});
		//  const { token } = userInfo();
		// Promise.all([
		axios
			.post("http://test.serveranywhere.net/api/vpsproduct", formData)
			// axios.post(
			// 	"http://clients.serveranywhere.net/api/admin/product/prepare",
			// 	formData,
			// 	axiosConfig
			// ),
			// .post("http://103.191.240.74/api/vpsproduct", formData)
			// .post("http://localhost:3000/api/vpsproduct", formData)
			// ])
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
				window.location.reload(false);
			})
			// .then(
			// 	axios.spread((obj1, obj2) => {
			// 		console.log(obj1.data);
			// 		console.log(obj2.data);
			// 		obj1.setValues({
			// 			...values,
			// 			category,
			// 			pacname,
			// 			dedicatedIP,
			// 			core,
			// 			RAM,
			// 			diskspace,
			// 			processor,
			// 			bandwidth,
			// 			uptime,
			// 			price,
			// 			disabled: false,
			// 		});
			// 		window.location.reload(false);
			// 	})
			// )
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

	return (
		<div>
			{/* <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Selected Catagory</label>
          <input
            name="category"
            onChange={(e) => setCatagory(e.target.value)}
            placeholder="catagory"
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
        
			<Button type="submit" onClick={sendDataToAPI}>
          Submit
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
						required
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
					<label className="text-muted">Package Name:</label>
					<input
						name="pacname"
						onChange={handleChange}
						type="text"
						className="form-control"
						value={pacname}
						required
					/>
				</div>
				<div className="form-group">
					<label className="text-muted">Dedicated IP:</label>
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
						type="number"
						className="form-control"
						value={core}
						required
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
						required
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
						required
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
					<label className="text-muted">UpTime:</label>
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
						required
					/>
				</div>
				<button
					className="btn btn-outline-primary"
					type="submit"
					disabled={disabled}
				>
					Create Product
				</button>
			</form>
		</div>
	);
}
