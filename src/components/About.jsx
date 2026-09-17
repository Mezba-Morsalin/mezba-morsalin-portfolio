"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Flame, Rocket } from "lucide-react";

const stats = [
  {
    number: "15+",
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
      className="relative scroll-mt-20 overflow-hidden bg-background py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Left Glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[140px] dark:bg-sky-500/15" />

        {/* Right Glow */}
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px] dark:bg-cyan-500/15" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/5 blur-[160px] dark:bg-sky-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
            About Me
          </p>

          <h2 className="font-mono text-4xl font-black md:text-5xl">
            Building{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Modern Web Solutions
            </span>
          </h2>
        </div>

        <div className="grid items-center gap-30 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              Crafting Modern,
              <br />
              Scalable Web Applications.
            </h3>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              I&apos;m <strong>Mezba Morsalin</strong>, a passionate Frontend
              Developer specializing in modern web technologies, including
              React.js, Next.js, JavaScript, and Tailwind CSS. I also have
              experience working with Node.js, Express.js, and MongoDB to build
              complete web solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I&apos;m passionate about transforming ideas into modern,
              responsive, and user-friendly web applications through clean
              code, thoughtful design, and seamless user experiences. I
              continuously explore new technologies, improve my skills, and
              strive to build meaningful digital experiences that are both
              functional and visually engaging.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-sky-500/30 bg-card p-6 transition-all duration-300 hover:border-sky-500/60 hover:shadow-[0_0_35px_rgba(14,165,233,0.12)] dark:border-sky-500/40 dark:hover:shadow-[0_0_35px_rgba(14,165,233,0.18)]"
                >
                  <h3 className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-xl font-black text-transparent">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className=" relative flex min-h-[540px] w-full items-center justify-center px-1 sm:min-h-[600px] sm:px-3 md:min-h-[640px] md:px-4 lg:min-h-[650px] lg:px-0">
      {/* BACKGROUND GLOW */}
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
        className=" pointer-events-none absolute hidden h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[100px] lg:block xl:h-[500px] xl:w-[500px]"/>

      {/* ROTATING GRADIENT BORDER */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className=" pointer-events-none absolute hidden h-[500px] w-[500px] rounded-[45px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-40 lg:block xl:h-[540px] xl:w-[540px]">
        <div
          className=" m-[1px] h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[44px] bg-background"/>
      </motion.div>

      {/* MAIN EDITOR AREA */}
      <div
        className=" relative z-10 w-full max-w-[470px]">
        {/* DEVELOPER.JS CODE WINDOW */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" relative w-full overflow-hidden rounded-2xl border border-sky-500/30 bg-[#080d1a] shadow-[0_0_40px_rgba(14,165,233,0.14)] will-change-transform sm:rounded-3xl lg:shadow-[0_0_50px_rgba(14,165,233,0.18)]">
          {/* EDITOR HEADER */}
          <div
            className=" flex h-12 items-center justify-between border-b border-white/10 bg-[#0d1424] px-3 sm:h-14 sm:px-5">
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

          {/* CODE CONTENT */}
          <div
            className=" w-full overflow-hidden px-3 py-5 sm:px-5 sm:py-6 md:px-6">
            <div
              className=" flex w-full gap-2 font-mono text-[8px] leading-[1.95] sm:gap-3 sm:text-[10px] sm:leading-7 md:gap-4 md:text-xs lg:text-sm">
              {/* LINE NUMBERS */}
              <div
                className=" shrink-0 select-none text-right text-slate-600">
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

              {/* CODE */}
              <div
                className=" min-w-0 flex-1 whitespace-nowrap">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">developer</span>{" "}
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

          {/* STATUS BAR */}
          <div
            className=" flex h-8 items-center justify-between border-t border-white/10 bg-[#0d1424] px-3 sm:px-4">
            <div
              className=" flex items-center gap-1.5 text-[8px] text-slate-400 sm:gap-2 sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2" />
              Available for work
            </div>

            <span
              className=" hidden font-mono text-[8px] text-slate-500 sm:block sm:text-[10px]">
              UTF-8 · JavaScript
            </span>
          </div>
        </motion.div>
      </div>

      {/* ===================================================== */}

    </motion.div>
        </div>
      </div>
    </section>
  );
}