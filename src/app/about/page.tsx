export default function About() {
	return (
		<div className="max-w-6xl mx-auto py-20 px-6">
			<h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
			<p className="text-lg text-gray-600 text-center">
				We are a team of freelance web developers passionate about building
				modern, scalable, and user-friendly websites. With expertise in Next.js,
				React, and Tailwind CSS, we create seamless web experiences for
				businesses and individuals.
			</p>
			<div className="flex justify-center mt-8">
				<div className="bg-white shadow-md p-6 rounded-lg mx-4">
					<h3 className="text-2xl font-bold">Sushmasri Kamera</h3>
					<p className="text-gray-500">Frontend Developer</p>
				</div>
				<div className="bg-white shadow-md p-6 rounded-lg mx-4">
					<h3 className="text-2xl font-bold">Harunath Eskuri</h3>
					<p className="text-gray-500">Backend Developer</p>
				</div>
			</div>
		</div>
	);
}
