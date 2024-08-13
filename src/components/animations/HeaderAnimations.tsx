"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeaderAnimations({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { top: -120 },
      { top: 0, duration: 0.7, delay: 2, ease: "Power0.easeNone" }
    );
  });

  return (
    <header ref={headerRef} className="fixed z-30 top-0 left-0 right-0">
      {children}
    </header>
  );
}

export default HeaderAnimations;
