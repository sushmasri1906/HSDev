"use client";

import {
	FaCode,
	FaShoppingCart,
	FaBriefcase,
	FaUserTie,
	FaCreditCard,
	FaServer,
	FaComments,
	FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const services = [
	{
		title: "Frontend Development",
		description:
			"We build stunning, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS.",
		icon: <FaCode className="text-[#1c00d3] text-5xl" />,
	},
	{
		title: "Backend Development",
		description:
			"We create powerful and scalable server-side applications with Node.js, Express, and MongoDB.",
		icon: <FaServer className="text-[#000fb5] text-5xl" />,
	},
	{
		title: "E-commerce Websites",
		description:
			"We develop fast, secure, and feature-rich e-commerce platforms with payment integration and user-friendly UI.",
		icon: <FaShoppingCart className="text-[#1c00d3] text-5xl" />,
	},
	{
		title: "Business Websites",
		description:
			"Professional and responsive websites to showcase your business and services online effectively.",
		icon: <FaBriefcase className="text-[#000fb5] text-5xl" />,
	},
	{
		title: "Portfolio Websites",
		description:
			"Showcase your work with a beautifully designed and responsive portfolio website tailored to your style.",
		icon: <FaUserTie className="text-[#1c00d3] text-5xl" />,
	},
	{
		title: "Payment Gateway Integration",
		description:
			"Secure and seamless payment gateway integration for online transactions and e-commerce platforms.",
		icon: <FaCreditCard className="text-[#000fb5] text-5xl" />,
	},
	{
		title: "Content Management System (CMS)",
		description:
			"Custom admin panels to easily manage content, images, blogs, and more using secure authentication and databases.",
		icon: <FaUserTie className="text-[#1c00d3] text-5xl" />,
	},
	{
		title: "Chat Applications",
		description:
			"Real-time chat solutions with WebSocket, Socket.io, and Firebase for seamless communication experiences.",
		icon: <FaComments className="text-[#000fb5] text-5xl" />,
	},
	{
		title: "Booking Applications",
		description:
			"Powerful booking systems for events, appointments, or coworking spaces with calendar integrations.",
		icon: <FaCalendarAlt className="text-[#1c00d3] text-5xl" />,
	},
];

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
};

const ServicesSection = () => {
	return (
		<section className="bg-black py-20 px-4 mt-20">
			<div className="max-w-6xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl sm:text-4xl font-bold text-white">
					Our Core Services
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="text-md sm:text-lg text-gray-300 mt-4">
					We deliver modern, scalable, and performance-driven solutions to help
					your business thrive in the digital world.
				</motion.p>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							custom={index}
							className="p-6 border border-[#1c00d3] rounded-2xl shadow-md hover:shadow-blue-900 transition duration-300 bg-[#0a052a] hover:-translate-y-2">
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
		</section>
	);
};

export default ServicesSection;
