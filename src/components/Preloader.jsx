"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [percentText, setPercentText] = useState("0");

  // Smooth Motion Value drives GPU-accelerated transforms
  const progress = useSpring(0, { stiffness: 40, damping: 15 });
  const scaleX = useTransform(progress, [0, 100], [0, 1]);

  useEffect(() => {
    // Sync text rendering efficiently without triggering layout reflows
    const unsubscribe = progress.on("change", (latest) => {
      const current = Math.round(latest);
      setPercentText(current.toString());

      if (current >= 100) {
        setIsReady(true);
      }
    });

    // Start target animation
    progress.set(100);

    // Auto-dismiss timing synced with animation
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2200);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, [progress]);

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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background [will-change:transform]"
        >
          {/* Hardware-accelerated Glow (Replaced blur-3xl with Radial Gradient) */}
          <div 
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(14,165,233,0.4) 0%, rgba(0,0,0,0) 70%)"
            }}
          />

          {/* Content Container */}
          <div className="relative w-full max-w-md px-6 text-center">
            {/* Name */}
            <h1 className="text-4xl font-black tracking-[5px] bg-linear-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent md:text-6xl md:tracking-[9px]">
              MEZBA MORSALIN
            </h1>

            {/* Status */}
            <p className="mt-5 font-mono text-xs uppercase tracking-[5px] text-sky-400/70 md:text-sm md:tracking-[7px]">
              Loading Portfolio...
            </p>

            {/* Percentage */}
            <div className="mt-8 font-mono  text-4xl font-bold tabular-nums text-foreground md:text-5xl">
              {percentText}%
            </div>

            {/* Progress Bar Container */}
            <div className="relative mx-auto mt-6 h-1.5 w-64 overflow-hidden rounded-full bg-muted md:w-80">
              <motion.div
                className="h-full w-full origin-left rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 [will-change:transform]"
                style={{ scaleX }}
              />
            </div>

            {/* Bottom Status */}
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[3px] text-muted-foreground">
              {isReady ? "Ready" : "Please wait"}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}