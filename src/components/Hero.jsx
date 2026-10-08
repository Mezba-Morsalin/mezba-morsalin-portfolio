"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
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
    }, 3500);

    return () => clearInterval(interval);
  }, [texts.length]);

  const socialLinks = [
    {
      href: "https://github.com/Mezba-Morsalin",
      label: "GitHub",
      icon: <FaGithub className="text-lg" />,
    },
    {
      href: "https://www.linkedin.com/in/mezba-morsalin",
      label: "LinkedIn",
      icon: <FaLinkedinIn className="text-lg" />,
    },
    {
      href: "https://www.facebook.com/developermejbah",
      label: "Facebook",
      icon: <FaFacebook className="text-lg" />,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ================= Main Content Container ================= */}
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-12 pt-24 lg:grid-cols-2 lg:gap-40">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Open To Work Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-mono uppercase tracking-[3px] text-primary">
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
              className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(14,165,233,0.7)]"
            />

            <span>Open to Work</span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Mezba Morsalin
            </span>
          </h1>

          {/* Animated Title */}
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

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            I build modern, responsive, and user-focused web applications with
            React, Next.js, JavaScript, and Node.js, combining clean code with
            intuitive and engaging user experiences.
          </p>

          {/* ================= Action Buttons ================= */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Hire Me */}
            <a href="#contact">
              <Button
                size="lg"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(14,165,233,.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,.45)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>

            {/* Resume */}
            <Link
              href="https://drive.google.com/file/d/1PgoybYpterC7y1HwvRslK0A75jE502Wb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="flex w-full items-center justify-center gap-2 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-secondary sm:w-auto"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </Button>
            </Link>
          </div>

          {/* ================= Social Icons ================= */}
          <div className="mt-10 flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  y: -6,
                  rotate: 6,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background/60 text-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT / IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex w-full items-center justify-center overflow-visible"
        >
          {/* Main Container */}
          <div className="relative aspect-square w-[300px] sm:w-[380px] md:w-[500px] lg:h-[620px] lg:w-[620px]">
            {/* ================= IMAGE GLOW ================= */}
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[60px] sm:h-[280px] sm:w-[280px] sm:blur-[70px] md:h-[360px] md:w-[360px] md:blur-[85px] lg:h-[420px] lg:w-[420px] lg:blur-[100px]" />

            {/* ================= MAIN IMAGE ================= */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-primary/40 bg-card p-2 shadow-[0_0_20px_rgba(14,165,233,0.12)] sm:rounded-[26px] sm:p-2.5 md:rounded-[32px] md:p-3 lg:rounded-[36px] lg:p-3 lg:shadow-[0_0_30px_rgba(14,165,233,0.15)]">
              <Image
                src="/assests/mezbame.png"
                alt="Mezba Morsalin"
                width={620}
                height={620}
                priority
                className="h-[220px] w-[220px] rounded-[16px] object-cover sm:h-[300px] sm:w-[300px] sm:rounded-[20px] md:h-[360px] md:w-[360px] md:rounded-[25px] lg:h-auto lg:w-auto lg:max-h-[500px] lg:max-w-[500px] lg:rounded-[28px] lg:object-contain"
              />
            </div>

            {/* ================= JAVASCRIPT ================= */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[-2px] z-20 flex -translate-x-1/2 flex-col items-center sm:top-[-4px] lg:top-[-5px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
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
              className="absolute right-[-2px] top-[48px] z-20 flex flex-col items-center sm:right-[-3px] sm:top-[58px] md:right-[-4px] md:top-[70px] lg:right-[-5px] lg:top-[75px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
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
              className="absolute right-[-2px] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center sm:right-[-3px] md:right-[-4px] lg:right-[-5px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
                <i className="devicon-nextjs-plain text-2xl text-foreground sm:text-3xl lg:text-4xl" />
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
              className="absolute bottom-[48px] right-[-2px] z-20 flex flex-col items-center sm:bottom-[58px] sm:right-[-3px] md:bottom-[70px] md:right-[-4px] lg:bottom-[75px] lg:right-[-5px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
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
              className="absolute bottom-[-2px] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center sm:bottom-[-3px] lg:bottom-[-5px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
                <i className="devicon-express-original text-2xl text-foreground sm:text-3xl lg:text-4xl" />
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
              className="absolute bottom-[48px] left-[-2px] z-20 flex flex-col items-center sm:bottom-[58px] sm:left-[-3px] md:bottom-[70px] md:left-[-4px] lg:bottom-[75px] lg:left-[-5px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-card shadow-lg backdrop-blur-md sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
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
              className="absolute left-[-2px] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center sm:left-[-3px] md:left-[-4px] lg:left-[-5px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-card shadow-lg backdrop-blur sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
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
              className="absolute left-[-2px] top-[48px] z-20 flex flex-col items-center sm:left-[-3px] sm:top-[58px] md:left-[-4px] md:top-[70px] lg:left-[-5px] lg:top-[75px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-card shadow-lg backdrop-blur sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-14 lg:w-14">
                <i className="devicon-framermotion-original text-2xl text-foreground sm:text-3xl lg:text-4xl" />
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