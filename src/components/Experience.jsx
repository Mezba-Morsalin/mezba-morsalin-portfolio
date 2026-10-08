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
return ( <section
   id="experience"
   className="relative scroll-mt-20 overflow-hidden py-24"
 > <div className="relative z-10 mx-auto max-w-6xl px-6">
{/* Heading */}
<motion.div
initial={{ opacity: 0, y: 35 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
className="mb-20 text-center"
> <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
Journey </p>

      <h2 className="font-mono text-4xl font-bold md:text-5xl">
        My{" "}
        <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
        My journey from learning the fundamentals of web development to
        building modern full-stack applications and real-world projects.
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
      <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-sky-500/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

      {journey.map((itemData, index) => {
        const Icon = itemData.icon;

        return (
          <motion.div
            key={itemData.year}
            variants={item}
            className={`relative mb-14 flex w-full ${
              index % 2 === 0
                ? "justify-start"
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
                damping: 18,
              }}
              className="relative ml-14 w-full rounded-3xl border border-sky-500/30 bg-card/50 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-sky-500/60 hover:shadow-[0_0_35px_rgba(14,165,233,0.15)] dark:border-sky-500/40 dark:hover:shadow-[0_0_35px_rgba(14,165,233,0.20)] md:ml-0 md:w-[46%]"
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0 0 0px rgba(14,165,233,0)",
                    "0 0 18px rgba(14,165,233,0.45)",
                    "0 0 0px rgba(14,165,233,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-[52px] top-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-sky-500 text-white md:left-auto md:right-[-62px]"
              >
                <Icon size={18} />
              </motion.div>

              {/* Year */}
              <span className="inline-block rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500">
                {itemData.year}
              </span>

              {/* Title */}
              <h3 className="mt-5 font-mono text-2xl font-bold text-foreground">
                {itemData.title}
              </h3>

              {/* Description */}
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
