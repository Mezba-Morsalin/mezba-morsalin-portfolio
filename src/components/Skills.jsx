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
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-original",
      },
      { name: "Framer Motion", icon: "devicon-framermotion-original" },
      { name: "Shadcn UI", icon: null },
      { name: "HeroUI", icon: null },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "Better Auth", icon: null },
      { name: "REST API", icon: null },
      { name: "JWT", icon: null },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Netlify", icon: "devicon-netlify-plain" },
    ],
  },
  {
    title: "Currently Learning",
    icon: Code2,
    skills: [
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain",
      },
      {
        name: "Nest.js",
        icon: "devicon-nestjs-plain",
      },
      {
        name: "Docker",
        icon: "devicon-docker-plain",
      },
      {
        name: "Prisma",
        icon: "devicon-prisma-plain",
      },
      {
        name: "AWS",
        icon: "devicon-amazonwebservices-plain-wordmark",
      },
      {
        name: "Nginx",
        icon: "devicon-nginx-plain",
      },
      {
        name: "CI/CD",
        icon: "devicon-githubactions-plain",
      },
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
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[5px] text-muted-foreground sm:text-sm sm:tracking-[8px]">
            Expertise
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-muted-foreground bg-clip-text text-transparent">
              SKills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            I build modern, scalable, and responsive web applications using
            modern technologies and development tools.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div key={category.title} variants={item} whileHover={{ y: -6 }} transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="min-w-0 rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-foreground/40 hover:shadow-xl sm:rounded-3xl sm:p-7"
              >
                {/* Category Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground"
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="mb-6 font-mono text-lg font-bold text-foreground sm:text-xl">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{
                        scale: 1.04,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex cursor-default items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors duration-200 hover:border-foreground/50 hover:bg-foreground hover:text-background sm:px-4 sm:text-sm"
                    >
                      {skill.icon ? (
                        <i
                          className={`${skill.icon} text-base sm:text-lg`}
                          aria-hidden="true"
                        />
                      ) : (
                        <Code2 size={16} aria-hidden="true" />
                      )}

                      <span>{skill.name}</span>
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
