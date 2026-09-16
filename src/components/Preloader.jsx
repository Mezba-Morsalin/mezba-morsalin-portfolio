
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        // Stay at 100% for a moment
        setTimeout(() => {
          setShowPreloader(false);
        }, 400);
      }

      setProgress(value);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background"
        >
          {/* Very Lightweight Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative w-full max-w-md px-6 text-center">

            {/* Name */}
            <h1 className="text-4xl font-black tracking-[5px] text-sky-400 md:text-6xl md:tracking-[9px]">
              MEZBA MORSALIN
            </h1>

            {/* Status */}
            <p className="mt-5 font-mono text-xs uppercase tracking-[5px] text-sky-400/70 md:text-sm md:tracking-[7px]">
              Loading Portfolio...
            </p>

            {/* Percentage */}
            <div className="mt-8 font-mono text-4xl font-bold tabular-nums text-foreground md:text-5xl">
              {progress}%
            </div>

            {/* Progress Bar */}
            <div className="mx-auto mt-6 h-1.5 w-64 overflow-hidden rounded-full bg-muted md:w-80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-[width] duration-75 ease-linear"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* Bottom Status */}
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[3px] text-muted-foreground">
              {progress === 100 ? "Ready" : "Please wait"}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}