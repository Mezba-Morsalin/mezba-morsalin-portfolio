"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);

  // Prevent server-client HTML mismatch errors completely
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a completely static, matching layout for SSR/Hydration safety
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
        <div className="relative text-center px-6">
          <h1 className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-4xl font-black tracking-[6px] text-transparent md:text-6xl md:tracking-[10px]">
            MEZBA MORSALIN
          </h1>
          <p className="mt-5 font-mono text-xs uppercase tracking-[6px] text-sky-500 md:text-sm md:tracking-[8px]">
            Initializing Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background select-none pointer-events-none">
      
      {/* ================= Background Glow ================= */}
      {/* Optimized: Swapped out JavaScript tracking for a native CSS keyframe loop running on the GPU */}
      <div 
        className="absolute h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-sky-500/20 blur-[80px] md:blur-[100px]" 
        style={{
          animation: 'pulseGlow 6s ease-in-out infinite',
          willChange: 'transform, opacity'
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ================= Content Area ================= */}
      <div className="relative text-center px-6">
        
        {/* Text opacity shimmer via lightweight CSS animation */}
        <h1 
          className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-4xl font-black tracking-[6px] text-transparent md:text-6xl md:tracking-[10px]"
          style={{
            animation: 'textShimmer 2.5s ease-in-out infinite',
            willChange: 'opacity'
          }}
        >
          MEZBA MORSALIN
        </h1>

        <p className="mt-5 font-mono text-xs uppercase tracking-[6px] text-sky-400 md:text-sm md:tracking-[8px] opacity-80">
          Initializing Portfolio...
        </p>

        {/* ================= Loading Bar ================= */}
        <div className="mx-auto mt-10 h-1 w-64 overflow-hidden rounded-full bg-muted md:w-80">
          {/* Using Framer Motion ONLY for the entry, while running the translate track via GPU transform */}
          <motion.div
            initial={{ transform: "translateX(-100%)" }}
            animate={{ transform: "translateX(250%)" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 will-change-transform"
          />
        </div>
      </div>

      {/* Embedded hardware-accelerated keyframe styles */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.06); opacity: 0.9; }
        }
        @keyframes textShimmer {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}