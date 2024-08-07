import React from "react";
import { HorizontalAnimations } from "./AboutAnimations";

function SkillsCard() {
  return (
    <HorizontalAnimations
      direction="right"
      className="relative flex flex-wrap justify-center items-center gap-0 flex-col -space-y-6 mt-8"
    >
      <div className="tag-animation p-8 max-w-xs relative bg-card text-card-foreground border border-border rounded shadow-md shadow-border ">
        <h3 className="markup mk-purple text-2xl font-bold z-10 w-fit mb-2">
          Frontend Dev
        </h3>
        <p className="relative pl-10 leading-5 before:content-['<div>'] before:-ml-8 before:opacity-30 before:block after:content-['</div>']  after:-ml-8 after:opacity-30 after:block">
          Passionate about UI/UX. working with a few projects and development
          experience in HTML, CSS, JS, React and NextJS frameworks.
        </p>
      </div>
      <div className="tag-animation relative p-8 max-w-xs left-24 bg-card text-card-foreground border border-border rounded shadow-md shadow-border">
        <h3 className="markup mk-orange text-2xl font-bold z-10 w-fit mb-2">
          Backend Dev
        </h3>
        <p className="pl-10 leading-5 before:content-['<div>'] before:-ml-8 before:opacity-30 before:block after:content-['</div>']  after:-ml-8 after:opacity-30 after:block">
          Excited about delving into backend development, with hands-on
          experience in Java, Node.js, and related frameworks.
        </p>
      </div>
    </HorizontalAnimations>
  );
}

export default SkillsCard;
