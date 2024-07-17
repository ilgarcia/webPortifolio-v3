"use client";

import { useEffect, useRef } from "react";

import { useSectionStore } from "@/store/section";

import useScrollActive from "@/hooks/useScrollActive";

function Portfolio() {
  const sectionRef = useRef(null);

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
    </section>
  );
}

export default Portfolio;
