import Image from "next/image";

import skillsList from "@/lib/skillsList";
import { cn } from "@/lib/utils";

import Signs from "@/../public/assets/about/signs.svg";
import { HorizontalEntryAnimations } from "@/components/animations/HorizontalEntryAnimations";

function Skills() {
  return (
    <HorizontalEntryAnimations direction="left">
      <div className="horizontal-animation relative flex justify-center sm:justify-start">
        <h3 className="text-4xl lg:text-5xl font-bold lg:leading-10">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10 font-fira">
        {skillsList.map((skills) => {
          return (
            <div
              key={skills.id}
              className={cn(
                "horizontal-animation card px-4 py-4",
                skills.classCompl
              )}
            >
              <p className="mb-2">{skills.title}</p>
              <div className="text-xs font-light flex flex-wrap gap-x-2 gap-y-1">
                {skills.stacks.map((skill, idK) => (
                  <div key={idK} className="gap-x-2">
                    <span>{skill}</span>
                    {skills.stacks.length - 1 != idK && <span>/</span>}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </HorizontalEntryAnimations>
  );
}

export default Skills;
