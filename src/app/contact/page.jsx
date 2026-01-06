/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
"use client";
import React from "react";
import Socials from "../components/socials";

function Contact() {
	return (
		<section
			id="contact"
			className="bg-background  contact-section my-10  lg:my-15 lg:mb-24 py-20"
		>
			<main className="p-5  md:grid grid-cols-10 justify-center items-center gap-5 lg:w-4/5 lg:m-auto lg:text-2xl">
				<h2 className="contact-title text-xl font-semibold text-emerald-400 my-5 md:text-3xl text-center md:col-span-10 xl:text-5xl lg:my-10">
					Get In Touch
				</h2>
				<div className="contact-mail flex justify-center items-center text-center md:col-span-5 gap-5 my-5 md:my-0 group-hover:scale-105 group-hover:text-emerald-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 xl:size-10 group"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
						/>
					</svg>

					<span className="group">raus262002@outlook.com</span>
				</div>
				<Socials />
			</main>
		</section>
	);
}

export default Contact;
