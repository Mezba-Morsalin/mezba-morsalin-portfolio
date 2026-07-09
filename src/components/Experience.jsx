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
      "Began my web development journey by learning HTML, CSS and JavaScript fundamentals while building small projects.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    icon: MonitorSmartphone,
    description:
      "Built responsive and interactive web applications using React, Next.js, Tailwind CSS and modern UI libraries.",
  },
  {
    year: "2025",
    title: "Backend Development",
    icon: Database,
    description:
      "Learned Node.js, Express.js, MongoDB, Better Auth, REST APIs and authentication to become a Full Stack Developer.",
  },
  {
    year: "2026",
    title: "Full Stack Projects",
    icon: Rocket,
    description:
      "Developed production-ready MERN applications, dashboards, authentication systems and deployed projects using Vercel.",
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
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
            Journey
          </p>

          <h2 className="text-4xl font-bold font-mono md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            My learning journey from writing my first line of code to building
            modern full-stack web applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-sky-500/40 md:left-1/2 md:-translate-x-1/2" />

          {journey.map((itemData, index) => {
            const Icon = itemData.icon;

            return (
              <motion.div
                key={itemData.year}
                variants={item}
                className={`relative mb-14 flex w-full ${
                  index % 2 === 0
                    ? "justify-start md:justify-start"
                    : "justify-start md:justify-end"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="relative ml-14 w-full rounded-3xl border border-sky-500/40 bg-card/50 p-8 backdrop-blur-md shadow-lg md:ml-0 md:w-[46%] hover:border-sky-500 hover:shadow-[0_0_35px_rgba(14,165,233,.18)]"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute -left-[52px] top-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-sky-500 text-white md:left-auto md:right-[-62px]"
                  >
                    <Icon size={18} />
                  </motion.div>

                  <span className="inline-block rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500">
                    {itemData.year}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold font-mono">
                    {itemData.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {itemData.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}