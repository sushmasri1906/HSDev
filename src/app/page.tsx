import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import HireUs from "@/components/HireMe";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<ServicesSection />
			<TechStack />
			<Testimonials />
			<Certifications />
			<HireUs />
		</div>
	);
}
