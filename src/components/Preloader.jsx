"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Aurora */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[700px] w-[700px] rounded-full bg-sky-500 blur-[170px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[900px] w-[900px] rounded-full bg-cyan-500 blur-[220px]"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative text-center">

        <motion.h1
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="font-mono text-6xl font-black tracking-[10px]"
        >
          <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            MEZBA MORSALIN
          </span>
        </motion.h1>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-6 font-mono text-sm uppercase tracking-[8px] text-sky-500"
        >
          Initializing Portfolio...
        </motion.p>

        <div className="mx-auto mt-12 h-[4px] w-80 overflow-hidden rounded-full bg-muted">

          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "220%",
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-32 rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400"
          />

        </div>

      </div>
    </motion.div>
  );
}