"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { RoughNotation } from "react-rough-notation"

import { useSectionStore } from "@/store/section";

import useScrollActive from "@/hooks/useScrollActive";
import useOnScreen from "@/hooks/useOnScreen";

import PortfolioCard from "./PortfolioCard";

import ogImage from "@/../public/og-image.png"

function Portfolio() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  const elementRef = useRef<HTMLDivElement>(null)
  // const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          );
        },
      },
    });
  }, []);

  // Set Active Session
  const portfolioSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    portfolioSectionOnView && setSection("#portfolio");
  }, [portfolioSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="w-full relative min-h-screen bg-baseBackground pt-[4.5rem] px-[5%]"
    >
      <h2 className="absolute -rotate-90 bottom-1/2 translate-y-1/2 -translate-x-1/2 left-8 md:left-14  font-fira text-7xl md:text-8xl tracking-tighter text-slate-800/90 font-medium">
        Portfolio.
      </h2>
      <div className="mx-auto max-w-7xl w-full h-full">Portfolio</div>
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          {/* <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          > */}
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Featured Projects
            </div>
          {/* </RoughNotation> */}
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>Good design is obvious. Great design is transparent.</div>
              <div>Design is not for philosophy, it&apos;s for life.</div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <PortfolioCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          Explore more projects in{" "}
          <Link
            href=""
            target="_blank"
            aria-label="Expore more in my github profile"
            rel="noopener noreferrer"
            className="text-accentColor"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  );
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Test",
    description:
      "This is a test test test test and i know it",
    techStacks: ["ReactJS", "TypeScript"],
    image: ogImage,
    githubURL: "",
    githubApi: "",
  },
]

export default Portfolio;
