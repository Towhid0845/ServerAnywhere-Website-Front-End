import React from "react";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { SiTiktok } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

export default function Footer() {
	return (
		<div id="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 payment-method">
						<div className="container">
							<div className="row mb-4 logo">
								<div className="col px-0">
									<img
										src="/images/brand/new-main-logo.jpg"
										width="100%"
										height="100"
										alt="error"
									/>
								</div>
							</div>
							<div className="row text-center">
								<div className="col me-2 ">
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/visa.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/paypal.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/discover.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/apple_pay.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/bitcoin.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/usdcoin.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/mastercard.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/american.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/g_pay.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/paysafe.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/dogecoin.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/eternic.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-1"></div>
					<div className="col-lg-8 footer-links">
						<div className="row text-uppercase">
							<div className="col-3 text-white">
								<div className="footer-title">COMPANY</div>
								<ul className="footer-item">
									<li>
										<a href="/">about us</a>
									</li>
									<li>
										<a href="/">faq</a>
									</li>
									<li>
										<a href="/">why serveranywhere</a>
									</li>
									<li>
										<a href="/">partners</a>
									</li>
									<li>
										<a href="/">jobs</a>
									</li>
									<li>
										<a href="/">blog</a>
									</li>
									<li>
										<a href="/">privacy policy</a>
									</li>
									<li>
										<a href="/">tos</a>
									</li>
								</ul>
							</div>
							<div className="col text-white">
								<div className="footer-title">Service</div>
								<ul className="footer-item">
									<li>
										<a href="/">minecraft</a>
									</li>
									<li>
										<a href="/">game server</a>
									</li>
									<li>
										<a href="/">dedicated</a>
									</li>
									<li>
										<a href="/">Web server</a>
									</li>
									<li>
										<a href="/">Mobile hosting</a>
									</li>
									<li>
										<a href="/">Discord bot</a>
									</li>
								</ul>
							</div>
							<div className="col text-white">
								<div className="footer-title">customers</div>
								<ul className="footer-item">
									<li>
										<a href="/">client area</a>
									</li>
									<li>
										<a href="/">knowledgebase</a>
									</li>
									<li>
										<a href="/">get 24/7 support</a>
									</li>
								</ul>
							</div>
							<div className="col text-white">
								<div className="footer-title">Social</div>
								<ul className="footer-social">
									<li>
										<a href="/">
											<FiTwitter />
										</a>
									</li>
									<li>
										<a href="/">
											<TbBrandDiscord />
										</a>
									</li>
									<li>
										<a href="/">
											<SiTiktok />
										</a>
									</li>
									<li>
										<a href="/">
											<FiYoutube />
										</a>
									</li>
									<li>
										<a href="/">
											<FiInstagram />
										</a>
									</li>
									<li>
										<a href="/">
											<FiFacebook />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col text-center copyright">
						<footer className="py-5 text-white">
							Copyright 2022 &copy; ServerAnywhere.com. All rights reserved.
						</footer>
					</div>
				</div>
			</div>
		</div>
	);
}
