"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
	useInView,
} from "framer-motion";
import MeetingRequestForm from "../forms/MeetForm";

export default function HomeHero() {
	const [showForm, setShowForm] = useState(false);

	// Parallax (scoped to image wrapper)
	const imgRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: imgRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

	// Re-trigger-on-scroll refs
	const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
	const headingRef = useRef<HTMLHeadingElement | null>(null);
	const subRef = useRef<HTMLParagraphElement | null>(null);
	const ctaRef = useRef<HTMLDivElement | null>(null);



	const eyebrowInView = useInView(eyebrowRef, { margin: "-10% 0% -10% 0%" });
	const headingInView = useInView(headingRef, { margin: "-10% 0% -10% 0%" });
	const subInView = useInView(subRef, { margin: "-10% 0% -10% 0%" });
	const ctaInView = useInView(ctaRef, { margin: "-10% 0% -10% 0%" });

	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		visible: (delay = 0) => ({
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 120, damping: 16, delay },
		}),
	};

	return (
		<section className="relative bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-24 pt-24 sm:pt-28 pb-16 sm:pb-20 mt-20 overflow-hidden">
			{/* Decorative background accents */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#1c00d3]/10 blur-3xl" />
				<div className="absolute -bottom-24 -left-32 h-72 w-72 rounded-full bg-[#000fb5]/20 blur-3xl" />
				<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#1c00d3]/40 via-[#000fb5]/50 to-[#1c00d3]/40" />
			</div>

			<div className="max-w-7xl mx-auto">
				{/* Eyebrow */}
				<motion.p
					ref={eyebrowRef}
					variants={fadeUp}
					initial="hidden"
					animate={eyebrowInView ? "visible" : "hidden"}
					custom={0.05}
					className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#1c00d3] font-semibold mb-2 sm:mb-3 text-center">
					Driven by Innovation. Focused on Impact.
				</motion.p>

				{/* Heading */}
				<motion.h1
					ref={headingRef}
					variants={fadeUp}
					initial="hidden"
					animate={headingInView ? "visible" : "hidden"}
					custom={0.08}
					className="text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
					Where <span className="text-[#1c00d3]">Vision</span> Transforms Into{" "}
					<span className="text-[#1c00d3]">Digital Reality</span>
				</motion.h1>

				{/* Subtext */}
				<motion.p
					ref={subRef}
					variants={fadeUp}
					initial="hidden"
					animate={subInView ? "visible" : "hidden"}
					custom={0.12}
					className="text-center text-gray-300 max-w-2xl mx-auto text-[15px] sm:text-lg lg:text-xl mb-7 sm:mb-8">
					At HSDev, we build stunning websites, scalable apps, and impactful
					digital platforms. Our mission? Helping brands launch faster, scale
					smarter, and stand out in the digital world.
				</motion.p>

				{/* CTA */}
				<motion.div
					ref={ctaRef}
					variants={fadeUp}
					initial="hidden"
					animate={ctaInView ? "visible" : "hidden"}
					custom={0.16}
					className="flex justify-center">
					<button
						onClick={() => setShowForm(true)}
						className="
              inline-block bg-[#1c00d3] text-white font-semibold
              px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-base sm:text-lg
              hover:bg-[#000fb5] transition-shadow shadow-md hover:shadow-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c00d3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b11]
            ">
						Book a meeting
					</button>
				</motion.div>

				{/* Hero Media with parallax */}
				<motion.div
					ref={imgRef}
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.35, once: false }}
					transition={{ type: "spring", stiffness: 110, damping: 16 }}
					className="mt-10 sm:mt-12 lg:mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-[#1c00d3]/80 bg-[#0b0b11]">
					<div className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px]">
						<motion.div style={{ y, scale }} className="absolute inset-0">
							<Image
								src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752648873/image_rmyalh.png"
								alt="Team collaborating on digital strategy"
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 900px, 1200px"
								className="object-cover"
								priority
							/>
						</motion.div>
						<div className="pointer-events-none absolute inset-x-0 top-0 h-14 sm:h-16 bg-gradient-to-b from-black/40 to-transparent" />
						<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#1c00d3]/30 rounded-2xl" />
					</div>
				</motion.div>
			</div>

			{/* Modal Form */}
			<AnimatePresence>
				{showForm && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						role="dialog"
						aria-modal="true"
						aria-label="Request a Meeting">
						<motion.div
							initial={{ scale: 0.9, y: 8, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.96, y: 8, opacity: 0 }}
							transition={{ type: "spring", stiffness: 160, damping: 16 }}
							className="relative w-full max-w-md rounded-xl bg-white text-black p-6 shadow-2xl">
							<button
								onClick={() => setShowForm(false)}
								className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c00d3] rounded"
								aria-label="Close">
								×
							</button>
							<MeetingRequestForm />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}