"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const LoadingScreen = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [parentWidth, setParentWidth] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setParentWidth(ref.current.offsetWidth);
		}
	}, []);

	return (
		<div ref={ref} className="relative h-full w-full">
			<motion.div
				animate={{
					background: [
						"radial-gradient(circle at 30% 30%, #ffffff, #000000)",
						"radial-gradient(circle at 70% 70%, #0f0f0f, #f0f0f0)",
					],
				}}
				transition={{
					repeat: Infinity,
					duration: 3,
					ease: "circInOut",
				}}
				className="overflow-hidden h-full w-full flex flex-col justify-around lg:text-5xl">
				<motion.p
					initial={{}}
					animate={{
						width: [0, parentWidth],
					}}
					transition={{
						repeat: Infinity,
						duration: 3,
						ease: "linear",
					}}
					style={{
						perspective: 1000,
						transformStyle: "preserve-3d",
					}}
					className=" whitespace-nowrap">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
					temporibus deleniti in totam impedit, animi laboriosam esse beatae
					sint quibusdam reprehenderit laborum voluptatum deserunt culpa rem.
					Adipisci unde ratione similique.
				</motion.p>
				<motion.p
					initial={{}}
					animate={{
						width: [0, parentWidth],
					}}
					transition={{
						repeat: Infinity,
						duration: 3,
						ease: "linear",
					}}
					style={{
						perspective: 1000,
						transformStyle: "preserve-3d",
					}}
					className=" whitespace-nowrap">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
					temporibus deleniti in totam impedit, animi laboriosam esse beatae
					sint quibusdam reprehenderit laborum voluptatum deserunt culpa rem.
					Adipisci unde ratione similique.
				</motion.p>
				<motion.p
					initial={{}}
					animate={{
						width: [0, parentWidth],
					}}
					transition={{
						repeat: Infinity,
						duration: 3,
						ease: "linear",
					}}
					style={{
						perspective: 1000,
						transformStyle: "preserve-3d",
					}}
					className=" whitespace-nowrap">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
					temporibus deleniti in totam impedit, animi laboriosam esse beatae
					sint quibusdam reprehenderit laborum voluptatum deserunt culpa rem.
					Adipisci unde ratione similique.
				</motion.p>
				<motion.p
					initial={{}}
					animate={{
						width: [0, parentWidth],
					}}
					transition={{
						repeat: Infinity,
						duration: 3,
						ease: "linear",
					}}
					style={{
						perspective: 1000,
						transformStyle: "preserve-3d",
					}}
					className=" whitespace-nowrap">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
					temporibus deleniti in totam impedit, animi laboriosam esse beatae
					sint quibusdam reprehenderit laborum voluptatum deserunt culpa rem.
					Adipisci unde ratione similique.
				</motion.p>
			</motion.div>
			<div className=" absolute left-0 top-0 h-full w-full bg-black/70 backdrop-blur-xl"></div>
		</div>
	);
};

export default LoadingScreen;
