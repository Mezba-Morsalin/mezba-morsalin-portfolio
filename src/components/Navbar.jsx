"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  BriefcaseBusiness,
  BadgeCheck,
  FolderGit2,
  Mail,
} from "lucide-react";

import ThemeToggle from "./ui/ThemeToggle";
import Link from "next/link";
import { Button } from "./ui/button";

const menus = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Services", href: "#services", icon: BriefcaseBusiness },
  { name: "Experience", href: "#experience", icon: BadgeCheck },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
  let ticking = false;

  const updateScrollProgress = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      scrollHeight > 0
        ? (window.scrollY / scrollHeight) * 100
        : 0;

    setScrollProgress(Math.min(100, Math.max(0, progress)));
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollProgress);
      ticking = true;
    }
  };

  updateScrollProgress();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // At the very top, keep Home active.
      if (window.scrollY < 50) {
        setActive("Home");
        ticking = false;
        return;
      }

      // At the bottom, activate the last section.
      if (window.scrollY + windowHeight >= pageHeight - 5) {
        setActive("Contact");
        ticking = false;
        return;
      }

      let currentSection = "Home";

      menus.forEach((menu) => {
        const section = document.querySelector(menu.href);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= scrollPosition) {
          currentSection = menu.name;
        }
      });

      setActive(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    // Set the correct section on initial render.
    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/95 lg:bg-background/85 lg:backdrop-blur-lg">
      {/* Scroll Progress Bar */}
<div className="absolute bottom-0 left-0 z-[60] h-[3px] w-full bg-transparent">
  <div
    className="h-full rounded-r-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"
    style={{
      width: `${scrollProgress}%`,
    }}
  />
</div>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3"
          aria-label="Go to homepage"
          onClick={() => {
            setActive("Home");
            closeMobileMenu();
          }}
        >
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text font-mono text-xl font-bold text-transparent">
            Mezba<span className="text-sky-500">.</span>
            Morsalin
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-10 lg:flex">
          {menus.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`relative font-mono text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                  active === item.name
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}

                {active === item.name && (
                  <motion.div
                    layoutId="navbar"
                    className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-sky-500"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={() => setActive("Contact")}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 font-mono text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setMobileMenu((prev) => !prev)}
          aria-label={mobileMenu ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileMenu}
          className="rounded-xl lg:hidden"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.16,
              ease: "easeOut",
            }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="space-y-2 p-6">
              {menus.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActive(item.name);
                      closeMobileMenu();
                    }}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-150 ${
                      active === item.name
                        ? "bg-sky-500 text-white"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon size={20} />

                    <span className="font-mono text-[15px] font-medium tracking-wide">
                      {item.name}
                    </span>
                  </a>
                );
              })}

              <div className="flex justify-center py-3">
                <ThemeToggle />
              </div>

              <a
                href="#contact"
                onClick={() => {
                  setActive("Contact");
                  closeMobileMenu();
                }}
                className="mt-4 block rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 text-center font-semibold text-white shadow-[0_0_25px_rgba(14,165,233,.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,.45)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}