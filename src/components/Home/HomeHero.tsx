"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import MeetingRequestForm from "../forms/MeetForm";

export default function HomeHero() {
	const [showForm, setShowForm] = useState(false);

	const imgRef = useRef<HTMLDivElement | null>(null);

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
				<p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#1c00d3] font-semibold mb-2 sm:mb-3 text-center">
					Driven by Innovation. Focused on Impact.
				</p>

				{/* Heading */}
				<h1 className="text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
					Where <span className="text-[#1c00d3]">Vision</span> Transforms Into{" "}
					<span className="text-[#1c00d3]">Digital Reality</span>
				</h1>

				{/* Subtext */}
				<p className="text-center text-gray-300 max-w-2xl mx-auto text-[15px] sm:text-lg lg:text-xl mb-7 sm:mb-8">
					At HSDev, we build stunning websites, scalable apps, and impactful
					digital platforms. Our mission? Helping brands launch faster, scale
					smarter, and stand out in the digital world.
				</p>

				{/* CTA */}
				<div className="flex justify-center">
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
				</div>

				{/* Hero Media */}
				<div
					ref={imgRef}
					className="mt-10 sm:mt-12 lg:mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-[#1c00d3]/80 bg-[#0b0b11]">
					<div className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px]">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752648873/image_rmyalh.png"
							alt="Team collaborating on digital strategy"
							fill
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 900px, 1200px"
							className="object-cover"
							priority
						/>
						<div className="pointer-events-none absolute inset-x-0 top-0 h-14 sm:h-16 bg-gradient-to-b from-black/40 to-transparent" />
						<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#1c00d3]/30 rounded-2xl" />
					</div>
				</div>
			</div>

			{/* Modal Form */}
			{showForm && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center  p-4"
					role="dialog"
					aria-modal="true"
					aria-label="Request a Meeting">
						<button
							onClick={() => setShowForm(false)}
							className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c00d3] rounded"
							aria-label="Close">
							×
						</button>
						<MeetingRequestForm />
					</div>
			)}
		</section>
	);
}
