export default function Contact() {
	return (
		<div className="max-w-6xl mx-auto py-20 px-6">
			<h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
			<form className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg">
				<label className="block mb-4">
					<span className="text-gray-700">Your Name</span>
					<input
						type="text"
						className="w-full mt-2 p-2 border rounded-md"
						placeholder="John Doe"
					/>
				</label>
				<label className="block mb-4">
					<span className="text-gray-700">Email</span>
					<input
						type="email"
						className="w-full mt-2 p-2 border rounded-md"
						placeholder="john@example.com"
					/>
				</label>
				<label className="block mb-4">
					<span className="text-gray-700">Message</span>
					<textarea
						className="w-full mt-2 p-2 border rounded-md"
						rows={4}
						placeholder="Your message..."></textarea>
				</label>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg">
					Send Message
				</button>
			</form>
		</div>
	);
}
