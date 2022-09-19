import React from "react";
import "./common.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiQuestionnaireLine } from "react-icons/ri";
import { RiUserShared2Line } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";

export default function Header() {
	return (
		<div id="header">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 pt-3">
						<div className="header-logo">
							<a href="/">
								<img
									width="142"
									height="50"
									src="/images/brand/new-main-logo.jpg"
									alt="logo-error"
									loading="lazy"
								/>
							</a>
						</div>
					</div>
					<div className="col-lg-5 px-0 pt-2">
						<nav className="main-menu py-3">
							<ul className="menu ps-0">
								<li className="menu-item minecraft">
									<a href="/minecraft-servers" className="menu-link">
										MINECRAFT
									</a>
									<span className="menu-arrow ps-2">
										<IoMdArrowDropdown />
									</span>
									<ul className="sub-menu p-3">
										<li className="sub-menu-item">
											<a aria-current="page" href="/" className="row py-1">
												<div className="col-3">
													<img
														// className="img-fluid"
														src="/images/menu/icon-java.svg"
														alt="submenu_icon"
														width="18"
														height="18"
														loading="lazy"
													/>
												</div>
												<div className="col">Java</div>
											</a>
										</li>
										<li className="sub-menu-item">
											<a aria-current="page" href="/" className="row py-1">
												<div className="col-3">
													<img
														// className="img-fluid"
														src="/images/menu/icon-bedrock.svg"
														alt="submenu_icon"
														width="18"
														height="18"
														loading="lazy"
													/>
												</div>
												<div className="col">Bedrock</div>
											</a>
										</li>
									</ul>
								</li>

								<li className="menu-item ps-4">
									<a href="/minecraft-servers" className="menu-link">
										Dedicated
									</a>
									<span className="menu-arrow ps-2">
										<IoMdArrowDropdown />
									</span>
									<ul className="sub-menu py-3 px-4">
										<li className="sub-menu-item">
											<a aria-current="page" href="/" className="py-1">
												<div className="py-1">Dedicated Servers</div>
											</a>
										</li>

										<li className="sub-menu-item">
											<a aria-current="page" href="/" className="py-1">
												<div className="py-1">VPS Servers</div>
											</a>
										</li>
									</ul>
								</li>

								<li className="menu-item ps-4">
									<a href="/minecraft-servers" className="menu-link">
										Others Servers
									</a>
									<span className="menu-arrow ps-2">
										<IoMdArrowDropdown />
									</span>
									<ul className="sub-menu py-3 px-4">
										<li className="sub-menu-item">
											<a aria-current="page" href="/" className="py-1">
												<div className="py-1">Mobile Hosting</div>
											</a>
										</li>

										<li className="sub-menu-item">
											<a aria-current="page" href="/" className="py-1">
												<div className="py-1">Web Hosting</div>
											</a>
										</li>

										<li className="sub-menu-item">
											<a aria-current="page" href="/" className="py-1">
												<div className="py-1">Discord BOT</div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-lg-3 control-panel">
						<ul className="px-0">
							<li className="control-panel-item px-4">
								<a href="/">
									<div className="control-panel-icon">
										<RiQuestionnaireLine />
									</div>
									<div className="control-panel-text">Support</div>
								</a>
								<ul className="sub-control py-3 px-4 text-center text-white">
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">Knowledgebase</div>
										</a>
									</li>

									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">get 24/7 Support</div>
										</a>
									</li>

									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">sales</div>
										</a>
									</li>
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">faq</div>
										</a>
									</li>
								</ul>
							</li>
							<li className="control-panel-item px-2">
								<a href="/">
									<div className="control-panel-icon">
										<GoNote />
									</div>
									<div className="control-panel-text">Control Panel</div>
								</a>
								<ul className="sub-control py-3 px-4 text-center text-white">
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">premium minecraft</div>
										</a>
									</li>

									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">budget minecraft</div>
										</a>
									</li>

									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">minecraft bedrock</div>
										</a>
									</li>
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">other games</div>
										</a>
									</li>
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">web hosting</div>
										</a>
									</li>
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">vps control panel</div>
										</a>
									</li>
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">Discord BOT</div>
										</a>
									</li>
								</ul>
							</li>
							<li className="control-panel-item px-4">
								<a href="/">
									<div className="control-panel-icon">
										<RiUserShared2Line />
									</div>
									<div className="control-panel-text">Biling</div>
								</a>
							</li>
							<li className="control-panel-item ps-4">
								<a href="/">
									<div className="control-panel-icon">
										<BsInfoCircle />
									</div>
									<div className="control-panel-text">info</div>
								</a>
								<ul className="sub-control py-3 px-4 text-center text-white">
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">about us</div>
										</a>
									</li>

									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">why us</div>
										</a>
									</li>

									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">partners</div>
										</a>
									</li>
									<li className="sub-control-item">
										<a aria-current="page" href="/" className="py-1">
											<div className="py-1">blog</div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
