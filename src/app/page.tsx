import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<ServicesSection />
			<TechStack />
			<Footer />
		</div>
	);
}
