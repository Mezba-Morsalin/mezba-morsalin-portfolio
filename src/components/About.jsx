"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
    number: "React",
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

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Image Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[100px] dark:bg-cyan-500/15" />

            <div className="relative rounded-[36px] border border-sky-500/40 bg-card p-3 shadow-[0_0_30px_rgba(14,165,233,0.15)] dark:shadow-[0_0_30px_rgba(14,165,233,0.2)]">
              <Image
                src="/assests/MezbaMorsalin.png"
                alt="Mezba"
                width={430}
                height={520}
                className="rounded-[28px]"
              />
            </div>

            {/* Availability Badge */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 bottom-10 rounded-3xl border border-sky-500/20 bg-card/90 px-6 py-4 shadow-[0_0_20px_rgba(14,165,233,0.12)] backdrop-blur-xl dark:shadow-[0_0_20px_rgba(14,165,233,0.2)]"
            >
              <h3 className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-3xl font-black text-transparent">
                Open
              </h3>

              <p className="text-sm text-muted-foreground">
                Available For Work
              </p>
            </motion.div>
          </motion.div>

          {/* Right */}
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
                  <h3 className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-3xl font-black text-transparent">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}