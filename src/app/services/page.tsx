export default function Services() {
	return (
		<div className="max-w-6xl mx-auto py-20 px-6">
			<h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="bg-white shadow-md p-6 rounded-lg">
					<h3 className="text-2xl font-bold">Web Development</h3>
					<p className="text-gray-600">
						Custom websites built with Next.js, React, and Tailwind CSS.
					</p>
				</div>
				<div className="bg-white shadow-md p-6 rounded-lg">
					<h3 className="text-2xl font-bold">UI/UX Design</h3>
					<p className="text-gray-600">
						Intuitive and user-friendly design for seamless experiences.
					</p>
				</div>
				<div className="bg-white shadow-md p-6 rounded-lg">
					<h3 className="text-2xl font-bold">SEO Optimization</h3>
					<p className="text-gray-600">
						Improve search engine rankings and website performance.
					</p>
				</div>
			</div>
		</div>
	);
}
