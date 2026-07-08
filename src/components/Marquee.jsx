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
    <div className="mx-4 shrink-0">
      <div className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 p-[1px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,.35)]">
        <div className="flex items-center gap-3 rounded-full bg-background px-6 py-3">
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
    <section  className="relative w-full overflow-hidden py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 px-6 text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
            Technologies
          </p>

          <h2 className="text-4xl font-mono font-bold md:text-5xl">
            Tools
            <span className="bg-linear-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {" "}
              I Use
            </span>
          </h2>
        </div>

        {/* Marquee 1 */}
        <div className="overflow-hidden">
          <Marquee
            autoFill
            gradient={false}
            speed={45}
            pauseOnHover
          >
            {technologies.map((tech) => (
              <TechCard key={tech} tech={tech} />
            ))}
          </Marquee>
        </div>

        <div className="my-8" />

        {/* Marquee 2 */}
        <div className="overflow-hidden">
          <Marquee
            autoFill
            gradient={false}
            direction="right"
            speed={40}
            pauseOnHover
          >
            {[...technologies].reverse().map((tech) => (
              <TechCard key={tech} tech={tech} />
            ))}
          </Marquee>
        </div>

        <div className="my-8" />

        {/* Marquee 3 */}
        <div className="overflow-hidden">
          <Marquee
            autoFill
            gradient={false}
            speed={50}
            pauseOnHover
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