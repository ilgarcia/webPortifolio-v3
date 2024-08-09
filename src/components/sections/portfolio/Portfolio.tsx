// "use client";

import Link from "next/link";

import { SectionNavAnimations } from "@/components/animations/SectionNavAnimations";
import { VerticalSurgeAnimations } from "@/components/animations/VerticalSurgeAnimations";

import PortfolioCard from "./PortfolioCard";

import ogImage from "@/../public/og-image.png";

function Portfolio() {
  // gsap.registerPlugin(ScrollTrigger);

  // const sectionRef = useRef(null);

  // const elementRef = useRef<HTMLDivElement>(null);
  // // const isOnScreen = useOnScreen(elementRef)

  // useEffect(() => {
  //   const q = gsap.utils.selector(sectionRef);

  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       scrub: true,
  //       onEnter: () => {
  //         gsap.fromTo(
  //           q(".qoutes-animation"),
  //           {
  //             y: "-200%",
  //           },
  //           {
  //             y: 0,
  //           }
  //         );
  //       },
  //     },
  //   });
  // }, []);

  return (
    <SectionNavAnimations
      id="portfolio"
      className="w-full relative min-h-screen bg-baseBackground pt-[4.5rem] px-[5%]"
    >
      <h2 className="absolute -rotate-90 bottom-1/2 translate-y-1/2 -translate-x-1/2 left-8 md:left-14  font-fira text-7xl md:text-8xl tracking-tighter text-slate-800/90 font-medium">
        Portfolio.
      </h2>
      <div className="flex flex-col items-center mx-auto max-w-7xl w-full gap-14">
        <VerticalSurgeAnimations className="flex flex-col items-center gap-6">
          <h3 className="vertical-animation text-4xl lg:text-6xl font-bold lg:leading-10 text-center">
            Featured Projects
          </h3>
          <div className="vertical-animation text-center max-w-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus nemo eum impedit earum, doloremque molestiae optio
          </div>
        </VerticalSurgeAnimations>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <PortfolioCard key={project.id} item={project} />
          ))}
        </div>
        <VerticalSurgeAnimations>
          <div className="vertical-animation font-medium">
            Explore more projects in{" "}
            <Link
              href=""
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

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Test",
    description: "This is a test test test test and i know , This is a test test test test and i know it, This is a test test test test and i know it",
    techStacks: ["ReactJS", "TypeScript", "Teste", "teste", "Teste", "Teste", "Teste"],
    image: ogImage,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 2,
    title: "Portfolio Test",
    description: "This is a test test test test and i know it",
    techStacks: ["ReactJS", "TypeScript"],
    image: ogImage,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 3,
    title: "Portfolio Test",
    description: "This is a test test test test and i know it",
    techStacks: ["ReactJS", "TypeScript"],
    image: ogImage,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 4,
    title: "Portfolio Test",
    description: "This is a test test test test and i know it",
    techStacks: ["ReactJS", "TypeScript"],
    image: ogImage,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 5,
    title: "Portfolio Test",
    description: "This is a test test test test and i know it",
    techStacks: ["ReactJS", "TypeScript"],
    image: ogImage,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 6,
    title: "Portfolio Test",
    description: "This is a test test test test and i know it",
    techStacks: ["ReactJS", "TypeScript"],
    image: ogImage,
    githubURL: "",
    githubApi: "",
  },
];

export default Portfolio;
