"use client";

import Link from "next/link";

import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { useSectionStore } from "@/store/section";

import navlinks from "@/lib/navConfig";

import ResumeBtn from "../../ui/neonButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [opened, setOpened] = useState<boolean>(false);

  const { section } = useSectionStore();


  return (
    <Sheet open={opened} onOpenChange={(open) => setOpened(open)}>
      <SheetTrigger asChild className="block lg:hidden">
        <Button
          className="dark:text-white px-2 flex justify-center items-center"
          variant="ghost"
          aria-label="Toggle Navbar"
        >
          <HamburgerMenuIcon />
          <span className="sr-only">Toggle Navbar</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full h-full border-0">
        <nav className="py-20 w-full flex flex-col absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 gap-7 items-center">
          {navlinks.map((link) => (
            <Link
              data-active={link.href === section}
              key={link.title}
              href={link.href}
              className="navlink"
              onClick={(e) => {
                setOpened(false);
              }}
            >
              {link.title}
            </Link>
          ))}
          <ResumeBtn />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
