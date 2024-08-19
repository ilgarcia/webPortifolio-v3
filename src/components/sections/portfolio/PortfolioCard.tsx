import { GitHubIcon } from "@/components/ui/svgIcons";
import Image from "next/image";
import Link from "next/link";

import { PortfolioContentAnimations } from "@/components/animations/sections/PortfolioAnimations";

interface Props {
  item: Project;
}

function PortfolioCard({ item }: Props) {
  return (
    <PortfolioContentAnimations className="group card w-full h-96 overflow-hidden">
      <div className="relative z-10 overflow-hidden h-40 sm:h-44">
        <Image
          src={item.image}
          alt={item.title}
          priority
          fill
          className="duration-1000 group-hover:scale-110 object-cover"
        />

      </div>
      <div className="relative flex-1 h-56 sm:h-52 after:absolute after:content-[''] after:rounded-full after:w-8 after:h-8 after:bg-primary after:-bottom-7 after:-right-7 after:origin-center after:transition-transform after:duration-500 after:ease-out group-hover:after:scale-[35] after:opacity-20">
        <div className="relative p-4 w-full h-full z-10">
          <div className="flex justify-between w-full">
            <h4 className="font-bold text-lg text-primary group-hover:text-foreground">
              {item.title}
            </h4>
            {item.githubURL && (
              <Link
                href={item.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact me on linkedin"
                className="group/link flex space-x-1.5"
              >
                <div className="fill-foreground brightness-50 group-hover/link:brightness-150">
                  Visit
                </div>
                <GitHubIcon className="fill-foreground brightness-50 group-hover/link:brightness-150" />
              </Link>
            )}
          </div>
          <div className="font-light mt-4">{item.description}</div>
          <div className="absolute left-4 bottom-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 ">
          {item.techStacks.slice(0, 4).map((tech, index) => {
            return (
              <div
                key={index}
                className="leading-relaxed text-sm font-light border border-primary bg-background px-1.5 rounded"
              >
                {tech}
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </PortfolioContentAnimations>
    // <PortfolioContentAnimations className="group card relative flex flex-col overflow-hidden w-full h-[370px]">
    //   <div className="overflow-hidden">
    //     <Image
    //       priority
    //       alt={item.title}
    //       src={item.image}
    //       className="relative z-10 duration-1000 group-hover:scale-110 "
    //     />
    //   </div>
    //   <div className="relative flex-1 after:absolute after:content-[''] after:rounded-full after:w-8 after:h-8 after:bg-primary after:-bottom-7 after:-right-7 after:origin-center after:transition-transform after:duration-500 after:ease-out group-hover:after:scale-[30] after:opacity-10">
    //     <div className="relative flex flex-col justify-between p-4 z-10 w-full h-full">
    //       <div className="space-y-3">
    //         <div className="flex justify-between w-full">
    //           <h4 className="font-medium text-lg text-primary group-hover:text-foreground">
    //             {item.title}
    //           </h4>
    //           {item.githubURL && (
    //             <Link
    //               href={item.githubURL}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               aria-label="Contact me on linkedin"
    //               className="group/link flex space-x-1"
    //             >
    //               <div className="fill-foreground brightness-75 group-hover/link:brightness-150">
    //                 Visit
    //               </div>
    //               <GitHubIcon className="fill-foreground brightness-75 group-hover/link:brightness-150" />
    //             </Link>
    //           )}
    //         </div>
    //         <div  className="font-light px-2">{item.description}</div>
    //       </div>
    //       <div className="flex flex-wrap items-center gap-x-4 gap-y-1 ">
    //         {item.techStacks.slice(0, 6).map((tech, index) => {
    //           return (
    //             <div
    //               key={index}
    //               className="font-fira tracking-wide leading-relaxed text-xs font-light brightness-75"
    //             >
    //               {tech}
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </PortfolioContentAnimations>
  );
}

export default PortfolioCard;
