import HomeHero from "@/components/Home/HomeHero";
import React from "react";
import LogoSection from "@/components/Home/LogoSection";
import HeroSection from "@/components/Home/HeroSection";
import WhatWeBuild from "@/components/Home/WhatWeBuild";
import Testimonials from "@/components/Home/Testimonials";

function page() {
	return (
		<>
			<HomeHero />
			<LogoSection />
			<HeroSection />
			<WhatWeBuild />
			<Testimonials />
		</>
	);
}

export default page;
