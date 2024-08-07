"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroContentAnimations(props: AnimationSectionProps) {
  const ref = useRef(null);

  useGSAP(
    () => {
      var tl = gsap.timeline();
      tl.fromTo(
        ".tag-animation",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 100,
          delay: 2.0,
        }
      );
      tl.fromTo(
        ".text-animation",
        {
          y: 110,
        },
        {
          y: 0,
          delay: 0.1,
        },
        ">-0.3"
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={props.className}>
      {props.children}
    </div>
  );
}
