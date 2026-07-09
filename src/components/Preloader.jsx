"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Glow */}
      <motion.div
        initial={false}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[500px] w-[500px] rounded-full bg-sky-500/30 blur-[100px] transform-gpu will-change-transform"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative text-center px-6">
        <motion.h1
          initial={false}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-4xl font-black tracking-[6px] text-transparent md:text-6xl md:tracking-[10px]"
        >
          MEZBA MORSALIN
        </motion.h1>

        <p className="mt-5 font-mono text-xs uppercase tracking-[6px] text-sky-500 md:text-sm md:tracking-[8px]">
          Initializing Portfolio...
        </p>

        <div className="mx-auto mt-10 h-1 w-64 overflow-hidden rounded-full bg-muted md:w-80">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "220%" }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transform-gpu"
          />
        </div>
      </div>
    </div>
  );
}