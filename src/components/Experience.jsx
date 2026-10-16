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
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20 md:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-16 md:mb-20"
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[4px] text-sky-500 sm:text-sm sm:tracking-[8px]">
            Journey
          </p>

          <h2 className="font-mono text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8">
            My journey from learning the fundamentals of web development to
            building modern full-stack applications and real-world projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Center Line */}
          <div className="absolute bottom-0 left-4 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-500/50 to-transparent sm:left-5 md:left-1/2" />

          {journey.map((itemData, index) => {
            const Icon = itemData.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={itemData.year}
                variants={item}
                className={`relative mb-10 flex w-full min-w-0 last:mb-0 sm:mb-12 md:mb-14 ${
                  isEven
                    ? "justify-start md:justify-start"
                    : "justify-start md:justify-end"
                }`}
              >
                {/* Experience Card */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                  }}
                  className={`relative ml-9 w-[calc(100%-2.25rem)] min-w-0 rounded-2xl border border-sky-500/30 bg-card/50 p-4 shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-sky-500/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.12)] dark:border-sky-500/40 dark:hover:shadow-[0_0_30px_rgba(14,165,233,0.18)] sm:ml-12 sm:w-[calc(100%-3rem)] sm:rounded-3xl sm:p-6 md:ml-0 md:w-[46%] md:p-7 lg:p-8 ${
                    !isEven ? "md:mr-0" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      boxShadow: [
                        "0 0 0px rgba(14,165,233,0)",
                        "0 0 16px rgba(14,165,233,0.4)",
                        "0 0 0px rgba(14,165,233,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -left-[34px] top-6 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-background bg-sky-500 text-white sm:-left-[44px] sm:top-8 sm:h-10 sm:w-10 md:left-auto md:right-[-54px] md:top-10 md:h-10 md:w-10 md:border-4"
                  >
                    <Icon size={17} className="sm:h-[18px] sm:w-[18px]" />
                  </motion.div>

                  {/* Year */}
                  <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-500 sm:px-4 sm:py-2 sm:text-sm">
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
                </motion.div>

                {/* Desktop Timeline Dot Positioning */}
                {!isEven && (
                  <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-0 md:block" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}