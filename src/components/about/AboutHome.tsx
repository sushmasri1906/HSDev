import React from "react";
import HeroSection from "@/components/about/Hero";
import HowWeWork from "@/components/about/HowWeWork";
import About from "@/components/about/About";
// import CoreTeam from "@/components/about/CoreTeam";
import CTA from "@/components/about/CTA";

function page() {
	return (
		<div className="bg-black pt-20">
			<HeroSection />
			<HowWeWork />
			<About />
			{/* <CoreTeam /> */}
			<CTA />
		</div>
	);
}

export default page;
