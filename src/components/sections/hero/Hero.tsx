"use client";

import Image from "next/image";

import HeroBackground from "@/../public/assets/hero/bg-hero.svg";
import Content from "./Content";

function Hero() {
  return (
    <section
      id="home"
      className="w-full relative min-h-screen bg-baseBackground pt-[4.5rem]"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_0%,_#268CF530_10%,_#268CF500_100%)] -z-30" />
      <Content />
    </section>
  );
}

export default Hero;
