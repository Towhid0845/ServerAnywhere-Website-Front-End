import React from "react";
import "../common/common.css";

export default function Catagory() {
	return (
		<div id="catagory" style={{ paddingTop: "60px" }}>
			<div className="container common-width">
				<div className="row pb-3">
					<div className="col">
						<div className="text-center">
							<h1 className="section-title pb-5">
								Choose which server hosting do you need ?
							</h1>
						</div>
					</div>
				</div>

				<div className="row catagory-item">
					<div className="col-lg-3 text-center">
						<a href="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/vps-server.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>VPS SERVERS</p>
						</a>
					</div>
					<div className="col-lg-3 text-center">
						<a href="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/minecraft.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>Minecraft</p>
						</a>
					</div>
					<div className="col-lg-3 text-center">
						<a href="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/dedicated.png"
								alt="logo-error"
								loading="lazy"
							/>
							<p>DEDICATED SERVERS</p>
						</a>
					</div>
					<div className="col-lg-3 text-center">
						<a href="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/web.jpeg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>WEB HOSTING</p>
						</a>
					</div>

					<div className="py-4"></div>

					<div className="col-lg-3 text-center">
						<a href="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/storage.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>Storage</p>
						</a>
					</div>
					<div className="col-lg-3 text-center">
						<a href="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/email.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>Mail server</p>
						</a>
					</div>
					<div className="col-lg-3 text-center">
						<a href="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/voice-server.jpeg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>VOICE SERVERS</p>
						</a>
					</div>
					<div className="col-lg-3 text-center">
						<a href="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/other.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>GAMES server</p>
						</a>
					</div>
				</div>
			</div>
			<div style={{ paddingTop: "120px" }}>
				<hr style={{ color: "white", margin: "0" }} />
			</div>
		</div>
	);
}
