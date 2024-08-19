
import Link from "next/link";
import { LeftAnimations, RightAnimations } from "@/components/animations/sections/SocialAnimations";

import socialLinks from "@/lib/socialLinks";

function Social() {
  
  return (
    <>
      <RightAnimations className="hidden sm:block fixed z-30 right-4 bottom-[5%] lg:bottom-[20%]">
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

      <LeftAnimations className="hidden sm:block left-socials fixed bottom-0 group left-4 z-30">
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          style={{
            writingMode: "vertical-lr",
          }}
          aria-label="email"
          className="flex text-xs text-foreground group-hover:text-primary brightness-75 group-hover:brightness-100 font-light tracking-[0.3em] items-center gap-2 font-fira group-hover:font-normal"
        >
          Contact me
        </Link>
        <div className="h-24 w-px bg-foreground group-hover:bg-primary brightness-50 group-hover:brightness-100 pl-0.5" />
      </LeftAnimations>
    </>
  );
}

export default Social;
