"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const technologies = [
  "react",
  "nextdotjs",
  "javascript",
  "tailwindcss",
  "mongodb",
  "express",
  "nodedotjs",
  "betterauth",
  "figma",
  "framer",
  "git",
  "github",
  "postman",
  "netlify",
  "vercel",
  "heroui",
  "shadcnui",
];

const names = {
  react: "React",
  nextdotjs: "Next.js",
  javascript: "JavaScript",
  tailwindcss: "Tailwind CSS",
  mongodb: "MongoDB",
  express: "Express",
  nodedotjs: "Node.js",
  betterauth: "Better Auth",
  figma: "Figma",
  framer: "Framer",
  git: "Git",
  github: "GitHub",
  postman: "Postman",
  netlify: "Netlify",
  vercel: "Vercel",
  heroui: "HeroUI",
  shadcnui: "Shadcn UI",
};

function TechCard({ tech }) {
  return (
    <div className="mx-3 shrink-0 sm:mx-4">
      <div className="rounded-full border border-border bg-card p-px transition-all duration-300 hover:border-foreground/50 hover:shadow-lg">
        <div className="flex items-center gap-3 rounded-full bg-background px-5 py-3 sm:px-6">
          <Image
            src={`/svg/${tech}.svg`}
            alt={names[tech]}
            width={24}
            height={24}
            className="h-6 w-6 object-contain dark:invert"
          />

          <span className="whitespace-nowrap text-sm font-medium text-foreground">
            {names[tech]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section
      id="technologies"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 px-4 text-center sm:mb-14 sm:px-6">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[5px] text-muted-foreground sm:text-sm sm:tracking-[8px]">
            Technologies
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Tools{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-muted-foreground bg-clip-text text-transparent">
              I use
            </span>
          </h2>
        </div>

        {/* Marquee 1 */}
        <div className="overflow-hidden">
          <Marquee autoFill gradient={false} speed={45} pauseOnHover pauseOnClick={false}
          >
            {technologies.map((tech) => (
              <TechCard key={tech} tech={tech} />
            ))}
          </Marquee>
        </div>

        <div className="my-6 sm:my-8" />

        {/* Marquee 2 */}
        <div className="overflow-hidden">
          <Marquee autoFill gradient={false} direction="right" speed={40} pauseOnHover pauseOnClick={false}
          >
            {[...technologies].reverse().map((tech) => (
              <TechCard key={tech} tech={tech} />
            ))}
          </Marquee>
        </div>

        <div className="my-6 sm:my-8" />

        {/* Marquee 3 */}
        <div className="overflow-hidden">
          <Marquee autoFill gradient={false} speed={50} pauseOnHover pauseOnClick={false}
          >
            {technologies.map((tech) => (
              <TechCard key={tech} tech={tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
