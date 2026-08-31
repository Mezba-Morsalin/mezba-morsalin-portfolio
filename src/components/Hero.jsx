"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "motion/react";

import {
  ArrowRight,
  Download,
  Flame,
  Rocket,
} from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";

import bannerImg from "../../public/assests/mezba1.png";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Hero() {
   const texts = [
    "Frontend Developer",
    "React.js & Next.js Developer",
    "JavaScript Enthusiast",
    "Building Modern Web Experiences",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* ================= Animated Aurora Background ================= */}
      {/* Optimization: Hidden on mobile entirely, or vastly simplified. Huge blurs destroy mobile FPS. */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none md:block hidden">
        {/* Left Aurora */}
        <motion.div
          animate={{
            transform: ["translate(0px, 0px) scale(1)", "translate(120px, 80px) scale(1.25)", "translate(0px, 0px) scale(1)"],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[420px] -top-[250px] h-[900px] w-[900px] rounded-full bg-sky-500 blur-[220px] will-change-transform"
        />

        {/* Right Aurora */}
        <motion.div
          animate={{
            transform: ["translate(0px, 0px) scale(1)", "translate(-120px, -60px) scale(1.2)", "translate(0px, 0px) scale(1)"],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[420px] top-0 h-[900px] w-[900px] rounded-full bg-cyan-500 blur-[220px] will-change-transform"
        />

        {/* Bottom Glow */}
        <motion.div
          animate={{
            transform: ["scale(1)", "scale(1.3)", "scale(1)"],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[320px] -top-[180px] h-[700px] w-[700px] rounded-full bg-sky-500 blur-[120px] will-change-transform"
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Simplified static background fallback exclusively for mobile performance */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none block md:hidden opacity-20">
        <div className="absolute -left-[150px] -top-[150px] h-[400px] w-[400px] rounded-full bg-sky-500 blur-[100px]" />
        <div className="absolute -right-[150px] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500 blur-[100px]" />
      </div>

      {/* ================= Main Content Container ================= */}
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 lg:gap-40 px-6 pt-24 pb-12 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-xs font-mono uppercase tracking-[3px] text-sky-400">
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#0ea5e9]"
            />
            <span>Available For Premium Contract</span>
          </div>

          <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            I&apos;m{" "}
            <span className="bg-linear-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Mezba Morsalin
            </span>
          </h1>

          <div className="mt-6 h-[40px] overflow-hidden text-xl font-semibold text-muted-foreground sm:text-2xl lg:text-3xl">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-[40px]"
    >
      {texts[currentIndex]}
    </motion.div>
  </AnimatePresence>
</div>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-muted-foreground">
            I craft modern, scalable web applications using React, Next.js, Node.js, and MongoDB, combining clean code with intuitive and engaging user experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact">
              <Button
              size="lg"
              className="rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_10px_rgba(14,165,233,.5)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Hire Me</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            </a>
<Link
  href="https://drive.google.com/file/d/1PgoybYpterC7y1HwvRslK0A75jE502Wb/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    variant="outline"
    className="rounded-full flex items-center justify-center gap-2 w-full sm:w-auto"
  >
    <Download className="h-4 w-4" />
    <span>Download Resume</span>
  </Button>
</Link>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-3">
            {[
              { href: "https://github.com/Mezba-Morsalin", icon: <FaGithub className="text-lg" /> },
              { href: "https://www.linkedin.com/in/mezba-morsalin", icon: <FaLinkedinIn className="text-lg" /> },
              { href: "https://www.facebook.com/developermejbah", icon: <FaFacebook className="text-lg" /> }
            ].map((social, idx) => (
              <motion.a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -6, rotate: 6, scale: 1.08 }} whileTap={{ scale: 0.92 }} className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/30 bg-background/50 backdrop-blur-sm transition-colors duration-200 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CONTENT (IMAGE) */}
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

        {/* EXPERIENCE CARD */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" absolute  top-[-30px] right-25 z-30 rounded-xl border border-sky-500/20 bg-card/95 px-2.5 py-1.5 shadow-[0_0_18px_rgba(14,165,233,0.12)] backdrop-blur-md will-change-transform sm:right-0 sm:top-[-22px] sm:rounded-2xl sm:px-3 sm:py-2 md:right-[-4px] md:top-[-24px] lg:-right-24 lg:top-8 lg:rounded-3xl lg:px-6 lg:py-4 xl:-right-32">
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            <Flame className="h-3.5 w-3.5 shrink-0 text-orange-500 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />

            <div>
              <p className="text-[8px] text-muted-foreground sm:text-[9px] lg:text-[11px]">
                Experience
              </p>

              <h3 className="text-xs font-bold sm:text-sm lg:text-2xl">
                3+ Years
              </h3>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS CARD */}
        <motion.div
          animate={{
            y: [3, -3, 3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" absolute bottom-[-12px] left-35 z-30  rounded-xl border border-sky-500/20 bg-card/95 px-2.5 py-1.5 shadow-[0_0_18px_rgba(14,165,233,0.12)] backdrop-blur-md will-change-transform sm:bottom-[-22px] sm:left-0 sm:rounded-2xl sm:px-3 sm:py-2 md:bottom-[-24px] md:left-[-4px] lg:-bottom-2 lg:-left-24 lg:rounded-3xl lg:px-6 lg:py-4 xl:-left-32">
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            <Rocket className="h-3.5 w-3.5 shrink-0 text-sky-400 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />

            <div>
              <p className="text-[8px] text-muted-foreground sm:text-[9px] lg:text-[11px]">
                Projects
              </p>

              <h3 className="text-xs font-bold sm:text-sm lg:text-2xl">
                15+
              </h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* JAVASCRIPT LOGO */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute left-0 top-16 z-20 will-change-transform sm:left-1 sm:top-20 md:left-3 md:top-24 lg:-left-4 lg:top-10 xl:left-2">
        <div
          className=" flex h-9 w-9 items-center justify-center rounded-xl border border-yellow-500/30 bg-card/90 p-1.5 shadow-[0_0_15px_rgba(234,179,8,0.10)] backdrop-blur-md sm:h-11 sm:w-11 sm:rounded-xl sm:p-2 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl lg:p-3">
          <Image src="https://cdn.simpleicons.org/javascript" alt="JavaScript" width={32} height={32} unoptimized className=" h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"/>
        </div>
      </motion.div>

      {/* REACT LOGO */}
      <motion.div
        animate={{
          y: [4, -4, 4],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute right-0 top-14 z-20 will-change-transform sm:right-1 sm:top-24 md:right-3 md:top-28 lg:-right-4 lg:top-10 xl:right-2">
        <div
          className=" flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-card/90 p-1.5 shadow-[0_0_15px_rgba(6,182,212,0.10)] backdrop-blur-md sm:h-11 sm:w-11 sm:p-2 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl lg:p-3">
          <Image src="https://cdn.simpleicons.org/react" alt="React.js" width={32} height={32} unoptimized className=" h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"/>
        </div>
      </motion.div>

      {/* NEXT.JS LOGO */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute bottom-20 right-0 z-20 will-change-transform sm:right-1 sm:bottom-32 md:right-3 md:bottom-36 lg:right-24 lg:bottom-75 xl:right-2">
        <div className=" flex h-9 w-9 items-center justify-center rounded-xl border border-slate-500/30 bg-card/90 p-1.5 shadow-[0_0_15px_rgba(148,163,184,0.10)] backdrop-blur-md sm:h-11 sm:w-11 sm:p-2 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl lg:p-3">
          <Image src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" width={32} height={32} unoptimized className=" h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"/>
        </div>
      </motion.div>

      {/* NODE.JS LOGO */}
      <motion.div
        animate={{
          y: [4, -4, 4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute bottom-20 left-0 z-20 will-change-transform sm:left-1 sm:bottom-24 md:left-3 md:bottom-28 lg:-left-4 lg:bottom-75 xl:left-2">
        <div className=" flex h-9 w-9 items-center justify-center rounded-xl border border-green-500/25 bg-card/90 p-1.5 shadow-[0_0_15px_rgba(34,197,94,0.10)] backdrop-blur-md sm:h-11 sm:w-11 sm:p-2 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl lg:p-3">
          <Image src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js" width={32} height={32} unoptimized className=" h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"/>
        </div>
      </motion.div>

      {/* EXPRESS.JS LOGO */}
      <motion.div
        animate={{
          y: [3, -3, 3],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute bottom-1 left-12 z-20 will-change-transform sm:left-16 sm:bottom-0 md:left-20 lg:left-10">
        <div
          className=" flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/25 bg-card/90 p-1.5 shadow-[0_0_15px_rgba(168,85,247,0.10)] backdrop-blur-md sm:h-11 sm:w-11 sm:p-2 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl lg:p-3">
          <Image src="https://cdn.simpleicons.org/express/ffffff" alt="Express.js" width={32} height={32} unoptimized className=" h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"/>
        </div>
      </motion.div>

      {/* MONGODB LOGO */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute bottom-1 right-12 z-20 will-change-transform sm:right-16 sm:bottom-0 md:right-20 lg:right-14">
        <div
          className=" flex h-9 w-9 items-center justify-center rounded-xl border border-green-500/25 bg-card/90 p-1.5 shadow-[0_0_15px_rgba(34,197,94,0.10)] backdrop-blur-md sm:h-11 sm:w-11 sm:p-2 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl lg:p-3">
          <Image src="https://cdn.simpleicons.org/mongodb" alt="MongoDB" width={32} height={32} unoptimized className=" h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"/>
        </div>
      </motion.div>

      {/* TAILWIND CSS LOGO */}
      <motion.div
        animate={{
          y: [3, -3, 3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute bottom-0 left-1/2 z-20 -translate-x-1/2 will-change-transform">
        <div
          className=" flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/25 bg-card/90 p-1.5 shadow-[0_0_15px_rgba(6,182,212,0.10)] backdrop-blur-md sm:h-11 sm:w-11 sm:p-2 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl lg:p-3">
          <Image src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" width={32} height={32} unoptimized className=" h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"/>
        </div>
      </motion.div>
    </motion.div>

      </div>
    </section>
  );
}