/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
"use client";
import React, { useEffect, useState } from "react";
import handleNav from "./scroll";
import {
	LucideActivity,
	LucideHouse,
	LucideLayers,
	LucideSmartphone,
	LucideUser,
} from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	// const [hover, setHover] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [isOpen]);

	useGSAP(() => {
		const section = [
			{ id: "home" },
			{ id: "about" },
			{ id: "projects" },
			{ id: "contact" },
			{ id: "activity" },
		];
		section.forEach((id) => {
			ScrollTrigger.create({
				trigger: `#${id.id}`,
				start: "top 90%",
				end: "bottom center",
				onToggle: (self) => {
					if (self.isActive) {
						setActiveSection(id.id);
					}
				},
			});
		});

		gsap.fromTo(
			".hori-nav",
			{
				y: -20,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.3,
				delay: 3,
			},
		);
	}, []);

	return (
		<div className={`sticky top-5 z-40`}>
			{!isOpen ? (
				<button
					className="size-12 group absolute top-5 right-5 z-50 lg:size-16 md:hidden"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 duration-300 left-1/2 -translate-y-[5px] group-hover:rotate-10"></span>
					<span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 duration-300 left-1/2 translate-y-[5px] group-hover:-rotate-10"></span>
				</button>
			) : (
				<button
					className="z-50 size-12 group absolute top-5 right-5 lg:size-16 md:hidden"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 rotate-45 duration-300 left-1/2 translate-y-1/2"></span>
					<span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 -rotate-45 duration-300 left-1/2 translate-y-1/2"></span>
				</button>
			)}

			<div
				// onMouseEnter={() => setHover(true)}
				// onMouseLeave={() => setHover(false)}
				className={`fixed inset-0  h-dvh w-full lg:w-2/3 xl:w-1/2 lg:ml-auto backdrop-blur-2xl transform transition-transform duration-500 bg-black/10  z-40 overflow-hidden  ${
					!isOpen ? "translate-x-full" : "translate-x-0 "
				} `}
			>
				<nav className="flex flex-col justify-center items-center gap-10 p-5 h-full text-lg font-semibold lg:text-2xl lg:gap-14">
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "home");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						Home
					</button>
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "projects");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						Projects
					</button>
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "about");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						About
					</button>
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "activity");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						Activity
					</button>
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "contact");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						Contact
					</button>
				</nav>
			</div>

			<nav
				className="hori-nav hidden md:flex justify-center items-center  py-4 shadow-md shadow-emerald-400/20
			 rounded-xl min-w-2xl max-w-3xl mx-auto bg-zinc-900/50 backdrop-blur-3xl text-gray-200"
			>
				<button
					onClick={(e) => handleNav(e, "home")}
					className={`${activeSection === "home" ? "text-emerald-400" : "text-white"} flex justify-center items-center flex-nowrap gap-2 flex-1 cursor-pointer hover:text-emerald-400 hover:scale-105 duration-300 ease-in-out `}
				>
					<LucideHouse /> Home
				</button>
				<button
					onClick={(e) => handleNav(e, "about")}
					className={`${activeSection === "about" ? "text-emerald-400" : "text-white"} flex justify-center items-center flex-nowrap gap-2  flex-1 hover:text-emerald-400 cursor-pointer hover:scale-105 duration-300 ease-in-out `}
				>
					<LucideUser /> About
				</button>
				<button
					onClick={(e) => handleNav(e, "activity")}
					className={`${activeSection === "activity" ? "text-emerald-400" : "text-white"} flex justify-center items-center flex-nowrap gap-2  flex-1 hover:text-emerald-400 cursor-pointer hover:scale-105 duration-300 ease-in-out `}
				>
					<LucideActivity /> Activity
				</button>
				<button
					onClick={(e) => handleNav(e, "projects")}
					className={`${activeSection === "projects" ? "text-emerald-400" : "text-white"} flex justify-center items-center flex-nowrap gap-2  flex-1 hover:text-emerald-400 cursor-pointer hover:scale-105 duration-300 ease-in-out `}
				>
					<LucideLayers /> Project
				</button>
				<button
					onClick={(e) => handleNav(e, "contact")}
					className={`${activeSection === "contact" ? "text-emerald-400" : "text-white"} flex justify-center items-center flex-nowrap gap-2  flex-1 hover:text-emerald-400 cursor-pointer hover:scale-105 duration-300 ease-in-out `}
				>
					<LucideSmartphone /> Contact
				</button>
			</nav>
		</div>
	);
};

export default Header;
