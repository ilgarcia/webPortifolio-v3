import ExperienceAccordion from "./ExperienceAccordion";
import ExperienceCard from "./ExperienceCard";

import { SectionNavAnimations } from "@/components/animations/layouts/SectionNavAnimations";
import { HorizontalEntryAnimations } from "@/components/animations/HorizontalEntryAnimations";

function Experience() {
  return (
    <SectionNavAnimations
      id="experience"
      className="flex items-center w-full relative min-h-screen bg-baseBackground pt-[4.5rem] px-[5%] overflow-hidden"
    >
      <h2 className="absolute -left-6 top-20 flex flex-col  font-fira font-medium text-6xl md:text-8xl tracking-tighter text-slate-800/90 -z-10">
        <span>Work</span>
        <span>Experience.</span>
      </h2>
      <div className=" lg:grid lg:grid-cols-7 gap-10 space-y-10 items-center mx-auto max-w-7xl w-full h-full">
        <HorizontalEntryAnimations direction="left" className="lg:col-span-3">
          <ExperienceCard />
        </HorizontalEntryAnimations>
        <HorizontalEntryAnimations direction="right" className="lg:col-span-4 lg:px-5">
          <ExperienceAccordion />
        </HorizontalEntryAnimations>
      </div>
    </SectionNavAnimations>
  );
}

export default Experience;
