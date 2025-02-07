import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-white shadow-md p-4">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					<Image
						src="https://res.cloudinary.com/degrggosz/image/upload/v1738934587/hslogo_w8997t.png"
						alt="Logo"
						width={100}
						height={100}
					/>
				</h1>
				<ul className="flex space-x-4">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
					<li>
						<Link href="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
