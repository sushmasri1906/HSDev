"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import React from "react";
import Link from "next/link";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

const stagger: Variants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

export default function WhereToFindUs() {
	return (
		<section
			className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-28 text-white sm:px-12 lg:px-20"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dgulr1hgd/image/upload/v1752651962/abstract-background-with-blue-and-green-waved-lines-for-brochure-website-flyer-design-modern-technology-wallpaper-with-abstract-blue-and-green-digital-waves-ai-generated-free-photo_nx66eu.jpg')",
				backgroundAttachment: "fixed",
			}}>
			{/* Overlay + soft noise */}
			<div className="absolute inset-0 -z-10 bg-black/70 backdrop-blur-sm" />
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.5)_2px,rgba(255,255,255,0.5)_3px)]" />

			{/* Glow orbs */}
			<div className="absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-[#1c00d3]/35 blur-3xl" />
			<div className="absolute -bottom-28 -right-28 -z-10 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl" />

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.3 }}
				className="relative z-10 mx-auto max-w-7xl">
				{/* Heading */}
				<motion.div variants={fadeUp} className="mb-20 text-center">
					<h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
						Where to Find Us
					</h2>
					<p className="mt-3 text-base text-gray-300 sm:text-lg">
						Let’s connect and collaborate — wherever you are.
					</p>
				</motion.div>

				{/* Cards */}
				<motion.div
					variants={stagger}
					className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-3">
					<Card variants={fadeUp} title="HSDev Headquarters">
						<p className="leading-relaxed text-gray-300">
							Hyderabad, Telangana — India <br />
							<span className="text-sm text-gray-400">
								(By appointment only)
							</span>
						</p>
					</Card>

					<Card variants={fadeUp} title="Remote First, Always">
						<p className="leading-relaxed text-gray-300">
							Working across 10+ time zones <br />
							<span className="text-sm text-gray-400">
								(IST, EST, GMT & more)
							</span>
						</p>
					</Card>

					<Card variants={fadeUp} title="Follow HSDev">
						<div className="mt-1 flex items-center justify-center gap-6 text-2xl">
							<SocialLink
								ariaLabel="HSDev on Facebook"
								href="https://facebook.com/hsdev">
								<FaFacebookF />
							</SocialLink>
							<SocialLink
								ariaLabel="HSDev on Instagram"
								href="https://instagram.com/hsdev">
								<FaInstagram />
							</SocialLink>
							<SocialLink
								ariaLabel="HSDev on YouTube"
								href="https://youtube.com/@hsdev">
								<FaYoutube />
							</SocialLink>
							<SocialLink
								ariaLabel="HSDev on X (Twitter)"
								href="https://x.com/hsdev">
								<FaXTwitter />
							</SocialLink>
						</div>
					</Card>
				</motion.div>
			</motion.div>
		</section>
	);
}

interface CardProps {
	children: React.ReactNode;
	title: string;
	variants: Variants;
}

function Card({ children, title, variants }: CardProps) {
	return (
		<motion.div
			variants={variants}
			whileHover={{ y: -4 }}
			className="group relative rounded-3xl border border-white/10 bg-[#101017]/90 p-10 shadow-[0_15px_45px_-15px_rgba(28,0,211,0.6)] backdrop-blur-xl transition">
			{/* gradient ring */}
			<div className="pointer-events-none absolute -inset-px rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(124,58,237,0.25),rgba(28,0,211,0.25),transparent_70%)] opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
			<div className="relative">
				<h3 className="mb-3 text-xl font-semibold">{title}</h3>
				{children}
			</div>
		</motion.div>
	);
}

interface SocialLinkProps {
	href: string;
	ariaLabel: string;
	children: React.ReactNode;
}

function SocialLink({ href, ariaLabel, children }: SocialLinkProps) {
	return (
		<Link
			href={href}
			aria-label={ariaLabel}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-white transition">
			{/* icon glow */}
			<span className="absolute inset-0 -z-10 rounded-full bg-[#1c00d3]/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
			<span className="transition-transform duration-300 group-hover:scale-125 group-active:scale-110">
				{children}
			</span>
		</Link>
	);
}
