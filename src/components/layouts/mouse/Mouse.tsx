"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Mouse() {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(ref.current, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        delay: 0,
      });
    });

    const hideCursor = () => {
      gsap.to(ref.current, { opacity: 0 });
    };

    const showCursor = () => {
      gsap.to(ref.current, { opacity: 1 });
    };

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);
  }, []);
  return (
    <div
      ref={ref}
      className="hidden lg:block w-4 h-4 opacity-0 pointer-events-none rounded-full border-2 border-primary dark:border-primary z-[9999] fixed -translate-x-1/2 -translate-y-1/2"
    />
  );
}
