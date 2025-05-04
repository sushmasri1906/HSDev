"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HireUs: React.FC = () => {
	return (
		<section className="py-16">
			<div className="mx-auto px-6 lg:w-3/4 text-center">
				{/* Title */}
				<h2 className="text-4xl font-bold text-white mb-6">Hire Us</h2>
				<p className="text-lg text-gray-300 max-w-2xl mx-auto">
					🚀 We are passionate Fullstack Developers skilled in{" "}
					<span className="text-[#8A2BE2]">
						React, Next.js, Node.js, and MongoDB
					</span>
					. We build <span className="text-[#8A2BE2]">high-performance</span>,
					scalable web apps with a focus on{" "}
					<span className="text-[#8A2BE2]">UI/UX and backend efficiency</span>.
				</p>

				{/* Profiles Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
					{[
						{
							name: "Harunath Eskuri",
							role: "Fullstack Developer",
							github: "https://github.com/Harunath",
							linkedin: "https://linkedin.com/in/harunath",
							email: "harunath04@gmail.com",
							phone: "+91 9133443441",
						},
						{
							name: "Sushmasri Kamera",
							role: "Fullstack Developer",
							github: "https://github.com/sushmasri1906",
							linkedin: "https://www.linkedin.com/in/sushmasri1906/",
							email: "sushmasri1906@example.com",
							phone: "+91 9133443441",
						},
					].map((person, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-transparent transition-all duration-300"
							style={{
								borderImage: "linear-gradient(135deg, #4B0082, #8A2BE2) 1",
							}}>
							<h3 className="text-xl font-semibold text-white">
								{person.name}
							</h3>
							<p className="text-gray-400">{person.role}</p>

							{/* Social Links */}
							<div className="flex gap-6 mt-4">
								<Link
									href={person.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-[#8A2BE2] transition">
									<FaGithub size={30} />
								</Link>
								<Link
									href={person.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:text-blue-400 transition">
									<FaLinkedin size={30} />
								</Link>
							</div>

							{/* Contact Info */}
							<p className="mt-3 text-sm text-gray-400">
								📞 {person.phone} <br />
								📧 {person.email}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HireUs;
