import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import HireUs from "@/components/HireMe";
import PricingCards from "@/components/Pricing";
import HeroSection from "@/components/Hero/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<ServicesSection />
			<Projects />
			<TechStack />

			<Certifications />
			<HireUs />
			<PricingCards />
			<Testimonials />
		</div>
	);
}
