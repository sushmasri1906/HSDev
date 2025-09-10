"use client";

import Image from "next/image";

const teamMembers = [
	{
		name: "Harunath Eskuri",
		title: "Founder & Full-Stack Architect",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752476517/smiling_man_in_business_suit_at_laptop_GettyIma.original_exbbvb.jpg", // 🔁 Replace with your Cloudinary URL
		description:
			"A visionary founder and tech leader behind HSDev. Harunath specializes in scalable architecture, custom platforms, and seamless web experiences that empower businesses.",
	},
	{
		name: "Sushmasri Kamera",
		title: "Co-Founder – Product & Delivery",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752476575/business-8458541_1280_buzoye.jpg", // 🔁 Replace with your Cloudinary URL
		description:
			"With a sharp focus on execution and client success, Sushmasri ensures every project delivers measurable impact. She leads product strategy and delivery excellence at HSDev.",
	},
];

export default function CoreTeam() {
	return (
		<section className="bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-20 py-28">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">
					Our Core <span className="text-[#1c00d3]">Team</span>
				</h2>

				<div className="grid gap-20 lg:grid-cols-2">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="grid sm:grid-cols-2 gap-6 items-center rounded-2xl bg-white/5 backdrop-blur-xl p-6 sm:p-10 border border-white/10 hover:border-[#1c00d3]/40 transition duration-300">
							<div className="relative w-full h-60 sm:h-72 rounded-xl overflow-hidden shadow-lg">
								<Image
									src={member.image}
									alt={member.name}
									fill
									className="object-cover"
								/>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-2">{member.name}</h3>
								<p className="text-[#1c00d3] font-medium mb-4">
									{member.title}
								</p>
								<p className="text-gray-300 text-sm leading-relaxed">
									{member.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
