import Link from "next/link"
import { ArrowRightIcon, ArrowDownIcon,  } from "@radix-ui/react-icons"

import socialLinks from "./SocialLinks"


function Social() {
  return (
    <>
    <div className="fixed z-10 right-4 bottom-[5%] md:bottom-[20%]">
      <div className="flex flex-col gap-6 items-center">
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            title={link.title}
            target="_blank"
            aria-label={link.title}
            rel="noopener noreferrer"
            href={link.link}
            className="scale-110 rounded link-outline"
          >
            {link.svg}
          </Link>
        ))}
      </div>
    </div>

    <div className="fixed bottom-0 group flex flex-col gap-2 items-center left-4">
      <Link
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
        style={{
          writingMode: "vertical-lr",
        }}
        aria-label="blog"
        className="flex text-xs group-hover:text-accentColor font-light tracking-[0.3em] items-center gap-2 dark:text-gray-400"
      >
        Contact me
      </Link>
      <div className="h-24 w-[0.4px] bg-gray-400 group-hover:bg-accentColor "></div>
    </div>

    {/* <div className="hidden md:block absolute bottom-4 right-4">
      <Link
        href="#project"
        aria-label="project"
        className="flex items-center gap-2 dark:text-gray-400"
      >
        <span className="text-sm tracking-widest">View Project</span>
        <ArrowRightIcon />
      </Link>
    </div> */}

    <Link
      href="#about"
      aria-label="about"
      className="absolute animate-bounce text-gray-600 dark:text-gray-400 hover:text-accentColor cursor-pointer bottom-4 left-[50%] -translate-x-1/2"
    >
      <div className="flex flex-col gap-1 items-center">
        {/* <Mouse size={24} />
        <ArrowDown2 size={14} /> */}
      </div>
    </Link>
  </>
  )
}



export default Social