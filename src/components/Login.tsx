"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Logging in with:", email, password);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
					Login
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium">Email</label>
						<input
							type="email"
							className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
							className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition">
						Login
					</button>
				</form>
				<p className="mt-4 text-center text-gray-600">
					Don&apos;t have an account?
					<Link
						href="/register"
						className="text-blue-500 font-semibold hover:underline">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
}
