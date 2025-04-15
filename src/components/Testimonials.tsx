import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi"; // External link icon

const testimonials = [
	{
		name: "Mahesh Devarakonda",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1744695457/mahesh_vgalio.jpg",
		feedback:
			"I'm really happy with how the Rolanplast website turned out. The design is clean, smooth, and interactive. The team was quick to respond, made all the changes I asked for, and made the whole process easy and stress-free.",
		status: "finished",
		website: "Rolanplast",
		url: "https://rolanplast.netlify.app/",
	},

	{
		name: "Narayana Swami",
		image:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741327062/n_f2djcv.jpg",
		feedback:
			"The JAAAGA site turned out really clean and professional. I liked how smooth the animations feel and how well everything is put together. It’s fast, looks great on all devices, and the developer was quick to add anything we needed. Really happy with the result!",
		status: "finished",
		website: "JAAAGA Co-working Space",
		url: "https://www.jaaaga.com/",
	},
	{
		name: "Narayana Swami",
		image:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741327062/n_f2djcv.jpg",
		feedback:
			"The WEN site came out really well. It's clean, works great on all devices, and has nice features like image carousels, multiple pages, and even a WhatsApp group invite. The site loads fast since it’s static. The developer was quick to make changes and really listened to what we needed. Super happy with the result!",
		status: "finished",
		website: "WEN",
		url: "https://www.bizwen.site/",
	},
	{
		name: "Narayana Swami",
		image:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741327062/n_f2djcv.jpg",
		feedback:
			"The Biz-Network dashboard is coming together really well. The admin panel work is still in progress, but so far I’m very satisfied with the design and how everything is being handled.",
		status: "ongoing",
		website: "Biz-Network",
		url: "https://www.bizn.in/",
	},
];

const Testimonials: React.FC = () => {
	const ongoing = testimonials.filter((t) => t.status === "ongoing");
	const finished = testimonials.filter((t) => t.status === "finished");

	const renderTestimonials = (list: typeof testimonials) =>
		list.map((testimonial, index) => (
			<div
				key={index}
				className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
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
				<h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
				<p className="mt-3 text-gray-300 text-sm italic">
					&quot;{testimonial.feedback}&quot;
				</p>
				{testimonial.website && testimonial.url && (
					<a
						href={testimonial.url}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 inline-flex items-center text-sm text-purple-400 hover:underline hover:text-purple-300 transition">
						View Project <FiExternalLink className="ml-1" />
					</a>
				)}
			</div>
		));

	return (
		<div className="bg-[#0F0F0F] py-16 text-white">
			<div className="mx-auto px-6 lg:w-3/4">
				<h2 className="text-4xl font-bold text-white mb-8 text-center">
					What People Say
				</h2>

				{finished.length > 0 && (
					<>
						<h3 className="text-2xl font-semibold mb-4 text-purple-400">
							Finished Testimonials
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
							{renderTestimonials(finished)}
						</div>
					</>
				)}

				{ongoing.length > 0 && (
					<>
						<h3 className="text-2xl font-semibold mt-4 text-purple-400">
							Ongoing Testimonials
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
							{renderTestimonials(ongoing)}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Testimonials;
