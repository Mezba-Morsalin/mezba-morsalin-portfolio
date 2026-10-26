
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
    const lenis = window.__lenis;
    const scrollY = lenis?.scroll ?? window.scrollY;

    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;

    setScrollProgress(Math.min(100, Math.max(0, progress)));

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

  // Lenis scroll-er sathe progress sync
  const lenis = window.__lenis;

  if (lenis) {
    lenis.on("scroll", handleScroll);
  }

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);

    if (lenis) {
      lenis.off("scroll", handleScroll);
    }

    if (frameId.current !== null) {
      window.cancelAnimationFrame(frameId.current);
    }
  };
}, []);

  
const handleMenuClick = (event, item) => {
  event?.preventDefault();

  const section = document.getElementById(item.href.slice(1));

  setMobileMenu(false);

  if (!section) return;

  lastActive.current = item.name;
  setActive(item.name);

  window.history.replaceState(null, "", item.href);

  const targetPosition =
    section.getBoundingClientRect().top + window.scrollY - 80;

  window.scrollTo({
    top: Math.max(0, targetPosition),
    behavior: "smooth",
  });
};


  const handleHireMe = (event) => {
    const contactItem = menus.find((item) => item.name === "Contact");
    handleMenuClick(event, contactItem);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-xl">
      {/* Monochrome scroll progress */}
      <div className="absolute bottom-0 left-0 z-[60] h-px w-full bg-transparent">
        <div
          className="h-full bg-foreground transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:gap-4 lg:px-8">
        {/* Logo */}
        <Link href="#home" aria-label="Go to homepage" onClick={(event) => handleMenuClick(event, menus[0])} className="flex shrink-0 items-center"
        >
          <h2 className="whitespace-nowrap font-mono text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Mezba<span className="text-muted-foreground">.</span>Morsalin
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-6">
          {menus.map((item) => (
            <li key={item.name} className="shrink-0">
              <button type="button" onClick={(event) => handleMenuClick(event, item)} aria-current={active === item.name ? "location" : undefined} className={`relative whitespace-nowrap font-mono text-xs font-medium tracking-wide transition-colors duration-200 xl:text-sm ${
                  active === item.name
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}

                {active === item.name && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-foreground"
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
            className="whitespace-nowrap rounded-xl border border-foreground bg-foreground px-4 py-3 font-mono text-sm font-semibold text-background transition-colors duration-200 hover:bg-background hover:text-foreground xl:px-6"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button size="icon" variant="outline" onClick={() => setMobileMenu((previous) => !previous)} aria-label={mobileMenu ? "Close menu" : "Open menu"} aria-expanded={mobileMenu} className="shrink-0 rounded-xl border-border bg-background text-foreground hover:bg-muted lg:hidden"
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
                    className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition-colors duration-200 ${
                      active === item.name
                        ? "border-foreground bg-foreground text-background"
                        : "border-transparent text-foreground hover:border-border hover:bg-muted"
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
                className="mt-4 block rounded-xl border border-foreground bg-foreground px-6 py-3.5 text-center font-semibold text-background transition-colors duration-200 hover:bg-background hover:text-foreground"
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
