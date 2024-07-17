"use client";

import { useEffect, useRef } from "react";

import { useSectionStore } from "@/store/section";

import useScrollActive from "@/hooks/useScrollActive";

function Contact() {
  const sectionRef = useRef(null);

  // Set Active Session
  const contactSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    contactSectionOnView && setSection("#contact");
  }, [contactSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full relative min-h-screen bg-baseBackground pt-[4.5rem] px-[5%]"
    >
      <h2 className="font-fira text-6xl md:text-8xl tracking-tighter text-slate-800/90 font-medium">
        Contact Me.
      </h2>
      <div className="mx-auto max-w-7xl w-full h-full">Contact</div>
    </section>
  );
}

export default Contact;
