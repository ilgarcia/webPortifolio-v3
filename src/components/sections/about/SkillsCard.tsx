import React from "react";
import { HorizontalEntryAnimations } from "@/components/animations/HorizontalEntryAnimations";

function SkillsCard() {
  return (
    <HorizontalEntryAnimations
      direction="right"
      className="relative flex flex-wrap justify-center items-center gap-0 flex-col space-y-6 md:-space-y-6 mt-8"
    >
      <div className="horizontal-animation card relative p-4 md:p-8 w-full md:max-w-xs">
        <div className="max-w-xs mx-auto">
          <h3 className="markup mk-purple text-2xl font-bold z-10 w-fit mb-2">
            Frontend Dev
          </h3>
          <p className="relative pl-10 leading-5 before:content-['<div>'] before:-ml-8 before:opacity-30 before:block after:content-['</div>']  after:-ml-8 after:opacity-30 after:block">
            Passionate about UI/UX. working with a few projects and development
            experience in HTML, CSS, JS, React and NextJS frameworks.
          </p>
        </div>
      </div>
      <div className="horizontal-animation card relative p-4 md:p-8 w-full md:max-w-xs md:left-24">
        <div className="max-w-xs mx-auto">
          <h3 className="markup mk-orange text-2xl font-bold z-10 w-fit mb-2">
            Backend Dev
          </h3>
          <p className="pl-10 leading-5 before:content-['<div>'] before:-ml-8 before:opacity-30 before:block after:content-['</div>']  after:-ml-8 after:opacity-30 after:block">
            Excited about delving into backend development, with hands-on
            experience in Java, Node.js, and related frameworks.
          </p>
        </div>
      </div>
    </HorizontalEntryAnimations>
  );
}

export default SkillsCard;
