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
			{ name: "HTML", icon: <SiHtml5 size={40} className="text-orange-600" /> },
			{ name: "CSS", icon: <SiCss3 size={40} className="text-blue-600" /> },
			{
				name: "React.js",
				icon: <FaReact size={40} className="text-blue-500" />,
			},
			{
				name: "Next.js",
				icon: <SiNextdotjs size={40} className="text-black" />,
			},
			{
				name: "Tailwind CSS",
				icon: <SiTailwindcss size={40} className="text-teal-500" />,
			},
			{
				name: "Bootstrap",
				icon: <SiBootstrap size={40} className="text-purple-600" />,
			},
			{
				name: "Framer Motion",
				icon: <SiFramer size={40} className="text-pink-500" />,
			},
			{
				name: "Recoil",
				icon: <SiRecoil size={40} className="text-blue-400" />,
			},
		],
	},
	{
		category: "Backend",
		items: [
			{
				name: "Node.js",
				icon: <FaNodeJs size={40} className="text-green-500" />,
			},
			{
				name: "Express.js",
				icon: <SiExpress size={40} className="text-gray-800" />,
			},
			{
				name: "MongoDB",
				icon: <SiMongodb size={40} className="text-green-600" />,
			},
			{ name: "Zod", icon: <SiZod size={40} className="text-blue-600" /> },
		],
	},
	{
		category: "Tools & Languages",
		items: [
			{ name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
			{
				name: "Postman",
				icon: <SiPostman size={40} className="text-orange-500" />,
			},
			{
				name: "JavaScript",
				icon: <SiJavascript size={40} className="text-yellow-500" />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript size={40} className="text-blue-500" />,
			},
		],
	},
];

const TechStack: React.FC = () => {
	return (
		<div className="bg-gray-100">
			<div className="py-20 mx-auto px-6 lg:w-3/4 lg:mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
					Techstack We Use
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-content-center">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category} className="col-span-1">
							<h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
								{skillGroup.category}
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 mb-11 ">
								{skillGroup.items.map((skill) => (
									<div
										key={skill.name}
										className="w-24 h-24 flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
										{skill.icon}
										<span className="mt-2 text-sm font-semibold text-gray-800 text-center">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechStack;
