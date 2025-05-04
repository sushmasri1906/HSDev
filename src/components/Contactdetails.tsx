import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
	return (
		<div className="min-h-screen py-12 px-4 md:px-6 flex justify-center">
			<div className="w-full">
				<h2 className="text-4xl font-bold text-center text-white mb-10 drop-shadow-md">
					Contact Us
				</h2>

				{/* Contact Form */}
				<div
					className="p-6 md:p-8  shadow-lg 
                    border-[3px] border-[#4B0082] ">
					<form className="space-y-6">
						<div>
							<label className="block text-gray-300 font-semibold">Name</label>
							<input
								type="text"
								className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition"
								placeholder="Enter your name"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-300 font-semibold">Email</label>
							<input
								type="email"
								className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition"
								placeholder="Enter your email"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-300 font-semibold">
								Message
							</label>
							<textarea
								className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition"
								rows={5}
								placeholder="Write your message here..."
								required></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-[#8A2BE2] text-white py-3 rounded-lg hover:bg-[#4B0082] transition">
							Send Message
						</button>
					</form>
				</div>

				{/* Team Details */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
					{/* Harunath */}
					<div className="p-6   border-[3px] border-[#4B0082] ">
						<h3 className="text-2xl font-bold text-[#8A2BE2]">
							Harunath Eskuri
						</h3>
						<p className="text-gray-300">Fullstack Developer</p>
						<div className="flex justify-center gap-6 mt-4">
							<Link
								href="https://github.com/Harunath"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-[#8A2BE2] transition">
								<FaGithub size={30} />
							</Link>
							<Link
								href="https://linkedin.com/in/harunath"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-[#8A2BE2] transition">
								<FaLinkedin size={30} />
							</Link>
						</div>
						<p className="mt-3 text-sm text-gray-400">
							📞 +91 9133443441 <br />
							📧 harunath04@gmail.com
						</p>
					</div>

					{/* Sushmasri */}
					<div className="p-6  shadow-2xl border-[3px] border-[#4B0082] ">
						<h3 className="text-2xl font-bold text-[#8A2BE2]">
							Sushmasri Kamera
						</h3>
						<p className="text-gray-300">Fullstack Developer</p>
						<div className="flex justify-center gap-6 mt-4">
							<Link
								href="https://github.com/sushmasri1906"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-[#8A2BE2] transition">
								<FaGithub size={30} />
							</Link>
							<Link
								href="https://www.linkedin.com/in/sushmasri1906/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-[#8A2BE2] transition">
								<FaLinkedin size={30} />
							</Link>
						</div>
						<p className="mt-3 text-sm text-gray-400">
							📞 +91 9133443441 <br />
							📧 sushmasri1906@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
