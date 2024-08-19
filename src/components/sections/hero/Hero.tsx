import Content from "./Content";
import HeroCanvas from "./HeroCanvas";
import { SectionNavAnimations } from "@/components/animations/layouts/SectionNavAnimations";

function Hero() {
  return (
    <SectionNavAnimations
      id="home"
      className="w-full relative min-h-screen bg-background-secondary pt-[4.5rem]"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_0%,_#268CF530_10%,_#268CF500_100%)] z-20" />
      <HeroCanvas />
      <Content />
    </SectionNavAnimations>
  );
}

export default Hero;
