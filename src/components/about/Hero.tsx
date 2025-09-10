"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const ACCENT = "#1c00d3";

// ✅ Properly typed variants
const fadeUp: Variants = {
	hidden: { opacity: 0, y: 18, scale: 0.985 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 140, damping: 16 },
	},
};

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-20 pt-32 pb-28">
			{/* subtle dev-grid + radial glows */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div
					className="absolute -top-28 -left-24 h-[560px] w-[560px] rounded-full"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(28,0,211,0.22) 0%, rgba(28,0,211,0.08) 45%, transparent 70%)",
						filter: "blur(10px)",
					}}
				/>
				<div
					className="absolute -bottom-28 -right-20 h-[620px] w-[620px] rounded-full"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(102,92,255,0.22) 0%, rgba(102,92,255,0.08) 45%, transparent 70%)",
						filter: "blur(12px)",
					}}
				/>
				<div
					className="absolute inset-0 opacity-[0.06]"
					style={{
						background:
							"linear-gradient(to right, rgba(28,0,211,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,0,211,0.9) 1px, transparent 1px)",
						backgroundSize: "36px 36px",
					}}
				/>
			</div>

			<div className="relative max-w-7xl mx-auto">
				{/* Heading */}
				<motion.h1
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.35 }}
					transition={{ duration: 0.5 }}
					className="text-4xl sm:text-5xl font-extrabold leading-tight mb-20">
					We Design & Build Digital <br />
					<span style={{ color: ACCENT }}>Experiences That Deliver</span>
				</motion.h1>

				{/* Image + Text Section */}
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.15 }}
					className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
					{/* Image 1 */}
					<motion.div
						variants={fadeUp}
						className="group relative overflow-hidden rounded-3xl border"
						style={{
							borderColor: "rgba(28,0,211,0.35)",
							boxShadow:
								"0 0 28px rgba(28,0,211,0.18), inset 0 0 0 1px rgba(255,255,255,0.06)",
							background: "rgba(255,255,255,0.04)",
							backdropFilter: "blur(6px)",
						}}>
						<Image
							src="https://res.cloudinary.com/dq12dx327/image/upload/v1755398012/raw_r92kv7.png"
							alt="HSDev Collaboration"
							width={400}
							height={520}
							className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
							priority
						/>
						<div
							aria-hidden
							className="absolute inset-0 rounded-3xl border opacity-0 group-hover:opacity-100 transition-all duration-300"
							style={{ borderColor: ACCENT }}
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rotate-45 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
							style={{
								background:
									"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), transparent 60%)",
							}}
						/>
					</motion.div>

					{/* Image 2 */}
					<motion.div
						variants={fadeUp}
						className="group relative overflow-hidden rounded-3xl border"
						style={{
							borderColor: "rgba(28,0,211,0.35)",
							boxShadow:
								"0 0 28px rgba(28,0,211,0.18), inset 0 0 0 1px rgba(255,255,255,0.06)",
							background: "rgba(255,255,255,0.04)",
							backdropFilter: "blur(6px)",
						}}>
						<Image
							src="https://res.cloudinary.com/dq12dx327/image/upload/v1755398094/raw_ushzxo.png"
							alt="HSDev Team"
							width={420}
							height={560}
							className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
						/>
						<div
							aria-hidden
							className="absolute inset-0 rounded-3xl border opacity-0 group-hover:opacity-100 transition-all duration-300"
							style={{ borderColor: ACCENT }}
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rotate-45 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
							style={{
								background:
									"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), transparent 60%)",
							}}
						/>
					</motion.div>

					{/* Text Column */}
					<motion.div
						variants={fadeUp}
						className="flex flex-col justify-center space-y-8">
						<p className="text-lg text-gray-300 leading-relaxed">
							At <span className="font-semibold text-white">HSDev</span>, we
							craft high-performance digital experiences that blend strategic
							design with scalable tech.
							<br />
							<br />
							Since 2023, we&apos;ve helped startups, agencies & enterprises
							build stunning apps, websites, and tools that convert and grow.
						</p>

						<div className="flex flex-wrap gap-3">
							<Link
								href="/contact"
								className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold bg-white text-black hover:bg-gray-200 transition">
								Start a Project
							</Link>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
