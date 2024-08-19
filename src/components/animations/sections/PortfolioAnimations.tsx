"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function PortfolioContentAnimations(props: AnimationSectionProps) {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: `80% bottom`,
        },
      });

      tl.fromTo(
        ref.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          ease: "power1.inOut",
        }
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
