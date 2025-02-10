"use client";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import React from "react";

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<SessionProvider>
				<AnimatePresence>
					<Navbar />
					{children}
				</AnimatePresence>
			</SessionProvider>
		</div>
	);
}

export default Providers;
