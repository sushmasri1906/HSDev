"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

const InViewUp = ({ children }: { children: ReactNode }) => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });
	const varients = {
		initial: {
			y: 10,
			x: 10,
			opactity: 0.5,
			scale: 0.9,
		},
		animate: {
			y: 0,
			x: 0,
			opactity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeIn",
			},
		},
	};
	const mainControls = useAnimation();
	useEffect(() => {
		if (inView) {
			mainControls.start("animate");
		}
	}, [inView]);
	return (
		<motion.div
			ref={ref}
			variants={varients}
			initial="initial"
			animate={mainControls}
			className="h-full w-full">
			{children}
		</motion.div>
	);
};

export default InViewUp;
