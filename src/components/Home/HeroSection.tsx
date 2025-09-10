"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from "framer-motion";
import MeetingRequestForm from "../forms/MeetForm";

export default function HeroSection() {
	const [showForm, setShowForm] = useState(false);

	// Scroll/parallax is tied to the whole section for robustness
	const sectionRef = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		// Start animating when the section's top hits 90% viewport,
		// finish when its bottom hits 10% viewport — very reliable.
		offset: ["start 0.9", "end 0.1"],
	});

	// Parallax for the image (gentle)
	const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
	const imgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

	return (
		<section
			ref={sectionRef}
			className="relative bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-24 pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
			{/* Accents */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#1c00d3]/10 blur-3xl" />
				<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#000fb5]/20 blur-3xl" />
				<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#1c00d3]/40 via-[#000fb5]/50 to-[#1c00d3]/40" />
			</div>

			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
				{/* Copy */}
				<div>
					<motion.h1
						initial={{ y: 28, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ amount: 0.25, once: false }}
						transition={{ type: "spring", stiffness: 120, damping: 16 }}
						className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
						Powerful Websites, <br />
						Digital Products & Strategy <br />
						for Visionary Brands.
					</motion.h1>

					<motion.p
						initial={{ y: 22, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ amount: 0.25, once: false }}
						transition={{
							type: "spring",
							stiffness: 120,
							damping: 16,
							delay: 0.05,
						}}
						className="text-base sm:text-lg text-gray-300 mb-7 sm:mb-8 max-w-prose">
						At HS Dev, we craft future-ready digital experiences...
					</motion.p>

					<motion.div
						initial={{ y: 18, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ amount: 0.25, once: false }}
						transition={{
							type: "spring",
							stiffness: 120,
							damping: 16,
							delay: 0.1,
						}}>
						<button
							onClick={() => setShowForm(true)}
							className="
                inline-block rounded-full border border-white
                bg-[#1c00d3] px-6 sm:px-7 py-3 sm:py-3.5
                text-white font-semibold text-sm sm:text-base
                transition-shadow hover:bg-[#000fb5]
                shadow-md hover:shadow-lg
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c00d3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b11]
              ">
							Request a Meeting
						</button>
					</motion.div>
				</div>

				{/* Image with section-based parallax */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.3, once: false }}
					transition={{ type: "spring", stiffness: 110, damping: 16 }}
					className="relative mx-auto w-full max-w-md md:max-w-none">
					<div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-[#1c00d3]/80 bg-[#0b0b11]">
						<motion.div
							style={{ y: imgY, scale: imgScale }}
							className="absolute inset-0">
							<Image
								src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752937424/software-developers-writing-code-computers-modern-office-night-two-programmers-working-dark-purple-lights-379344757_quarpq.jpg"
								alt="Team collaborating on digital strategy"
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
								className="object-cover"
								priority
							/>
						</motion.div>
						<div className="pointer-events-none absolute inset-x-0 top-0 h-14 sm:h-16 bg-gradient-to-b from-black/40 to-transparent" />
						<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#1c00d3]/30 rounded-2xl" />
					</div>
				</motion.div>
			</div>

			{/* Modal */}
			<AnimatePresence>
				{showForm && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center  p-4"
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
							className="relative w-full max-w-md rounded-xl text-black p-6 shadow-2xl">
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
