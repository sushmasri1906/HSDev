import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import HireUs from "@/components/HireMe";
import PricingCards from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<ServicesSection />
			<Portfolio />
			<TechStack />

			<Certifications />
			<HireUs />
			<PricingCards />
			<Testimonials />
		</div>
	);
}
