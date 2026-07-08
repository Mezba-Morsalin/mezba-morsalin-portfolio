import About from "@/components/About";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/Marquee";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Hero />
      <About/>
      <TechMarquee />
      <Skills/>
      <Services/>
    </main>
  );
}