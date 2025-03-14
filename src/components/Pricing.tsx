"use client";

import React from "react";
import { FaCheckCircle, FaStar, FaBolt } from "react-icons/fa";

const pricingPlans = [
	{
		name: "Basic",
		price: "₹5,099",
		delivery: "2-day delivery",
		revisions: "1 Revision",
		pages: "1 page",
		features: [
			"Design customization",
			"Content upload",
			"Responsive design",
			"Source code - Basic",
			"Attractive Landing Pages",
		],
		icon: <FaCheckCircle size={24} className="text-green-400" />,
	},
	{
		name: "Standard",
		price: "₹16,117",
		delivery: "7-day delivery",
		revisions: "2 Revisions",
		pages: "3 pages",
		features: [
			"Design customization",
			"Content upload",
			"Responsive design",
			"Source code - Standard",
			"Basic Backend if needed",
		],
		icon: <FaStar size={24} className="text-blue-400" />,
	},
	{
		name: "Premium",
		price: "Based on requirement",
		delivery: "10-30 days delivery",
		revisions: "6 Revisions",
		pages: "As Many as you need",
		features: [
			"Design customization",
			"Content upload",
			"Responsive design",
			"Source code - Premium",
			"Full-stack website",
		],
		icon: <FaBolt size={24} className="text-yellow-400" />,
	},
];

const PricingCards = () => {
	return (
		<section className="py-16 bg-[#0f0f0f] text-white">
			<div className="max-w-6xl mx-auto text-center px-6">
				<h2 className="text-4xl font-bold text-white">
					Pricing Plans
				</h2>
				<p className="mt-4 text-white">
					Choose the best package for your **Next.js + Tailwind CSS** project.
				</p>
			</div>

			{/* Pricing Cards */}
			<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{pricingPlans.map((plan) => (
					<div
						key={plan.name}
						className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-transparent transition-all duration-300"
						style={{
							borderImage: "linear-gradient(135deg, #4B0082, #8A2BE2) 1",
						}}>
						<div className="flex justify-center mb-4">{plan.icon}</div>
						<h3 className="text-2xl font-semibold">{plan.name}</h3>
						<p className="text-xl text-[#8A2BE2] font-bold mt-2">{plan.price}</p>
						<p className="text-white mt-1">{plan.delivery}</p>
						<p className="text-white">{plan.revisions}</p>
						<p className="text-white">{plan.pages}</p>

						<ul className="mt-4 space-y-2 text-gray-300">
							{plan.features.map((feature, index) => (
								<li
									key={index}
									className="flex items-center justify-start gap-2">
									<FaCheckCircle size={16}  className="text-green-400" />
									{feature}
								</li>
							))}
						</ul>

						<button className="mt-6 px-6 py-2 rounded-lg text-white bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] hover:opacity-80 transition">
							Get Started
						</button>
					</div>
				))}
			</div>

			{/* Offer Zone */}
			<div className="mt-16 p-6 text-center rounded-xl max-w-4xl mx-auto border-2 border-[#8A2BE2] bg-opacity-10 bg-[#8A2BE2]">
				<h3 className="text-2xl font-bold">🔥 Special Offer Zone 🔥</h3>
				<p className="mt-2 text-white">
					Save **up to 15%** on your first order!
				</p>
				<button className="mt-4 px-6 py-2 rounded-lg text-white bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] hover:opacity-80 transition">
					Claim Offer
				</button>
			</div>
		</section>
	);
};

export default PricingCards;
