import Image from "next/image";

import skillsList from "./SkillsList";
import { cn } from "@/lib/utils";

import Signs from "@/../public/assets/about/signs.svg";
import { HorizontalAnimations } from "./AboutAnimations";

function Skills() {
  return (
    <HorizontalAnimations direction="left">
      <div className="tag-animation relative">
        <h3 className="text-4xl lg:text-6xl font-bold lg:leading-10">
          Meet the Developer
        </h3>
        <div className="absolute -top-10 -left-10">
          <Image
            className="w-14 pointer-events-none select-none"
            src={Signs}
            alt="signs"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-3 mt-10 font-fira">
        {skillsList.map((skills) => {
          return (
            <div
              key={skills.id}
              className={cn(
                "tag-animation bg-card text-card-foreground border-border border px-4 py-4 rounded shadow-md shadow-border",
                skills.classCompl
              )}
            >
              <p className="mb-2">{skills.title}</p>
              <div className="text-xs font-light flex flex-wrap space-x-2">
                {skills.stacks.map((skill, idK) => (
                  <div key={idK} className="space-x-2">
                    <span>{skill}</span>
                    {skills.stacks.length - 1 != idK && <span>/</span>}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </HorizontalAnimations>
  );
}

export default Skills;
