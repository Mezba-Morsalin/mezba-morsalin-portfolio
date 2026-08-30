
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
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Framer Motion", icon: "devicon-framermotion-original" },
      { name: "Shadcn UI", icon: null },
      { name: "HeroUI", icon: null },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Better Auth", icon: null },
      { name: "REST API", icon: null },
      { name: "JWT", icon: null },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Netlify", icon: "devicon-netlify-plain colored" },
    ],
  },
  {
    title: "Currently Learning",
    icon: Code2,
    skills: [
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      {
        name: "AWS",
        icon: "devicon-amazonwebservices-plain-wordmark colored",
      },
      { name: "System Design", icon: null },
      { name: "CI/CD", icon: "devicon-githubactions-plain colored" },
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
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/8 blur-[150px] dark:bg-sky-500/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
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

          <h2 className="font-mono text-4xl font-bold md:text-5xl">
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
                className="rounded-3xl border border-sky-500/40 bg-card/50 p-7 backdrop-blur-md shadow transition-all duration-300 hover:border-sky-500 hover:shadow-[0_0_35px_rgba(14,165,233,0.18)]"
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

                <h3 className="mb-6 font-mono text-xl font-bold">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "#0ea5e9",
                        color: "#ffffff",
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex cursor-default items-center gap-2 rounded-full border border-sky-500/40 bg-background px-4 py-2 text-sm font-medium"
                    >
                      {skill.icon ? (
                        <i
                          className={`${skill.icon} text-lg`}
                          aria-hidden="true"
                        />
                      ) : (
                        <Code2 size={16} />
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