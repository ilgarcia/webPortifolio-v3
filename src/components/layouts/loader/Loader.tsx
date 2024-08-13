"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LoaderAnimationIcon } from "@/components/ui/svgIcons";

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
      tl.to(".counter", {
        delay: 1.1,
        opacity: 0,
        duration: 0.2,
      });
      tl.to(".line", {
        height: 0,
        duration: 1.5,
        stagger: {
          amount: 0.5,
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
          <div className="counter fixed top-0 left-0 counter w-screen h-screen z-[10000] bg-background p-10 flex justify-center items-center text-5xl space-x-2">
            <LoaderAnimationIcon className="fill-primary stroke-primary" />
          </div>
          <div className="fixed w-screen h-screen z-[9999] flex">
            {[...new Array(20)].map((_, index) => (
              <div key={index} className="line w-full h-full bg-background" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Loader;
