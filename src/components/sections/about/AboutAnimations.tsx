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

export function AboutAnimations(props: Props) {
  const ref = useRef(null);

  const aboutSectionOnView = useScrollActive(ref);
  const { setSection } = useSectionStore();

  useEffect(() => {
    aboutSectionOnView ? setSection("#about") : setSection("#home");
  }, [aboutSectionOnView, setSection]);

  return (
    <section ref={ref} id={props.id} className={props.className}>
      {props.children}
    </section>
  );
}

export function HorizontalAnimations(props: HorizontalProps) {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: `70% bottom`,
        },
      });

      tl.fromTo(
        ".tag-animation",
        {
          x: props.direction == "left" ? -200 : 200,
          opacity: 0,
          stagger: 0.1,
        },
        {
          x: 0,
          opacity: 100,
          stagger: 0.1,
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} id={props.id} className={props.className}>
      {props.children}
    </div>
  );
}
