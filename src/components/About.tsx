import React from "react";
import InViewUp from "./animations/InViewUp";

const About = () => {
	return (
		<div className="min-h-screen py-16 flex justify-center">
			<div className="w-full space-y-12">
				<h1 className="text-5xl font-bold text-center mb-8 ">About Us</h1>

				{/* Sushmasri's Section */}
				<div className="p-6 hover:scale-[1.02] shadow-2xl border-[#4B0082] transition-transform duration-300 border-2 ">
					<InViewUp>
						<div className="p-5 ">
							<h2 className="text-3xl font-bold text-white">
								Sushmasri Kamera
							</h2>
							<p className="mt-3 leading-relaxed text-gray-300">
								Currently enrolled in <strong>Entri Elevate</strong> as a{" "}
								<strong>MERN Stack Developer</strong>, refining my skills in
								software development and problem-solving.
							</p>
							<p className="mt-3 leading-relaxed text-gray-300">
								As a freelancer, I&apos;ve worked on projects like{" "}
								<strong>Rolanaplast</strong>, specializing in **frontend
								development** with
								<strong> Recoil, React, and Express.js</strong>.
							</p>

							<h3 className="text-2xl font-semibold text-[#8A2BE2] mt-6">
								Internship Experience
							</h3>
							<ul className="mt-3 space-y-2 text-gray-300">
								<li>
									🚀 Built and maintained <strong>React.js</strong> interfaces
									with <strong>Tailwind CSS</strong>.
								</li>
								<li>
									🔗 Integrated <strong>RESTful APIs</strong> with Express.js &
									MongoDB.
								</li>
								<li>
									🎯 Used <strong>Recoil</strong> for efficient state
									management.
								</li>
							</ul>

							<h3 className="text-2xl font-semibold text-[#8A2BE2] mt-6">
								Certifications & Achievements
							</h3>
							<ul className="mt-3 space-y-2 text-gray-300">
								<li>
									🏆{" "}
									<strong>
										Entri Elevate Fullstack Development Certification
									</strong>
								</li>
								<li>
									🥇 Winner of{" "}
									<strong>
										Entri Elevate Independence Day Website Competition (2024)
									</strong>
								</li>
							</ul>
						</div>
					</InViewUp>
				</div>

				{/* Harunath's Section */}
				<div className="p-6  border-2 border-[#4B0082] shadow-2xl  ">
					<InViewUp>
						<div className="p-5 ">
							<h2 className="text-3xl font-bold text-white">Harunath Eskuri</h2>
							<p className="mt-3 leading-relaxed text-gray-300">
								A graduate in <strong>Computer Science</strong> from
								<strong> Sreenidhi Institute of Science and Technology</strong>,
								with a strong foundation in software development and
								problem-solving.
							</p>
							<p className="mt-3 leading-relaxed text-gray-300">
								My experience includes working on **full-stack projects** like
								<strong> UPI applications and eCommerce platforms</strong>. My
								core expertise lies in
								<strong>
									{" "}
									React, Next.js, Express.js, and scalable backend solutions.
								</strong>
							</p>

							<h3 className="text-2xl font-semibold text-[#8A2BE2] mt-6">
								Certifications
							</h3>
							<ul className="mt-3 space-y-2 text-gray-300">
								<li>
									🏆{" "}
									<strong>100x Dev Fullstack Development Certification</strong>
								</li>
							</ul>
						</div>
					</InViewUp>
				</div>
			</div>
		</div>
	);
};

export default About;
