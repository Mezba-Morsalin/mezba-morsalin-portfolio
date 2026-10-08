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
      className="relative scroll-mt-20 overflow-hidden py-28"
    >
      {/* ================= Main Content ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ================= Heading ================= */}
        <div className="mb-20 text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-primary">
            About Me
          </p>

          <h2 className="font-mono text-4xl font-black md:text-5xl">
            Building{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Modern Web Solutions
            </span>
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-30">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              Crafting Modern,
              <br />
              Scalable Web Applications.
            </h3>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              I&apos;m{" "}
              <strong className="text-foreground">
                Mezba Morsalin
              </strong>
              , a passionate Frontend Developer specializing in modern web
              technologies, including React.js, Next.js, JavaScript, and
              Tailwind CSS. I also have experience with Node.js, Express.js,
              and MongoDB for building complete web solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I enjoy transforming ideas into modern, responsive, and
              user-friendly web applications through clean code, thoughtful
              design, and seamless user experiences. I continuously improve my
              skills and explore new technologies to build meaningful digital
              experiences that are both functional and visually engaging.
            </p>

            {/* ================= Stats ================= */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="rounded-3xl border border-primary/30 bg-card p-5 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_35px_rgba(14,165,233,0.12)] sm:p-6"
                >
                  <h3 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-black text-transparent sm:text-xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative flex min-h-[540px] w-full items-center justify-center px-1 sm:min-h-[600px] sm:px-3 md:min-h-[640px] md:px-4 lg:min-h-[650px] lg:px-0"
          >
            {/* ================= Editor Glow ================= */}
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
              className="pointer-events-none absolute hidden h-[420px] w-[420px] rounded-full bg-accent/20 blur-[100px] lg:block xl:h-[500px] xl:w-[500px]"
            />

            {/* ================= Rotating Gradient Border ================= */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute hidden h-[500px] w-[500px] rounded-[45px] bg-gradient-to-r from-accent via-primary to-purple-500 opacity-40 lg:block xl:h-[540px] xl:w-[540px]"
            >
              <div className="m-[1px] h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[44px] bg-background" />
            </motion.div>

            {/* ================= Main Editor Area ================= */}
            <div className="relative z-10 w-full max-w-[470px]">
              {/* Developer.js Code Window */}
              <motion.div
                animate={{
                  y: [-4, 4, -4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full overflow-hidden rounded-2xl border border-primary/30 bg-[#080d1a] shadow-[0_0_40px_rgba(14,165,233,0.14)] will-change-transform sm:rounded-3xl lg:shadow-[0_0_50px_rgba(14,165,233,0.18)]"
              >
                {/* ================= Editor Header ================= */}
                <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#0d1424] px-3 sm:h-14 sm:px-5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
                  </div>

                  <div className="font-mono text-[10px] text-slate-400 sm:text-xs">
                    developer.js
                  </div>

                  <div className="w-7 sm:w-10" />
                </div>

                {/* ================= Code Content ================= */}
                <div className="w-full overflow-hidden px-3 py-5 sm:px-5 sm:py-6 md:px-6">
                  <div className="flex w-full gap-2 font-mono text-[8px] leading-[1.95] sm:gap-3 sm:text-[10px] sm:leading-7 md:gap-4 md:text-xs lg:text-sm">
                    {/* Line Numbers */}
                    <div className="shrink-0 select-none text-right text-slate-600">
                      <div>01</div>
                      <div>02</div>
                      <div>03</div>
                      <div>04</div>
                      <div>05</div>
                      <div>06</div>
                      <div>07</div>
                      <div>08</div>
                      <div>09</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                      <div>13</div>
                    </div>

                    {/* Code */}
                    <div className="min-w-0 flex-1 whitespace-nowrap">
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-yellow-300">
                          developer
                        </span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-white">{"{"}</span>
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

                {/* ================= Status Bar ================= */}
                <div className="flex h-8 items-center justify-between border-t border-white/10 bg-[#0d1424] px-3 sm:px-4">
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