import Link from "next/link";

import socialLinks from "./SocialLinks";

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

      <div className="fixed bottom-0 group flex flex-col gap-2 items-center left-4 z-10">
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          style={{
            writingMode: "vertical-lr",
          }}
          aria-label="blog"
          className="flex text-xs group-hover:text-accentColor font-light tracking-[0.3em] items-center gap-2 dark:text-gray-400 font-fira"
        >
          Contact me
        </Link>
        <div className="h-24 w-[0.4px] bg-gray-400 group-hover:bg-accentColor "></div>
      </div>
    </>
  );
}

export default Social;
