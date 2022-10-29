import { Link } from "react-router-dom";
import Create from "./create/create";
import Read from "./read/read";

const AdminPage = () => {
	return (
		<div>
			<div
				style={{
					background: "#1D002F",
					paddingBottom: "50px",
					paddingTop: "20px",
				}}
			>
				<img
					className=""
					src="/images/brand/new-main-logo.png"
					alt="error"
					width="150"
					height="50"
					style={{ float: "left" }}
				></img>
				<ul style={{ paddingLeft: "200px" }}>
					<li>
						<Link to="/admin">Home</Link>
					</li>
				</ul>
			</div>
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
export default AdminPage;
