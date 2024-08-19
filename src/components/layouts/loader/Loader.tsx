"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const ref = useRef(null);

  const [isAnimationFinished, setIsAnimationFinished] =
    useState<boolean>(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimationFinished(true);
        },
      });
      tl.to(".line", {
        height: 0,
        y:-2,
        duration: 1.5,
        stagger: {
          amount: 1,
        },
        ease: "power4.inOut",
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} aria-hidden="true">
      {!isAnimationFinished && (
        <>
          <div className="fixed w-screen h-[101vh] z-[9999] flex">
            {[...new Array(15)].map((_, index) => (
              <div key={index} className="line w-full h-full bg-background border-b-2 border-primary" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Loader;
