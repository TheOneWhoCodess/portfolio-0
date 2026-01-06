/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	SiGithub,
	SiNextdotjs,
	SiReact,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from "@icons-pack/react-simple-icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
	const projectRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			".project-title",
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				scrollTrigger: {
					trigger: ".project-title",
					start: "top bottom",
				},
			},
		);

		projectRef.current?.querySelectorAll(".project-card").forEach((element) => {
			gsap.fromTo(
				element,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					clearProps: "transform",
					scrollTrigger: {
						trigger: element,
						start: "top 80%",
					},
				},
			);
		});
	}, []);

	const ExternalLinkIcon = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-5 hover:text-emerald-400"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
			/>
		</svg>
	);

	return (
		<section id="projects" className="py-20 md:py-24">
			<main ref={projectRef} className="p-5 md:m-auto lg:w-4/5">
				<h2 className="project-title text-xl font-semibold text-emerald-400 my-8 md:text-3xl md:text-center xl:text-5xl lg:my-10">
					Projects
				</h2>

				<div className="min-w-[300px] p-5 m-auto grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-2 xl:grid-cols-3 lg:gap-16">
					{/* 0 - Dev.PsyPlay */}
					<div
						id="0"
						className="project-card flex flex-col h-full shadow-md shadow-gray-500/30 hover:shadow-emerald-500/30 rounded-b-lg hover:scale-105 ease-in-out duration-300"
					>
						<Image
							src="/psyplay.png"
							alt="dev.psyplay.io"
							width={500}
							height={500}
							className="m-auto rounded-t-lg w-full"
							priority={false}
						/>
						<div className="p-3 flex flex-1 flex-col justify-between items-start gap-3 rounded-b-lg min-h-40">
							<div className="flex justify-start items-center gap-2">
								<h3 className="text-base font-bold lg:text-lg">PsyPlay</h3>

								{/* GitHub (replace with your repo) */}
								<Link
									href="https://github.com/TheOneWhoCodess"
									target="_blank"
									className="cursor-pointer"
								>
									<SiGithub
										className="text-gray-200 hover:text-emerald-400"
										size={20}
									/>
								</Link>

								{/* Live */}
								<Link
									href="https://dev.psyplay.io"
									target="_blank"
									className="cursor-pointer"
								>
									<ExternalLinkIcon />
								</Link>
							</div>

							<p className="text-sm lg:text-base">
							AI-driven multiplayer gaming platform where users can play strategy games 
							like Chess in various modes (local play, vs AI, and multiplayer) directly in the browser.
							</p>

							<div className="flex gap-5">
								<SiReact color="default" />
								<SiTypescript color="default" />
								<SiTailwindcss color="default" />
								<SiShadcnui color="default" />
								<SiNextdotjs color="default" />
							</div>
						</div>
					</div>

				

					{/* 2 - Space Tourism Website */}
					<div
						id="2"
						className="project-card flex flex-col h-full shadow-md shadow-gray-500/30 hover:shadow-emerald-500/30 rounded-b-lg hover:scale-105 ease-in-out duration-300"
					>
						<Image
							src="/space-tourism.png"
							alt="space-tourism-website"
							width={500}
							height={500}
							className="m-auto rounded-t-lg w-full"
						/>
						<div className="p-3 flex flex-1 flex-col justify-between items-start gap-3 rounded-b-lg min-h-40">
							<div className="flex justify-start items-center gap-2">
								<h3 className="text-base font-bold lg:text-lg">
									Space Tourism Website
								</h3>
								<Link
									href="https://github.com/mkhantk/space-tourism-website"
									target="_blank"
									className="cursor-pointer"
								>
									<SiGithub
										className="text-gray-200 hover:text-emerald-400"
										size={20}
									/>
								</Link>
								<Link
									href="https://space-tourism-website-seven-phi.vercel.app"
									target="_blank"
									className="cursor-pointer"
								>
									<ExternalLinkIcon />
								</Link>
							</div>
							<p className="text-sm lg:text-base">
								Space-tourism-website built with mobile-first approach focusing
								on pixel-perfect implementation of a high-fidelity Figma design.
							</p>
							<div className="flex gap-5">
								<SiReact color="default" />
								<SiTailwindcss color="default" />
								<SiVite color="default" />
							</div>
						</div>
					</div>

					{/* 3 - Portfolio */}
					<div
						id="3"
						className="project-card flex flex-col h-full shadow-md shadow-gray-500/30 hover:shadow-emerald-500/30 rounded-b-lg hover:scale-105 ease-in-out duration-300"
					>
						<Image
							src="/portfolio.png"
							alt="portfolio"
							width={500}
							height={500}
							className="m-auto rounded-t-lg w-full"
						/>
						<div className="p-3 flex flex-1 flex-col justify-between items-start gap-3 rounded-b-lg min-h-40">
							<div className="flex justify-start items-center gap-2">
								<h3 className="text-base font-bold lg:text-lg">Portfolio</h3>
								<Link
									href="https://github.com/TheOneWhoCodess/portfolio"
									target="_blank"
									className="cursor-pointer"
								>
									<SiGithub
										className="text-gray-200 hover:text-emerald-400"
										size={20}
									/>
								</Link>
								<Link
									href="https://portfolio-eta-bay-86.vercel.app"
									target="_blank"
									className="cursor-pointer"
								>
									<ExternalLinkIcon />
								</Link>
							</div>
							<p className="text-sm lg:text-base">
								Portfolio website designed with a minimalist, typography-driven
								layout. Built with React, Tailwind and Nextjs.
							</p>
							<div className="flex gap-5">
								<SiReact color="default" />
								<SiTailwindcss color="default" />
								<SiNextdotjs className="text-gray-200" />
							</div>
						</div>
					</div>

					{/* 4 - Flashcard */}
					<div
						id="4"
						className="project-card flex flex-col h-full shadow-md shadow-gray-500/30 hover:shadow-emerald-500/30 rounded-b-lg hover:scale-105 ease-in-out duration-300"
					>
						<Image
							src="/flashcard.png"
							alt="flashcard website"
							width={500}
							height={500}
							className="m-auto rounded-t-lg w-full"
						/>
						<div className="p-3 flex flex-1 flex-col justify-between items-start gap-3 rounded-b-lg min-h-40">
							<div className="flex justify-start items-center gap-2">
								<h3 className="text-base font-bold lg:text-lg">Flashcard</h3>
								<Link
									href="https://github.com/mkhantk/flashcard"
									target="_blank"
									className="cursor-pointer"
								>
									<SiGithub
										className="text-gray-200 hover:text-emerald-400"
										size={20}
									/>
								</Link>
								<Link
									href="https://flashcard-rose-sigma.vercel.app"
									target="_blank"
									className="cursor-pointer"
								>
									<ExternalLinkIcon />
								</Link>
							</div>
							<p className="text-sm lg:text-base">
								Challenge your vocabulary knowledge. Built with React,
								Tailwindcss and Vite. Used Merriam Webster API and a wordlist
								from SCOWL.
							</p>
							<div className="flex gap-5">
								<SiReact color="default" />
								<SiTailwindcss color="default" />
								<SiVite color="default" />
							</div>
						</div>
					</div>

					{/* 5 - Ecom */}
					
				</div>
			</main>
		</section>
	);
}

export default Projects;
