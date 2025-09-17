"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const ACCENT = "#1c00d3";
const ACCENT_SOFT = "rgba(28,0,211,0.16)";
const ACCENT_GRAD =
	"linear-gradient(135deg, rgba(28,0,211,0.9) 0%, rgba(102,92,255,0.85) 60%, rgba(28,0,211,0.75) 100%)";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 18, scale: 0.98 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 140, damping: 16 },
	},
};
type Project = {
	title: string;
	tagline: string;
	category:
		| "Platform"
		| "Healthcare"
		| "B2B"
		| "Networking"
		| "Utility"
		| "AgriTech"
		| "Industrial";
	status: "In Progress" | "Launched" | "Beta" | "WIP";
	features: string[];
	stack: string[];
	image: string;
	link?: string;
	repo?: string;
	highlight: string;
};

const PROJECTS: Project[] = [
	{
		title: "VR Kisan Parivaar",
		tagline: "Membership & referral ecosystem for rural agri-preneurs",
		category: "B2B",
		status: "In Progress",
		features: [
			"Village-level member onboarding",
			"Land allotment & crop registry",
			"Integrated rural health-card access",
		],
		stack: ["Next.js", "Express", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1758018625/Screenshot_2025-09-16_160002_jisqhr.png",
		link: "#",
		highlight: "Designed to scale across tier-2/3 regions",
	},
	{
		title: "ULHC Health Card",
		tagline: "Digital healthcare membership with hospital partnerships",
		category: "Healthcare",
		status: "In Progress",
		features: [
			"Secure digital health cards",
			"Hospital admin dashboard",
			"Benefit tracking & member ledger",
		],
		stack: ["Next.js", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1758018684/Screenshot_2025-09-16_160111_hbgfvy.png",
		link: "#",
		highlight: "HIPAA-aligned flows for 5k+ members",
	},
	{
		title: "Biz Network",
		tagline: "B2B referrals & franchise growth made simple",
		category: "B2B",
		status: "Beta",
		features: [
			"Multi-tier referral system",
			"Smart franchise hierarchy",
			"Member directory with testimonials",
			"Events & automated email workflows",
		],
		stack: ["Next.js 15", "Tailwind", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742481482/Screenshot_2025-03-20_200747_g8lw3z.png",
		link: "#",
		highlight: "Launched Beta with 250+ businesses onboarded",
	},
	{
		title: "Jaaaga Coworking",
		tagline: "space booking & community platform for coworking",
		category: "Platform",
		status: "Launched",
		features: [
			"Task CRUD with filters",
			"Team RBAC (roles & permissions)",
			"Analytics & dashboard KPIs",
		],
		stack: ["Next.js", "Node/Express", "JWT", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1741339318/Screenshot_2025-03-07_145105_p5nwh5.png",
		repo: "#",
		highlight: "Backend-driven KPIs powering reliability",
	},
	{
		title: "Rolanplast",
		tagline: "frontend redesign for plastic manufacturing firm",
		category: "Platform",
		status: "WIP",
		features: [
			"LangChain + GPT resume generation",
			"Job description parsing",
			"ATS-friendly section builder",
		],
		stack: ["Next.js", "Django/FastAPI", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742141216/Screenshot_2025-03-16_213636_ezv4a4.png",
		highlight: "Agentic pipeline under development",
	},
	{
		title: "Women Entrepreneurs Network",
		tagline: "Networking platform for women entrepreneurs",
		category: "Networking",
		status: "In Progress",
		features: [
			"Curated mentorship programs",
			"Resource & funding library",
			"Networking & event calendar",
		],
		stack: ["Next.js", "Django/FastAPI", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1744710608/Screenshot_2025-04-15_151906_w836vq.png",
		highlight: "Pilot community with 120+ members",
	},
	{
		title: "Biz Timer",
		tagline: "Smart time & productivity tracker",
		category: "Utility",
		status: "In Progress",
		features: [
			"Task scheduling with reminders",
			"Weekly productivity analytics",
			"Cross-device sync",
		],
		stack: ["Next.js", "Django/FastAPI", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1747998268/Screenshot_2025-05-23_163334_vua8vh.png",
		highlight: "Agentic time tracking (MVP in progress)",
	},
	{
		title: "VR Agri Farms",
		tagline: "AI insights to empower farmers’ decisions",
		category: "AgriTech",
		status: "WIP",
		features: [
			"Crop monitoring & growth patterns",
			"Soil quality analysis",
			"Localized weather forecasting",
		],
		stack: ["Next.js", "Django/FastAPI", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1758019120/Screenshot_2025-09-16_160805_n1vziw.png",
		highlight: "AI-first agri advisory (WIP)",
	},
	{
		title: "Digi Ink",
		tagline: "Digital document workflows for modern teams",
		category: "Platform",
		status: "In Progress",
		features: [
			"Smart document templates",
			"E-sign & approval chains",
			"Audit trail & security",
		],
		stack: ["Next.js", "Django/FastAPI", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1753431994/Screenshot_2025-07-25_135621_dctjpp.png",
		highlight: "E-sign MVP under build",
	},
	{
		title: "Sri Laxmi Sales Corporation",
		tagline: "frontend revamp for electrical supplies firm",
		category: "Platform",
		status: "In Progress",
		features: [
			"Inventory & sales tracking",
			"Purchase orders & invoices",
			"Role-based dashboards",
		],
		stack: ["Next.js", "Django/FastAPI", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1758019435/Screenshot_2025-09-16_161321_dzql6p.png",
		highlight: "Custom ERP build in progress",
	},
	{
		title: "Arihant Control Systems",
		tagline: "Industrial automation & system monitoring",
		category: "Industrial",
		status: "In Progress",
		features: [
			"IoT-enabled monitoring",
			"Control panel management",
			"Reports & analytics",
		],
		stack: ["Next.js", "Django/FastAPI", "Prisma", "PostgreSQL"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1758019435/Screenshot_2025-09-16_161336_n2rrtd.png",
		highlight: "Phase-1 automation dashboards (WIP)",
	},
];

const FILTERS = [
	"All",
	"Platform",
	"Healthcare",
	"B2B",
	"Networking",
	"Utility",
	"AgriTech",
	"Industrial",
] as const;

type Filter = (typeof FILTERS)[number];

export default function Projects() {
	const [active, setActive] = React.useState<Filter>("All");

	const filtered = PROJECTS.filter(
		(p) => active === "All" || p.category === active
	);

	return (
		<section className="relative bg-[#0b0b11] text-white px-6 sm:px-12 lg:px-20 py-28">
			{/* background glow + grid */}
			<div aria-hidden className="absolute inset-0 z-0">
				<div
					className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full opacity-80"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(28,0,211,0.18) 0%, rgba(28,0,211,0.06) 45%, transparent 70%)",
						filter: "blur(10px)",
					}}
				/>
				<div
					className="absolute -bottom-24 -right-16 h-[560px] w-[560px] rounded-full opacity-80"
					style={{
						background:
							"radial-gradient(60% 60% at 50% 50%, rgba(102,92,255,0.22) 0%, rgba(102,92,255,0.06) 45%, transparent 70%)",
						filter: "blur(12px)",
					}}
				/>
				<div
					className="absolute inset-0 opacity-[0.06]"
					style={{
						background:
							"linear-gradient(to right, rgba(28,0,211,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,0,211,0.9) 1px, transparent 1px)",
						backgroundSize: "36px 36px",
					}}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* header */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.35 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-start sm:items-center gap-4 sm:text-center mb-10">
					<h2 className="text-3xl sm:text-4xl font-extrabold leading-snug">
						Projects that <span style={{ color: ACCENT }}>ship</span> & stick
					</h2>
					<p className="text-white/80 max-w-2xl">
						A snapshot of the platforms and products we’ve crafted for growth,
						reliability, and real-world impact.
					</p>
				</motion.div>

				{/* filter pills */}
				<div className="relative mb-10 flex flex-wrap gap-3">
					{FILTERS.map((f) => {
						const isActive = f === active;
						return (
							<button
								key={f}
								onClick={() => setActive(f)}
								className="relative overflow-hidden rounded-full px-4 py-2 text-sm transition"
								style={{
									color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
									background: isActive ? ACCENT_GRAD : "rgba(255,255,255,0.04)",
									boxShadow: isActive
										? "0 6px 24px rgba(28,0,211,0.36)"
										: "inset 0 0 0 1px rgba(255,255,255,0.06)",
									border: isActive
										? "1px solid rgba(255,255,255,0.08)"
										: "1px solid rgba(255,255,255,0.06)",
								}}>
								{f}
							</button>
						);
					})}
				</div>

				{/* grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{filtered.map((p) => (
						<motion.article
							key={p.title}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							variants={fadeUp}
							className="group relative rounded-2xl overflow-hidden border"
							style={{
								borderColor: "rgba(28,0,211,0.25)",
								background: "rgba(255,255,255,0.03)",
								boxShadow:
									"0 0 24px rgba(28,0,211,0.14), inset 0 0 0 1px rgba(255,255,255,0.04)",
								backdropFilter: "blur(6px)",
							}}>
							{/* image */}
							<div className="relative h-48">
								<Image
									src={p.image}
									alt={p.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								{/* subtle top accent */}
								<div
									aria-hidden
									className="absolute left-0 top-0 h-[2px] w-full opacity-80"
									style={{
										background: `linear-gradient(90deg, ${ACCENT}, rgba(28,0,211,0))`,
									}}
								/>
							</div>

							{/* body */}
							<div className="p-5">
								<div className="mb-2 flex items-center justify-between gap-3">
									<h3 className="font-semibold text-lg">{p.title}</h3>
									<span
										className="text-[11px] px-2 py-1 rounded-full"
										style={{
											background: "rgba(255,255,255,0.05)",
											border: "1px solid rgba(255,255,255,0.08)",
										}}>
										{p.category}
									</span>
								</div>

								<p className="text-sm text-white/80">{p.tagline}</p>

								{/* features */}
								<ul className="mt-4 space-y-2 text-sm">
									{p.features.map((f) => (
										<li key={f} className="flex gap-2 items-start">
											<span
												className="mt-[6px] inline-block h-[6px] w-[6px] rounded-full"
												style={{ background: ACCENT }}
											/>
											<span className="text-white/85">{f}</span>
										</li>
									))}
								</ul>

								{/* stack chips */}
								<div className="mt-5 flex flex-wrap gap-2">
									{p.stack.map((s) => (
										<span
											key={s}
											className="text-[11px] px-2 py-1 rounded-md"
											style={{
												color: "rgba(255,255,255,0.9)",
												background:
													"linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
												border: "1px solid rgba(255,255,255,0.1)",
											}}>
											{s}
										</span>
									))}
								</div>

								{/* footer actions */}
								<div className="mt-6 flex items-center justify-between">
									{p.highlight ? (
										<span
											className="text-[12px] px-2.5 py-1 rounded-full"
											style={{
												border: `1px solid ${ACCENT_SOFT}`,
												background: "rgba(255,255,255,0.04)",
											}}>
											{p.highlight}
										</span>
									) : (
										<span />
									)}

									<div className="flex items-center gap-2">
										{p.repo && (
											<a
												href={p.repo}
												className="inline-flex items-center gap-2 text-[13px] opacity-90 hover:opacity-100 transition"
												style={{ color: ACCENT }}>
												<FaGithub /> Repo
											</a>
										)}
										{p.link && (
											<a
												href={p.link}
												className="inline-flex items-center gap-2 text-[13px] group/link"
												style={{ color: ACCENT }}>
												View{" "}
												<FaArrowRight className="transition -translate-x-0 group-hover/link:translate-x-[3px]" />
											</a>
										)}
									</div>
								</div>
							</div>

							{/* card hover ring */}
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								style={{
									boxShadow: "inset 0 0 0 1.5px rgba(28,0,211,0.28)",
								}}
							/>
						</motion.article>
					))}
				</div>

				{/* CTA strip */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					className="mt-12 relative overflow-hidden rounded-2xl p-[1.2px]"
					style={{
						background: ACCENT_GRAD,
						boxShadow: "0 10px 36px rgba(28,0,211,0.35)",
					}}>
					<div className="rounded-2xl px-6 sm:px-10 py-8 bg-[#0b0b11] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
						<div>
							<h4 className="text-xl font-semibold">Have a project in mind?</h4>
							<p className="text-white/80 mt-1">
								Let’s blueprint your MVP, migrate your stack, or scale what you
								already have.
							</p>
						</div>
						<Link
							href="/contact"
							className="rounded-full px-5 py-2 text-sm font-medium transition"
							style={{
								background: "rgba(255,255,255,0.06)",
								border: "1px solid rgba(255,255,255,0.14)",
							}}>
							Start a conversation
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
