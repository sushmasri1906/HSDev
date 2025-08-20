"use client";

import { useState } from "react";

export default function MeetingRequestForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		datetime: "",
		message: "",
	});
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSuccess(false);
		setIsError(false);
		setIsSubmitting(true);

		try {
			const res = await fetch("/api/request-meeting", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				setIsSuccess(true);
				setFormData({
					name: "",
					email: "",
					datetime: "",
					message: "",
				});
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

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
			<h2 className="text-2xl font-bold text-gray-800 mb-4">
				Request a Meeting
			</h2>

			<input
				type="text"
				name="name"
				placeholder="Your Name"
				className="w-full border p-2 rounded"
				value={formData.name}
				onChange={handleChange}
				required
			/>

			<input
				type="email"
				name="email"
				placeholder="Your Email"
				className="w-full border p-2 rounded"
				value={formData.email}
				onChange={handleChange}
				required
			/>

			<input
				type="datetime-local"
				name="datetime"
				className="w-full border p-2 rounded"
				value={formData.datetime}
				onChange={handleChange}
				required
			/>

			<textarea
				name="message"
				placeholder="Project or Meeting Details"
				className="w-full border p-2 rounded"
				value={formData.message}
				onChange={handleChange}
				required
			/>

			<button
				type="submit"
				disabled={isSubmitting}
				className={`w-full text-white py-2 px-4 rounded ${
					isSubmitting
						? "bg-blue-400 cursor-not-allowed"
						: "bg-blue-600 hover:bg-blue-700"
				}`}>
				{isSubmitting ? "Submitting..." : "Send Request"}
			</button>

			{isSuccess && (
				<p className="text-green-600 mt-2">
					Meeting request sent successfully!
				</p>
			)}
			{isError && (
				<p className="text-red-600 mt-2">
					Something went wrong. Please try again.
				</p>
			)}
		</form>
	);
}
