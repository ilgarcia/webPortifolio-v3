"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import { useSectionStore } from "@/store/section";

import { cn } from "@/lib/utils";
import navlinks from "@/lib/navConfig";

import Logo from "../Logo";
import ResumeBtn from "../ResumeBtn";
import ThemeSwitch from "../ThemeSwitch";
import MobileNav from "./MobileNav";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { top: -120 },
      { top: 0, duration: 0.7, delay: 2.2, ease: "Power0.easeNone" }
    );
  }, []);
  const { section } = useSectionStore();

  return (
    <header
      ref={headerRef}
      className="fixed z-20 top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]"
    >
      <div className="w-full h-auto bg-gray-50 shadow-sm dark:bg-transparent min-h-[4.5rem] flex items-center px-[5%]">
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <Link href="/" className="text-xl">
              <span
                className={cn(
                  "dark:text-white hover:text-accentColor cursor-pointer",
                  section === "#projects" && "dark:text-black"
                )}
              >
                <Logo />
              </span>
            </Link>
          </div>
          <div className=" hidden lg:block m-auto">
            <div className="flex gap-6 items-center font-fira">
              {navlinks.map((link) => (
                <Link
                  data-active={link.href === section}
                  key={link.title}
                  href={link.href}
                  className={cn(
                    "navlink",
                    section === "#projects" && "dark:text-black"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className=" flex items-center justify-end gap-2 lg:gap-10">
            <div className="hidden lg:block">
              <ResumeBtn />
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
