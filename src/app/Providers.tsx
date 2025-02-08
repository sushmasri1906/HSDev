"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<AnimatePresence>{children}</AnimatePresence>
		</div>
	);
}

export default Providers;
