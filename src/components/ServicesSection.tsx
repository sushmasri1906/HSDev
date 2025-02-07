"use client";
import {
	FaCode,
	FaPaintBrush,
	FaShoppingCart,
	FaBriefcase,
	FaUserTie,
	FaCreditCard,
	FaServer,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
	{
		title: "Frontend Development",
		description:
			"We build stunning, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS.",
		icon: <FaCode className="text-blue-600 text-5xl" />,
	},
	{
		title: "Backend Development",
		description:
			"We create powerful and scalable server-side applications with Node.js, Express, and MongoDB.",
		icon: <FaServer className="text-green-600 text-5xl" />,
	},
	{
		title: "E-commerce Websites",
		description:
			"We develop fast, secure, and feature-rich e-commerce platforms with payment integration and user-friendly UI.",
		icon: <FaShoppingCart className="text-purple-600 text-5xl" />,
	},
	{
		title: "Business Websites",
		description:
			"Professional and responsive websites to showcase your business and services online effectively.",
		icon: <FaBriefcase className="text-orange-600 text-5xl" />,
	},
	{
		title: "Portfolio Websites",
		description:
			"Showcase your work with a beautifully designed and responsive portfolio website tailored to your style.",
		icon: <FaUserTie className="text-red-600 text-5xl" />,
	},
	{
		title: "Logos & Branding",
		description:
			"Custom logo designs and branding to create a unique and recognizable identity for your business.",
		icon: <FaPaintBrush className="text-pink-600 text-5xl" />,
	},
	{
		title: "Payment Gateway Integration",
		description:
			"Secure and seamless payment gateway integration for online transactions and e-commerce platforms.",
		icon: <FaCreditCard className="text-yellow-600 text-5xl" />,
	},
];

const ServicesSection = () => {
	return (
		<section className="bg-gray-100 py-20">
			<div className="max-w-6xl mx-auto px-6 text-center">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl font-extrabold text-gray-900">
					Services We Offer 🚀
				</motion.h2>
				<p className="text-lg text-gray-700 mt-4">
					We provide expert development services to bring your ideas to life
					with modern and scalable solutions.
				</p>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
							<div className="flex justify-center mb-4">{service.icon}</div>
							<h3 className="text-2xl font-semibold text-gray-900">
								{service.title}
							</h3>
							<p className="text-gray-600 mt-2">{service.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
