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
		icon: <FaCheckCircle size={24} className="text-green-500" />,
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
		icon: <FaStar size={24} className="text-blue-500" />,
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
		icon: <FaBolt size={24} className="text-yellow-500" />,
	},
];

const PricingCards = () => {
	return (
		<div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-12">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl font-extrabold text-gray-900">Pricing Plans</h2>
				<p className="mt-4 text-gray-600">
					Choose the best package for your Next.js + Tailwind CSS project.
				</p>
			</div>

			{/* Pricing Cards */}
			<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{pricingPlans.map((plan) => (
					<div
						key={plan.name}
						className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
						<div className="flex justify-center mb-4">{plan.icon}</div>
						<h3 className="text-2xl font-semibold text-gray-900">
							{plan.name}
						</h3>
						<p className="text-xl font-bold text-gray-800 mt-2">{plan.price}</p>
						<p className="text-gray-600 mt-1">{plan.delivery}</p>
						<p className="text-gray-600">{plan.revisions}</p>
						<p className="text-gray-600">{plan.pages}</p>

						<ul className="mt-4 text-gray-600 space-y-2">
							{plan.features.map((feature, index) => (
								<li
									key={index}
									className="flex items-center justify-center gap-2">
									<FaCheckCircle size={16} className="text-green-500" />
									{feature}
								</li>
							))}
						</ul>

						<button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
							Get Started
						</button>
					</div>
				))}
			</div>

			{/* Offer Zone */}
			<div className="mt-16 bg-yellow-100 text-yellow-800 p-6 text-center rounded-xl max-w-4xl mx-auto shadow-md">
				<h3 className="text-2xl font-bold">🔥 Special Offer Zone 🔥</h3>
				<p className="mt-2">**save up to 15%** on your first order!</p>
				<button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
					Claim Offer
				</button>
			</div>
		</div>
	);
};

export default PricingCards;
