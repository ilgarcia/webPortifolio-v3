"use client";

import Link from "next/link";

import { useSectionStore } from "@/store/section";

import navlinks from "@/lib/navConfig";

function Navbar() {
  const { section } = useSectionStore();

  return (
    <div className="hidden lg:flex items-center gap-6 font-fira ">
      {navlinks.map((link) => (
        <Link
          data-active={link.href === section}
          key={link.title}
          href={link.href}
          className="navlink"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
