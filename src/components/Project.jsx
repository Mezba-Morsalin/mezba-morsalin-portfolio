"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

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
    github:
      "https://github.com/Mezba-Morsalin/Medicare-client",
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
    github:
      "https://github.com/Mezba-Morsalin/Study-Nook",
    live: "https://study-nook-sigma.vercel.app",
  },

  {
  title: "Sun Cart",
  image: "/assests/sunCart.png",
  description:
    "Modern e-commerce website with product browsing, responsive UI, authentication and a smooth shopping experience.",
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "MongoDB",
  ],
  github:
    "https://github.com/Mezba-Morsalin/Assignment-08-Sun-Cart",
  live: "https://assignment-08-sun-cart-red.vercel.app",
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* ================= Background Shade ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-sky-500/[0.025] via-transparent to-cyan-500/[0.025] dark:from-sky-500/[0.04] dark:via-transparent dark:to-cyan-500/[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ================= Heading ================= */}
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
            duration: 0.7,
          }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
            Portfolio
          </p>

          <h2 className="font-mono text-4xl font-bold md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Here are some selected projects showcasing my passion for building
            modern, scalable and beautiful web applications.
          </p>
        </motion.div>

        {/* ================= Project Grid ================= */}
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="group overflow-hidden rounded-3xl border border-sky-500/30 bg-card/60 shadow backdrop-blur-xl transition-all duration-300 hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] dark:border-sky-500/40 dark:hover:shadow-[0_0_40px_rgba(14,165,233,0.22)]"
            >
              {/* ================= Image ================= */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={450}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* ================= Content ================= */}
              <div className="p-7">
                <h3 className="font-mono text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* ================= Technologies ================= */}
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

                {/* ================= View Details ================= */}
                <div className="mt-8">
                  <Dialog>
                    <DialogTrigger>
                      <motion.span
                        whileHover={{
                          y: -3,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-[0_0_25px_rgba(14,165,233,0.25)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.45)]"
                      >
                        View Details

                        <ArrowUpRight size={18} />
                      </motion.span>
                    </DialogTrigger>

                    {/* ================= Modal ================= */}
                   <DialogContent className="max-w-3xl rounded-3xl border border-sky-500/30 bg-card/95 backdrop-blur-xl">
  {/* ================= Project Image ================= */}
  <div className="mt-8 overflow-hidden rounded-2xl border border-sky-500/20 bg-background">
    <Image
      src={project.image}
      alt={project.title}
      width={400}
      height={400}
      className="w-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  <DialogHeader>
    <DialogTitle className="font-mono text-2xl font-bold">
      {project.title}
    </DialogTitle>

    <DialogDescription className="pt-2 leading-7 text-muted-foreground">
      {project.description}
    </DialogDescription>
  </DialogHeader>

  {/* ================= Technologies ================= */}
  <div className="mt-3">
    <h4 className="mb-3 font-mono text-sm font-semibold text-sky-500">
      Technologies
    </h4>

    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-500"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* ================= Modal Buttons ================= */}
  <div className="mt-5 flex gap-3">
    {/* GitHub */}
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
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-sky-500/25 bg-background px-5 py-3 font-medium transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white hover:shadow-[0_0_25px_rgba(14,165,233,0.35)]"
    >
      <motion.span
        whileHover={{
          rotate: 360,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <FaGithub size={18} />
      </motion.span>

      GitHub
    </motion.a>

    {/* Live Demo */}
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
      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-[0_0_25px_rgba(14,165,233,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(14,165,233,0.55)]"
    >
      Live Demo

      <motion.span
        whileHover={{
          x: 3,
          y: -3,
        }}
      >
        <ArrowUpRight size={18} />
      </motion.span>
    </motion.a>
  </div>
</DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}