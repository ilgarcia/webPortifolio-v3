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

  useGSAP(() => {
    gsap.to(ref.current, {
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
      {prop.children}
    </div>
  );
}

export function LeftAnimations(prop: Props) {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(ref.current, {
      y: 200,
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
      {prop.children}
    </div>
  );
}
