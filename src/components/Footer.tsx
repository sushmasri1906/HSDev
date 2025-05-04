import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="text-center py-8 border-t border-[#4B0082]">
			<p className="text-sm text-gray-400">
				© {new Date().getFullYear()} HSDev. All rights reserved.
			</p>
			<div className="mt-4 flex justify-center space-x-6">
				<Link
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-[#8A2BE2] transition duration-300">
					<FaTwitter size={22} />
				</Link>
				<Link
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-[#8A2BE2] transition duration-300">
					<FaLinkedin size={22} />
				</Link>
				<Link
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-[#8A2BE2] transition duration-300">
					<FaGithub size={22} />
				</Link>
			</div>
			<p className="mt-4 text-sm text-gray-400">
				📞{" "}
				<Link
					href="tel:+919133443441"
					className="hover:text-[#8A2BE2] transition">
					+91 9133443441
				</Link>{" "}
				<br />
				📧{" "}
				<Link
					href="mailto:harunath04@gmail.com"
					className="hover:text-[#8A2BE2] transition">
					harunath04@gmail.com
				</Link>
			</p>
			<p className="mt-6 text-sm text-gray-400">
				Developed by{" "}
				<Link
					href="https://sushmasri.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#8A2BE2] hover:underline">
					Sushmasri
				</Link>{" "}
				&{" "}
				<Link
					href="https://harunath.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#8A2BE2] hover:underline">
					Harunath
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
