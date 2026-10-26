"use client";

import { motion } from "motion/react";
import {
  Code2,
  MonitorSmartphone,
  Database,
  Rocket,
} from "lucide-react";

const journey = [
  {
    year: "2023",
    title: "Started Programming",
    icon: Code2,
    description:
      "Began my web development journey by learning HTML, CSS, and JavaScript fundamentals while building small projects and developing a strong foundation in web development.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    icon: MonitorSmartphone,
    description:
      "Focused on frontend development by building responsive and interactive web interfaces with React, Tailwind CSS, Next.js, and modern UI libraries.",
  },
  {
    year: "2025",
    title: "Backend Development",
    icon: Database,
    description:
      "Expanded into backend development by working with Node.js, Express.js, MongoDB, REST APIs, authentication, and full-stack application architecture.",
  },
  {
    year: "2026",
    title: "Full Stack Projects",
    icon: Rocket,
    description:
      "Built real-world full-stack web applications by combining modern frontend technologies with Node.js, Express.js, and MongoDB, focusing on clean architecture, responsive interfaces, and production-ready experiences.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-12 text-center sm:mb-16 md:mb-20"
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[5px] text-muted-foreground sm:text-sm sm:tracking-[8px]">
            Journey
          </p>

          <h2 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-muted-foreground bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8">
            My journey from learning the fundamentals of web development to
            building modern full-stack applications and real-world projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-foreground/40 to-transparent sm:left-5 md:left-1/2" />

          {journey.map((itemData, index) => {
            const Icon = itemData.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div key={itemData.year} variants={item} className={`relative mb-10 flex w-full min-w-0 last:mb-0 sm:mb-12 md:mb-14 ${
                  isEven
                    ? "justify-start"
                    : "justify-start md:justify-end"
                }`}
              >
                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                  }}
                  className="group relative ml-9 w-[calc(100%-2.25rem)] min-w-0 rounded-2xl border border-border bg-card p-4 transition-colors duration-300 hover:border-foreground/40 hover:bg-secondary/30 sm:ml-12 sm:w-[calc(100%-3rem)] sm:rounded-3xl sm:p-6 md:ml-0 md:w-[46%] md:p-7 lg:p-8"
                >
                  {/* Subtle top accent */}
                  <div className="absolute inset-x-5 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-7" />

                  {/* Timeline Dot */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -left-[34px] top-6 flex size-8 items-center justify-center rounded-full border-[3px] border-background bg-foreground text-background sm:-left-[44px] sm:top-8 sm:size-10 md:left-auto md:right-[-54px] md:top-10 md:border-4 ${
                      !isEven ? "md:!left-[-54px] md:!right-auto" : ""
                    }`}
                  >
                    <Icon size={17} className="sm:size-[18px]" />
                  </motion.div>

                  {/* Year */}
                  <span className="inline-flex rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground sm:px-4 sm:py-2 sm:text-sm">
                    {itemData.year}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 break-words font-mono text-lg font-bold leading-snug text-foreground sm:mt-5 sm:text-xl md:text-2xl">
                    {itemData.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 break-words text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7">
                    {itemData.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-5 h-px w-10 bg-border transition-all duration-300 group-hover:w-full group-hover:bg-foreground/40 sm:mt-6" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}