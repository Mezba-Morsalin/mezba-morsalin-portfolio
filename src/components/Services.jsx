"use client";

import { motion } from "motion/react";
import {
  Globe,
  Database,
  Smartphone,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: Globe,
    description:
      "Building fast, responsive, accessible, and interactive user interfaces with React, Next.js, JavaScript, and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    icon: Database,
    description:
      "Developing REST APIs, authentication systems, database integrations, and scalable backend services using Node.js, Express.js, and MongoDB.",
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    description:
      "Creating clean, user-friendly interfaces that adapt seamlessly across desktops, tablets, and mobile devices.",
  },
  {
    title: "Deployment",
    icon: Rocket,
    description:
      "Deploying and maintaining production-ready web applications using platforms such as Vercel and Netlify with modern deployment practices.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[5px] text-muted-foreground sm:text-sm sm:tracking-[8px]">
            Services
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            What{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-muted-foreground bg-clip-text text-transparent">
              I Do
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            I create modern, scalable, and user-focused web applications with
            clean architecture, responsive interfaces, and reliable
            functionality.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div key={service.title} variants={item} whileHover={{ y: -6 }} transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-foreground/40 hover:bg-secondary/40 sm:rounded-3xl sm:p-7"
              >
                {/* Subtle monochrome hover accent */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-foreground/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon */}
                <motion.div whileHover={{ rotate: -6, scale: 1.05 }} transition={{ duration: 0.25 }} className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background sm:size-16"
                >
                  <Icon size={28} strokeWidth={1.7} />
                </motion.div>

                {/* Number */}
                <p className="mb-3 font-mono text-xs tracking-[3px] text-muted-foreground/70">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Title */}
                <h3 className="mb-4 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-px w-10 bg-border transition-all duration-300 group-hover:w-full group-hover:bg-foreground/40" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}