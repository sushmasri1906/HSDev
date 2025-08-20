"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const logoImages = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744796359/Logos_For_We_Work_t24ef3.png",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1753545558/final_logo_1_mskpl9.png",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936899/4_bgqtwl.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936895/3_r2tlqy.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936892/1_teiasc.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752675634/VR_KISAN_PARIVAAR-04_1_rbcvyz.png",
];

type LogoSectionProps = {
	autoplay?: boolean;
	intervalMs?: number; 
};

export default function LogoSection({
	autoplay = true,
	intervalMs = 3000,
}: LogoSectionProps) {
	const sectionRef = useRef<HTMLElement | null>(null);
	const inView = useInView(sectionRef, { margin: "-15% 0% -15% 0%" });

	// ==== Mobile carousel refs/logic ====
	const railRef = useRef<HTMLDivElement | null>(null);
	const autoplayRef = useRef<number | null>(null);

	const scrollByStep = (dir: "left" | "right") => {
		const rail = railRef.current;
		if (!rail) return;
		const step = Math.round(rail.clientWidth * 0.85);
		rail.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
	};

	useEffect(() => {
		if (!autoplay) return;
		const rail = railRef.current;
		if (!rail) return;

		const tick = () => scrollByStep("right");
		autoplayRef.current = window.setInterval(tick, intervalMs);
		const stop = () => {
			if (autoplayRef.current) window.clearInterval(autoplayRef.current);
		};
		rail.addEventListener("pointerenter", stop);
		rail.addEventListener("pointerleave", () => {
			autoplayRef.current = window.setInterval(tick, intervalMs);
		});
		return () => {
			stop();
			rail.removeEventListener("pointerenter", stop);
		};
	}, [autoplay, intervalMs]);

	// ==== Animations ====
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.08, delayChildren: 0.05 },
		},
	};
	const item = {
		hidden: { opacity: 0, y: 14, scale: 0.98 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { type: "spring", stiffness: 120, damping: 16 },
		},
	};

	return (
		<section ref={sectionRef} className="bg-[#0b0b11] py-16 sm:py-20 px-6">
			<div className="max-w-7xl mx-auto">
				{/* Header chip (glassy) */}
				<div className="relative mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
					<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#1c00d3]/30" />
					<h2 className="text-center text-white text-lg sm:text-xl font-semibold mb-2 uppercase tracking-wide">
						Trusted by Brands & Partners
					</h2>
					<div className="mx-auto h-[2px] w-24 bg-gradient-to-r from-[#1c00d3] via-[#000fb5] to-[#1c00d3] opacity-80 rounded-full" />
				</div>

				{/* Mobile: Carousel */}
				<div className="mt-10 md:hidden relative">
					<div
						ref={railRef}
						className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 py-2 no-scrollbar"
						aria-label="Partner logos carousel">
						{logoImages.map((src, i) => (
							<motion.div
								key={i}
								variants={item}
								initial="hidden"
								whileInView="visible"
								viewport={{ amount: 0.5, once: false }}
								className="snap-start shrink-0 basis-[72%] xs:basis-[65%] sm:basis-[55%]">
								<LogoCard src={src} alt={`Logo ${i + 1}`} />
							</motion.div>
						))}
					</div>

					{/* Arrows */}
					<button
						onClick={() => scrollByStep("left")}
						aria-label="Previous logos"
						className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full w-9 h-9 grid place-items-center border border-white/10 hover:bg-black/80">
						‹
					</button>
					<button
						onClick={() => scrollByStep("right")}
						aria-label="Next logos"
						className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full w-9 h-9 grid place-items-center border border-white/10 hover:bg-black/80">
						›
					</button>
				</div>

				{/* Desktop: Grid (staggered reveal, re-triggers) */}
				<motion.div
					variants={container}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="mt-10 hidden md:grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8 items-center"
					aria-label="Partner logos grid">
					{logoImages.map((src, index) => (
						<motion.div
							key={index}
							variants={item}
							className="flex justify-center">
							<LogoCard src={src} alt={`Logo ${index + 1}`} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

function LogoCard({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="group relative w-full max-w-[200px]">
			<div
				className="
        relative mx-auto w-full rounded-xl border border-white/10 
        bg-white from-white/10 via-white/5 to-white/0 
        backdrop-blur-md overflow-hidden transition-transform 
        duration-300 group-hover:scale-105
      ">
				{/* Fixed safe area for logo */}
				<div className="h-20 sm:h-24 p-4 flex items-center justify-center">
					<Image
						src={src}
						alt={alt}
						width={320}
						height={100}
						className="w-full h-full object-contain"
					/>
				</div>

				{/* Inner rim */}
				<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15 group-hover:ring-[#1c00d3]/40 transition" />
			</div>

			{/* Glow highlight behind logo */}
			<div
				className="absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition"
				style={{
					background:
						"radial-gradient(60% 60% at 50% 50%, rgba(28,0,211,0.55), transparent)",
				}}
			/>
		</div>
	);
}


