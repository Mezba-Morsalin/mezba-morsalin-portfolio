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
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Left Aurora */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[420px] -top-[250px] h-[900px] w-[900px] rounded-full bg-sky-500 blur-[220px]"
        />

        {/* Right Aurora */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[420px] top-0 h-[900px] w-[900px] rounded-full bg-cyan-500 blur-[220px]"
        />

        {/* Bottom Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
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

      {/* ================= Main Content Container ================= */}
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-40 px-6 pt-24 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -70,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-xs font-mono uppercase tracking-[3px] text-sky-400">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.2, 1],
                boxShadow: [
                  "0 0 0px #0ea5e9",
                  "0 0 14px #0ea5e9",
                  "0 0 0px #0ea5e9",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2.5 w-2.5 rounded-full bg-sky-400"
            />
            <span>Available For Premium Contract</span>
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Mezba Morsalin
            </span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-muted-foreground lg:text-3xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "MERN Developer",
                2000,
                "Building Modern Web Applications",
                2000,
                "React & Next.js Developer",
                2000,
                "JavaScript Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            I build modern scalable web applications using React, Next.js,
            Node.js and MongoDB with beautiful user experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_10px_rgba(14,165,233,.5)] flex items-center justify-center gap-2"
            >
              <span>With Hire Me</span>
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-3">
            <motion.a
              href="https://github.com/Mezba-Morsalin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -6,
                rotate: 6,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,.4)]"
            >
              <FaGithub className="text-lg" />
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/mezba-morsalin" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{
                y: -6,
                rotate: 6,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,.4)]"
            >
              <FaLinkedinIn className="text-lg" />
            </motion.a>

            <motion.a 
              href="https://www.facebook.com/developermejbah" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{
                y: -6,
                rotate: 6,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/40 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,.4)]"
            >
              <FaFacebook className="text-lg" />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (IMAGE) */}
        <motion.div 
          initial={{ opacity: 0, x: 70 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="relative flex items-center justify-center"
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              opacity: [0.35, 0.8, 0.35],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden md:block absolute h-[640px] w-[540px] rounded-[60px] bg-cyan-500/20 blur-[80px]"
          />

          {/* Rotating Gradient Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="hidden md:block absolute h-[610px] w-[510px] rounded-[42px] bg-sky-500"
          >
            <div className="h-full w-full rounded-[42px] bg-background" />
          </motion.div>

          {/* Rotating Diamond */}
          <motion.div
            animate={{ rotate: [45, 405] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[520px] w-[520px] overflow-hidden rounded-[70px] border border-sky-500/20"
          />

          {/* Image Wrapper */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 rounded-[40px] overflow-hidden border border-sky-500/30 bg-card p-3 shadow-[0_0_40px_rgba(14,165,233,.35)]"
          >
            <Image 
              src={bannerImg} 
              alt="Mezba" 
              width={470} 
              height={560} 
              priority 
              className="rounded-[30px]"
            />
          </motion.div>

          {/* Experience Card */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-2 top-4 sm:right-4 sm:top-6 lg:-right-8 lg:top-12 z-20 rounded-2xl lg:rounded-3xl border border-sky-500/20 bg-card/90 px-4 py-3 lg:px-6 lg:py-4 backdrop-blur-xl shadow-[0_0_20px_rgba(14,165,233,.25)]"
          >
            <div className="flex items-center gap-3">
              <Flame className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-[11px] text-muted-foreground">Experience</p>
                <h3 className="text-lg font-bold lg:text-2xl">3+ Years</h3>
              </div>
            </div>
          </motion.div>

          {/* Projects Card */}
          <motion.div
            animate={{
              y: [8, -8, 8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-2 bottom-4 sm:left-4 sm:bottom-6 lg:-left-8 lg:bottom-12 z-20 rounded-2xl lg:rounded-3xl border border-sky-500/20 bg-card/90 px-4 py-3 lg:px-6 lg:py-4 backdrop-blur-xl shadow-[0_0_20px_rgba(14,165,233,.25)]"
          >
            <div className="flex items-center gap-3">
              <Rocket className="h-5 w-5 text-sky-400" />
              <div>
                <p className="text-[11px] text-muted-foreground">Projects</p>
                <h3 className="text-lg font-bold lg:text-2xl">15+</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}