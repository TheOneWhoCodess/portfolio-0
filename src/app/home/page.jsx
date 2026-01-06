"use client";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import handleNav from "../components/scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import Squares from "@/components/Squares";

gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Home = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useGSAP(() => {
    const scrollLock = Observer.create({
      type: "wheel,touch,scroll",
      preventDefault: true,
    });

    const splitText = new SplitText(".name", { type: "chars" });
    const myChars = splitText.chars;

    // ✅ Keep main visible; animate only foreground content
    gsap.set(contentRef.current, { opacity: 0, y: 20 });
    gsap.set(".name", { opacity: 1 });

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 768px)", () => {
      const onCharEnter = (e) => (e.currentTarget.style.color = "white");
      const onCharLeave = (e) => (e.currentTarget.style.color = "");

      const onNameEnter = () =>
        gsap.to(".name", { scale: 1.2, duration: 0.3, ease: "power2.inOut" });
      const onNameLeave = () =>
        gsap.to(".name", { scale: 1, duration: 0.3, ease: "power2.inOut" });

      myChars.forEach((item) => {
        item.addEventListener("mouseenter", onCharEnter);
        item.addEventListener("mouseleave", onCharLeave);
      });

      const nameElement = document.querySelector(".name");
      nameElement?.addEventListener("mouseenter", onNameEnter);
      nameElement?.addEventListener("mouseleave", onNameLeave);

      const onButtonEnter = (e) =>
        gsap.to(e.currentTarget, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      const onButtonLeave = (e) =>
        gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });

      const buttonElement = document.querySelectorAll(".button");
      buttonElement.forEach((button) => {
        button.addEventListener("mouseenter", onButtonEnter);
        button.addEventListener("mouseleave", onButtonLeave);
      });

      return () => {
        myChars.forEach((item) => {
          item.removeEventListener("mouseenter", onCharEnter);
          item.removeEventListener("mouseleave", onCharLeave);
        });
        nameElement?.removeEventListener("mouseenter", onNameEnter);
        nameElement?.removeEventListener("mouseleave", onNameLeave);
        buttonElement.forEach((button) => {
          button.removeEventListener("mouseenter", onButtonEnter);
          button.removeEventListener("mouseleave", onButtonLeave);
        });
      };
    });

    const timeline = gsap.timeline({
      delay: 1,
      onComplete: () => scrollLock.kill(),
    });

    // ✅ First reveal the whole content block, then do SplitText + buttons
    timeline
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .fromTo(
        myChars,
        { opacity: 0 },
        { opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.inOut" },
        "-=0.3"
      )
      .fromTo(
        ".button",
        { opacity: 0, y: 0 },
        { opacity: 1, y: 5, stagger: 0.1, duration: 0.3, ease: "power2.out" },
        "-=0.25"
      );

    return () => {
      matchMedia.revert();
      splitText.revert();
      scrollLock.kill();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      id="home"
      className="relative isolate h-svh flex flex-col justify-center items-start p-5 md:items-center md:w-full overflow-hidden"
    >
      {/* Background */}
      <div className="bg-squares absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#ffffff99"
          hoverFillColor="#222"
        />
      </div>

      {/* Foreground */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-center items-start gap-6 md:items-center md:w-full"
      >
        <p className="text-start md:text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
          Hi <span className="animate-wave delay-1000 inline-block">👋🏼</span> I&apos;m
        </p>

        <p className="name text-3xl font-bold text-emerald-400 leading-normal tracking-wide md:text-center md:text-6xl xl:text-8xl xl:leading-relaxed">
          Raushan Kumar Singh
        </p>

        <p className="font-bold md:text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
          Full-Stack Developer | Data & AI Enthusiast
        </p>

        <p className="text-base sm:text-lg md:text-xl xl:text-3xl">
          Creating full-stack applications with a focus on data analysis and AI
        </p>

        <div className="buttons flex justify-center items-center gap-3 md:gap-5">
          <button
            onClick={(e) => handleNav(e, "projects")}
            className="button px-5 py-2 text-sm md:text-base flex justify-center items-center gap-3 hover:bg-emerald-500 ring rounded-lg md:font-semibold xl:text-xl"
          >
            Projects
          </button>

          <button
            onClick={(e) => handleNav(e, "contact")}
            className="button px-5 py-2 text-sm md:text-base flex justify-center flex-nowrap items-center gap-3 hover:bg-emerald-500 ring rounded-lg md:font-semibold xl:text-xl"
          >
            Let&apos;s Connect{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
