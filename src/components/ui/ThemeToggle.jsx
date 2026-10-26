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
      <div
        className="h-11 w-20 rounded-full border border-border bg-muted"
        aria-hidden="true"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative flex h-11 w-20 items-center rounded-full border border-border bg-muted px-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Sliding Icon */}
      <span
        className={`absolute flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-out ${
          isDark
            ? "translate-x-9 bg-foreground text-background"
            : "translate-x-0 bg-background text-foreground"
        }`}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </span>

      {/* Background Icons */}
      <span className="pointer-events-none flex w-full justify-between px-2 text-muted-foreground">
        <Sun size={16} />
        <Moon size={16} />
      </span>
    </button>
  );
}
