import React from "react";
import Image from "next/image";

const certifications = [
	{
		title: "Fullstack Developer Certification",
		issuer: "100xDevs",
		date: "2024",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1738992386/100xdevs.png",
	},
	{
		title: "Frontend Website Winner",
		issuer: "Entri Elevate",
		date: "2024",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1738992852/entrielevate.jpg", // Replace with actual logo
	},
];

const Certifications: React.FC = () => {
	return (
		<div className="bg-gray-100 py-16">
			<div className="mx-auto px-6 lg:w-3/4">
				<h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
					Certifications
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{certifications.map((cert, index) => (
						<div
							key={index + "cert"}
							className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
							<Image
								src={cert.image}
								alt={cert.title}
								width={400}
								height={400}
								className="w-fit h-64 mb-4"
							/>
							<h3 className="text-lg font-semibold text-gray-900">
								{cert.title}
							</h3>
							<p className="text-sm text-gray-600">{cert.issuer}</p>
							<p className="mt-2 text-gray-700 text-sm">{cert.date}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Certifications;
