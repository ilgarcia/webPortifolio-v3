"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  readonly children: React.ReactNode;
  className?: string;
};

export function RightAnimations(prop: Props) {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      var tl = gsap.timeline();
      tl.fromTo(
        ref.current,
        {
          x: 50,
        },
        { x: 0, delay: 1.5, duration: 0.5 }
      );
    },
    { scope: ref }
  );

  useGSAP(() => {
    gsap.to(".social-right-animation", {
      x: 50,
      scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  });

  return (
    <div ref={ref} className={prop.className}>
      <div className="social-right-animation">{prop.children}</div>
    </div>
  );
}

export function LeftAnimations(prop: Props) {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      var tl = gsap.timeline();
      tl.fromTo(
        ref.current,
        {
          y: 250,
        },
        { y: 0, delay: 1.5, duration: 0.5 }
      );
    },
    { scope: ref }
  );

  useGSAP(() => {
    gsap.to(".social-left-animation", {
      y: 250,
      scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  });

  return (
    <div ref={ref} className={prop.className}>
      <div className="social-left-animation flex flex-col gap-2 items-center">
        {prop.children}
      </div>
    </div>
  );
}
