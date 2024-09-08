import { SectionNavAnimations } from "@/components/animations/layouts/SectionNavAnimations";
import { VerticalSurgeAnimations } from "@/components/animations/VerticalSurgeAnimations";
import { EmailIcon, GitHubLineIcon } from "@/components/ui/svgIcons";

import Link from "next/link";

function Contact() {
  return (
    <SectionNavAnimations
      id="contact"
      className="flex flex-col items-center justify-center w-full relative min-h-screen bg-baseBackground pt-[4.5rem] overflow-x-hidden"
    >
      <h2 className="bg-title absolute top-24 sm:top-20  mb-6">
        Contact Me.
      </h2>
      <VerticalSurgeAnimations className="overflow-hidden py-10 w-full">
        <div className="w-full bg-primary-opacity-10">
          <div className="relative flex flex-col items-center mx-auto max-w-7xl gap-8 ">
            <div className="flex flex-col items-center">
              <h3 className="vertical-animation contact-line relative top-0 -translate-y-1/2 text-4xl text-secondary">
                Igor Lima Garcia
              </h3>
              <h4 className="vertical-animation font-bold text-primary">
                Fullstack Developer | DevOps
              </h4>
            </div>
            <div className="flex-col items-center text-center max-w-xl px-4 md:px-0">
              <p className="vertical-animation">
                I&apos;m always excited to connect with like-minded
                professionals and potential collaborators. Whether you have a
                project in mind, need assistance, or just want to say hello,
                feel free to reach out!
              </p>
            </div>
            <div className="vertical-animation">Made by Igor Lima Garcia</div>
            <div className="contact-line relative bottom-0 translate-y-1/2">
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/ilgarcia/"
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
                  href="https://github.com/ilgarcia"
                  aria-label="Contact me on Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vertical-animation group rounded-full flex items-center gap-2 border py-[5px] px-4 bg-background hover:border-primary hover:scale-105"
                >
                  <GitHubLineIcon className="stroke-foreground group-hover:stroke-primary stroke-1 w-4 h-4" />
                  <div className="text-xs text-foreground group-hover:text-primary">
                    Github
                  </div>
                </Link>
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  aria-label="Contact me on Email"
                  className="vertical-animation group rounded-full flex items-center gap-2 border py-[5px] px-4 bg-background hover:border-primary hover:scale-105"
                >
                  <EmailIcon className="stroke-foreground group-hover:stroke-primary w-4 h-4" />
                  <div className="text-xs text-foreground group-hover:text-primary">
                    Email
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
