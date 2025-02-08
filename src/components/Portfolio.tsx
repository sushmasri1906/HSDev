import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
	{
		title: "HexVibe (Instagram Clone)",
		category: "Full-Stack",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011027/Screenshot_2025-02-06_222503_fykdmf.png",
		link: "https://hexvibe.vercel.app/",
		description:
			"A social media platform inspired by Instagram, built using MERN stack & Firebase.",
	},
	{
		title: "ElevateCreditScore",
		category: "Business",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011136/Screenshot_2025-02-08_160331_xq2m6k.png",
		link: "https://elevatecreditscore.com",
		description:
			"A powerful credit score management platform helping users track and improve scores.",
	},
	{
		title: "RolanPlast Business Website",
		category: "Business",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011241/Screenshot_2024-09-04_132312_lgiuch.png",
		link: "https://rolanplast.netlify.app/",
		description:
			"A sleek and professional business website for a manufacturing company.",
	},
	{
		title: "RK Journeys Travel Website",
		category: "Travel",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011325/Screenshot_2025-02-08_160055_nj962g.png",
		link: "https://rkjourneys.in/",
		description:
			"A travel booking website offering exclusive destinations and trip management.",
	},
	{
		title: "Independence Day Theme Website",
		category: "Patriotic",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011796/independenceDay_jsks4a.png",
		link: "https://independence78.netlify.app/",
		description:
			"A tribute website celebrating India's independence, featuring historical moments, patriotic stories, and cultural insights.",
	},
	{
		title: "Photography Portfolio",
		category: "Creative",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011400/Screenshot_2025-02-08_160246_kujofl.png",
		link: "https://karthiknanie.netlify.app/",
		description:
			"A visually stunning photography portfolio with high-quality images and galleries.",
	},
	{
		title: "Paytm Clone",
		category: "Full-Stack",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011463/Screenshot_2025-02-08_155933_gj5wbc.png",
		link: "https://simpleupi.vercel.app/",
		description:
			"A fintech app similar to Paytm, featuring payments, wallet, and transactions.",
	},
	{
		title: "Genie Bucks Money Management",
		category: "Finance",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011534/Screenshot_2025-02-08_155843_dytpjs.png",
		link: "https://geniebucks.vercel.app",
		description:
			"A personal finance and money management platform with smart analytics.",
	},
	{
		title: "E-commerce Store",
		category: "E-commerce",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1739011583/Screenshot_2024-08-28_143643_sygpuc.png",
		link: "https://hexaclothes.netlify.app/",
		description:
			"A fully functional e-commerce store with secure payments and dynamic product pages.",
	},
];

const Portfolio = () => {
	return (
		<div className="bg-gray-100 min-h-screen py-16 px-6">
			<div className="max-w-6xl text-4xl font-extrabold mx-auto text-center">
				Celebrating Our Projects & Achievements
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
				{projects.map((project, index) => (
					<div
						key={index + "portfolio"}
						className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg p-6 hover:scale-105 transition-transform cursor-pointer">
						<Link
							href={project.link ?? "#"}
							target="_blank"
							rel="noopener noreferrer">
							<Image
								src={project.image ?? "/hero.webp"}
								alt={project.title}
								width={400}
								height={160}
								className="w-full h-20 sm:h-40 object-cover rounded-lg"
							/>
							<h2 className="text-2xl font-semibold  mt-4">{project.title}</h2>
							<p className=" mt-2">{project.description}</p>
							<span className="inline-block mt-4 px-4 py-2 bg-white bg-opacity-20 rounded text-sm ">
								{project.category}
							</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
