"use client";

import { useEffect, useRef, useState } from "react";
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
import Link from "next/link";
import ThemeToggle from "./ui/ThemeToggle";
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

const NAVBAR_OFFSET = 100;

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const frameId = useRef(null);
  const lastActive = useRef("Home");

  useEffect(() => {
    const updateScrollState = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      let currentSection = "Home";

      if (scrollY < 50) {
        currentSection = "Home";
      } else if (scrollY + windowHeight >= documentHeight - 5) {
        currentSection = "Contact";
      } else {
        const detectionLine = scrollY + NAVBAR_OFFSET + 20;

        for (const item of menus) {
          const section = document.querySelector(item.href);

          if (!section) continue;

          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;

          if (sectionTop <= detectionLine) {
            currentSection = item.name;
          } else {
            break;
          }
        }
      }

      if (lastActive.current !== currentSection) {
        lastActive.current = currentSection;
        setActive(currentSection);
      }

      frameId.current = null;
    };

    const handleScroll = () => {
      if (frameId.current !== null) return;

      frameId.current = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId.current !== null) {
        window.cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  const handleMenuClick = (item) => {
  const section = document.getElementById(item.href.slice(1));

  if (!section) return;

  setMobileMenu(false);

  lastActive.current = item.name;
  setActive(item.name);

  const targetPosition =
    section.getBoundingClientRect().top + window.scrollY - 80;

  // Update the URL without triggering native anchor navigation.
  window.history.replaceState(null, "", item.href);

  // Use only one scrolling mechanism.
  window.scrollTo({
    top: Math.max(0, targetPosition),
    behavior: "smooth",
  });
};

const handleHireMe = () => {
  const contactItem = menus.find((item) => item.name === "Contact");
  handleMenuClick(contactItem);
};

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-lg">
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
          onClick={(event) =>
            handleMenuClick(event, menus[0])
          }
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
              <button
  type="button"
  onClick={() => handleMenuClick(item)}
  aria-current={active === item.name ? "location" : undefined}
  className={`relative whitespace-nowrap font-mono text-xs font-medium tracking-wide transition-colors duration-200 xl:text-sm ${
    active === item.name
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground"
  }`}
>
  {item.name}

  {active === item.name && (
    <motion.span
      layoutId="navbar-indicator"
      className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-sky-500"
    />
  )}
</button>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={handleHireMe}
            className="whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-4 py-3 font-mono text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 xl:px-6"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setMobileMenu((previous) => !previous)}
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
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
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="space-y-2 p-4 sm:p-6">
              {menus.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(event) => handleMenuClick(event, item)}
                    aria-current={
                      active === item.name ? "location" : undefined
                    }
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-200 ${
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
                onClick={handleHireMe}
                className="mt-4 block rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 text-center font-semibold text-white shadow-[0_0_25px_rgba(14,165,233,.3)] transition-shadow duration-200 hover:shadow-[0_0_40px_rgba(14,165,233,.45)]"
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