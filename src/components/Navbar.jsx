"use client";

import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">

          <h2 className="text-xl font-bold font-mono bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Mezba
            <span className="text-sky-500">.</span>
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
                className={`relative font-mono text-[15px] font-medium tracking-wide transition-colors duration-300 ${
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
                      stiffness: 380,
                      damping: 28,
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
            className="rounded-xl font-mono bg-linear-to-r from-blue-600 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <Button
  size="icon"
  variant="outline"
  onClick={() => setMobileMenu(!mobileMenu)}
  className="rounded-xl lg:hidden"
>
  {mobileMenu ? <X size={26} /> : <Menu size={26} />}
</Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="space-y-2 p-6">
              {menus.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setActive(item.name);
                      setMobileMenu(false);
                    }}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                      active === item.name
                        ? "bg-sky-500 text-white"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-mono text-[15px] font-medium tracking-wide">
  {item.name}
</span>
                  </motion.a>
                );
              })}

              <div className="flex justify-center py-3">
                <ThemeToggle />
              </div>

              <a
                href="#contact"
                className="mt-4 font-mono block rounded-xl bg-linear-to-r from-blue-600 to-cyan-400 px-5 py-3 text-center font-semibold text-white"
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