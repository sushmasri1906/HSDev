"use client";

import Link from "next/link";
import Image from "next/image";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative overflow-hidden bg-black text-white py-12 px-6 md:px-20">
			{/* faint blue dev-grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.06]"
				style={{
					background:
						"linear-gradient(to right, rgba(28,0,211,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,0,211,0.9) 1px, transparent 1px)",
					backgroundSize: "36px 36px",
				}}
			/>

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
						Crafting high-performance digital experiences with modern tech like
						Next.js & React.
					</p>
					<div className="flex items-center gap-4 mt-2">
						<Link
							href="#"
							className="text-gray-400 hover:text-white transition">
							<FaFacebookF />
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-white transition">
							<FaInstagram />
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-white transition">
							<FaLinkedinIn />
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-white transition">
							<FaTwitter />
						</Link>
					</div>
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

				{/* Let’s Connect */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
					<p className="text-gray-400 mb-3">
						Have a project in mind? Reach out to us and let&apos;s build something
						amazing together.
					</p>
					<div className="space-y-2 text-gray-400">
						<p>
							Email:{" "}
							<Link href="mailto:hello@hsdev.com" className="hover:text-white">
								hello@hsdev.com
							</Link>
						</p>
						<p>
							Phone:{" "}
							<Link href="tel:+919133443441" className="hover:text-white">
								+91 9133443441
							</Link>
						</p>
						<p>Location: Hyderabad, India</p>
					</div>
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
