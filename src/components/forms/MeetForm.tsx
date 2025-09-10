"use client";

import { useState } from "react";

export default function MeetingRequestForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isOpen, setIsOpen] = useState(true); // open by default

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setIsSuccess(false);
		setIsError(false);

		try {
			const res = await fetch("/api/request-meeting", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				setIsSuccess(true);
				setFormData({ name: "", email: "", message: "" });
			} else {
				setIsError(true);
			}
		} catch (err) {
			console.error(err);
			setIsError(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	// Close helper — also clears any old status so nothing lingers
	const closeModal = () => {
		setIsSuccess(false);
		setIsError(false);
		setIsOpen(false);
	};

	if (!isOpen) return null;

	return (
		// Backdrop covers screen; click anywhere outside the card closes
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
			onClick={closeModal}>
			{/* Card stops the click, so interacting inside won't close it */}
			<div
				className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
				onClick={(e) => e.stopPropagation()}
				role="dialog"
				aria-modal="true">
				<header className="mb-6 text-center">
					<h2 className="text-2xl font-semibold text-white">
						Request a Meeting
					</h2>
					<p className="mt-1 text-sm text-slate-300">
						Fill out the details and we’ll get back to you.
					</p>
				</header>

				<form onSubmit={handleSubmit} className="space-y-4">
					<Field label="Your Name" htmlFor="name">
						<input
							id="name"
							type="text"
							name="name"
							placeholder="name"
							className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/30"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</Field>

					<Field label="Your Email" htmlFor="email">
						<input
							id="email"
							type="email"
							name="email"
							placeholder="you@example.com"
							className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/30"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</Field>

					<Field label="Project or Meeting Details" htmlFor="message">
						<textarea
							id="message"
							name="message"
							placeholder="Tell us about your project…"
							className="min-h-[120px] w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/30"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</Field>

					<button
						type="submit"
						disabled={isSubmitting}
						className={`relative mt-2 w-full rounded-xl px-4 py-2.5 font-medium text-white shadow-lg transition focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
							isSubmitting
								? "cursor-not-allowed bg-cyan-600/70"
								: "bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 hover:opacity-95"
						}`}>
						{isSubmitting ? "Submitting…" : "Send Request"}
					</button>

					{isSuccess && (
						<p className="mt-2 text-center text-sm text-emerald-400">
							Meeting request sent successfully!
						</p>
					)}
					{isError && (
						<p className="mt-2 text-center text-sm text-rose-400">
							Something went wrong. Please try again.
						</p>
					)}
				</form>
			</div>
		</div>
	);
}

function Field({
	label,
	htmlFor,
	children,
}: {
	label: string;
	htmlFor: string;
	children: React.ReactNode;
}) {
	return (
		<label className="block" htmlFor={htmlFor}>
			<span className="mb-1.5 block text-sm font-medium text-slate-200">
				{label}
			</span>
			{children}
		</label>
	);
}
