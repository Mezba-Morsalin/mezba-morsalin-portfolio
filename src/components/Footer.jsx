
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

const menus = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Mezba-Morsalin",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mezba-morsalin/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/developermejbah",
    label: "Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo & Description */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center"
        >
          <Link
            href="#home"
            className="inline-block"
            aria-label="Go to homepage"
          >
            <h2 className="bg-gradient-to-r from-foreground via-foreground/70 to-muted-foreground bg-clip-text font-mono text-4xl font-black text-transparent">
              Mezba<span className="text-foreground">.</span>
              Morsalin
            </h2>
          </Link>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
            Passionate Frontend Developer focused on crafting beautiful,
            responsive, and high-performance web experiences with modern
            frontend technologies and full-stack capabilities.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.nav initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4" aria-label="Footer navigation"
        >
          {menus.map((menu) => (
            <motion.div
              key={menu.name}
              whileHover={{ y: -4 }}
            >
              <Link
                href={menu.href}
                className="group flex items-center gap-1 font-mono text-muted-foreground transition-colors hover:text-foreground"
              >
                {menu.name}

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Social Icons */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-14 flex justify-center gap-5"
        >
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${social.label} profile`} whileHover={{
                  y: -6,
                  rotate: 5,
                  scale: 1.06,
                }}
                whileTap={{ scale: 0.92 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-foreground transition-all duration-300 hover:border-foreground/50 hover:bg-foreground hover:text-background hover:shadow-lg"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row"
        >
          <p className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-sm text-transparent">
            © {new Date().getFullYear()} Mezba Morsalin. All rights reserved.
          </p>

          <motion.div
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#home"
              className="inline-block rounded-full border border-border bg-secondary px-6 py-3 font-mono text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/50 hover:bg-foreground hover:text-background"
            >
              Back To Top ↑
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
