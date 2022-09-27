import React from "react";

export default function AboutDedicated() {
	return (
		<div>
			<div className="row">
				<div className="col-lg-5">
					<img
						src="/images/vps/server.gif"
						alt="error"
						loading="lazy"
						width="100%"
						className="pt-5"
					/>
				</div>
				<div className="col-lg-1"></div>
				<div className="col-lg-6">
					<div className="section-title pb-5">About dedicated servers</div>
					<div className="section-text text-white">
						<p>
							Dedicated server hosting is where your website or server
							operations have their own private server to function on. You
							choose your own resource limits such as bandwidth and RAM,
							assuring that you will have enough resources to make your site run
							smoothly.
						</p>
						<p className="py-3">
							You&apos;re in total control of your server and its resource
							limits from the start! Dedicated server hosting tends to be
							allocated for medium to big business sits, but if you&apos;re
							ambitious, you can save time in the long run by signing up for a
							dedicated server plan.
						</p>
						<p className="py-3">
							Making that decision isn&apos;t easy though! You may find yourself
							caught up in deciding which type of server hosting to go for - in
							which case, allow our experts to help! We’re spent our fair share
							of time online and are knowledgable about website hosting.{" "}
						</p>
						<p>
							We will help you break down the differences between VPS and
							dedicated server hosting. By the end of this guide, there should
							be little doubt over which hosting plan to go for.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
