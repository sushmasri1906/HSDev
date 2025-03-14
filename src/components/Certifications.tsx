"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
			"https://res.cloudinary.com/dq12dx327/image/upload/v1738992852/entrielevate.jpg",
	},
];

const Certifications: React.FC = () => {
	return (
		<section className="py-16 bg-[#0f0f0f] text-white">
			<div className="mx-auto px-6 lg:w-3/4">
				{/* Title with Animation */}
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl font-bold text-white mb-10 text-center">
					Certifications
				</motion.h2>

				{/* Certifications Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					{certifications.map((cert, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							whileHover={{ scale: 1.05 }}
							className="relative flex flex-col items-center text-center py-6 px-4 rounded-lg border-2 border-transparent transition-all duration-300"
							style={{
								borderImage: "linear-gradient(135deg, #4B0082, #8A2BE2) 1", // Border with gradient
							}}>
							{/* Image */}
							<Image
								src={cert.image}
								alt={cert.title}
								width={400}
								height={250}
								className="rounded-lg"
							/>
							<h3 className="text-lg font-semibold text-white mt-4">
								{cert.title}
							</h3>
							<p className="text-sm text-gray-400">{cert.issuer}</p>
							<p className="mt-2 text-gray-300 text-sm">{cert.date}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certifications;
