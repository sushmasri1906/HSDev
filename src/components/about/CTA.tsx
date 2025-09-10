"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ACCENT = "#1c00d3";

export default function CTA() {
	return (
		<section className="relative overflow-hidden bg-[#050713] text-white py-28 px-6 sm:px-12 lg:px-20">
			{/* ===== Background: gradient mesh + dev grid + subtle code glyphs ===== */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				{/* soft blue radial glows */}
				<div
					className="absolute -top-28 -left-24 h-[560px] w-[560px] rounded-full"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(28,0,211,0.22) 0%, rgba(28,0,211,0.08) 45%, transparent 70%)",
						filter: "blur(10px)",
					}}
				/>
				<div
					className="absolute -bottom-32 -right-20 h-[620px] w-[620px] rounded-full"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(102,92,255,0.22) 0%, rgba(102,92,255,0.08) 45%, transparent 70%)",
						filter: "blur(12px)",
					}}
				/>
				{/* dev-style blue grid (squares) */}
				<div className="absolute inset-0 opacity-[0.075] bg-[linear-gradient(to_right,rgba(28,0,211,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,0,211,0.9)_1px,transparent_1px)] [background-size:36px_36px]" />
				{/* subtle angle lines to feel “tech” */}
				<div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(115deg,rgba(28,0,211,0.35)_0%,transparent_25%,transparent_75%,rgba(28,0,211,0.35)_100%)]" />
				{/* scattered code glyphs using data-URI SVG (kept very faint) */}
				<div
					className="absolute inset-0 opacity-[0.05] mix-blend-screen"
					style={{
						backgroundImage:
							"url(\"data:image/svg+xml,%3Csvg width='220' height='220' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%231c00d3' stroke-opacity='0.45' stroke-width='1.2'%3E%3Cpath d='M55 70 l-18 18 18 18'/%3E%3Cpath d='M165 70 l18 18 -18 18'/%3E%3Cpath d='M104 158 l30 -96'/%3E%3Ctext x='26' y='36' font-family='monospace' font-size='14' fill='%231c00d3' fill-opacity='0.35' %3C%2Ftext%3E%3C/g%3E%3C/svg%3E\")",
						backgroundSize: "220px",
					}}
				/>
			</div>

			<div className="relative max-w-4xl mx-auto">
				{/* ===== Glassy, blue-glow card ===== */}
				<motion.div
					initial={{ opacity: 0, y: 18, scale: 0.985 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: false, amount: 0.35 }}
					transition={{ type: "spring", stiffness: 140, damping: 16 }}
					className={[
						"mx-auto text-center rounded-3xl border",
						// blue glass
						"bg-white/[0.055] backdrop-blur-[8px] border-[rgba(28,0,211,0.35)]",
						// blue glow (normal + hover)
						"shadow-[0_0_32px_rgba(28,0,211,0.18)] hover:shadow-[0_0_56px_rgba(28,0,211,0.36)]",
						"transition-shadow duration-300",
						"px-6 sm:px-10 py-12",
					].join(" ")}
					style={{
						outline: "1px solid rgba(28,0,211,0.18)",
					}}>
					{/* Accent top line */}
					<div
						aria-hidden
						className="mx-auto mb-8 h-[2px] w-28 opacity-90"
						style={{
							background: `linear-gradient(90deg, ${ACCENT}, rgba(28,0,211,0))`,
						}}
					/>

					{/* Avatar */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.4 }}
						transition={{ duration: 0.45 }}
						className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4"
						style={{
							borderColor: ACCENT,
							boxShadow: `0 0 24px ${ACCENT}55, inset 0 0 12px ${ACCENT}33`,
						}}>
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1728044830/66fbd7ac8b663ce6b698945b/66fbd7ac8b663ce6b698945bFri%20Oct%2004%202024%2012:27:08%20GMT%2B0000%20%28Coordinated%20Universal%20Time%29.jpg"
							alt="Harunath Eskuri"
							width={96}
							height={96}
							className="object-cover"
						/>
					</motion.div>

					{/* Heading */}
					<motion.h2
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.35 }}
						transition={{ duration: 0.5 }}
						className="text-3xl sm:text-4xl font-extrabold mb-3">
						Meet the Minds Behind the{" "}
						<span style={{ color: ACCENT }}>Magic</span>
					</motion.h2>

					{/* Subtext */}
					<motion.p
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.4 }}
						transition={{ duration: 0.45 }}
						className="text-gray-300 mb-10 text-sm sm:text-base">
						Book a free 30-minute strategy session with our founder and lead
						architect.
					</motion.p>

					{/* Primary CTA — blue neon/glass button */}
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.45 }}
						transition={{ duration: 0.4 }}
						className="inline-flex relative">
						{/* Outer glow ring */}
						<span
							aria-hidden
							className="absolute inset-0 rounded-full blur-xl opacity-70"
							style={{ background: `${ACCENT}55` }}
						/>
						<Link
							href="mailto:hsdev.original@gmail.com"
							className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300
                         ring-1 ring-[rgba(255,255,255,0.15)] hover:ring-[rgba(28,0,211,0.7)]
                         shadow-[0_8px_30px_rgba(28,0,211,0.35)]
                         hover:-translate-y-[2px]"
							style={{
								background: `linear-gradient(180deg, ${ACCENT}, #12008b)`,
							}}>
							{/* sheen */}
							<span
								aria-hidden
								className="absolute left-2 top-0 h-10 w-10 -translate-y-1/2 rotate-45 rounded-full blur-xl opacity-40"
								style={{
									background:
										"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7), transparent 60%)",
								}}
							/>
							Book a Free Call
						</Link>
					</motion.div>

					{/* Alternate contact */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: false, amount: 0.45 }}
						transition={{ duration: 0.5, delay: 0.05 }}
						className="mt-10">
						<p className="text-gray-400 text-sm">Prefer Email?</p>
						<Link
							href="mailto:hsdev.original@gmail.com"
							className="text-white underline font-semibold hover:text-[rgba(28,0,211,0.9)] transition">
							hsdev.original@gmail.com
						</Link>
					</motion.div>
				</motion.div>

				{/* Bottom accent bar */}
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
