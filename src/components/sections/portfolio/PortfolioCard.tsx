import { GitHubIcon } from "@/components/ui/svgIcons";
import Image from "next/image";
import Link from "next/link";

import { PortfolioContentAnimations } from "@/components/animations/PortfolioAnimations";

interface Props {
  item: Project;
}

function PortfolioCard({ item }: Props) {
  return (
    <PortfolioContentAnimations className="group relative overflow-hidden w-full h-[400px] flex flex-col shadow shadow-border border border-border rounded-lg bg-card">
      <div className="overflow-hidden">
        <Image
          priority
          alt={item.title}
          src={item.image}
          className="relative z-10 duration-1000 group-hover:scale-110 "
        />
      </div>
      <div className=" relative flex-1 after:absolute after:content-[''] after:rounded-full after:w-8 after:h-8 after:bg-primary after:-bottom-7 after:-right-7 after:origin-center after:transition-transform after:duration-500 after:ease-out group-hover:after:scale-[30] after:opacity-10">
        <div className="relative flex flex-col justify-between p-4 z-10 w-full h-full">
          <div className="space-y-2">
            <div className="flex justify-between w-full">
              <h4 className="font-medium text-lg text-primary group-hover:text-foreground">
                {item.title}
              </h4>
              {item.githubURL && (
                <Link
                  href={item.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact me on linkedin"
                  className="group/link flex space-x-1"
                >
                  <div className="fill-foreground brightness-75 group-hover/link:brightness-150">
                    Visit
                  </div>
                  <GitHubIcon className="fill-foreground brightness-75 group-hover/link:brightness-150" />
                </Link>
              )}
            </div>
            <div>{item.description}</div>
          </div>
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
            {item.techStacks.slice(0, 6).map((tech, index) => {
              return index % 2 === 0 ? (
                <div
                  key={index}
                  className="px-2 py-0.5 shadow-sm border border-border bg-white rounded-lg text-xs text-black flex justify-center items-center font-fira font-medium"
                >
                  {tech}
                </div>
              ) : (
                <div
                  key={index}
                  className="px-2 py-0.5 shadow-sm border border-border bg-secondary rounded-lg text-xs text-white flex justify-center items-center font-fira font-medium"
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PortfolioContentAnimations>
  );
}

export default PortfolioCard;
