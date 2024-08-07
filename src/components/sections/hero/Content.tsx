import Link from "next/link";

import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

import { MouseIcon } from "@/components/layouts/SvgIcons";
import { HeroContentAnimations } from "@/components/animations/HeroAnimations";

function Content() {
  return (
    <HeroContentAnimations className="absolute top-[20%] md:top-[50%] left-0 md:-translate-y-1/2 w-full px-[5%] z-20">
      <div className="relative flex flex-col gap-4 mx-auto  max-w-7xl w-full h-full text-base md:text-lg">
        <div className="tag-animation flex items-center gap-0.5 text-xl lg:text-2xl text-secondary font-semibold after:contents-[''] after:absolute after:left-8 after:top-8 after:w-px after:h-[60vh] after:mt-2 after:bg-gradient-to-b after:from-slate-600 after:to-slate-600/5 ">
          <span className="text-3xl lg:text-4xl text-slate-600 font-extralight">
            &lt;
          </span>
          Hi There!
          <span className="text-3xl lg:text-4xl text-slate-600 font-extralight">
            &gt;
          </span>
        </div>
        <div className="flex flex-col space-y-2 ml-12 mt-2 lg:mt-4 mb-20 gap-6">
          <div className="overflow-hidden py-4">
            <h1 className="text-animation text-4xl lg:text-6xl font-bold lg:leading-10">
              I&apos;m Igor Lima Garcia
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="text-animation max-w-2xl">
              I&apos;am a dedicated software engineer specializing in crafting
              outstanding and practical digital experiences. With a lot of
              confidence, natural curiosity, and a continuous commitment to
              refining my skills, I thrive on tackling design challenges one
              project at a time.
            </p>
          </div>
          <Link
            href={"/#about"}
            className="tag-animation group absolute -bottom-4 left-[20px] flex flex-col items-center gap-2 animate-bounce"
          >
            <MouseIcon className="tag-animation fill-foreground group-hover:fill-primary scale-125" />
            <DoubleArrowDownIcon className="tag-animation text-foreground group-hover:text-primary scale-125" />
          </Link>
        </div>
      </div>
    </HeroContentAnimations>
  );
}

export default Content;
