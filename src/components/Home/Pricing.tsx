"use client";

import { motion } from "framer-motion";
import {
	FaCheck,
	FaBolt,
	FaRocket,
	FaCubes,
	FaShieldAlt,
	FaCloud,
	FaCode,
	FaDatabase,
} from "react-icons/fa";
import Link from "next/link";

const packages = [
	{
		key: "landing",
		emoji: "🌱",
		title: "Landing Page Website",
		blurb: "Ideal for startups, events, or single-service promos.",
		includes: [
			"1 custom landing page (single scroll)",
			"Responsive design (mobile + tablet + desktop)",
			"Clean UI with modern layout",
			"Contact form or CTA integration",
			"Basic animations and transitions",
			"SEO-friendly structure",
			"Deployment & hosting setup",
		],
		price: "₹6,000 – ₹10,000",
		timeline: "3–5 days",
		stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary"],
		icon: <FaBolt className="h-5 w-5" />,
		accent: "from-emerald-400 to-cyan-400",
	},
	{
		key: "basic-fe",
		emoji: "💼",
		title: "Basic Frontend Website",
		blurb: "Great for portfolios, small businesses, and NGOs.",
		includes: [
			"3–6 static pages (Home, About, Services, Gallery, Contact)",
			"Responsive design with smooth navigation",
			"Interactive sections (image sliders, FAQ, testimonials)",
			"SEO meta tags + Open Graph setup",
			"Contact form (email integration)",
			"Hosting & domain setup assistance",
		],
		price: "₹12,000 – ₹20,000",
		timeline: "1–2 weeks",
		stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary"],
		icon: <FaCubes className="h-5 w-5" />,
		accent: "from-indigo-400 to-sky-400",
	},
	{
		key: "basic-fsd",
		emoji: "⚙️",
		title: "Basic Full‑Stack Development",
		blurb: "Dynamic sites with admin updates and database connectivity.",
		includes: [
			"Dynamic content management (Add/Edit/Delete via API)",
			"User authentication (login/signup)",
			"Database integration (MongoDB / Firebase / Supabase)",
			"Admin or Dashboard view",
			"Contact forms with backend storage",
			"Responsive + optimized performance",
			"API routes (Next.js API or Node.js)",
		],
		price: "₹25,000 – ₹40,000",
		timeline: "2–3 weeks",
		stack: ["Next.js", "Node.js", "Express", "MongoDB", "Zustand / Redux"],
		icon: <FaDatabase className="h-5 w-5" />,
		accent: "from-fuchsia-400 to-rose-400",
	},
	{
		key: "advanced",
		emoji: "🚀",
		title: "Advanced Full‑Stack App",
		blurb: "For platforms, portals, and advanced dashboards.",
		includes: [
			"Complete CMS or user panel",
			"Role-based authentication (admin, user, etc.)",
			"File uploads (Cloudinary / S3)",
			"Real-time updates / notifications",
			"Payment integration (Razorpay / Stripe)",
			"3rd‑party API integrations",
			"Performance & security optimization",
			"Custom admin dashboard design",
		],
		price: "₹50,000 – ₹1,00,000+",
		timeline: "4–8 weeks",
		stack: [
			"Next.js 14 (App Router)",
			"TypeScript",
			"Node.js",
			"MongoDB",
			"Zustand / Redux Toolkit",
			"Tailwind",
			"Framer Motion",
		],
		icon: <FaRocket className="h-5 w-5" />,
		accent: "from-amber-400 to-orange-500",
		featured: true,
	},
];

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
	<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 ring-1 ring-white/10">
		<FaShieldAlt className="h-3.5 w-3.5" />
		{children}
	</span>
);

const Feature = ({ text }: { text: string }) => (
	<li className="flex items-start gap-3 text-sm text-gray-200">
		<span className="mt-1 rounded-full bg-white/10 p-1 ring-1 ring-white/15">
			<FaCheck className="h-3.5 w-3.5" />
		</span>
		<span>{text}</span>
	</li>
);

export default function Pricing() {
	return (
		<section className="relative isolate mx-auto w-[min(1100px,94vw)] py-12 sm:py-16">
			{/* Aurora blobs */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-28 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
				<div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
			</div>

			{/* Header */}
			<motion.header
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 260, damping: 24 }}
				className="mb-8 text-center">
				<div className="mb-3 flex items-center justify-center gap-2 text-sm text-gray-300">
					<SectionBadge>Transparent pricing • Pro build quality</SectionBadge>
					<span className="hidden md:inline text-gray-500">|</span>
					<span className="hidden md:inline text-xs text-gray-400">
						Delivery with CI-ready code
					</span>
				</div>
				<h2 className="text-balance bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
					Website Development Packages
				</h2>
				<p className="mx-auto mt-3 max-w-2xl text-pretty text-sm text-gray-300">
					Choose a package and get a production‑grade site with performance,
					SEO, and clean UI baked in.
				</p>
			</motion.header>

			{/* Cards */}
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
				{packages.map((pkg, idx) => (
					<motion.article
						key={pkg.key}
						initial={{ y: 16, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{
							delay: idx * 0.05,
							type: "spring",
							stiffness: 220,
							damping: 26,
						}}
						className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/30 backdrop-blur-md ${
							pkg.featured ? "ring-1 ring-white/15" : ""
						}`}>
						{/* gradient top border */}
						<div
							className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${pkg.accent}`}
						/>

						{/* header */}
						<div className="mb-4 flex items-start justify-between gap-3">
							<div>
								<div className="flex items-center gap-2 text-sm text-gray-300">
									<span className="text-lg">{pkg.emoji}</span>
									<span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-2 py-1 text-[11px] uppercase tracking-wide text-gray-300 ring-1 ring-white/10">
										{pkg.icon}
										{pkg.title}
									</span>
								</div>
								<h3 className="mt-2 text-lg font-semibold text-white">
									{pkg.blurb}
								</h3>
							</div>
							{pkg.featured && (
								<span className="rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 px-3 py-1 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/30">
									Most Popular
								</span>
							)}
						</div>

						{/* price & timeline */}
						<div className="mb-4 flex flex-wrap items-center gap-3">
							<div className="rounded-xl bg-white/5 px-3 py-2 text-sm text-white ring-1 ring-white/10">
								<span className="opacity-70">Price:</span>{" "}
								<span className="font-semibold">{pkg.price}</span>
							</div>
							<div className="rounded-xl bg-white/5 px-3 py-2 text-sm text-white ring-1 ring-white/10">
								<span className="opacity-70">Timeline:</span>{" "}
								<span className="font-semibold">{pkg.timeline}</span>
							</div>
						</div>

						{/* includes */}
						<ul className="mb-5 grid list-none grid-cols-1 gap-3">
							{pkg.includes.map((f) => (
								<Feature key={f} text={f} />
							))}
						</ul>

						{/* stack */}
						<div className="mb-5 flex flex-wrap items-center gap-2">
							<span className="text-xs uppercase tracking-wide text-gray-400">
								Tech Stack:
							</span>
							{pkg.stack.map((s) => (
								<span
									key={s}
									className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-200 ring-1 ring-white/10">
									{s}
								</span>
							))}
						</div>

						{/* CTA row */}
						<div className="flex flex-wrap items-center justify-between gap-3">
							<button
								className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:opacity-95 bg-gradient-to-br ${pkg.accent}`}>
								<Link href="/contact" className="flex items-center gap-2">
									Get this package
								</Link>
							</button>
							<div className="flex items-center gap-3 text-xs text-gray-400">
								<span className="inline-flex items-center gap-1">
									<FaCloud className="h-3.5 w-3.5" /> Deploy ready
								</span>
								<span className="inline-flex items-center gap-1">
									<FaCode className="h-3.5 w-3.5" /> Clean code
								</span>
								<span className="inline-flex items-center gap-1">
									<FaShieldAlt className="h-3.5 w-3.5" /> Best practices
								</span>
							</div>
						</div>
					</motion.article>
				))}
			</div>

			{/* Footnote / Note */}
			<motion.div
				initial={{ y: 8, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ type: "spring", stiffness: 240, damping: 22 }}
				className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm text-gray-300 backdrop-blur-md">
				Pricing is indicative and may vary with scope (pages, integrations,
				custom UI). You’ll get a detailed SoW and fixed quote after a quick
				discovery call.
			</motion.div>
		</section>
	);
}
