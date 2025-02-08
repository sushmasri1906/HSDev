"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Registering with:", username, email, password);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
					Register
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium">Username</label>
						<input
							type="text"
							className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium">Email</label>
						<input
							type="email"
							className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium">Password</label>
						<input
							type="password"
							className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition">
						Register
					</button>
				</form>
				<p className="mt-4 text-center text-gray-600">
					Already have an account?
					<Link
						href="/login"
						className="text-green-500 font-semibold hover:underline">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}
