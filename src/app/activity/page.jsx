"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EducationAndCertifications = () => {
	useGSAP(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#education",
				start: "top 55%",
			},
		});

		timeline
			.fromTo(
				".activity-title",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
			)
			.fromTo(
				".activity-card",
				{ y: 20, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
					stagger: 0.2,
				},
			);
	}, []);

	return (
<div
  id="education"
 className="bg-background py-20 md:py-28">

            


			<h1 className="activity-title text-xl font-semibold text-emerald-400 my-8 md:text-3xl md:text-center xl:text-5xl lg:my-10">
				Education & Certifications
			</h1>

			<div className="w-full p-5 flex flex-col gap-10">
				{/* Education */}
				<section className="activity-card w-full rounded-lg border border-gray-500/20 bg-white/5 p-6 shadow-md shadow-gray-500/20">
					<h2 className="text-xl font-bold mb-4">Education</h2>

					<div className="space-y-5">
						<div className="flex flex-col gap-1">
							<h3 className="text-lg font-semibold">
								Noida Institute of Engineering and Technology (NIET), Greater Noida
							</h3>
							<p className="text-gray-200/70">B.Tech in Computer Science and Engineering</p>
							<p className="text-gray-200/50 text-sm">2022 – 2026</p>
						</div>

						<div className="flex flex-col gap-1">
							<h3 className="text-lg font-semibold">B.D. Evening College, Patna</h3>
							<p className="text-gray-200/70">11th and 12th</p>
							<p className="text-gray-200/50 text-sm">2019 – 2021</p>
						</div>
					</div>
				</section>

				{/* Certifications */}
				<section className="activity-card w-full rounded-lg border border-gray-500/20 bg-white/5 p-6 shadow-md shadow-gray-500/20">
					<h2 className="text-xl font-bold mb-4">Certifications</h2>

					<ul className="space-y-4 text-gray-100">
						<li className="flex flex-col gap-1">
							<span className="font-semibold">
								Full-Stack Development Certification (Sheriyans)
							</span>
							<span className="text-gray-200/70 text-sm">
								Cert ID: 77643e73
							</span>
						</li>

						<li className="flex flex-col gap-1">
							<span className="font-semibold">
								Introduction to Artificial Intelligence (Coursera)
							</span>
							<span className="text-gray-200/70 text-sm">Credential: Verify on Coursera</span>
						</li>

						<li className="flex flex-col gap-1">
							<span className="font-semibold">
								Database Management System – Science Graduates (Infosys)
							</span>
							<span className="text-gray-200/70 text-sm">Issued: Oct 3, 2024</span>
						</li>

						<li className="flex flex-col gap-1">
							<span className="font-semibold">
								Natural Language Processing using Python (Infosys)
							</span>
							<span className="text-gray-200/70 text-sm">Issued: Sep 25, 2024</span>
						</li>

						<li className="flex flex-col gap-1">
							<span className="font-semibold">
								Java Programming: Arrays, Lists, and Structured Data (Duke University – Coursera)
							</span>
							<span className="text-gray-200/70 text-sm">Completed: Dec 12, 2023</span>
						</li>

						<li className="flex flex-col gap-1">
							<span className="font-semibold">
								Object Oriented Programming in Java (UC San Diego – Coursera)
							</span>
							<span className="text-gray-200/70 text-sm">Completed: Dec 13, 2023</span>
						</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default EducationAndCertifications;
