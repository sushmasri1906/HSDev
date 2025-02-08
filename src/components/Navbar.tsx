"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-gray-100 shadow-md p-4">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-2xl font-bold">
					<Link href="/">
						<Image
							src="https://res.cloudinary.com/degrggosz/image/upload/v1738934587/hslogo_w8997t.png"
							alt="Logo"
							width={100}
							height={50}
						/>
					</Link>
				</h1>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-gray-900 focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
					<li>
						<Link href="/" className="hover:text-gray-600 transition">
							Home
						</Link>
					</li>
					<li>
						<Link href="/about" className="hover:text-gray-600 transition">
							About
						</Link>
					</li>
					<li>
						<Link href="/services" className="hover:text-gray-600 transition">
							Services
						</Link>
					</li>
					<li>
						<Link href="/portfolio" className="hover:text-gray-600 transition">
							Portfolio
						</Link>
					</li>
					<li>
						<Link href="/contact" className="hover:text-gray-600 transition">
							Contact
						</Link>
					</li>
					<li>
						<Link
							href="/login"
							className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
							Login
						</Link>
					</li>
				</ul>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4">
					<ul className="flex flex-col space-y-4 text-gray-800">
						<li>
							<Link href="/" onClick={() => setIsOpen(false)}>
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" onClick={() => setIsOpen(false)}>
								About
							</Link>
						</li>
						<li>
							<Link href="/services" onClick={() => setIsOpen(false)}>
								Services
							</Link>
						</li>
						<li>
							<Link href="/portfolio" onClick={() => setIsOpen(false)}>
								Portfolio
							</Link>
						</li>
						<li>
							<Link href="/contact" onClick={() => setIsOpen(false)}>
								Contact
							</Link>
						</li>
						<li>
							<Link
								href="/login"
								className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full text-center">
								Login
							</Link>
						</li>
						<li>
							<Link
								href="/register"
								className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition w-full text-center">
								Register
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
