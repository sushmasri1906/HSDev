import React from "react";

const About = () => {
	return (
		<div className="bg-gray-100 min-h-screen py-16 px-6 flex justify-center">
			<div className="max-w-5xl w-full  ">
				<h1 className="text-5xl font-extrabold text-center  mb-10 drop-shadow-lg">
					About Us
				</h1>

				{/* Sushmasri's Details */}
				<div className="mb-10 p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg hover:scale-[1.03] transition-transform">
					<h2 className="text-3xl font-bold ">Sushmasri Kamera</h2>
					<p className="mt-4  leading-relaxed">
						Enrolled in <strong>Entri Elevate</strong> as a
						<strong>MERN stack developer</strong>, where I&apos;m building a
						solid foundation in programming and problem-solving. My education is
						equipping me with the technical knowledge and analytical skills
						necessary to excel in the fast-paced world of software development.
					</p>
					<p className="mt-3  leading-relaxed">
						With hands-on experience in freelancing, I&apos;ve worked on
						projects like the <strong>Rolanaplast project</strong>, focusing on
						real-time frontend development using <strong>Recoil</strong>. My
						work spans both frontend and backend technologies, including
						<strong>React, Express.js, and more</strong>.
					</p>
					<h3 className="text-2xl font-semibold  mt-6">
						Internship Experience
					</h3>
					<ul className="list-disc list-inside mt-2 space-y-2 ">
						<li>
							Developed and maintained <strong>frontend features</strong> using
							<strong>React.js & Tailwind CSS</strong>.
						</li>
						<li>
							Implemented <strong>RESTful APIs</strong> using
							<strong>Express.js & MongoDB</strong>.
						</li>
						<li>
							Used <strong>Recoil</strong> for smoother state management and
							user interactions.
						</li>
					</ul>
					<h3 className="text-2xl font-semibold  mt-6">
						Certifications & Awards
					</h3>
					<ul className="list-disc list-inside mt-2 space-y-2 ">
						<li>
							🏆
							<strong>Entri Elevate Fullstack Development Certificate</strong>
						</li>
						<li>
							🥇
							<strong>
								Winner of the Entri Elevate Independence Day Website Competition
								(2024)
							</strong>
						</li>
					</ul>
				</div>

				{/* Harun's Details */}
				<div className="p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg hover:scale-[1.03] transition-transform">
					<h2 className="text-3xl font-bold ">Harunath Eskuri</h2>
					<p className="mt-4  leading-relaxed">
						I graduated in <strong>Computer Science</strong> from
						<strong>Sreenidhi Institute of Science and Technology</strong>,
						where I built a strong foundation in programming and
						problem-solving.
					</p>
					<p className="mt-3  leading-relaxed">
						With hands-on experience in <strong>full-stack development</strong>,
						I&apos;ve worked on diverse projects including
						<strong>UPI applications and eCommerce platforms</strong>. I
						specialize in <strong>React, Next.js, Express.js,</strong> and more.
					</p>
					<h3 className="text-2xl font-semibold  mt-6">Certifications</h3>
					<ul className="list-disc list-inside mt-2 space-y-2 ">
						<li>
							🏆 <strong>100x Dev Fullstack Development Certification</strong>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
