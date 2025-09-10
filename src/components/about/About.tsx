"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ACCENT = "#1c00d3";

// ✅ Explicitly type the animation object
const fadeUp: Variants = {
	hidden: { opacity: 0, y: 18, scale: 0.98 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 140, damping: 16 },
	},
};

export default function About() {
	return (
		<section className="relative mt-10 bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-20 py-28 overflow-hidden">
			{/* Background mesh + dev-grid (subtle) */}
			<div aria-hidden className="absolute inset-0 z-0">
				{/* soft blue radial glows */}
				<div
					className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full opacity-80"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(28,0,211,0.22) 0%, rgba(28,0,211,0.06) 45%, transparent 70%)",
						filter: "blur(10px)",
					}}
				/>
				<div
					className="absolute -bottom-24 -right-16 h-[560px] w-[560px] rounded-full opacity-80"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(102,92,255,0.22) 0%, rgba(102,92,255,0.06) 45%, transparent 70%)",
						filter: "blur(12px)",
					}}
				/>
				{/* subtle grid */}
				<div
					className="absolute inset-0 opacity-[0.06]"
					style={{
						background:
							"linear-gradient(to right, rgba(28,0,211,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,0,211,0.9) 1px, transparent 1px)",
						backgroundSize: "36px 36px",
					}}
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
				{/* Left Image card */}
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.35 }}
					variants={fadeUp}
					className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden border"
					style={{
						borderColor: "rgba(28,0,211,0.35)",
						boxShadow:
							"0 0 32px rgba(28,0,211,0.18), inset 0 0 0 1px rgba(255,255,255,0.06)",
						background: "rgba(255,255,255,0.04)",
						backdropFilter: "blur(6px)",
					}}>
					<Image
						src="https://res.cloudinary.com/dq12dx327/image/upload/v1755397586/raw_znrn4g.png"
						alt="HSDev Team"
						fill
						className="object-cover"
						priority
					/>
					{/* slim accent line */}
					<div
						aria-hidden
						className="absolute left-0 top-0 h-[2px] w-full opacity-80"
						style={{
							background: `linear-gradient(90deg, ${ACCENT}, rgba(28,0,211,0))`,
						}}
					/>
				</motion.div>

				{/* Right Content */}
				<div>
					<motion.h2
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.35 }}
						transition={{ duration: 0.5 }}
						className="text-3xl sm:text-4xl font-extrabold mb-6 leading-snug">
						From Code to Impact: <br />
						<span style={{ color: ACCENT }}>HSDev Builds What Matters</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.4 }}
						transition={{ duration: 0.45 }}
						className="text-white/90 mb-6 text-base leading-relaxed">
						Since 2023, HSDev has partnered with ambitious brands and visionary
						startups to build high-performance digital products that don&apos;t
						just work—they wow.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.4 }}
						transition={{ duration: 0.45, delay: 0.05 }}
						className="text-white/90 mb-10">
						With a passionate team of engineers, designers, and strategists, we
						turn ideas into scalable software that delivers lasting value.
					</motion.p>

					<ul className="space-y-4 text-sm sm:text-base text-white/95">
						{[
							"Custom web & app development for startups and enterprises",
							"Scalable architecture & seamless UI/UX experiences",
							"Long-term tech partnerships built on trust & performance",
						].map((t, i) => (
							<motion.li
								key={i}
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false, amount: 0.45 }}
								transition={{ duration: 0.35, delay: i * 0.05 }}
								className="flex items-start gap-3">
								<FaCheckCircle className="mt-1" color={ACCENT} />
								<span>{t}</span>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
