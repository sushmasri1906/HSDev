"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const ACCENT = "#1c00d3";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative overflow-hidden bg-black text-white py-12 px-6 md:px-20">
			{/* faint blue dev-grid (very subtle) */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.06]"
				style={{
					background:
						"linear-gradient(to right, rgba(28,0,211,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,0,211,0.9) 1px, transparent 1px)",
					backgroundSize: "36px 36px",
				}}
			/>

			{/* Main Grid */}
			<div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10">
				{/* Logo & Intro */}
				<div className="relative">
					<div className="mb-4 inline-flex items-center gap-3">
						<div className="relative w-48 h-24">
							<Image
								src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752587740/GST_logo__1_-removebg-preview_w2nb7n.png"
								alt="HSDev Logo"
								fill
								className="object-contain"
								sizes="200px"
								priority
							/>
						</div>
					</div>
					<p className="text-gray-400 mb-4 leading-relaxed">
						We craft high-performance digital experiences that deliver real
						business outcomes using modern tech like Next.js & React.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2 text-gray-400">
						{[
							{ href: "/", label: "Home" },
							{ href: "/about", label: "About" },
							{ href: "/blog", label: "Blog" },
							{ href: "/portfolio", label: "Portfolio" },
							{ href: "/contact", label: "Contact" },
						].map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="hover:text-white transition-colors">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="text-xl font-semibold mb-4">
						Get the Latest Inspiration
					</h3>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							// TODO: wire up your subscribe action here
						}}
						className="group">
						<div className="relative">
							<input
								type="email"
								required
								placeholder="Enter your email *"
								className="w-full p-3 pr-4 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[rgba(28,0,211,0.6)] focus:border-transparent transition"
							/>
							<span
								aria-hidden
								className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-focus-within:opacity-100 transition"
								style={{ boxShadow: `0 0 24px ${ACCENT}55` }}
							/>
						</div>
						<button
							type="submit"
							className="mt-4 w-full rounded-lg font-semibold py-3 bg-[linear-gradient(180deg,#1c00d3,#14008f)] text-white ring-1 ring-white/10 hover:ring-[rgba(28,0,211,0.6)] shadow-[0_8px_30px_rgba(28,0,211,0.35)] hover:-translate-y-[1px] transition">
							Subscribe
						</button>
					</form>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="mt-10 text-center text-sm text-gray-500 space-y-1">
				<div>© {year} HSDev. All rights reserved.</div>
				<div>
					Developed by{" "}
					<Link
						href="https://sushmasri.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[rgba(28,0,211,0.9)] hover:text-white transition-colors">
						Sushmasri
					</Link>{" "}
					&{" "}
					<Link
						href="https://harunath.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[rgba(28,0,211,0.9)] hover:text-white transition-colors">
						Harunath
					</Link>
				</div>
			</div>
		</footer>
	);
}
