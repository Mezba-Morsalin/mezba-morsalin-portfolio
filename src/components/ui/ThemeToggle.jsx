"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-20 rounded-full border border-border bg-muted" />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="relative flex h-11 w-20 items-center rounded-full border border-border bg-muted px-1 transition-colors duration-200 focus:outline-none"
    >
      <div
        className={`absolute flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-transform duration-200 ease-out transform-gpu ${
          isDark
            ? "translate-x-9 bg-slate-900 text-yellow-300"
            : "translate-x-0 bg-white text-orange-500"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              <Moon size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              <Sun size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex w-full justify-between px-2 text-muted-foreground pointer-events-none">
        <Sun size={16} />
        <Moon size={16} />
      </div>
    </button>
  );
}