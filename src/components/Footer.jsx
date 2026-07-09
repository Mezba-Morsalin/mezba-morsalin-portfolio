"use client";

import Link from "next/link";
import { motion } from "motion/react";

import {
  ArrowUpRight,
  Heart,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";

const menus = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Mezba-Morsalin",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mezba-morsalin",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/developermejbah",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sky-500/10 py-20">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-60 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[160px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-60 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]"
        />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Logo */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="text-center"
        >
          <Link
            href="#home"
            className="inline-block"
          >
            <h2 className="font-mono text-4xl font-black bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Mezba
              <span className="text-sky-500">.</span>
              Morsalin
            </h2>
          </Link>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
            Passionate MERN Stack Developer focused on crafting
            beautiful, scalable and high-performance web applications
            using modern technologies.
          </p>
        </motion.div>
                {/* Navigation */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
            delay: .15,
          }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8"
        >
          {menus.map((menu) => (
            <motion.div
              key={menu.name}
              whileHover={{
                y: -4,
              }}
            >
              <Link
                href={menu.href}
                className="group flex items-center gap-1 font-mono text-muted-foreground transition-colors hover:text-sky-500"
              >
                {menu.name}

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
            delay: .25,
          }}
          className="mt-14 flex justify-center gap-5"
        >
          {socials.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -8,
                  rotate: 6,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: .92,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/40 bg-card transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white hover:shadow-[0_0_35px_rgba(14,165,233,.45)]"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

        {/* Bottom */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row"
        >
          <p className="flex items-center gap-2 text-sm text-muted-foreground bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            © {new Date().getFullYear()} Mezba Morsalin.
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
            >
            </motion.span>

          </p>

          <motion.div
            whileHover={{
              y: -5,
            }}
            whileTap={{
              scale: .95,
            }}
          >
            <Link
              href="#home"
              className="rounded-full border border-sky-500/30 bg-sky-500/10 px-6 py-3 font-mono text-sm font-medium text-sky-500 transition-all duration-300 hover:bg-sky-500 hover:text-white hover:shadow-[0_0_30px_rgba(14,165,233,.45)]"
            >
              Back To Top ↑
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </footer>
  );
}