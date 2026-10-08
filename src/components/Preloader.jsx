"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
const [showPreloader, setShowPreloader] = useState(true);
const [isReady, setIsReady] = useState(false);
const [progress, setProgress] = useState(0);
const textRef = useRef(null);

useEffect(() => {
let current = 0;
const interval = setInterval(() => {
  current += 4;

  if (current >= 100) {
    current = 100;
    setIsReady(true);
    clearInterval(interval);
  }

  setProgress(current);

  if (textRef.current) {
    textRef.current.textContent = `${current}%`;
  }
}, 45);

const timer = setTimeout(() => {
  setShowPreloader(false);
}, 2000);

return () => {
  clearInterval(interval);
  clearTimeout(timer);
};

}, []);

return ( <AnimatePresence mode="wait">
{showPreloader && (
<motion.div
initial={{ opacity: 1 }}
exit={{
y: "-100%",
transition: {
duration: 0.7,
ease: [0.76, 0, 0.24, 1],
},
}}
className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background"
>
{/* Desktop Ambient Background */} <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
<motion.div
animate={{
scale: [1, 1.15, 1],
opacity: [0.18, 0.3, 0.18],
}}
transition={{
duration: 5,
repeat: Infinity,
ease: "easeInOut",
}}
className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[140px]"
/>
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
        />
      </div>

      {/* Desktop Grid */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.035] md:block dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.7) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl px-6 text-center">
        {/* Top Accent */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 70,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"
        />

        {/* Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500 bg-clip-text font-mono text-3xl font-black tracking-[3px] text-transparent sm:text-4xl md:text-6xl md:tracking-[9px]"
          >
            MEZBA MORSALIN
          </motion.h1>
        </div>

        {/* Role */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="mt-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-sky-500/40" />

          <p className="font-mono text-[10px] uppercase tracking-[3px] text-muted-foreground sm:text-xs sm:tracking-[5px]">
            Frontend Developer
          </p>

          <span className="h-px w-8 bg-sky-500/40" />
        </motion.div>

        {/* Percentage */}
        <div className="mt-10">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.35,
            }}
            className="relative inline-flex items-center justify-center"
          >
            {/* Desktop Glow */}
            <div className="absolute inset-0 hidden rounded-full bg-sky-500/10 blur-2xl md:block" />

            <div
              ref={textRef}
              className="relative font-mono text-5xl font-bold tabular-nums tracking-tight text-foreground sm:text-6xl"
            >
              {progress}%
            </div>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.45,
          }}
          className="mx-auto mt-7 w-full max-w-xs sm:max-w-sm"
        >
          <div className="relative h-1 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: progress / 100,
              }}
              transition={{
                duration: 0.15,
                ease: "linear",
              }}
              className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(14,165,233,0.5)]"
            />

            {/* Moving Light - Desktop Only */}
            <motion.div
              animate={{
                x: ["-100%", "400%"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm md:block"
            />
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[2px] text-muted-foreground">
            <span>Initializing</span>
            <span>Portfolio</span>
          </div>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />

          <AnimatePresence mode="wait">
            <motion.p
              key={isReady ? "ready" : "loading"}
              initial={{
                opacity: 0,
                y: 4,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -4,
              }}
              transition={{
                duration: 0.25,
              }}
              className="font-mono text-[10px] uppercase tracking-[3px] text-muted-foreground"
            >
              {isReady ? "System Ready" : "Loading Experience"}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Corner Details */}
      <div className="absolute left-6 top-6 font-mono text-[9px] tracking-[2px] text-muted-foreground/40">
        MM / 01
      </div>

      <div className="absolute bottom-6 right-6 font-mono text-[9px] tracking-[2px] text-muted-foreground/40">
        2026
      </div>
    </motion.div>
  )}
</AnimatePresence>

);
}