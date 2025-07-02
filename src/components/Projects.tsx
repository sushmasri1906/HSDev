"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import InViewUp from "./animations/InViewUp";

const projects = [
	{
		title: "BizNetwork Timer",
		category: "Productivity",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1747998268/Screenshot_2025-05-23_163334_vua8vh.png",
		link: "https://www.biztimer.site/",
		description:
			"A clean and responsive timer app built for business networking sessions, featuring preset durations and a streamlined interface.",
		technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
	},

	{
		title: "Jaaaga Coworking Space",
		category: "Coworking",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1741339318/Screenshot_2025-03-07_145105_p5nwh5.png",
		link: "https://www.jaaaga.com/",
		description:
			"A responsive frontend for a coworking space platform featuring modern UI, workspace listings, and an intuitive design.",
		technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Typescript"],
		github: "",
	},
	{
		title: "WEN - Women Entrepreneurs Network",
		category: "Community Platform",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1744710608/Screenshot_2025-04-15_151906_w836vq.png",
		link: "https://www.bizwen.site/",
		description:
			"A vibrant and inclusive platform built to empower women entrepreneurs through networking, mentorship, knowledge sharing, and global visibility.",

		technologies: [
			"Next.js",
			"Tailwind CSS",
			"React Icons",
			"Framer Motion",
			"Responsive Design",
		],
	},
	{
		title: "Genie Bucks Money Management",
		category: "Finance",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011534/Screenshot_2025-02-08_155843_dytpjs.png",
		link: "https://geniebucks.vercel.app",
		description:
			"A personal finance and money management platform with smart analytics.",
		github: "https://github.com/Harunath/geniebucks",
		technologies: [
			"Next.js 15",
			"PostgreSQL",
			"Prisma ORM",
			"Tailwind CSS",
			"Framer Motion",
			"Google Gemini AI API",
			"Gmail Authentication",
		],
	},
	{
		title: "Biz-Network",
		description:
			"A powerful business-to-business networking platform enabling seamless connections and collaborations among professionals and organizations.",
		technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Recoil"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742481482/Screenshot_2025-03-20_200747_g8lw3z.png",
		link: "https://www.bizn.in/",
	},
	{
		title: "Data Viewer App",
		category: "PWA / Data Visualization",
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1742408726/Screenshot_2025-03-19_235357_xh88d6.png",
		link: "https://data-viewer-app66.vercel.app", // Replace with actual URL if available
		description:
			"A MERN stack desktop PWA for secure and efficient data visualization with advanced analytics.",
		technologies: [
			"MERN",
			"Prisma",
			"PostgreSQL",
			"Recharts",
			"AG Charts",
			"Turbo Repo",
		],
		github: "https://github.com/Harunath/GS060699_Harunath_Eskuri",
	},
	{
		title: "HexVibe (Instagram Clone)",
		category: "Full-Stack",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011027/Screenshot_2025-02-06_222503_fykdmf.png",
		link: "https://hexvibe.vercel.app/",
		description:
			"A social media platform inspired by Instagram, built using MERN stack & Firebase.",
		technologies: [
			"Next.js",
			"Express.js",
			"Node.js",
			"Typescript",
			"Cloudinary",
			"Mongodb",
		],
		github: "https://github.com/your-repo/hexvibe",
	},
	{
		title: "RolanPlast Business Website",
		category: "Business",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011241/Screenshot_2024-09-04_132312_lgiuch.png",
		link: "https://rolanplast.netlify.app/",
		description:
			"A sleek and professional business website for a manufacturing company.",
		technologies: [
			"React.js",
			"typescript",
			"Tailwind CSS",
			"Framer Motion",
			"Cloudinary",
		],
		github: "",
	},
	{
		title: "Independence Day Theme Website",
		category: "Patriotic",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011796/independenceDay_jsks4a.png",
		link: "https://independence78.netlify.app/",
		description:
			"A tribute website celebrating India's independence, featuring historical moments, patriotic stories, and cultural insights.",
		github: "",
		technologies: ["React.js", "tailwind CSS", "Framer Motion", "typescript"],
	},

	{
		title: "E-commerce Store",
		category: "E-commerce",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011583/Screenshot_2024-08-28_143643_sygpuc.png",
		link: "https://hexaclothes.netlify.app/",
		description:
			"An online store for fashion and clothing, featuring a wide range of products and categories.",
		github: "",
		technologies: ["React.js", "taillwind CSS", "Framer Motion", "typescript"],
	},
];

const Projects = () => {
	return (
		<section className="bg-[#0d0d0d] text-white py-16 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<InViewUp>
					<h2 className="text-4xl font-extrabold  bg-clip-text mb-4">
						Projects
					</h2>
				</InViewUp>
				<p className="text-gray-400 text-lg mb-12">
					I have worked on a wide range of projects, focusing on frontend and
					backend development. Here are some highlights.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{projects?.map((project, index) => (
						<motion.div
							key={index}
							className="relative border border-purple-600 rounded-2xl flex flex-col"
							whileHover={{
								filter: "drop-shadow(0px 0px 0px #c084fc)",
								transition: { duration: 0.3 },
							}}>
							<InViewUp>
								<Link href={project.link ?? "#"}>
									<div className="overflow-hidden">
										<Image
											src={project.image}
											alt={project.title}
											width={500}
											height={400}
											className="w-full h-[173px] rounded-t-2xl p-1 object-cover"
										/>
									</div>
								</Link>
								<div className="mt-4 flex items-center space-x-2 p-4">
									<Link
										href={project.link ?? "#"}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#A855F7] text-sm font-semibold flex items-center gap-1 hover:underline">
										<FaExternalLinkAlt />
									</Link>
									{project.github && (
										<Link
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-100 hover:text-white text-sm flex items-center gap-1">
											<FaGithub />
										</Link>
									)}
								</div>

								<div className="p-2">
									<motion.h3
										animate={{
											filter: "drop-shadow(2px 4px 1px #1129ff)",
										}}
										className="text-xl text-center font-semibold mt-4">
										{project.title}
									</motion.h3>
									<p className="text-gray-400 text-sm mt-2">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mt-4">
										{project.technologies?.map((tech, index) => (
											<span
												key={index}
												className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
												{tech}
											</span>
										))}
									</div>
								</div>
							</InViewUp>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
