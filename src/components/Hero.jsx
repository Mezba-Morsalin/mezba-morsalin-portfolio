"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const texts = [
  "Frontend Developer",
  "React.js & Next.js Developer",
  "JavaScript Enthusiast",
  "Building Modern Web Experiences",
];

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

const floatingIconClass =
  "flex size-10 items-center justify-center rounded-xl border border-border bg-card shadow-sm backdrop-blur-md sm:size-11 md:size-12 lg:size-14";

const floatingLabelClass =
  "mt-1 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Main Content Container */}
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-12 pt-24 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16 xl:gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-w-0"
        >
          {/* Open To Work Badge */}
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-border bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[2px] text-foreground sm:px-5 sm:tracking-[3px]">
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
              className="size-2.5 shrink-0 rounded-full bg-foreground"
            />

            <span>Open to Work</span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-muted-foreground bg-clip-text text-transparent">
  Mezba Morsalin
</span>
          </h1>

          {/* Animated Title */}
          <div className="mt-6 h-10 max-w-full overflow-hidden text-[clamp(1rem,2.2vw,1.875rem)] font-semibold text-muted-foreground">
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
                className="h-10 whitespace-nowrap"
              >
                {texts[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            I build modern, responsive, and user-focused web applications
            with React, Next.js, JavaScript, and Node.js, combining clean
            code with intuitive and engaging user experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Hire Me */}
            <a href="#contact" className="inline-flex">
              <Button
  size="lg"
  className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-semibold text-background shadow-sm transition-all duration-300 hover:bg-foreground/85"
>
  <span>Hire Me</span>
  <ArrowRight className="size-4" />
</Button>
            </a>

            {/* Resume */}
            <Link
              href="https://drive.google.com/file/d/1PgoybYpterC7y1HwvRslK0A75jE502Wb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                size="lg"
                variant="outline"
                className="flex items-center justify-center gap-2 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-secondary"
              >
                <Download className="size-4 shrink-0" />
                <span>Download Resume</span>
              </Button>
            </Link>
          </div>

          {/* Social Icons */}
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
                className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CONTENT / IMAGE */}
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative flex w-full min-w-0 items-center justify-center overflow-visible"
        >
          {/* Main Container */}
          <div className="relative mx-auto aspect-square w-full max-w-[620px]">
            {/* IMAGE GLOW */}
            <div className="absolute left-1/2 top-1/2 size-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[50px] sm:blur-[70px] md:blur-[85px] lg:blur-[100px]" />

            {/* MAIN IMAGE */}
            <div className="absolute left-1/2 top-1/2 z-10 flex max-w-[88%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[22px] border border-primary/40 bg-card p-2 shadow-[0_0_20px_rgba(14,165,233,0.12)] sm:rounded-[26px] sm:p-2.5 md:rounded-[32px] md:p-3 lg:rounded-[36px] lg:shadow-[0_0_30px_rgba(14,165,233,0.15)]">
              <Image src="/assests/mezbame.png" alt="Mezba Morsalin" width={620} height={620} priority sizes="(max-width: 639px) 220px, (max-width: 767px) 300px, (max-width: 1023px) 360px, (max-width: 1279px) 420px, 500px"
                className="h-auto w-[min(68vw,220px)] rounded-[16px] object-cover sm:w-[300px] sm:rounded-[20px] md:w-[360px] md:rounded-[25px] lg:max-h-[min(500px,65vh)] lg:w-auto lg:max-w-full lg:rounded-[28px] lg:object-contain"
              />
            </div>

            {/* JAVASCRIPT */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 flex-col items-center"
            >
              <div className={floatingIconClass}>
                <i className="devicon-javascript-plain colored text-2xl sm:text-3xl lg:text-4xl" />
              </div>

              <span className={floatingLabelClass}>JavaScript</span>
            </motion.div>

            {/* REACT */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-[12%] z-20 flex flex-col items-center sm:top-[13%]"
            >
              <div className={floatingIconClass}>
                <i className="devicon-react-original colored text-2xl sm:text-3xl lg:text-4xl" />
              </div>

              <span className={floatingLabelClass}>React</span>
            </motion.div>

            {/* NEXT.JS */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center"
            >
              <div className={floatingIconClass}>
                <i className="devicon-nextjs-plain text-2xl text-foreground sm:text-3xl lg:text-4xl" />
              </div>

              <span className={floatingLabelClass}>Next.js</span>
            </motion.div>

            {/* NODE.JS */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] right-0 z-20 flex flex-col items-center sm:bottom-[13%]"
            >
              <div className={floatingIconClass}>
                <i className="devicon-nodejs-plain colored text-2xl sm:text-3xl lg:text-4xl" />
              </div>

              <span className={floatingLabelClass}>Node.js</span>
            </motion.div>

            {/* EXPRESS */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center"
            >
              <div className={floatingIconClass}>
                <i className="devicon-express-original text-2xl text-foreground sm:text-3xl lg:text-4xl" />
              </div>

              <span className={floatingLabelClass}>Express.js</span>
            </motion.div>

            {/* MONGODB */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] left-0 z-20 flex flex-col items-center sm:bottom-[13%]"
            >
              <div className={floatingIconClass}>
                <i className="devicon-mongodb-plain colored text-2xl sm:text-3xl lg:text-4xl" />
              </div>

              <span className={floatingLabelClass}>MongoDB</span>
            </motion.div>

            {/* TAILWIND CSS */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 3.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center"
            >
              <div className={floatingIconClass}>
                <i className="devicon-tailwindcss-original colored text-2xl sm:text-3xl lg:text-4xl" />
              </div>

              <span className={floatingLabelClass}>Tailwind CSS</span>
            </motion.div>

            {/* FRAMER MOTION */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 4.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-[12%] z-20 flex flex-col items-center sm:top-[13%]"
            >
              <div className={floatingIconClass}>
                <i className="devicon-framermotion-original text-2xl text-foreground sm:text-3xl lg:text-4xl" />
              </div>

              <span className={floatingLabelClass}>Framer Motion</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}