// "use client";

import Link from "next/link";
import { LeftAnimations, RightAnimations } from "./SocialAnimations";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

import socialLinks from "./SocialLinks";

function Social() {
  // gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   gsap.to(".right-socials", {
  //     x: 50,
  //     scrollTrigger: {
  //       trigger: "#contact",
  //       start: "top bottom",
  //       end: "center center",
  //       scrub: true,
  //     },
  //   });

  //   gsap.to(".left-socials", {
  //     y: 200,
  //     scrollTrigger: {
  //       trigger: "#contact",
  //       start: "top bottom",
  //       end: "center center",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <>
      <RightAnimations className="fixed z-30 right-4 bottom-[5%] lg:bottom-[20%]">
        <div className="flex flex-col gap-6 items-center">
          {socialLinks.map((link) => (
            <Link
              key={link.id}
              title={link.title}
              target="_blank"
              aria-label={link.title}
              rel="noopener noreferrer"
              href={link.link}
              className="lg:scale-125 rounded link-outline"
            >
              {link.svg}
            </Link>
          ))}
        </div>
      </RightAnimations>

      <LeftAnimations className="left-socials fixed bottom-0 group flex flex-col gap-2 items-center left-4 z-30">
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          style={{
            writingMode: "vertical-lr",
          }}
          aria-label="blog"
          className="flex text-xs text-foreground group-hover:text-primary brightness-75 group-hover:brightness-100 font-light tracking-[0.3em] items-center gap-2  font-fira"
        >
          Contact me
        </Link>
        <div className="h-24 w-[0.4px] bg-foreground group-hover:bg-primary brightness-75 group-hover:brightness-100" />
      </LeftAnimations>
    </>
  );
}

export default Social;
