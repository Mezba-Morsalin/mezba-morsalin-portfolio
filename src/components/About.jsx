"use client";

import { motion } from "motion/react";

const stats = [
  {
    number: "10+",
    title: "Projects Built",
  },
  {
    number: "20+",
    title: "Technologies",
  },
  {
    number: "React & Next.js",
    title: "Core Expertise",
  },
  {
    number: "∞",
    title: "Learning",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[5px] text-foreground sm:text-sm sm:tracking-[8px]">
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Building{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-muted-foreground bg-clip-text text-transparent">
              Modern Web Solutions
            </span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid min-w-0 grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Crafting Modern,
              <br className="hidden sm:block" /> Scalable Web Applications.
            </h3>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">
              I&apos;m{" "}
              <strong className="text-foreground">Mezba Morsalin</strong>, a
              passionate Frontend Developer specializing in modern web
              technologies, including React.js, Next.js, JavaScript, and
              Tailwind CSS. I also have experience with Node.js, Express.js,
              and MongoDB for building complete web solutions.
            </p>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
              I enjoy transforming ideas into modern, responsive, and
              user-friendly web applications through clean code, thoughtful
              design, and seamless user experiences. I continuously improve my
              skills and explore new technologies to build meaningful digital
              experiences that are both functional and visually engaging.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5">
              {stats.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="min-w-0 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-foreground/40 hover:shadow-lg sm:rounded-3xl sm:p-6"
                >
                  <h3 className="break-words text-base font-black text-foreground sm:text-xl">
  {item.number}
</h3>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm md:text-base">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="relative flex min-h-0 w-full min-w-0 items-center justify-center px-0 py-4 sm:px-3 sm:py-6 lg:min-h-[540px] lg:px-0 xl:min-h-[600px]"
          >
            {/* Editor Glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute hidden h-[420px] w-[420px] rounded-full bg-foreground/5 blur-[100px] lg:block xl:h-[500px] xl:w-[500px]"
            />

            {/* Rotating Gradient Border */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute hidden h-[500px] w-[500px] rounded-[45px] bg-gradient-to-r from-foreground/20 via-muted-foreground/30 to-foreground/10 opacity-40 lg:block xl:h-[540px] xl:w-[540px]"
            >
              <div className="m-[1px] h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[44px] bg-background" />
            </motion.div>

            {/* Main Editor */}
            <div className="relative z-10 w-full min-w-0 max-w-[470px]">
              {/* Editor Window */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-lg will-change-transform sm:rounded-3xl"
              >
                {/* Editor Header */}
                <div className="flex h-12 items-center justify-between border-b border-border bg-muted px-3 sm:h-14 sm:px-5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
                  </div>

                  <div className="font-mono text-[10px] text-muted-foreground sm:text-xs">
                    developer.js
                  </div>

                  <div className="w-7 sm:w-10" />
                </div>

                {/* Code Content */}
                <div className="w-full min-w-0 overflow-x-auto px-2 py-5 sm:px-4 sm:py-6 md:px-6">
                  <div className="flex min-w-max gap-2 font-mono text-[9px] leading-[1.95] sm:gap-3 sm:text-[10px] sm:leading-7 md:gap-4 md:text-xs lg:text-sm">
                    {/* Line Numbers */}
                    <div className="shrink-0 select-none text-right text-slate-600">
                      {Array.from({ length: 13 }, (_, index) => (
                        <div key={index}>
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      ))}
                    </div>

                    {/* Code */}
                    <div className="whitespace-nowrap">
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-yellow-300">developer</span>{" "}
                        <span className="text-white">= {"{"}</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-red-300">name</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-green-400">
                          &quot;Mezba Morsalin&quot;
                        </span>
                        <span className="text-white">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-red-300">title</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-green-400">
                          &quot;Frontend Developer&quot;
                        </span>
                        <span className="text-white">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-red-300">skills</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-white">[</span>
                      </div>

                      <div className="pl-5 text-green-400 sm:pl-8">
                        &quot;HTML&quot;, &quot;CSS&quot;, &quot;JavaScript&quot;,
                      </div>

                      <div className="pl-5 text-green-400 sm:pl-8">
                        &quot;React.js&quot;, &quot;Next.js&quot;,
                      </div>

                      <div className="pl-5 text-green-400 sm:pl-8">
                        &quot;Tailwind CSS&quot;, &quot;Node.js&quot;,
                      </div>

                      <div className="pl-5 text-green-400 sm:pl-8">
                        &quot;Express.js&quot;, &quot;MongoDB&quot;,
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-white">]</span>
                        <span className="text-white">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-red-300">passion</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-green-400">
                          &quot;Building modern web experiences&quot;
                        </span>
                        <span className="text-white">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-red-300">available</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-blue-400">true</span>
                        <span className="text-white">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-red-300">location</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-green-400">
                          &quot;Bangladesh&quot;
                        </span>
                      </div>

                      <div>
                        <span className="text-white">{"}"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex h-8 items-center justify-between border-t border-border bg-muted px-3 sm:px-4">
                  <div className="flex items-center gap-1.5 text-[8px] text-slate-400 sm:gap-2 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2" />
                    Available for work
                  </div>

                  <span className="hidden font-mono text-[8px] text-slate-500 sm:block sm:text-[10px]">
                    UTF-8 · JavaScript
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}