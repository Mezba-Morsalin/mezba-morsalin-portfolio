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
      "Building fast, responsive, and accessible user interfaces with React, Next.js, and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    icon: Database,
    description:
      "Developing secure REST APIs, authentication systems, and scalable backend services using Node.js, Express, and MongoDB.",
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    description:
      "Designing responsive, user-friendly interfaces that deliver a seamless experience across all devices.",
  },
  {
    title: "Deployment",
    icon: Rocket,
    description:
      "Deploying and maintaining production-ready applications with Vercel, Netlify, and modern deployment workflows.",
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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
            Services
          </p>

          <h2 className="text-4xl font-bold font-mono md:text-5xl">
            What{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              I Do
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            I create fast, scalable and modern web applications with
            clean architecture and beautiful user experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="rounded-3xl border border-sky-500/40 hover:border-sky-500 hover:shadow-[0_0_35px_rgba(14,165,233,.18)] shadow bg-card/50 p-8 backdrop-blur-md"
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    backgroundColor: "#0ea5e9",
                    color: "#ffffff",
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500"
                >
                  <Icon size={30} />
                </motion.div>

                <h3 className="mb-4 text-xl font-bold font-mono">
                  {service.title}
                </h3>

                <motion.p
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="leading-7 text-muted-foreground"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}