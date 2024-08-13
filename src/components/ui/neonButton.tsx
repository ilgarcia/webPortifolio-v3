"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  className?: string;
};

export default function NeonButton({ className }: Props) {
  const topTween = useRef(null);
  const rightTween = useRef(null);
  const bottomTween = useRef(null);
  const leftTween = useRef(null);

  useGSAP(() => {
    var tl = gsap.timeline({ });

    tl.fromTo(
      topTween.current,
      { left: "-100%" },
      {
        left: "100%",
        repeat: -1,
        duration: 2,
      }
    );
    tl.fromTo(
      rightTween.current,
      {
        top: "-100%",
      },
      {
        top: "100%",
        repeat: -1,
        duration: 2,
      },
      0.5
    );
    tl.fromTo(
      bottomTween.current,
      {
        right: "-100%",
      },
      {
        right: "100%",
        repeat: -1,
        duration: 2,
      },
      1
    );
    tl.fromTo(
      leftTween.current,
      {
        bottom: "-100%",
      },
      {
        bottom: "100%",
        repeat: -1,
        duration: 2,
      },
      1.5
    );
  });

  return (
    <div className={className}>
      <Link
        role="button"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        className="group duration-150 flex justify-center items-center relative h-10 w-[100px] overflow-hidden border-[.01px] border-gray-800 hover:border-none hover:bg-primary hover:shadow-resume_btn_shadow hover:webkit-reflect"
      >
        <span className="sr-only">Resume</span>
        <div
          ref={topTween}
          className="absolute left-[-100px] top-0 h-[1px] w-full bg-[linear-gradient(90deg,transparent,hsl(var(--primary)))]"
        />
        <span
          ref={rightTween}
          className="absolute right-0 top-[-100%] h-full w-[1px] bg-[linear-gradient(180deg,transparent,hsl(var(--primary)))]"
        />
        <span
          ref={bottomTween}
          className="absolute bottom-0 right-[-100%] h-[1px] w-full bg-[linear-gradient(270deg,transparent,hsl(var(--primary)))]"
        />
        <span
          ref={leftTween}
          className="absolute bottom-[-100%] left-0 h-full w-[1px] bg-[linear-gradient(360deg,transparent,hsl(var(--primary)))]"
        />
        <div className={"text-xs font-fira text-secondary-foreground"}>
          Resume
        </div>
      </Link>
    </div>
  );
}
