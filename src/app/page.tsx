import Mouse from "@/components/sections/mouse/Mouse";
import Social from "@/components/sections/social/Social";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import Experience from "@/components/sections/experience/Experience";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <main>
      <Mouse />
      <Social />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </main>
  );
}
