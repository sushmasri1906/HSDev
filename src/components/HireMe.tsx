import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HireUs: React.FC = () => {
	return (
		<div className="bg-gray-100 py-16">
			<div className="mx-auto px-6 lg:w-3/4 text-center">
				<h2 className="text-3xl font-bold text-gray-900 mb-6">Hire Us</h2>
				<p className="text-lg text-gray-700 max-w-2xl mx-auto">
					🚀 We are passionate Fullstack Developers skilled in **React, Next.js,
					Node.js, and MongoDB**. We build **high-performance, scalable web
					apps** with a strong focus on **UI/UX and backend efficiency**.
				</p>

				{/* GitHub & LinkedIn Links */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
					{/* Your Details */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold text-gray-900">
							Harunath Eskuri
						</h3>
						<p className="text-gray-700">Fullstack Developer</p>
						<div className="flex justify-center gap-6 mt-4">
							<Link
								href="https://github.com/Harunath"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-800 hover:text-gray-600 transition">
								<FaGithub size={30} />
							</Link>
							<Link
								href="https://linkedin.com/in/harunath"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-400 transition">
								<FaLinkedin size={30} />
							</Link>
						</div>
						<p className="mt-3 text-sm text-gray-600">
							📞 +91 9133443441 <br />
							📧 harunath04@gmail.com
						</p>
					</div>

					{/* Partner's Details */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold text-gray-900">
							Sushmasri Kamera
						</h3>
						<p className="text-gray-700">Fullstack Developer</p>
						<div className="flex justify-center gap-6 mt-4">
							<Link
								href="https://github.com/sushmasri1906"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-800 hover:text-gray-600 transition">
								<FaGithub size={30} />
							</Link>
							<Link
								href="https://www.linkedin.com/in/sushmasri1906/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-400 transition">
								<FaLinkedin size={30} />
							</Link>
						</div>
						<p className="mt-3 text-sm text-gray-600">
							📞 +91 9133443441 <br />
							📧 sushmasri1906@example.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HireUs;
