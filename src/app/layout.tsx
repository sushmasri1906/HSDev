import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "HSDev",
	description: "HSDev - Your Fullstack Development Partner",
	openGraph: {
		title: "HSDev",
		description: "Expert Fullstack Development Services",
		url: "https://hsdev.in", // Replace with your actual URL
		type: "website",
		images: [
			{
				url: "", // Replace with your actual logo URL
				width: 1200,
				height: 630,
				alt: "HSDev Logo",
			},
		],
	},
	icons: {
		icon: "/favicon-32x32.png", // Path to your favicon
		apple: "/apple-touch-icon.png", // Apple touch icon
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />

				{children}
				<Footer />
			</body>
		</html>
	);
}
