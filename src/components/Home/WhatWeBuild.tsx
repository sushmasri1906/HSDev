"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// Keep your accent color
const ACCENT = "#1c00d3";

const categories = [
	{
		title: "Full Stack Development",
		desc: "Build seamless, scalable applications from frontend to backend with Next.js, React.js, and powerful APIs. From MVPs to enterprise platforms, we deliver future-proof solutions using the latest tech stacks.",
		points: [
			"Robust apps using Next.js & React.js",
			"TurboRepo & monorepo architecture",
			"End-to-end scalable solutions",
		],
	},
	{
		title: "Frontend Engineering",
		desc: "Craft stunning, responsive user interfaces that captivate and convert—built with performance-first principles. We blend UI/UX precision with the speed of React.js and elegance of Tailwind CSS.",
		points: [
			"Pixel-perfect UI/UX in React.js",
			"Tailwind CSS & Framer Motion animations",
			"Optimized for performance & accessibility",
		],
	},
	{
		title: "Backend Systems",
		desc: "Power your applications with secure, scalable, and high-performance backend infrastructure. APIs, databases, authentication, and business logic—expertly engineered with Node.js & modern stacks.",
		points: [
			"API development with Node.js & Express",
			"Database design (PostgreSQL, MongoDB)",
			"REST & GraphQL integrations",
		],
	},
	{
		title: "Mobile App Development",
		desc: "Launch cross-platform mobile apps that feel native, load fast, and keep users engaged. We build with React Native for iOS and Android, ensuring rapid delivery with a unified codebase.",
		points: [
			"React Native apps with shared codebase",
			"iOS & Android support with clean UI",
			"Fast deployment & OTA updates",
		],
	},
	{
		title: "E-Commerce Solutions",
		desc: "Build modern online stores with real-time inventory, secure checkout, and smooth UX across devices. From D2C to multi-vendor marketplaces, we create conversion-focused commerce experiences.",
		points: [
			"Custom stores with secure checkout",
			"Product dashboards & inventory tracking",
			"Multi-vendor & B2B marketplace support",
		],
	},
	{
		title: "B2B Platforms",
		desc: "Automate business operations with powerful dashboards, portals, and CRM systems tailored to your workflow. We deliver scalable, secure solutions that integrate seamlessly with your business processes.",
		points: [
			"Custom dashboards & CRMs",
			"Enterprise-grade scalability",
			"Secure authentication systems",
		],
	},
	{
		title: "Custom Software Development",
		desc: "Your ideas, engineered into powerful digital products—from scratch to launch. We specialize in custom platforms, SaaS tools, and internal apps that fit your exact needs.",
		points: [
			"Tailored solutions to business needs",
			"Modular and maintainable code",
			"Agile development process",
		],
	},
	{
		title: "Payment Gateway Integration",
		desc: "Accept payments effortlessly with secure integrations like Razorpay, Stripe, and Paytm. Subscriptions, invoicing, and one-time payments—built to scale and fully compliant.",
		points: [
			"Razorpay, Stripe, Paytm & more",
			"Secure transaction flows",
			"Subscription & one-time payments",
		],
	},
];

export default function WhatWeBuild() {
	const tilts = useMemo(
		() => [
			"sm:-rotate-[0.4deg]",
			"sm:rotate-[0.4deg]",
			"sm:-rotate-[0.4deg]",
			"sm:rotate-[0.4deg]",
		],
		[]
	);

	return (
		<section className="relative overflow-hidden bg-[#06060F] text-white py-20 px-4">
			{/* Background gradient mesh + grid */}
			<div aria-hidden className="absolute inset-0">
				{/* soft radial glows */}
				<div
					className="pointer-events-none absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(28,0,211,0.22) 0%, rgba(28,0,211,0.06) 45%, transparent 70%)",
						filter: "blur(10px)",
					}}
				/>
				<div
					className="pointer-events-none absolute -bottom-24 -right-16 h-[520px] w-[520px] rounded-full"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(102,92,255,0.22) 0%, rgba(102,92,255,0.06) 45%, transparent 70%)",
						filter: "blur(12px)",
					}}
				/>
				{/* faint grid overlay */}
				<div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]" />
			</div>

			<div className="relative max-w-7xl mx-auto">
				<motion.p
					initial={{ opacity: 0, y: -8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.5 }}
					className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mb-3 text-center"
					style={{ color: ACCENT }}>
					Built with Next.js & React.js
				</motion.p>

				<motion.h2
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-5xl font-bold text-center mb-4">
					What We Build
				</motion.h2>

				<p className="mx-auto max-w-2xl text-center text-gray-300/90 mb-12">
					Product-grade web and mobile experiences with performance, security,
					and DX at the core.
				</p>

				{/* Cards */}
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{categories.map((category, idx) => (
						<article
							key={idx}
							className={[
								"group relative overflow-hidden rounded-2xl",
								// Glass card + subtle border
								"bg-white/[0.03] backdrop-blur-[2px] border border-white/10",
								// Hover elevation + outline glow
								"transition-all duration-300 hover:translate-y-[-4px]",
								"hover:border-[color:rgba(28,0,211,0.35)]",
								tilts[idx % tilts.length],
							].join(" ")}>
							{/* Corner gradient stroke */}
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 rounded-2xl"
								style={{
									boxShadow:
										"inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 0 0 rgba(28,0,211,0)",
								}}
							/>

							{/* Top accent shimmer */}
							<div
								aria-hidden
								className="absolute left-0 top-0 h-[2px] w-full opacity-70 group-hover:opacity-100 transition-opacity"
								style={{
									background: `linear-gradient(90deg, ${ACCENT}, rgba(28,0,211,0) 60%)`,
								}}
							/>

							{/* Shine on hover */}
							<div
								aria-hidden
								className="absolute -top-24 -left-24 h-48 w-48 rotate-45 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
								style={{
									background:
										"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), transparent 60%)",
								}}
							/>

							<div className="relative p-6 md:p-8">
								<h3
									className="text-xl md:text-2xl font-semibold mb-2 tracking-tight"
									style={{ color: ACCENT }}>
									{category.title}
								</h3>

								<p className="text-gray-300/90 leading-relaxed mb-5">
									{category.desc}
								</p>

								<ul className="space-y-2">
									{category.points.map((point, i) => (
										<motion.li
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: false, amount: 0.4 }}
											transition={{ duration: 0.35, delay: i * 0.03 }}
											key={i}
											className="flex items-start gap-2 text-gray-100/95">
											<FaCheckCircle
												className="mt-1 shrink-0"
												color="#34d399"
												aria-hidden
											/>
											<span>{point}</span>
										</motion.li>
									))}
								</ul>

								{/* CTA line */}
								<div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
									<a
										href="#contact"
										className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-white/15 hover:ring-[color:rgba(28,0,211,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:rgba(28,0,211,0.7)] focus-visible:ring-offset-[#06060F]"
										style={{ background: "rgba(255,255,255,0.03)" }}>
										Start a project
									</a>
									<span className="text-xs text-gray-400">
										Get a scoped estimate in 24 hrs
									</span>
								</div>
							</div>
						</article>
					))}
				</motion.div>

				{/* Subtle bottom accent bar */}
				<div
					aria-hidden
					className="mx-auto mt-14 h-px w-2/3 max-w-3xl"
					style={{
						background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
						opacity: 0.4,
					}}
				/>
			</div>
		</section>
	);
}
