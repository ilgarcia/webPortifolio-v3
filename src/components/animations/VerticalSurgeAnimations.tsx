"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function VerticalSurgeAnimations(props: AnimationSectionProps) {
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
        ".vertical-animation",
        {
          y: 200,
          opacity: 0,
          stagger: 0.1,
        },
        {
          y: 0,
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

export default VerticalSurgeAnimations;
