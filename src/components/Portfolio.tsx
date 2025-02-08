// import React from "react";
// import { motion ,} from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// const projects = [
// 	{
// 		title: "HexVibe (Instagram Clone)",
// 		category: "Full-Stack",
// 		image: "/hero.webpttps://hexvibe.com",
// 		description:
// 			"A social media platform inspired by Instagram, built using MERN stack & Firebase.",
// 	},
// 	{
// 		title: "ElevateCreditScore",
// 		category: "Business",
// 		image: "/hero.webpscore.png",
// 		link: "https://elevatecreditscore.com",
// 		description:
// 			"A powerful credit score management platform helping users track and improve scores.",
// 	},
// 	{
// 		title: "RolanPlast Business Website",
// 		category: "Business",
// 		image: "/hero.webpg",
// 		link: "https://rolanplast.com",
// 		description:
// 			"A sleek and professional business website for a manufacturing company.",
// 	},
// 	{
// 		title: "RK Journeys Travel Website",
// 		category: "Travel",
// 		image: "/hero.webpg",
// 		link: "https://rkjourneys.com",
// 		description:
// 			"A travel booking website offering exclusive destinations and trip management.",
// 	},
// 	{
// 		title: "Photography Portfolio",
// 		category: "Creative",
// 		image: "/hero.webpng",
// 		link: "https://karthiknanie.netlify.app/",
// 		description:
// 			"A visually stunning photography portfolio with high-quality images and galleries.",
// 	},
// 	{
// 		title: "Paytm Clone",
// 		category: "Full-Stack",
// 		image: "/hero.webp",
// 		link: "https://simpleupi.vercel.app/",
// 		description:
// 			"A fintech app similar to Paytm, featuring payments, wallet, and transactions.",
// 	},
// 	{
// 		title: "Genie Bucks Money Management",
// 		category: "Finance",
// 		image: "/hero.webp",
// 		link: "https://geniebucks.vercel.app",
// 		description:
// 			"A personal finance and money management platform with smart analytics.",
// 	},
// 	{
// 		title: "E-commerce Store",
// 		category: "E-commerce",
// 		image: "/hero.webp",
// 		link: "https://hexaclothes.netlify.app/",
// 		description:
// 			"A fully functional e-commerce store with secure payments and dynamic product pages.",
// 	},
// ];

// const Portfolio = () => {
// 	return (
// 		<div className="bg-gradient-to-b from-orange-500 to-white via-green-500 min-h-screen py-16 px-6">
// 			<div className="max-w-6xl mx-auto">
// 				{/* Hero Section */}
// 				<motion.div
// 					className="text-center"
// 					initial={{ opacity: 0, y: -50 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 1 }}>
// 					<h1 className="text-6xl font-extrabold text-white drop-shadow-md">
// 						🇮🇳 Independence Day Portfolio 🇮🇳
// 					</h1>
// 					<p className="text-xl text-gray-200 mt-4">
// 						Celebrating Our Projects & Achievements
// 					</p>
// 				</motion.div>

// 				{/* Image with Animation */}
// 				<motion.div
// 					className="flex justify-center mt-10"
// 					initial={{ opacity: 0, scale: 0.8 }}
// 					animate={{ opacity: 1, scale: 1 }}
// 					transition={{ duration: 1.2 }}>
// 					<Image
// 						src="/hero.webp" // Make sure this file exists in the public folder
// 						alt="Waving Indian Flag"
// 						width={384}
// 						height={256}
// 						className="rounded-lg shadow-lg"
// 					/>
// 				</motion.div>

// 				{/* Projects Section */}
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
// 					{projects.map((project, index) => (
// 						<motion.div
// 							key={index+"portfolio"}
// 							className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg p-6 hover:scale-105 transition-transform cursor-pointer"
// 							initial={{ opacity: 0, y: 50 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 1, delay: index * 0.2 }}>
// 							<Link
// 								href={project.link ?? "#"}
// 								target="_blank"
// 								rel="noopener noreferrer">
// 								<Image
// 									src={project.image ?? "/hero.webp"}
// 									alt={project.title}
// 									width={400}
// 									height={160}
// 									className="w-full h-40 object-cover rounded-lg"
// 								/>
// 								<h2 className="text-2xl font-semibold text-white mt-4">
// 									{project.title}
// 								</h2>
// 								<p className="text-gray-200 mt-2">{project.description}</p>
// 								<span className="inline-block mt-4 px-4 py-2 bg-white bg-opacity-20 rounded text-sm text-gray-200">
// 									{project.category}
// 								</span>
// 							</Link>
// 						</motion.div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Portfolio;
import React from "react";

function Portfolio() {
	return <div>Portfolio</div>;
}

export default Portfolio;
