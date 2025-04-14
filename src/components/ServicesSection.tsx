"use client";
import {
	FaCode,
	FaPaintBrush,
	FaShoppingCart,
	FaBriefcase,
	FaUserTie,
	FaCreditCard,
	FaServer,
	FaComments,
	FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
	{
		title: "Frontend Development",
		description:
			"We build stunning, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS.",
		icon: <FaCode className="text-blue-400 text-5xl" />,
	},
	{
		title: "Backend Development",
		description:
			"We create powerful and scalable server-side applications with Node.js, Express, and MongoDB.",
		icon: <FaServer className="text-green-400 text-5xl" />,
	},
	{
		title: "E-commerce Websites",
		description:
			"We develop fast, secure, and feature-rich e-commerce platforms with payment integration and user-friendly UI.",
		icon: <FaShoppingCart className="text-purple-400 text-5xl" />,
	},
	{
		title: "Business Websites",
		description:
			"Professional and responsive websites to showcase your business and services online effectively.",
		icon: <FaBriefcase className="text-orange-400 text-5xl" />,
	},
	{
		title: "Portfolio Websites",
		description:
			"Showcase your work with a beautifully designed and responsive portfolio website tailored to your style.",
		icon: <FaUserTie className="text-red-400 text-5xl" />,
	},
	{
		title: "Logos & Branding",
		description:
			"Custom logo designs and branding to create a unique and recognizable identity for your business.",
		icon: <FaPaintBrush className="text-pink-400 text-5xl" />,
	},
	{
		title: "Payment Gateway Integration",
		description:
			"Secure and seamless payment gateway integration for online transactions and e-commerce platforms.",
		icon: <FaCreditCard className="text-yellow-400 text-5xl" />,
	},
	{
		title: "Admin Content Management",
		description:
			"Custom admin panels to easily manage content, images, blogs, and more using secure authentication and databases.",
		icon: <FaUserTie className="text-cyan-400 text-5xl" />, // reused icon for style consistency
	},
	{
		title: "Chat Applications",
		description:
			"Real-time chat solutions with WebSocket, Socket.io, and Firebase for seamless communication experiences.",
		icon: <FaComments className="text-emerald-400 text-5xl" />,
	},
	{
		title: "Booking Applications",
		description:
			"Powerful booking systems for events, appointments, or coworking spaces with calendar integrations.",
		icon: <FaCalendarAlt className="text-indigo-400 text-5xl" />,
	},
];

const ServicesSection = () => {
	return (
		<section className="bg-[#0f0f0f] py-16 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-3xl sm:text-4xl font-bold text-white">
					Services We Offer 🚀
				</motion.h2>
				<p className="text-md sm:text-lg text-white mt-4">
					We provide expert development services to bring your ideas to life
					with modern and scalable solutions.
				</p>

				{/* Services Grid */}
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="relative p-6 ">
							{/* Animated Outer Border */}
							<div className="absolute inset-0  border-2 pointer-events-none animate-border-gradient"></div>

							<div className="flex justify-center mb-4">{service.icon}</div>
							<h3 className="text-lg sm:text-xl font-semibold text-white">
								{service.title}
							</h3>
							<p className="text-gray-300 mt-2 text-sm sm:text-base">
								{service.description}
							</p>
						</motion.div>
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

export default ServicesSection;
