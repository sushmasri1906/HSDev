"use client";
import { motion } from "framer-motion";
import React, { ReactNode, useRef } from "react";

const InViewUp = ({ children }: { children: ReactNode }) => {
	const ref = useRef(null);
	const varients = {
		initial: {
			opactity: 0,
			scale: 0.8,
		},
		whileInView: {
			opactity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeIn",
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={varients}
			initial="initial"
			whileInView={"whileInView"}
			viewport={{ once: true }}
			className="h-full w-full">
			{children}
		</motion.div>
	);
};

export default InViewUp;
