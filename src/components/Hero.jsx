"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "motion/react";

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

import bannerImg from "../../public/assests/MezbaMorsalin.png";
import Link from "next/link";

const TypeAnimation = dynamic(
  () =>
    import("react-type-animation").then(
      (mod) => mod.TypeAnimation
    ),
  {
    ssr: false,
  }
);

export default function Hero() {
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

          <div className="mt-6 text-xl font-semibold text-muted-foreground sm:text-2xl lg:text-3xl min-h-[40px]">
<TypeAnimation
  sequence={[
    "MERN Stack Developer",
    2000,
    "React & Next.js Developer",
    2000,
    "JavaScript Enthusiast",
    2000,
    "Building Modern Web Apps",
    2000,
    "Crafting User Experiences",
    2000,
  ]}
  wrapper="span"
  speed={55}
  deletionSpeed={70}
  repeat={Infinity}
/>
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-muted-foreground">
            I build modern scalable web applications using React, Next.js,
            Node.js and MongoDB with beautiful user experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact">
              <Button
              size="lg"
              className="rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_10px_rgba(14,165,233,.5)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>With Hire Me</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            </a>
<Link
  href="/cv/Mezba-Morsalin.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    variant="outline"
    className="rounded-full flex items-center justify-center gap-2 w-full sm:w-auto"
  >
    <Download className="h-4 w-4" />
    <span>View Resume</span>
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
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, rotate: 6, scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/30 bg-background/50 backdrop-blur-sm transition-colors duration-200 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400"
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
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="relative flex items-center justify-center"
        >
          {/* Background Glow - Hidden on mobile to save GPU layout compute */}
          <motion.div
            animate={{
              opacity: [0.35, 0.8, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden md:block absolute h-[640px] w-[540px] rounded-[60px] bg-cyan-500/20 blur-[80px]"
          />

          {/* Rotating Gradient Border - Only runs on desktop */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="hidden md:block absolute h-[610px] w-[510px] rounded-[42px] bg-sky-500 will-change-transform"
          >
            <div className="h-full w-full rounded-[42px] bg-background" />
          </motion.div>

          {/* Rotating Diamond - Only runs on desktop */}
          <motion.div
            animate={{ rotate: [45, 405] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="hidden md:block absolute h-[520px] w-[520px] overflow-hidden rounded-[70px] border border-sky-500/20 will-change-transform"
          />

          {/* Image Wrapper - Floating effect lightened and optimized using transform directly */}
          <motion.div
            animate={{
              transform: ["translateY(-6px)", "translateY(6px)", "translateY(-6px)"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 rounded-[40px] overflow-hidden border border-sky-500/30 bg-card p-2 sm:p-3 shadow-[0_0_30px_rgba(14,165,233,0.2)] will-change-transform"
          >
            <Image 
              src={bannerImg} 
              alt="Mezba" 
              width={470} 
              height={560} 
              priority 
              className="rounded-[30px] max-w-[280px] sm:max-w-[380px] lg:max-w-none h-auto"
            />
          </motion.div>

          {/* Experience Card */}
          <motion.div
            animate={{
              transform: ["translateY(-4px)", "translateY(4px)", "translateY(-4px)"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-4 sm:right-4 sm:top-6 lg:-right-8 lg:top-12 z-20 rounded-2xl lg:rounded-3xl border border-sky-500/20 bg-card/90 px-3 py-2 lg:px-6 lg:py-4 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.15)] will-change-transform"
          >
            <div className="flex items-center gap-2 lg:gap-3">
              <Flame className="h-4 w-4 lg:h-5 lg:w-5 text-orange-500" />
              <div>
                <p className="text-[10px] lg:text-[11px] text-muted-foreground">Experience</p>
                <h3 className="text-sm font-bold lg:text-2xl">3+ Years</h3>
              </div>
            </div>
          </motion.div>

          {/* Projects Card */}
          <motion.div
            animate={{
              transform: ["translateY(4px)", "translateY(-4px)", "translateY(4px)"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 bottom-4 sm:left-4 sm:bottom-6 lg:-left-8 lg:bottom-12 z-20 rounded-2xl lg:rounded-3xl border border-sky-500/20 bg-card/90 px-3 py-2 lg:px-6 lg:py-4 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.15)] will-change-transform"
          >
            <div className="flex items-center gap-2 lg:gap-3">
              <Rocket className="h-4 w-4 lg:h-5 lg:w-5 text-sky-400" />
              <div>
                <p className="text-[10px] lg:text-[11px] text-muted-foreground">Projects</p>
                <h3 className="text-sm font-bold lg:text-2xl">15+</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}