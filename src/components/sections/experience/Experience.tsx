"use client";

import { useEffect, useRef } from "react";

import { useSectionStore } from "@/store/section";

import useScrollActive from "@/hooks/useScrollActive";
import AccordionList from "./AccordionList";

function Experience() {
  const sectionRef = useRef(null);

  // Set Active Session
  const experienceSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    experienceSectionOnView && setSection("#experience");
  }, [experienceSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="flex items-center w-full relative min-h-screen bg-baseBackground pt-[4.5rem] px-[5%]"
    >
      <h2 className="absolute -left-6 top-0 lg:top-auto lg:bottom-6 font-fira font-medium text-6xl md:text-8xl tracking-tighter text-slate-800/90 -z-10">
        Work Experience.
      </h2>
      <div className="grid grid-cols-7 gap-6 items-center mx-auto max-w-7xl w-full h-full">
        <div className="col-span-3">card</div>
        <div className="col-span-4">
          <AccordionList />
        </div>
      </div>
    </section>
  );
}

export default Experience;
