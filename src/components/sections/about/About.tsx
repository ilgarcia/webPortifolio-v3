import Skills from "./Skills";
import SkillsCard from "./SkillsCard";
import { AboutAnimations } from "./AboutAnimations";

function About() {
  return (
    <AboutAnimations
      id="about"
      className="relative flex items-center w-full min-h-screen bg-baseBackground pt-[4.5rem] px-[5%] overflow-hidden"
    >
      <h2 className="absolute -left-2 lg:-left-8 top-24 font-fira text-7xl md:text-9xl font-medium tracking-tighter text-slate-800/50 -rotate-12">
        About Me.
      </h2>
      <div className="lg:grid lg:grid-cols-2 items-center mx-auto max-w-7xl w-full h-full">
        <Skills />
        <SkillsCard />
      </div>
    </AboutAnimations>
  );
}

export default About;
