import Link from "next/link";

import { SectionNavAnimations } from "@/components/animations/layouts/SectionNavAnimations";
import { VerticalSurgeAnimations } from "@/components/animations/VerticalSurgeAnimations";

import PortfolioCard from "./PortfolioCard";

import projectsList from "@/lib/projectsList";

// import ogImage from "@/../public/og-image.png";

function Portfolio() {
  return (
    <SectionNavAnimations
      id="portfolio"
      className="w-full relative min-h-screen bg-baseBackground pt-[4.5rem] px-[5%]"
    >
      <h2 className="bg-title absolute -rotate-90 bottom-1/2 translate-y-1/2 -translate-x-1/2 left-8 md:left-14  ">
        Portfolio.
      </h2>
      <div className="flex flex-col items-center mx-auto max-w-7xl w-full gap-14">
        <VerticalSurgeAnimations className="flex flex-col items-center gap-6">
          <h3 className="vertical-animation text-4xl lg:text-6xl font-bold lg:leading-10 text-center">
            Featured Projects
          </h3>
          <div className="vertical-animation text-center max-w-lg">
            As a developer, I embarked on a journey to bring visions to life,
            every detail is carefully considered to create the best user
            experience. Explore my work, and if you like what you see, feel free
            to contact me!
          </div>
        </VerticalSurgeAnimations>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto ">
          {projectsList.map((project) => (
            <PortfolioCard key={project.id} item={project} />
          ))}
        </div>
        <VerticalSurgeAnimations>
          <div className="vertical-animation font-medium">
            Explore more projects in{" "}
            <Link
              href="https://github.com/ilgarcia"
              target="_blank"
              aria-label="Expore more in my github profile"
              rel="noopener noreferrer"
              className="text-primary"
            >
              my github profile
            </Link>
          </div>
        </VerticalSurgeAnimations>
      </div>
    </SectionNavAnimations>
  );
}

export default Portfolio;
