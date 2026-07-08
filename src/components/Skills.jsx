"use client";

import { motion } from "motion/react";
import {
  Code2,
  MonitorSmartphone,
  Database,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "HeroUI",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Vercel",
      "Netlify",
    ],
  },
  {
    title: "Currently Learning",
    icon: Code2,
    skills: [
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS",
      "System Design",
      "CI/CD",
    ],
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

export default function Skills() {
  return (
    <section id="skills" className="py-24">
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
            Expertise
          </p>

          <h2 className="text-4xl font-bold font-mono md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            I build modern, scalable and responsive full-stack web
            applications using the latest technologies.
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
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="rounded-3xl border border-sky-500/40 hover:border-sky-500 hover:shadow-[0_0_35px_rgba(14,165,233,.18)] bg-card/50 p-7 backdrop-blur-md"
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500"
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="mb-6 text-xl font-bold font-mono">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "#0ea5e9",
                        color: "#ffffff",
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="cursor-default rounded-full border border-sky-500/40 bg-background px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}