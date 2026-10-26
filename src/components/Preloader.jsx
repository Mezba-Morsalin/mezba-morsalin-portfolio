
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current = Math.min(current + 4, 100);
      setProgress(current);

      if (current >= 100) {
        setIsReady(true);
        clearInterval(interval);
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

  return (
    <AnimatePresence>
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
          {/* Minimal background glow */}
          <motion.div
            animate={{
              opacity: [0.02, 0.07, 0.02],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/10 blur-[120px]"
          />

          {/* Main content */}
          <div className="relative z-10 w-full max-w-xl px-6 text-center">
            {/* Minimal accent line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mx-auto mb-8 h-px w-14 origin-center bg-foreground"
            />

            {/* Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-2xl font-black tracking-tight text-foreground sm:text-4xl md:text-6xl"
              >
                MEZBA MORSALIN
                <span className="text-muted-foreground">.</span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 font-mono text-[10px] uppercase tracking-[4px] text-muted-foreground sm:text-xs sm:tracking-[6px]"
            >
              Frontend Developer
            </motion.p>

            {/* Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-12"
            >
              <div className="font-mono text-5xl font-light tracking-tight text-foreground sm:text-6xl">
                {progress}
                <span className="ml-1 text-2xl text-muted-foreground sm:text-3xl">
                  %
                </span>
              </div>
            </motion.div>

            {/* Simple progress bar */}
            <motion.div initial={{ opacity: 0, scaleX: 0.8 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="mx-auto mt-7 w-full max-w-xs origin-center sm:max-w-sm"
            >
              <div role="progressbar" aria-label="Portfolio loading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} className="h-px w-full overflow-hidden bg-border"
              >
                <motion.div
                  className="h-full origin-left bg-foreground"
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.12, ease: "linear" }}
                  style={{ width: "100%" }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[2px] text-muted-foreground">
                <span>{isReady ? "Ready" : "Loading"}</span>
                <span>{progress}%</span>
              </div>
            </motion.div>

            {/* Status */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-10 flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-foreground"
              />

              <AnimatePresence mode="wait">
                <motion.p key={isReady ? "ready" : "loading"} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} className="font-mono text-[9px] uppercase tracking-[3px] text-muted-foreground"
                >
                  {isReady ? "System Ready" : "Preparing Experience"}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Minimal corner details */}
          <div className="absolute left-5 top-6 font-mono text-[9px] tracking-widest text-muted-foreground/50">
            MM.
          </div>

          <div className="absolute bottom-6 right-5 font-mono text-[9px] tracking-widest text-muted-foreground/50">
            PORTFOLIO / 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
