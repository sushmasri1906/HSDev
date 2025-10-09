"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import MeetingRequestForm from "@/components/forms/MeetForm";
import Image from "next/image";

const NAV_LINKS = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [showForm, setShowForm] = useState(false);

	// Force dark background
	useEffect(() => {
		document.documentElement.classList.add("dark");
		document.body.classList.add("bg-[#0b0b12]", "text-gray-100");
	}, []);

	// Scroll progress
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 20,
		mass: 0.2,
	});

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			{/* Scroll progress */}
			<motion.div
				style={{ scaleX }}
				className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400"
			/>

			<nav
				className={`fixed top-3 left-1/2 -translate-x-1/2 z-[70] 
    w-[min(1100px,94vw)] rounded-2xl 
    border border-gray-700/40 
    px-4 sm:px-6 py-3 
    backdrop-blur-xl bg-black/60 
    ${
			scrolled ? "shadow-lg shadow-gray-900/40" : "shadow-sm shadow-gray-900/20"
		}`}>
				<div className="flex items-center justify-between gap-3">
					{/* Logo */}

					<Link href="/" className="flex items-center">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752587740/GST_logo__1_-removebg-preview_w2nb7n.png"
							alt="Logo"
							width={120} // intrinsic size
							height={120}
							className="h-12 sm:h-12 w-auto object-contain"
							priority
						/>
					</Link>

					{/* Desktop nav */}
					<div className="hidden md:flex items-center gap-6">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-gray-200 hover:text-white text-sm font-medium transition">
								{link.name}
							</Link>
						))}
						<button
							onClick={() => setShowForm(true)}
							className="ml-2 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-4 py-2 text-white text-sm font-semibold hover:opacity-95 transition">
							Request a Meeting
						</button>
					</div>

					{/* Mobile toggle */}
					<button
						onClick={() => setOpen((v) => !v)}
						className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-gray-100 hover:bg-white/10 transition">
						{open ? <FaTimes size={22} /> : <FaBars size={22} />}
					</button>
				</div>

				{/* Mobile drawer */}
				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ type: "spring", stiffness: 140, damping: 18 }}
							className="md:hidden overflow-hidden mt-3">
							<div className="grid gap-3 p-4">
								{NAV_LINKS.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										onClick={() => setOpen(false)}
										className="block rounded-xl px-3 py-2 text-gray-100 text-sm font-medium hover:bg-white/5 transition">
										{link.name}
									</Link>
								))}
								<button
									onClick={() => {
										setShowForm(true);
										setOpen(false);
									}}
									className="mt-2 w-full rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-3 py-2 text-white font-semibold text-sm">
									Request a Meeting
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>

			{/* Meeting Modal */}
			<AnimatePresence>
				{showForm && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[999] flex items-center justify-center p-4"
						onClick={() => setShowForm(false)}>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 10, opacity: 0 }}
							transition={{ type: "spring", stiffness: 200, damping: 22 }}
							className=""
							onClick={(e) => e.stopPropagation()}>
							<button
								onClick={() => setShowForm(false)}
								className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition hover:bg-gray-100 hover:text-black">
								×
							</button>
							<MeetingRequestForm />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
