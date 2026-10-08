"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
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

  const isDark =
    (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="relative flex h-11 w-20 items-center rounded-full border border-border bg-muted px-1 transition-colors duration-200 focus:outline-none"
    >
      {/* Sliding Icon */}
      <div
        className={`absolute flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-transform duration-200 ease-out ${
          isDark
            ? "translate-x-9 bg-slate-900 text-yellow-300"
            : "translate-x-0 bg-white text-orange-500"
        }`}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </div>

      {/* Background Icons */}
      <div className="pointer-events-none flex w-full justify-between px-2 text-muted-foreground">
        <Sun size={16} />
        <Moon size={16} />
      </div>
    </button>
  );
}