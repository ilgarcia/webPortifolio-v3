"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

import { useSectionStore } from "@/store/section";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeSwitch() {
  const { setTheme } = useTheme();
  const { section } = useSectionStore();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className="dark:hover:bg-gray-800 hover:backdrop-opacity-10"
          variant="ghost"
          size="icon"
          aria-label="Switch Theme"
        >
          <SunIcon
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            )}
          />
          <MoonIcon
            className={cn(
              "absolute h-[1.2rem] text-white w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[101]" align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");
          }}
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
