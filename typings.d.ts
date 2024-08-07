type Section = "#home" | "#about" | "#portfolio" | "#experience" | "#contact"

interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
}

// Animations GSAP

type AnimationSectionProps = {
  readonly children: React.ReactNode;
  className?: string;
  id?: string;
};

interface HorizontalAnimationProps extends AnimationSectionProps {
  direction: "left" | "right";
}