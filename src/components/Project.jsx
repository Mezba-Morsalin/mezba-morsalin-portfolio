"use client";

import Image from "next/image";
import { motion } from "motion/react";

import {
  ArrowUpRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "MediCare Connect",

    image: "/assests/medicare.png",

    description:
      "A complete hospital appointment & healthcare management platform with authentication, dashboard, Stripe payments and role based access.",

    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Better Auth",
    ],

    github: "https://github.com/Mezba-Morsalin/Medicare-client",
    live: "https://medicare-connect-swart.vercel.app",
  },

  {
    title: "StudyNook",

    image: "/assests/studyNook.png",

    description:
      "A full-featured university room booking management system where students can reserve study rooms, manage bookings, view real-time availability, and enjoy a seamless booking experience with secure authentication.",

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github: "https://github.com/Mezba-Morsalin/Study-Nook",
    live: "https://study-nook-sigma.vercel.app",
  },

  {
    title: "Portfolio Website",

    image: "/assests/mezbaPorfolio.png",

    description:
      "Personal portfolio with premium animations, Lenis smooth scrolling, Framer Motion and modern UI.",

    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
    ],

    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -120, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-80 top-0 h-[700px] w-[700px] rounded-full bg-sky-500/20 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 120, 0],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[180px]"
        />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

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
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold font-mono md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Here are some selected projects showcasing my passion
            for building modern, scalable and beautiful web
            applications.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: .3,
              }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
              }}
              className="group overflow-hidden rounded-3xl border border-sky-500/20 bg-card/60 backdrop-blur-xl"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={450}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold font-mono">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-500"
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

                  {/* Buttons */}

                  <div className="mt-8 flex gap-3">
                    <motion.a
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-sky-500/25 bg-background px-5 py-3 font-medium transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white hover:shadow-[0_0_25px_rgba(14,165,233,.35)]"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      >
                        <FaGithub size={18} />
                      </motion.div>

                      GitHub
                    </motion.a>

                    <motion.a
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-[0_0_25px_rgba(14,165,233,.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(14,165,233,.55)]"
                    >
                      Live Demo

                      <motion.div
                        whileHover={{
                          x: 3,
                          y: -3,
                        }}
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>
                          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}