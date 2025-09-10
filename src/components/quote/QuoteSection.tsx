import Image from "next/image";

export default function QuoteSection() {
	return (
		<section className="bg-black py-20 px-6 md:px-16 mt-20 text-white">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4">
					Let’s Bring Ideas to Life
				</h2>
				<p className="text-lg text-gray-300">
					Get a custom quote tailored to your unique project needs.
				</p>

				<div className="mt-10">
					<div className="rounded-[2rem] overflow-hidden shadow-xl">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1752942492/zonkey-ai-generated-website-content_uwwet5.jpg"
							alt="Team Working"
							width={1200}
							height={700}
							className="w-full h-auto object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
