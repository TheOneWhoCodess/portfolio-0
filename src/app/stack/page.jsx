"use client";
import React, { useRef } from "react";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiScikitlearn,
} from "@icons-pack/react-simple-icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Stack() {
  const stackRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top 80%",
      },
    });

    timeline.fromTo(
      ".stack-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    );

    timeline.fromTo(
      ".logo",
      {
        opacity: 0,
        scale: 0.8,
        y: 60,
        rotation: () => gsap.utils.random(-15, 15),
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: {
          amount: 0.6,
          from: "start",
          ease: "power2.out",
        },
      }
    );

    const logos = document.querySelectorAll(".logo");

    const onLogoEnter = (e) => {
      gsap.to(e.currentTarget, {
        y: -10,
        scale: 1.2,
        ease: "power2.out",
        duration: 0.4,
      });
    };

    const onLogoLeave = (e) => {
      gsap.to(e.currentTarget, {
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1.2, 0.5)",
      });
    };

    logos.forEach((el) => {
      el.addEventListener("mouseenter", onLogoEnter);
      el.addEventListener("mouseleave", onLogoLeave);
    });

    return () => {
      logos.forEach((el) => {
        el.removeEventListener("mouseenter", onLogoEnter);
        el.removeEventListener("mouseleave", onLogoLeave);
      });
    };
  }, []);

  const fullStack = [
    { Icon: SiHtml5, label: "HTML" },
    { Icon: SiCss, label: "CSS" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: SiReact, label: "React" },
    { Icon: SiNextdotjs, label: "Next.js", extraClass: "text-gray-200" },
    { Icon: SiReactrouter, label: "React Router" },
    { Icon: SiRedux, label: "Redux" },
    { Icon: SiTailwindcss, label: "Tailwind CSS" },
    { Icon: SiShadcnui, label: "shadcn/ui" },
    { Icon: SiVite, label: "Vite" },
    { Icon: SiGreensock, label: "GSAP" },
    { Icon: SiNodedotjs, label: "Node.js" },
    { Icon: SiExpress, label: "Express" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiGit, label: "Git" },
    { Icon: SiGithub, label: "GitHub", extraClass: "text-gray-200" },
  ];

  const dataAnalystAI = [
    { Icon: SiPython, label: "Python" },
    { Icon: SiPandas, label: "Pandas" },
    { Icon: SiNumpy, label: "NumPy" },
    { Icon: SiPlotly, label: "Plotly" },
    { Icon: SiScikitlearn, label: "scikit-learn" },
  ];

  const IconGrid = ({ items }) => (
    <div className="p-5 logo-row flex gap-16 justify-center items-center flex-wrap flex-1">
      {items.map(({ Icon, label, extraClass }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <Icon
            size={42}
            color="default"
            title={label}
            className={`logo m-auto ${extraClass ?? ""}`}
          />
          <span className="text-xs text-gray-300">{label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={stackRef} id="stacks" className="pb-28 max-w-5xl m-auto">
      <main className="p-5 mb-10 md:w-4/5 md:m-auto lg:my-12">
        <h2 className="stack-title text-xl my-8 text-emerald-400 font-semibold md:text-3xl sm:text-center xl:text-5xl">
          My Stack
        </h2>

        <h3 className="text-lg md:text-xl font-semibold text-gray-100 mt-10 mb-4 sm:text-center">
          Full Stack
        </h3>
        <IconGrid items={fullStack} />

        <h3 className="text-lg md:text-xl font-semibold text-gray-100 mt-12 mb-4 sm:text-center">
          Data (Analyst & AI)
        </h3>
        <IconGrid items={dataAnalystAI} />
      </main>
    </section>
  );
}

export default Stack;
