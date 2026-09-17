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
<motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative flex w-full items-center justify-center overflow-visible">
  {/* ================= MAIN CONTAINER ================= */}
  <div
    className=" relative aspect-square w-[300px] sm:w-[380px] md:w-[500px] lg:h-[620px] lg:w-[620px]">
    {/* ================= GLOW ================= */}
    <div
      className=" absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[60px] sm:h-[280px] sm:w-[280px] sm:blur-[70px] md:h-[360px] md:w-[360px] md:blur-[85px] lg:h-[420px] lg:w-[420px] lg:blur-[100px] dark:bg-cyan-500/15"/>
    {/* ================= MAIN IMAGE ================= */}
    <div
  className=" absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-sky-500/40 bg-card p-2 shadow-[0_0_20px_rgba(14,165,233,0.15)] sm:rounded-[26px] sm:p-2.5 md:rounded-[32px] md:p-3 lg:rounded-[36px] lg:p-3 lg:shadow-[0_0_30px_rgba(14,165,233,0.15)] dark:lg:shadow-[0_0_30px_rgba(14,165,233,0.2)]">
  <Image src="/assests/mezbame.png" alt="Mezba" width={620} height={620} priority className=" h-[220px] w-[220px] rounded-[16px] object-cover sm:h-[300px] sm:w-[300px] sm:rounded-[20px] md:h-[360px] md:w-[360px] md:rounded-[25px] lg:h-auto lg:w-auto lg:max-h-[500px] lg:max-w-[500px] lg:rounded-[28px] lg:object-contain"/>
</div>
    {/* ================= JAVASCRIPT ================= */}
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" absolute left-1/2 top-[-2px] z-20 flex -translate-x-1/2 flex-col items-center sm:top-[-4px] lg:top-[-5px]">
      <div
        className=" flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
        <i className="devicon-javascript-plain colored text-2xl sm:text-3xl lg:text-4xl" />
      </div>

      <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs lg:text-xs">
        JavaScript
      </span>
    </motion.div>

    {/* ================= REACT ================= */}
    <motion.div
      animate={{ y: [6, -6, 6] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" absolute right-[-2px] top-[48px] z-20 flex flex-col items-center sm:right-[-3px] sm:top-[58px] md:right-[-4px] md:top-[70px] lg:right-[-5px] lg:top-[75px]">
      <div
        className=" flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
        <i className="devicon-react-original colored text-2xl sm:text-3xl lg:text-4xl" />
      </div>

      <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs">
        React
      </span>
    </motion.div>

    {/* ================= NEXT.JS ================= */}
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" absolute right-[-2px] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center sm:right-[-3px] md:right-[-4px] lg:right-[-5px]">
      <div
        className=" flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
        <i className="devicon-nextjs-plain text-2xl sm:text-3xl lg:text-4xl" />
      </div>

      <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs">
        Next.js
      </span>
    </motion.div>

    {/* ================= NODE.JS ================= */}
    <motion.div
      animate={{ y: [6, -6, 6] }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" absolute bottom-[48px] right-[-2px] z-20 flex flex-col items-center sm:bottom-[58px] sm:right-[-3px] md:bottom-[70px] md:right-[-4px] lg:bottom-[75px] lg:right-[-5px]">
      <div
        className=" flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
        <i className="devicon-nodejs-plain colored text-2xl sm:text-3xl lg:text-4xl" />
      </div>

      <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs">
        Node.js
      </span>
    </motion.div>

    {/* ================= EXPRESS ================= */}
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{
        duration: 3.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" absolute bottom-[-2px] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center sm:bottom-[-3px] lg:bottom-[-5px]">
      <div
        className=" flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
        <i className="devicon-express-original text-2xl sm:text-3xl lg:text-4xl" />
      </div>

      <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs">
        Express.js
      </span>
    </motion.div>

    {/* ================= MONGODB ================= */}
    <motion.div
      animate={{ y: [5, -5, 5] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" absolute bottom-[48px] left-[-2px] z-20 flex flex-col items-center sm:bottom-[58px] sm:left-[-3px] md:bottom-[70px] md:left-[-4px] lg:bottom-[75px] lg:left-[-5px]">
      <div
        className=" flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
        <i className="devicon-mongodb-plain colored text-2xl sm:text-3xl lg:text-4xl" />
      </div>

      <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs">
        MongoDB
      </span>
    </motion.div>

    {/* ================= TAILWIND ================= */}
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{
        duration: 3.7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" absolute left-[-2px] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center sm:left-[-3px] md:left-[-4px] lg:left-[-5px]">
      <div
        className=" flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-card shadow-lg backdrop-blur sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
        <i className="devicon-tailwindcss-original colored text-2xl sm:text-3xl lg:text-4xl" />
      </div>

      <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs">
        Tailwind CSS
      </span>
    </motion.div>

    {/* ================= FRAMER MOTION ================= */}
    <motion.div
      animate={{ y: [5, -5, 5] }}
      transition={{
        duration: 4.1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" absolute left-[-2px] top-[48px] z-20 flex flex-col items-ce sm:left-[-3px] sm:top-[58px] md:left-[-4px] md:top-[70px] lg:left-[-5px] lg:top-[75px]">
      <div
        className=" flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-card shadow-lg backdrop-blur sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
        <i className="devicon-framermotion-original text-2xl sm:text-3xl lg:text-4xl" />
      </div>

      <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs">
        Framer Motion
      </span>
    </motion.div>
  </div>
</motion.div>
      </div>
    </section>
  );
}
