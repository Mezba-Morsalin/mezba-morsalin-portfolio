"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "mezbamorsalin.dev@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1730213466",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Sector-04, Uttara, Dhaka, Bangladesh",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-52 top-0 h-[450px] w-[450px] rounded-full bg-sky-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -80, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

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
          transition={{
            duration: .7,
          }}
          viewport={{
            once: true,
          }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold font-mono sm:text-4xl md:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Have a project in mind or want to collaborate?
            Feel free to reach out anytime.
          </p>
        </motion.div>

        {/* Main Layout Grid */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">

          {/* LEFT SIDE (Contact Cards) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: .2,
            }}
            className="space-y-4 sm:space-y-6 w-full"
          >
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <motion.div
                  key={contact.title}
                  variants={item}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                 
                  className="group flex items-center gap-4 sm:gap-5 rounded-3xl border border-sky-500/40 bg-card/60 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-500 hover:shadow-[0_0_35px_rgba(14,165,233,.15)] min-w-0"
                >
                  {/* Responsive shrink adjustments on icon wrappers */}
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-500/40 text-sky-500 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>

                  {/* Added min-w-0 to allow correct string containment */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-mono text-base sm:text-lg font-bold">
                      {contact.title}
                    </h3>

                    {/* Added break-words to handle long email/location strings gracefully without layout bursting */}
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground break-all sm:break-words">
                      {contact.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT SIDE (Form) */}
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="rounded-3xl border border-sky-500/40 bg-card/60 p-5 sm:p-8 backdrop-blur-xl w-full"
          >
            <motion.div variants={item} className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-6">
              <label className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Discussion"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              />
            </motion.div>

            <motion.div variants={item} className="mt-6">
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              />
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(14,165,233,.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,.45)]"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}