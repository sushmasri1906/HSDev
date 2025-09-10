import HomeHero from "@/components/Home/HomeHero";
import React from "react";
import LogoSection from "@/components/Home/LogoSection";
import HeroSection from "@/components/Home/HeroSection";
import WhatWeBuild from "@/components/Home/WhatWeBuild";
import Testimonials from "@/components/Home/Testimonials";
import CTA from "@/components/about/CTA";

function page() {
	return (
		<>
			<HomeHero />
			<LogoSection />
			<HeroSection />
			<WhatWeBuild />
			<Testimonials />
			<CTA />
		</>
	);
}

export default page;
