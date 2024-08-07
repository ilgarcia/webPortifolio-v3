import ExperienceAccordion from "./ExperienceAccordion";
import {
  ExperienceAnimations,
  HorizontalAnimations,
} from "./ExperienceAnimations";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <ExperienceAnimations
      id="experience"
      className="flex items-center w-full relative min-h-screen bg-baseBackground pt-[4.5rem] px-[5%] overflow-hidden"
    >
      <h2 className="absolute -left-6 top-0 lg:top-auto lg:bottom-6 font-fira font-medium text-6xl md:text-8xl tracking-tighter text-slate-800/90 -z-10">
        Work Experience.
      </h2>
      <div className="grid grid-cols-7 gap-6 items-center mx-auto max-w-7xl w-full h-full">
        <HorizontalAnimations direction="left" className="col-span-3">
          <ExperienceCard />
        </HorizontalAnimations>
        <HorizontalAnimations direction="right" className="col-span-4">
          <ExperienceAccordion />
        </HorizontalAnimations>
      </div>
    </ExperienceAnimations>
  );
}

export default Experience;
