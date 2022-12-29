import React from "react";
import { GrAnnounce } from "react-icons/gr";

export default function Info() {
	let iconStyles = { color: "white" };
	return (
		<div id="info">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6 col-sm-12 col-12">
						<div
							className="section-text-title"
							style={{ textTransform: "capitalize" }}
						>
							<p className="small-title mb-3">Extra storage</p>
							<div className="container">
								<div className="row">
									<div className="col-10 section-text">
										<table className="table section-text-title text-center border">
											<tbody>
												<tr>
													<td>5 GB</td>
													<td>50 BDT</td>
												</tr>
												<tr>
													<td>10 GB</td>
													<td>100 BDT</td>
												</tr>
												<tr>
													<td>20 GB</td>
													<td>200 BDT</td>
												</tr>
												<tr>
													<td>50 GB</td>
													<td>350 BDT</td>
												</tr>
											</tbody>
										</table>
										<p>
											<b>Location: </b>Bangladesh
										</p>
										<p>
											<b>Ping from Bangladesh: </b>0 - 12 ms* &#91;can be high
											depend on your Network connection&#93;
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1"></div>
					<div className="col-lg-6 col-md-7 col-sm-12 col-12">
						<div className="small-title mb-3">Notice</div>
						<div className="section-text">
							<p className="pb-3">
								<GrAnnounce style={iconStyles} /> Default port (Dedicated IP) is
								additional 200 BDT/per month.
							</p>
							<p>
								All the Basics plan includes 3 Backup Slots, 5 databases (on
								demand) and custom ports with exclusive features!
							</p>
							<p>
								We assured lag free and super blaze fast server with basics
								plan!
							</p>
							<p>Trial server can be offered.</p>
							<p>Message us for any further information.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
