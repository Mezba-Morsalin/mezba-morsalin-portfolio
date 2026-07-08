"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import aboutImg from "../../public/assests/mezba2.png"

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
    number: "MERN",
    title: "Tech Stack",
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
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
            About Me
          </p>

          <h2 className="text-4xl font-mono font-black md:text-5xl">
  Building
  <span className="bg-linear-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
    {" "}Modern Web Solutions
  </span>
</h2>
        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
           <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[100px]" />

            <div className="relative rounded-[36px] border border-sky-500/40 bg-card p-3 shadow-[0_0_30px_rgba(14,165,233,.2)]">
              <Image
                src="/assests/mezba2.png"
                alt="Mezba"
                width={430}
                height={520}
                className="rounded-[28px]"
              />
            </div>

            <motion.div
  animate={{
    y: [-12, 12, -12],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -right-3 bottom-10 rounded-3xl border border-sky-500/20 bg-card/90 px-6 py-4 backdrop-blur-xl shadow-[0_0_20px_rgba(14,165,233,.2)]"
>
  <h3 className="bg-linear-to-r from-sky-500 to-cyan-400 bg-clip-text text-3xl font-black text-transparent">
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
              Creating Modern,
              <br />
              Fast & Beautiful Web Applications.
            </h3>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              I&apos;m <strong>Mezba Morsalin</strong>, a passionate MERN Stack Web
              Developer who enjoys building responsive, scalable and modern web
              applications using React, Next.js, Node.js and MongoDB.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I love turning ideas into real products through clean code,
              beautiful interfaces and smooth user experiences. Every project I
              build helps me improve my skills and explore new technologies.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-sky-500/40 bg-card p-6 transition-all duration-300 hover:border-sky-500 hover:shadow-[0_0_35px_rgba(14,165,233,.18)]"
                >
                  <h3 className="bg-linear-to-r from-sky-500 to-cyan-400 bg-clip-text text-3xl font-black text-transparent">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-muted-foreground">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-linear-to-r font-mono from-blue-600 to-cyan-500 text-white"
              >
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Download className="mr-2 h-5 w-5 font-mono" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}