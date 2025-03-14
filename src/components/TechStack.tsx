"use client";
import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
	SiNextdotjs,
	SiTypescript,
	SiMongodb,
	SiExpress,
	SiTailwindcss,
	SiFramer,
	SiRecoil,
	SiBootstrap,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiPostman,
	SiZod,
} from "react-icons/si";

const skills = [
	{
		category: "Frontend",
		items: [
			{ name: "HTML", icon: <SiHtml5 size={30} className="text-orange-500" /> },
			{ name: "CSS", icon: <SiCss3 size={30} className="text-blue-500" /> },
			{
				name: "React.js",
				icon: <FaReact size={30} className="text-cyan-400" />,
			},
			{
				name: "Next.js",
				icon: <SiNextdotjs size={30} className="text-gray-300" />,
			},
			{
				name: "Tailwind CSS",
				icon: <SiTailwindcss size={30} className="text-teal-400" />,
			},
			{
				name: "Bootstrap",
				icon: <SiBootstrap size={30} className="text-purple-500" />,
			},
			{
				name: "Framer Motion",
				icon: <SiFramer size={30} className="text-pink-400" />,
			},
			{
				name: "Recoil",
				icon: <SiRecoil size={30} className="text-blue-400" />,
			},
		],
	},
	{
		category: "Backend",
		items: [
			{
				name: "Node.js",
				icon: <FaNodeJs size={30} className="text-green-400" />,
			},
			{
				name: "Express.js",
				icon: <SiExpress size={30} className="text-gray-300" />,
			},
			{
				name: "MongoDB",
				icon: <SiMongodb size={30} className="text-green-500" />,
			},
			{ name: "Zod", icon: <SiZod size={30} className="text-blue-500" /> },
		],
	},
	{
		category: "Tools & Languages",
		items: [
			{ name: "Git", icon: <FaGitAlt size={30} className="text-orange-500" /> },
			{
				name: "Postman",
				icon: <SiPostman size={30} className="text-orange-400" />,
			},
			{
				name: "JavaScript",
				icon: <SiJavascript size={30} className="text-yellow-400" />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript size={30} className="text-blue-400" />,
			},
		],
	},
];

const TechStack: React.FC = () => {
	return (
		<section className="bg-[#0f0f0f] py-16 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					Tech Stack We Use 🚀
				</h2>
				<p className="text-md sm:text-lg text-white mt-4">
					Our tech expertise to build powerful and modern web applications.
				</p>

				{/* Tech Grid */}
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{skills.map((skillGroup) => (
						<div
							key={skillGroup.category}
							className="relative p-6  border-2 border-transparent animate-border-gradient">
							{/* Animated Outer Border */}
							<div className="absolute inset-0  pointer-events-none animate-border-gradient"></div>

							<h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4 relative z-10">
								{skillGroup.category}
							</h3>

							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 content-center relative z-10">
								{skillGroup.items.map((skill) => (
									<div
										key={skill.name}
										className="h-20 sm:h-24 flex flex-col items-center justify-center p-3 sm:p-4 shadow-2xl border border-gray-50  transition-all duration-300 hover:scale-105">
										{skill.icon}
										<span className="mt-2 text-xs sm:text-sm font-semibold text-gray-300 text-center ">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Gradient Border Animation */}
			<style jsx>{`
				@keyframes borderAnimation {
					0% {
						border-color: #4b0082;
					}
					50% {
						border-color: #8a2be2;
					}
					100% {
						border-color: #4b0082;
					}
				}
				.animate-border-gradient {
					animation: borderAnimation 3s infinite alternate ease-in-out;
				}
			`}</style>
		</section>
	);
};

export default TechStack;
