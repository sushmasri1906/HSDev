"use client";

import { FaReact, FaNodeJs } from "react-icons/fa";
import coder from "@/../public/coder-1.png";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import InViewUp from "../animations/InViewUp";

export default function HeroSection() {
	return (
		<section className="relative lg:max-h-screen min-h-fit md:py-16 sm:px-8 lg:px-4">
			<InViewUp>
				<div className=" mx-auto flex flex-col lg:flex-row items-center px-6 justify-between w-full">
					{/* Left Content */}
					<div className="text-center lg:w-3/5">
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="text-4xl font-bold text-[rgb(138,43,226)] leading-tight">
							We Craft Stunning Digital Experiences 🚀
						</motion.h2>
						<motion.h3
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-2xl font-semibold text-[#8A2BE2] mt-2">
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
							className="mt-4 text-lg text-gray-300">
							Hey there! We&apos;re a team of passionate developers, turning
							ideas into sleek, functional, and scalable web applications. From
							front-end aesthetics to robust back-end solutions, we do it all!
						</motion.p>
						<div className="mt-6 flex space-x-4 justify-center">
							<Link
								href="/contact"
								className="bg-[#8A2BE2] text-white py-3 px-6 rounded-lg 
							hover:bg-[#4B0082] transition duration-300">
								Let&apos;s Work Together
							</Link>
							<Link
								href="/portfolio"
								className="bg-gray-700 text-white py-3 px-6 rounded-lg 
							hover:bg-gray-600 transition duration-300">
								View Portfolio
							</Link>
						</div>
						{/* Tech Stack Icons */}
						<div className="mt-6 flex flex-wrap justify-center space-x-4">
							<FaReact className="text-[#61dafb] text-4xl" title="React.js" />
							<SiNextdotjs className="text-white text-4xl" title="Next.js" />
							<FaNodeJs className="text-green-600 text-4xl" title="Node.js" />
							<SiMongodb className="text-green-500 text-4xl" title="MongoDB" />
							<SiExpress
								className="text-gray-500 text-4xl"
								title="Express.js"
							/>
						</div>
					</div>

					{/* Right Content - Profile Image with Animated Border */}
					<div className="h-full w-full mt-8 lg:mt-0 flex flex-1 justify-center items-center">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="relative w-full max-w-80">
							<Image
								src={coder}
								alt="Developer"
								className="bg-cover h-auto w-full rounded-full"
								height={320}
								width={320}
							/>
						</motion.div>
					</div>
				</div>
			</InViewUp>
			{/* Animated Border Keyframes */}
			<style jsx>{`
				@keyframes borderAnimation {
					0% {
						border-color: #8a2be2;
					}
					50% {
						border-color: #4b0082;
					}
					100% {
						border-color: #8a2be2;
					}
				}
				.animate-border-gradient {
					animation: borderAnimation 3s infinite alternate;
				}
			`}</style>
		</section>
	);
}
