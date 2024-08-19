"use client";

import { useEffect, useRef } from "react";

import { useSectionStore } from "@/store/section";

import useScrollActive from "@/hooks/useScrollActive";

type Props = {
  readonly children: React.ReactNode;
  className?: string;
  id: string;
};

type SectionId = {
  id: string;
  section: Section;
};

export function SectionNavAnimations(props: Props) {
  const ref = useRef(null);

  // Set Active Session
  const SectionOnView = useScrollActive(ref);
  const { setSection } = useSectionStore();

  useEffect(() => {
    const sections: SectionId[] = [
      { id: "home", section: "#home" },
      { id: "about", section: "#about" },
      { id: "portfolio", section: "#portfolio" },
      { id: "experience", section: "#experience" },
      { id: "contact", section: "#contact" },
    ];
    const section = sections.find((obj) => obj.id === props.id);

    if (section === undefined) {
      return;
    }

    SectionOnView && setSection(section.section);

  }, [SectionOnView, props.id, setSection]);

  return (
    <section ref={ref} id={props.id} className={props.className}>
      {props.children}
    </section>
  );
}
