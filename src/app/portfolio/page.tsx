export default function Portfolio() {
	return (
		<div className="max-w-6xl mx-auto py-20 px-6">
			<h2 className="text-4xl font-bold text-center mb-6">Our Work</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="bg-white shadow-md p-6 rounded-lg">
					<h3 className="text-2xl font-bold">Project 1</h3>
					<p className="text-gray-600">
						A description of the project with technologies used.
					</p>
				</div>
				<div className="bg-white shadow-md p-6 rounded-lg">
					<h3 className="text-2xl font-bold">Project 2</h3>
					<p className="text-gray-600">
						A description of the project with technologies used.
					</p>
				</div>
				<div className="bg-white shadow-md p-6 rounded-lg">
					<h3 className="text-2xl font-bold">Project 3</h3>
					<p className="text-gray-600">
						A description of the project with technologies used.
					</p>
				</div>
			</div>
		</div>
	);
}
