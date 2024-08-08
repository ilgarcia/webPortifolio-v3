import { SectionNavAnimations } from "@/components/animations/SectionNavAnimations";
import { VerticalSurgeAnimations } from "@/components/animations/VerticalSurgeAnimations";

import Link from "next/link";

function Contact() {
  return (
    <SectionNavAnimations
      id="contact"
      className="trigger flex flex-col items-center justify-center w-full relative min-h-screen bg-baseBackground pt-[4.5rem] overflow-x-hidden"
    >
      <h2 className="font-fira text-6xl md:text-8xl tracking-tighter text-slate-800/90 font-medium mb-6">
        Contact Me.
      </h2>
      <VerticalSurgeAnimations className="overflow-hidden py-10 w-full">
        <div className=" w-full bg-indigo-500/10">
          <div className="relative flex flex-col items-center mx-auto max-w-7xl gap-8 ">
            <h3 className="vertical-animation contact-line relative top-0 -translate-y-1/2 text-4xl text-orange-400">
              Igor Lima Garcia
            </h3>
            <div className=" flex-col items-center text-center max-w-xl">
              <h4 className="vertical-animation font-semibold">
                Text title text
              </h4>
              <p className="vertical-animation">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                expedita? Reiciendis earum cum placeat quia id necessitatibus
                ullam molestiae voluptatibus dolore neque. At aperiam, eligendi
                libero numquam minima repellendus repudiandae.
              </p>
            </div>
            <div className="vertical-animation">Another text</div>
            <div className="contact-line relative bottom-0 translate-y-1/2">
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact me on linkedin"
                  className="vertical-animation group rounded-full flex items-center gap-2 border py-[1px] px-4 bg-background hover:border-primary hover:scale-105"
                >
                  <div className="font-semibold text-foreground group-hover:text-primary">
                    in
                  </div>
                  <div className="text-xs text-foreground group-hover:text-primary">
                    Linkedin
                  </div>
                </Link>

                <Link
                  href="/"
                  aria-label="Contact me on Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vertical-animation group rounded-full flex items-center gap-2 border py-[5px] px-4 bg-background hover:border-primary hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="stroke-foreground  group-hover:stroke-primary "
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                  <div className="text-xs text-foreground group-hover:text-primary">
                    Github
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </VerticalSurgeAnimations>
    </SectionNavAnimations>
  );
}

export default Contact;
