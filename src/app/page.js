import About from "@/components/About";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Hero />
      <About/>
      <TechMarquee />
    </main>
  );
}