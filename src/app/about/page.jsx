"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    tl.to(sectionRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    tl.fromTo(
      ".about-me",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      ".facts",
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-background py-20 md:py-28 flex justify-center items-center overflow-hidden"
      style={{ opacity: 0 }} // (optional) keeps it hidden before GSAP animates
    >
      <div className="p-5 md:w-4/5 m-auto max-w-5xl">
        <main className="relative text-base grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-0 md:text-lg xl:text-xl">
          {/* Fun Facts */}
          <section className="facts md:col-span-3 p-5 bg-emerald-400/10 rounded-md">
            <h2 className="text-xl my-8 text-emerald-400 font-semibold md:text-3xl xl:text-5xl">
			At a Glance
            </h2>

            <ul className="leading-loose">
              <li>
                <span className="text-emerald-400 font-semibold">🎯 Role:</span>{" "}
                Full-Stack Developer | Data & AI Enthusiast
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">🌍 Based in:</span>{" "}
                Delhi, India
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">💻 Interests:</span>{" "}
                Linux | Open Source | AI and Machine Learning
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">🔥 Strengths:</span>{" "}
                Problem-solving | Adaptability
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">🚀 Focus:</span>{" "}
                Responsive, interactive, functional websites
              </li>
            </ul>
          </section>

          {/* About Me */}
          <section className="about-me md:col-span-3 px-5">
            <h2 className="text-xl my-8 text-emerald-400 font-semibold md:text-3xl xl:text-5xl">
              About me
            </h2>

            <article className="leading-relaxed">
              <p className="my-2">
                I’m a full-stack developer from Delhi, India, with a growing
                interest in data analytics, data science, and AI/ML, focused on
                building clean and scalable web solutions.
              </p>
              <p>
                When I'm not coding, I enjoy exploring open-source software and
                Linux. I also love watching movies and grabbing a coffee to
                relax ☕.
              </p>
            </article>
          </section>
        </main>
      </div>
    </section>
  );
}

export default About;
