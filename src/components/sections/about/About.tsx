"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSectionStore } from "@/store/section";

import useScrollActive from "@/hooks/useScrollActive";

import Signs from "@/../public/assets/about/signs.svg";
import AboutCard from "./AboutCard";

function About() {
  const sectionRef = useRef(null);

  // Set Active Session
  const aboutSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    aboutSectionOnView ? setSection("#about") : setSection("#home");
  }, [aboutSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative flex items-center w-full min-h-screen bg-baseBackground pt-[4.5rem] px-[5%]"
    >
      <h2 className="absolute -left-2 lg:-left-8 top-24 font-fira text-7xl md:text-9xl font-medium tracking-tighter text-slate-800/50 -rotate-12">
        About Me.
      </h2>
      <div className="lg:grid lg:grid-cols-2 items-center mx-auto max-w-7xl w-full h-full">
        <div className="relative">
          <h3 className="text-4xl lg:text-6xl font-bold lg:leading-10">
            Meet the Developer
          </h3>
          {/* <p className="mt-1 lg:mt-2 font-light text-lg md:text-2xl text-slate-400">
            Fullstack Developer | DevOps
          </p> */}
          <div className="absolute -top-10 -left-10">
            <Image
              className="w-14 pointer-events-none select-none"
              src={Signs}
              alt="signs"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-2 mt-10 font-fira">
            <div className="col-span-2 bg-background text-foreground border-gray-800 border px-4 py-4 rounded-xl">
              <p className="mb-2">Front-end</p>
              <p className="text-xs font-light">
                Stack / Stack / Stack / Stack / Stack / Stack / Stack / Stack
              </p>
            </div>
            <div className="col-span-1 bg-background text-foreground border-gray-800 border px-4 py-4 rounded-xl">
              <p className="mb-2">Style</p>
              <p className="text-xs font-light">
                Stack / Stack / Stack / Stack 
              </p>
            </div>
            <div className="col-span-2 bg-background text-foreground border-gray-800 border px-4 py-4 rounded-xl">
              <p className="mb-2">Back-end</p>
              <p className="text-xs font-light">
                Stack / Stack / Stack / Stack / Stack / Stack / Stack / Stack
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-start">
              Talvez um texto aqui.
            </div>
            <div className=" col-span-1 bg-background text-foreground border-gray-800 border px-4 py-4 rounded-xl">
              <p className="mb-2">Style</p>
              <p className="text-xs font-light">
                Stack / Stack / Stack / Stack
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-wrap justify-center items-center gap-0 flex-col -space-y-7 mt-8">
          <div className="p-8 max-w-xs relative shadow-xl bg-gray-900 border border-gray-800 rounded-md">
            <div className="flex items-center mb-4">
              {/* <Si.SiReact className="text-5xl mr-4" /> */}
              <h3>
                <span className="markup mk-purple text-2xl font-bold z-10">
                  Frontend Dev
                </span>
                <span className="text-xl font-semibold">React, NextJS</span>
              </h3>
            </div>
            <p className="pl-10 leading-5 before:content-['<h3>']  before:-ml-8 before:opacity-30 before:block after:content-['</h3>']  after:-ml-8 after:opacity-30 after:block">
              Passionate about UI/UX. working with a few projects and
              development experience in HTML, CSS, JS, React and NextJS
              frameworks.
            </p>
          </div>
          <div className="relative p-8 max-w-xs left-24 shadow-xl bg-gray-900 border border-gray-800 rounded-md">
            <div className="flex items-center mb-4">
              {/* <Si.SiReact className="text-5xl mr-4 " /> */}
              <h3>
                <span className="markup mk-orange text-2xl font-bold z-10">
                  Backend Dev
                </span>
                <span className="text-xl font-semibold">Node, Java</span>
              </h3>
            </div>
            <p className="pl-10 leading-5 before:content-['<h3>']  before:-ml-8 before:opacity-30 before:block after:content-['</h3>']  after:-ml-8 after:opacity-30 after:block">
              Excited about delving into backend development, with hands-on
              experience in Java, Node.js, and related frameworks.
            </p>
          </div>
        </div>
        {/* <AboutCard /> */}
      </div>
    </section>
  );
}

export default About;
