"use client";

import Image from "next/image";

const ACCENT = "#1c00d3";

const DEFAULT_LOGOS = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744796359/Logos_For_We_Work_t24ef3.png",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1753545558/final_logo_1_mskpl9.png",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936899/4_bgqtwl.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936895/3_r2tlqy.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936892/1_teiasc.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752675634/VR_KISAN_PARIVAAR-04_1_rbcvyz.png",
];

type LogoSectionProps = {
	images?: string[];
	title?: string;
};

export default function LogoSection({
	images = DEFAULT_LOGOS,
	title = "Trusted by Brands & Partners",
}: LogoSectionProps) {
	return (
		<section className="bg-[#0b0b11] py-14 sm:py-18 px-4 sm:px-6">
			<div className="max-w-7xl mx-auto">
				{/* Header chip */}
				<div className="relative mx-auto max-w-3xl rounded-2xl border border-white/12 bg-white/5 backdrop-blur-xl px-4 sm:px-8 py-5 sm:py-7 text-center">
					<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[color:oklch(57%_0.2_280)]/30" />
					<h2 className="text-white text-base sm:text-lg font-semibold uppercase tracking-wide">
						{title}
					</h2>
					<div className="mx-auto mt-3 h-[2px] w-24 bg-gradient-to-r from-[${ACCENT}] via-[#000fb5] to-[${ACCENT}] opacity-80 rounded-full" />
				</div>

				{/* Static grid (no carousel) */}
				<div
					className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 lg:gap-8 items-center"
					aria-label="Partner logos grid">
					{images.map((src, index) => (
						<div key={index} className="flex justify-center">
							<LogoCard src={src} alt={`Logo ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function LogoCard({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="group relative w-full max-w-[420px] mx-auto">
			<div
				className="relative w-full rounded-xl bg-white border border-white/10
          bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]
          backdrop-blur-md overflow-hidden transition-transform duration-300
          group-hover:scale-[1.03] group-active:scale-[0.995]">
				{/* Logo box (fixed height, no forced aspect ratio) */}
				<div className="h-28 sm:h-32 p-4 flex items-center justify-center">
					<Image
						src={src}
						alt={alt}
						width={600}
						height={100}
						className="max-h-full max-w-full object-contain"
						sizes="(max-width: 600px) 90vw, 420px"
					/>
				</div>

				{/* inner rim */}
				<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/12 group-hover:ring-[rgba(28,0,211,0.35)] transition" />
			</div>

			{/* soft glow */}
			<div
				aria-hidden
				className="absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition"
				style={{
					background: `radial-gradient(60% 60% at 50% 50%, ${ACCENT}30 0%, transparent 65%)`,
				}}
			/>
		</div>
	);
}
