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
        scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
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

      if (window.scrollY < 50) {
        setActive("Home");
        ticking = false;
        return;
      }

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

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => setMobileMenu(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/95 lg:bg-background/85 lg:backdrop-blur-lg">
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 z-[60] h-[3px] w-full bg-transparent">
        <div
          className="h-full rounded-r-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:gap-4 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          aria-label="Go to homepage"
          onClick={() => {
            setActive("Home");
            closeMobileMenu();
          }}
          className="flex shrink-0 items-center"
        >
          <h2 className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text font-mono text-lg font-bold text-transparent sm:text-xl">
            Mezba<span className="text-sky-500">.</span>Morsalin
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-6">
          {menus.map((item) => (
            <li key={item.name} className="shrink-0">
              <a
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`relative whitespace-nowrap font-mono text-xs font-medium tracking-wide transition-colors duration-200 xl:text-sm ${
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

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={() => setActive("Contact")}
            className="whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-4 py-3 font-mono text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 xl:px-6"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setMobileMenu((prev) => !prev)}
          aria-label={mobileMenu ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileMenu}
          className="shrink-0 rounded-xl lg:hidden"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence initial={false}>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="space-y-2 p-4 sm:p-6">
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
                className="mt-4 block rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 text-center font-semibold text-white shadow-[0_0_25px_rgba(14,165,233,.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,.45)]"
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