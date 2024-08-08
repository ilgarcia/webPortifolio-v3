"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function HorizontalEntryAnimations(props: HorizontalAnimationProps) {
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
        ".horizontal-animation",
        {
          x: props.direction == "left" ? -300 : 300,
          opacity: 0,
          stagger: 0.1,
        },
        {
          x: 0,
          opacity: 100,
          stagger: 0.1,
          duration: 0.8
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

