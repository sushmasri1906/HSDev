"use client";

import { FaSearch, FaTools, FaRocket } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Discover",
		description:
			"We dive deep into your goals and 'must-haves' to craft a battle plan.",
		step: "Step 1",
		icon: <FaSearch className="text-[#1c00d3] text-2xl" />,
	},
	{
		title: "Design & Build",
		description:
			"You’ll see real work fast—with checkpoints to refine every detail.",
		step: "Step 2",
		icon: <FaTools className="text-[#1c00d3] text-2xl" />,
	},
	{
		title: "Launch & Grow",
		description: "We don’t just deliver—we optimize for long-term success.",
		step: "Step 3",
		icon: <FaRocket className="text-[#1c00d3] text-2xl" />,
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.14 },
	},
};

export default function HowWeWork() {
	return (
		<section className="relative bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-20 py-28 overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752588140/raw_kvkdrv.png"
					alt="HSDev Background"
					className="w-full h-full object-cover opacity-30"
					quality={100}
					fill
					priority
				/>
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60 z-0" />

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.6 }}
					className="text-3xl sm:text-4xl font-extrabold mb-20">
					How We Build{" "}
					<span className="text-[#1c00d3]">High-Impact Software</span>
				</motion.h2>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{steps.map((step, index) => (
						<div
							key={index} // ✅ Fix: added key
							className="relative group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#1c00d3] rounded-3xl p-10 shadow-[0_10px_40px_rgba(28,0,211,0.08)] transition-all duration-500 hover:shadow-[0_0_60px_10px_rgba(28,0,211,0.2)] overflow-hidden">
							{/* Shine on Hover */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/10 to-white/5 rounded-3xl pointer-events-none" />

							{/* Glowing border */}
							<div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#1c00d3]/40 transition duration-700 blur-md" />

							{/* Icon */}
							<div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#101018] border border-white/10 shadow-inner">
								{step.icon}
							</div>

							{/* Title */}
							<h3 className="text-xl font-semibold mb-4">{step.title}</h3>

							{/* Description */}
							<p className="text-gray-300 text-sm leading-relaxed mb-6">
								{step.description}
							</p>

							{/* Step Badge */}
							<div className="inline-block bg-[#1c00d3] text-white text-sm px-5 py-2 rounded-full font-medium shadow hover:shadow-md transition">
								{step.step}
							</div>

							{/* Subtle corner glow */}
							<span
								aria-hidden
								className="pointer-events-none absolute -top-10 -left-10 h-24 w-24 rotate-45 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
								style={{
									background:
										"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), transparent 60%)",
								}}
							/>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
