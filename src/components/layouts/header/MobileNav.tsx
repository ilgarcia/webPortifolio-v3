import { useState } from "react";
import { useRouter } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import navlinks from "@/lib/navConfig";

import ResumeBtn from "../ResumeBtn";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
  const [opened, setOpened] = useState<boolean>(false);

  const router = useRouter();

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
        <div className="py-20 w-full flex flex-col absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 gap-6 items-center">
          {navlinks.map((navLink) => (
            <div
              className="navlink"
              key={navLink.title}
              onClick={(e) => {
                e.preventDefault();
                router.push(navLink.href);

                setOpened(false);
              }}
            >
              {navLink.title}
            </div>
          ))}
          <ResumeBtn />
        </div>
      </SheetContent>
    </Sheet>
  );
}
