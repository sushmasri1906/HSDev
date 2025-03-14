"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	// Navbar links
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav className="bg-[#0F0F0F] text-white shadow-md p-4 sticky top-0 z-50">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-2xl font-bold">
					<Link href="/">
						<Image
							src="https://res.cloudinary.com/degrggosz/image/upload/v1738934587/hslogo_w8997t.png"
							alt="Logo"
							width={100}
							height={50}
							className="invert"
						/>
					</Link>
				</h1>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-[#8A2BE2] focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
					{navLinks.map((item) => (
						<motion.li
							key={item.href}
							whileHover={{ scale: 1.1, color: "#8A2BE2" }}
							transition={{ type: "spring", stiffness: 300 }}>
							<Link
								href={item.href}
								className="hover:text-[#8A2BE2] transition duration-300">
								{item.label}
							</Link>
						</motion.li>
					))}
					<motion.li whileHover={{ scale: 1.1 }}>
						<Link
							href="/login"
							className="bg-[#8A2BE2] text-white px-4 py-2 rounded-md hover:bg-[#4B0082] transition">
							Login
						</Link>
					</motion.li>
				</ul>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="md:hidden absolute top-16 left-0 w-full bg-[#1A1A1A] shadow-lg rounded-b-lg">
						<ul className="flex flex-col space-y-4 p-4 text-gray-300">
							{navLinks.map((item) => (
								<motion.li
									key={item.href}
									whileHover={{ scale: 1.1, color: "#8A2BE2" }}
									transition={{ type: "spring", stiffness: 300 }}>
									<Link
										href={item.href}
										onClick={() => setIsOpen(false)}
										className="block py-2 text-center hover:text-[#8A2BE2] transition">
										{item.label}
									</Link>
								</motion.li>
							))}
							<motion.li whileHover={{ scale: 1.1 }}>
								<Link
									href="/login"
									className="block bg-[#8A2BE2] text-white px-4 py-2 rounded-md hover:bg-[#4B0082] transition text-center">
									Login
								</Link>
							</motion.li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
