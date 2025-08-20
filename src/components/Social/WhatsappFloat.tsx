"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
	return (
		<Link
			href="https://wa.me/918919624323"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 left-6 z-50 group">
			<div className="bg-[#25D366] hover:bg-[#1ebe57] p-2 rounded-full shadow-lg transition duration-300 transform group-hover:scale-105">
				<FaWhatsapp className="text-white text-2xl sm:text-3xl" />
			</div>
		</Link>
	);
}
