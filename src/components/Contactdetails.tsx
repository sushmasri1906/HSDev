import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
	return (
		<div className="bg-gray-100 min-h-screen py-16 px-6">
			<div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
					Contact Us
				</h2>

				{/* Contact Form */}
				<form className="mb-8">
					<div className="mb-4">
						<label className="block text-gray-700 font-semibold">Name</label>
						<input
							type="text"
							className="w-full p-3 border rounded-lg"
							placeholder="Enter your name"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 font-semibold">Email</label>
						<input
							type="email"
							className="w-full p-3 border rounded-lg"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 font-semibold">Message</label>
						<textarea
							className="w-full p-3 border rounded-lg"
							rows={5}
							placeholder="Write your message here..."
							required></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition">
						Send Message
					</button>
				</form>

				{/* Team Details */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default ContactPage;
