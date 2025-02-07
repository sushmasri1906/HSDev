"use client";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
	return (
		<section className="bg-gray-100 py-20">
			<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
				{/* Left Content */}
				<div className="md:w-1/2 text-center md:text-left">
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-4xl font-extrabold text-gray-900 leading-tight">
						We Craft Stunning Digital Experiences 🚀
					</motion.h2>

					{/* Typewriter Effect */}
					<motion.h3
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-2xl font-semibold text-blue-600 mt-2">
						<Typewriter
							words={[
								"MERN Stack Developers",
								"React Experts",
								"Next.js Specialists",
								"Full-Stack Engineers",
								"UI/UX Enthusiasts",
							]}
							loop={true}
							cursor
							cursorStyle="_"
							typeSpeed={80}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					</motion.h3>

					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mt-4 text-lg text-gray-700">
						Hey there! We're a team of passionate developers, turning ideas into
						sleek, functional, and scalable web applications. From front-end
						aesthetics to robust back-end solutions, we do it all!
					</motion.p>

					<div className="mt-6 flex space-x-4 justify-center md:justify-start">
						<Link
							href="/contact"
							className="bg-blue-600 text-white py-3 px-6 rounded-lg 
							hover:bg-blue-700 transition duration-300">
							Let's Work Together
						</Link>
						<Link
							href="/portfolio"
							className="bg-gray-800 text-white py-3 px-6 rounded-lg 
							hover:bg-gray-900 transition duration-300">
							View Portfolio
						</Link>
					</div>

					{/* Tech Stack Icons */}
					<div className="mt-6 flex flex-wrap justify-center md:justify-start space-x-4">
						<FaReact className="text-blue-500 text-4xl" title="React.js" />
						<SiNextdotjs className="text-black text-4xl" title="Next.js" />
						<FaNodeJs className="text-green-600 text-4xl" title="Node.js" />
						<SiMongodb className="text-green-500 text-4xl" title="MongoDB" />
						<SiExpress className="text-gray-800 text-4xl" title="Express.js" />
					</div>
				</div>

				{/* Right Content - Profile Image */}
				<div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}>
						<Image
							src="/hero.webp" // Replace with actual image paths
							alt="Developer"
							width={400}
							height={400}
							className="rounded-full border-3 border-white shadow-lg"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
