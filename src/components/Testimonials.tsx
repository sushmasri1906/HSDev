import Image from "next/image";
import React from "react";

const testimonials = [
	{
		name: "Mahesh Devarakonda",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1738995967/32_htvwli.jpg",
		feedback:
			"Rolanplast UI is sleek and intuitive. The tech stack choice is modern and well-optimized!",
	},
	{
		name: "Rakesh",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1738996003/45_gzb5pz.jpg",
		feedback:
			"The best platform I've used! The performance and responsiveness are top-notch.",
	},
	{
		name: "Karthik",
		image:
			"https://res.cloudinary.com/dq12dx327/image/upload/v1738996028/52_qptsz3.jpg",
		feedback:
			"Really impressed by the smooth animations and clean architecture of the project.",
	},
];

const Testimonials: React.FC = () => {
	return (
		<div className="bg-[#0F0F0F] py-16 text-white">
			<div className="mx-auto px-6 lg:w-3/4">
				<h2 className="text-4xl font-bold text-white mb-8 text-center">
					What People Say
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
							style={{
								borderImage: "linear-gradient(135deg, #4B0082, #8A2BE2) 1",
								borderWidth: "2px",
								borderStyle: "solid",
							}}>
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								height={100}
								width={100}
								className="w-16 h-16 rounded-full border-2 border-[#8A2BE2] mb-4"
							/>
							<h3 className="text-lg font-semibold text-white">
								{testimonial.name}
							</h3>
							<p className="mt-3 text-gray-300 text-sm italic">
								&quot;{testimonial.feedback}&quot;
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
