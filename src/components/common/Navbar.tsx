"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import MeetingRequestForm from "../forms/MeetForm";

const navLinks = [
	{ href: "/", icon: <FaHome /> },
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-[#1c00d3]/20 px-4 py-3 shadow-lg shadow-[#1c00d3]/30">
				<div className="max-w-7xl mx-auto flex justify-between items-center h-14">
					<Link href="/">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752587740/GST_logo__1_-removebg-preview_w2nb7n.png"
							alt="HSDev Logo"
							width={85}
							height={32}
							className="cursor-pointer hover:scale-105 transition-transform"
						/>
					</Link>

					{/* Mobile Toggle */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-white hover:text-[#1c00d3] transition"
						aria-label="Toggle Menu"
						aria-expanded={isOpen}>
						{isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
					</button>

					{/* Desktop Navigation */}
					<ul className="hidden md:flex items-center gap-6 text-sm text-white font-medium tracking-wide">
						{navLinks.map((link) => (
							<motion.li
								key={link.href}
								whileHover={{ scale: 1.08 }}
								whileTap={{ scale: 0.95 }}
								className={`relative ${
									pathname === link.href
										? "text-[#1c00d3]"
										: "hover:text-[#1c00d3]"
								}`}>
								<Link href={link.href} className="flex items-center gap-1">
									{link.icon && link.icon} {link.label}
								</Link>
								{pathname === link.href && (
									<motion.span
										layoutId="activeNav"
										className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1c00d3] rounded-full"
									/>
								)}
							</motion.li>
						))}
						<li>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setShowForm(true)}
								className="bg-[#1c00d3] hover:bg-[#000fb5] px-4 py-1.5 rounded-md text-sm text-white font-semibold transition">
								Request a Meeting
							</motion.button>
						</li>
					</ul>
				</div>

				{/* Mobile Dropdown Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							className="md:hidden bg-[#050227] w-full rounded-b-xl mt-2 overflow-hidden border-t border-[#1c00d3]/20">
							<ul className="flex flex-col space-y-2 p-4 text-white">
								{navLinks.map((link) => (
									<motion.li
										key={link.href}
										whileHover={{ x: 4 }}
										whileTap={{ scale: 0.98 }}
										className={`px-2 py-2 rounded-md ${
											pathname === link.href
												? "text-[#1c00d3]"
												: "hover:text-[#1c00d3]"
										}`}>
										<Link
											href={link.href}
											onClick={() => setIsOpen(false)}
											className="flex items-center gap-2">
											{link.icon && link.icon} {link.label}
										</Link>
									</motion.li>
								))}
								<li className="pt-2">
									<motion.button
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										onClick={() => {
											setShowForm(true);
											setIsOpen(false);
										}}
										className="block w-full bg-[#1c00d3] hover:bg-[#000fb5] text-white px-4 py-2 rounded-md text-center font-semibold transition">
										Request a Meeting
									</motion.button>
								</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>

			{/* Minimal Meeting Modal */}
			<AnimatePresence>
				{showForm && (
					<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-[999] flex items-center justify-center"
>
  <div className="relative w-full max-w-md">
    <button
      onClick={() => setShowForm(false)}
      className="absolute top-2 right-2 text-black text-xl"
    >
      ×
    </button>

    <MeetingRequestForm />
  </div>
</motion.div>

				)}
			</AnimatePresence>
		</>
	);
}
