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
import InViewUp from "./animations/InViewUp";

const services = [
	{
		title: "Frontend Development",
		description:
			"We craft responsive and scalable interfaces using React, Next.js, and Tailwind CSS — optimized for speed and usability.",
		icon: (
			<FaCode className="text-blue-400 text-4xl group-hover:scale-110 transition" />
		),
	},
	{
		title: "Backend Development",
		description:
			"Robust server-side architecture with Node.js, Express, and MongoDB to power your business applications securely.",
		icon: (
			<FaServer className="text-green-400 text-4xl group-hover:scale-110 transition" />
		),
	},
	{
		title: "E-commerce Development",
		description:
			"High-converting, mobile-first online stores with Razorpay & PayPal integration — built for growth.",
		icon: (
			<FaShoppingCart className="text-purple-400 text-4xl group-hover:scale-110 transition" />
		),
	},
	{
		title: "Business Websites",
		description:
			"Corporate web presence with stunning design and lightning performance to reflect your brand authority.",
		icon: (
			<FaBriefcase className="text-orange-400 text-4xl group-hover:scale-110 transition" />
		),
	},
	{
		title: "Portfolio Websites",
		description:
			"Elegant and personalized portfolios to showcase work, skills, and personal branding with modern UI/UX.",
		icon: (
			<FaUserTie className="text-red-400 text-4xl group-hover:scale-110 transition" />
		),
	},
	{
		title: "Payment Gateway Integration",
		description:
			"End-to-end integration of Razorpay, Stripe, PayPal, and UPI — secure, fast, and seamless.",
		icon: (
			<FaCreditCard className="text-yellow-400 text-4xl group-hover:scale-110 transition" />
		),
	},
	{
		title: "CMS Solutions",
		description:
			"Custom content management systems with secure authentication, admin dashboards, and data control.",
		icon: (
			<FaUserTie className="text-cyan-400 text-4xl group-hover:scale-110 transition" />
		),
	},
	{
		title: "Chat Applications",
		description:
			"Real-time messaging platforms using WebSocket & Firebase — scalable, secure & engaging.",
		icon: (
			<FaComments className="text-emerald-400 text-4xl group-hover:scale-110 transition" />
		),
	},
	{
		title: "Booking Systems",
		description:
			"Appointment & scheduling platforms with calendar sync, payment, and SMS/email alerts.",
		icon: (
			<FaCalendarAlt className="text-indigo-400 text-4xl group-hover:scale-110 transition" />
		),
	},
];

export default function ServicesSection() {
	return (
		<InViewUp>
			<section
				className="relative bg-cover bg-center bg-no-repeat py-10 px-6 sm:px-10 lg:px-24"
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dgulr1hgd/image/upload/v1752588140/raw_kvkdrv.png')",
				}}>
				<div className="relative z-10 max-w-7xl mx-auto text-center">
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-3xl sm:text-4xl font-extrabold text-white">
						Services We Offer
					</motion.h2>
					<p className="text-md sm:text-lg text-gray-300 mt-3 max-w-3xl mx-auto">
						Custom software solutions tailored for scale, performance, and
						user-centric experiences.
					</p>

					{/* Grid */}
					<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								className="group bg-[#0e0e25]/80 backdrop-blur rounded-2xl p-6 text-left border border-[#1c1c3b] hover:border-[#1c00d3] hover:shadow-lg hover:shadow-[#1c00d3]/50 transition duration-300">
								<div className="mb-4">{service.icon}</div>
								<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#000fb5] transition">
									{service.title}
								</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									{service.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</InViewUp>
	);
}
