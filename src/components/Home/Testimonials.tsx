"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ACCENT = "#1c00d3";

type Testimonial = {
	rating: number; // e.g. 4.5
	feedback: string;
	name: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		rating: 5.0,
		feedback:
			"Working with HS Dev has been a game-changer for Biz-Network®. We’ve taken several full-stack and front-end applications from HSDev. Each one delivered with precision, performance, and an eye for detail. From our main Biz-Network® platform to supporting tools, their work has consistently exceeded expectations. Highly recommended!",
		name: "Narayana Swamy",
		image:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741327062/n_f2djcv.jpg",
	},
	{
		rating: 5.0,
		feedback:
			"I'm really happy with how the Rolanplast website turned out. The design is clean, smooth, and interactive. The team was quick to respond, made all the changes I asked for, and made the whole process easy and stress-free.",
		name: "Mahesh Devarakonda",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1744695457/mahesh_vgalio.jpg",
	},
	// Add more freely — layout scales to 3 columns on large screens
];

function renderStars(rating: number) {
	const full = Math.floor(rating);
	const half = rating - full >= 0.5 ? 1 : 0;
	const empty = 5 - full - half;
	const stars = [
		...Array(full).fill("full"),
		...Array(half).fill("half"),
		...Array(empty).fill("empty"),
	];

	return (
		<div className="flex items-center gap-1 text-yellow-400 text-sm">
			{stars.map((t, i) =>
				t === "full" ? (
					<FaStar key={`s-${i}`} />
				) : t === "half" ? (
					<FaStarHalfAlt key={`s-${i}`} />
				) : (
					<span
						key={`s-${i}`}
						className="inline-block w-[14px] h-[14px] opacity-40 border border-yellow-400/40 rounded-[2px]"
					/>
				)
			)}
			<span className="text-white ml-2">{rating.toFixed(1)}</span>
		</div>
	);
}

export default function Testimonials() {
	return (
		<section className="relative overflow-hidden bg-[#06060F] py-20 px-4 md:px-8">
			{/* Background accents (subtle, professional) */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div
					className="absolute -top-24 -left-20 h-[460px] w-[460px] rounded-full opacity-70"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(28,0,211,0.22) 0%, rgba(28,0,211,0.06) 45%, transparent 70%)",
						filter: "blur(8px)",
					}}
				/>
				<div
					className="absolute -bottom-24 -right-16 h-[520px] w-[520px] rounded-full opacity-70"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(102,92,255,0.22) 0%, rgba(102,92,255,0.06) 45%, transparent 70%)",
						filter: "blur(10px)",
					}}
				/>
				<div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]" />
			</div>

			<div className="relative max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					className="text-white text-3xl md:text-5xl font-bold mb-4 text-center">
					What Our Clients Say
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.45 }}
					className="text-center text-gray-300/90 mb-12 max-w-2xl mx-auto">
					Results-first delivery, clear communication, and long-term
					partnerships.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{testimonials.map((t, i) => (
						<article
							key={i}
							className={[
								"group relative overflow-hidden rounded-2xl",
								"bg-white/[0.03] backdrop-blur-[2px] border border-white/10",
								"transition-all duration-300 hover:translate-y-[-4px] hover:border-[color:rgba(28,0,211,0.35)]",
								"p-6",
							].join(" ")}>
							{/* Top accent line */}
							<div
								aria-hidden
								className="absolute left-0 top-0 h-[2px] w-full opacity-70 group-hover:opacity-100 transition-opacity"
								style={{
									background: `linear-gradient(90deg, ${ACCENT}, rgba(28,0,211,0) 60%)`,
								}}
							/>

							{/* Decorative quote mark */}
							<span
								aria-hidden
								className="absolute -top-2 right-4 text-7xl font-serif text-white/5 select-none">
								“
							</span>

							<div className="flex items-center gap-4 mb-5">
								<Image
									src={t.image}
									alt={t.name}
									width={56}
									height={56}
									className="rounded-full object-cover"
								/>
								<div>
									<p className="font-semibold text-white text-base md:text-lg leading-tight">
										{t.name}
									</p>
									{renderStars(t.rating)}
								</div>
							</div>

							<p className="text-gray-300 leading-relaxed">“{t.feedback}”</p>
						</article>
					))}
				</div>

				{/* Bottom accent */}
				<div
					aria-hidden
					className="mx-auto mt-14 h-px w-2/3 max-w-3xl"
					style={{
						background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
						opacity: 0.35,
					}}
				/>
			</div>
		</section>
	);
}
