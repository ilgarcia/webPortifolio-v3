"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSectionStore } from "@/store/section";

import useScrollActive from "@/hooks/useScrollActive";

type Props = {
  readonly children: React.ReactNode;
  className?: string;
  id?: string;
};

interface HorizontalProps extends Props {
  direction: "left" | "right";
}

export function ExperienceAnimations(props: Props) {
  const ref = useRef(null);

  const experienceSectionOnView = useScrollActive(ref);
  const { setSection } = useSectionStore();

  useEffect(() => {
    experienceSectionOnView && setSection("#experience");
  }, [experienceSectionOnView, setSection]);

  return (
    <section ref={ref} id={props.id} className={props.className}>
      {props.children}
    </section>
  );
}

export function HorizontalAnimations(props: HorizontalProps) {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: `70% bottom`,
      },
    });

    tl.fromTo(
      ref.current,
      {
        x: props.direction == "left" ? -200 : 200,
        opacity: 0,
      },
      { 
        x: 0,
        opacity: 100,
        duration: 0.7,
      }
    );
  });

  return (
    <div ref={ref} id={props.id} className={props.className}>
      {props.children}
    </div>
  );
}