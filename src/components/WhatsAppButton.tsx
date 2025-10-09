"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
	return (
		<a
			href="https://wa.me/918919624323?text=Hi!%20I%20am%20interested%20in%20your%20services."
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-5 right-5 z-[1000] flex items-center justify-center 
			w-14 h-14 rounded-full bg-green-500 text-white text-3xl shadow-lg 
			hover:scale-110 hover:shadow-green-400/50 transition-all duration-300"
			aria-label="Chat on WhatsApp">
			<FaWhatsapp />
		</a>
	);
}
