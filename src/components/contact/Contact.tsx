"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

const stagger = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form Submitted:", formData);
		alert("Thank you! We’ll connect with you shortly.");
	};

	return (
		<section
			id="contact"
			className="relative isolate mt-16 overflow-hidden bg-[#0b0b11] px-6 py-28 text-white sm:px-12 lg:px-20">
			{/* Ambient animated background grid */}
			<div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
				<div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(28,0,211,0.20),transparent_60%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
				{/* Glow orbs */}
				<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1c00d3]/40 blur-3xl" />
				<div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-fuchsia-600/30 blur-3xl" />
			</div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.3 }}
				className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2 lg:gap-20">
				{/* Left Content */}
				<motion.div variants={fadeUp}>
					<h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
						Start Your <br />
						<span className="bg-gradient-to-r from-[#6a5bff] via-[#1c00d3] to-[#7aa2ff] bg-clip-text text-transparent">
							Next Big Project
						</span>{" "}
						with HSDev
					</h2>
					<p className="text-base text-gray-300 sm:text-lg">
						Whether you&apos;re building a scalable platform, a powerful brand
						site, or a seamless web app, HSDev is here to bring it to life.
						Share your vision with us and let&apos;s make something remarkable.
					</p>
					<p className="mt-4 text-sm text-gray-400 sm:text-base">
						Our team usually responds within 24 hours.
					</p>

					{/* Feature bullets */}
					<ul className="mt-8 space-y-4">
						{[
							"Product strategy & UX",
							"Full‑stack development (Next.js, Node, Prisma)",
							"Performance, SEO & analytics",
						].map((item) => (
							<motion.li
								key={item}
								variants={fadeUp}
								className="group flex items-center gap-3 text-gray-300">
								<span className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
									<span className="absolute inset-0 bg-[#1c00d3]/70 blur-sm transition-transform duration-500 group-hover:scale-125" />
									<span className="relative h-2 w-2 rounded-full bg-white" />
								</span>
								<span>{item}</span>
							</motion.li>
						))}
					</ul>
				</motion.div>

				{/* Right Form */}
				<motion.form
					onSubmit={handleSubmit}
					variants={fadeUp}
					className="relative space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_-10px_rgba(28,0,211,0.5)] backdrop-blur-xl sm:p-8">
					{/* gradient border ring on hover */}
					<div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/20 via-[#1c00d3]/20 to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

					<FormField label="Your Name" name="name" required>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-inner outline-none transition focus:border-[#7aa2ff] focus:ring-2 focus:ring-[#1c00d3]/60"
						/>
					</FormField>

					<FormField label="Your Email" name="email" required>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-inner outline-none transition focus:border-[#7aa2ff] focus:ring-2 focus:ring-[#1c00d3]/60"
						/>
					</FormField>

					<FormField label="Phone Number" name="phone">
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="+91"
							className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-inner outline-none transition focus:border-[#7aa2ff] focus:ring-2 focus:ring-[#1c00d3]/60"
						/>
					</FormField>

					<FormField label="Message" name="message">
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={5}
							placeholder="Tell us what you're building or need help with..."
							className="w-full resize-y rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white shadow-inner outline-none transition placeholder:text-white/50 focus:border-[#7aa2ff] focus:ring-2 focus:ring-[#1c00d3]/60"
						/>
					</FormField>

					<motion.button
						type="submit"
						whileHover={{ y: -2 }}
						whileTap={{ y: 0 }}
						className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#1c00d3] px-6 py-3 font-semibold text-white shadow-[0_15px_35px_-10px_rgba(28,0,211,0.7)] transition hover:bg-[#000fb5]">
						{/* shine */}
						<span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:translate-x-full group-hover:opacity-100" />
						Submit Enquiry
					</motion.button>

					{/* small trust note */}
					<p className="text-center text-xs text-white/60">
						By submitting, you agree to be contacted about your inquiry.
					</p>
				</motion.form>
			</motion.div>
		</section>
	);
}

function FormField({
	label,
	name,
	required,
	children,
}: {
	label: string;
	name: string;
	required?: boolean;
	children: React.ReactNode;
}) {
	return (
		<div className="group">
			<label htmlFor={name} className="mb-1 block text-sm font-medium">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			{children}
			{/* subtle glow underline */}
			<div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
		</div>
	);
}
