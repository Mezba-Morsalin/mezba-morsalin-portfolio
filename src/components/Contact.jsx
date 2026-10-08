"use client";

import { motion } from "motion/react";
import {
Mail,
Phone,
MapPin,
Send,
Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const contacts = [
{
icon: Mail,
title: "Email",
value: "[mezbamorsalin.dev@gmail.com](mailto:mezbamorsalin.dev@gmail.com)",
},
{
icon: Phone,
title: "Phone",
value: "+880 1730213466",
},
{
icon: MapPin,
title: "Location",
value: "Dhaka, Bangladesh",
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
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

if (
  !formData.name.trim() ||
  !formData.email.trim() ||
  !formData.subject.trim() ||
  !formData.message.trim()
) {
  toast.error("Please fill in all fields.");
  return;
}

setLoading(true);

try {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to send message.");
  }

  toast.success("Message sent successfully!", {
    description:
      "Thank you for reaching out. I'll get back to you as soon as possible.",
  });

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
} catch (error) {
  toast.error("Failed to send message.", {
    description:
      error.message || "Please try again later.",
  });
} finally {
  setLoading(false);
}

};

return ( <section
   id="contact"
   className="relative scroll-mt-20 overflow-hidden py-24"
 > <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
duration: 0.7,
}}
viewport={{
once: true,
}}
className="mb-16 text-center"
> <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[8px] text-sky-500">
Contact </p>

      <h2 className="font-mono text-3xl font-bold sm:text-4xl md:text-5xl">
        Let&apos;s{" "}
        <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Work Together
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
        Have a project in mind or want to collaborate?
        Feel free to reach out anytime.
      </p>
    </motion.div>

    {/* Main Layout */}
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Contact Information */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="w-full space-y-4 sm:space-y-6"
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
              className="group flex min-w-0 items-center gap-4 rounded-3xl border border-sky-500/40 bg-card/60 p-4 backdrop-blur-xl transition-all duration-300 hover:border-sky-500 hover:shadow-[0_0_35px_rgba(14,165,233,.15)] sm:gap-5 sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/40 text-sky-500 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white sm:h-16 sm:w-16">
                <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-mono text-base font-bold text-foreground sm:text-lg">
                  {contact.title}
                </h3>

                <p className="mt-1 break-all text-sm text-muted-foreground sm:break-words sm:text-base">
                  {contact.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="w-full rounded-3xl border border-sky-500/40 bg-card/60 p-5 backdrop-blur-xl sm:p-8"
      >
        {/* Name + Email */}
        <motion.div
          variants={item}
          className="grid gap-6 md:grid-cols-2"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Your Name
            </label>

            <input
              id="name"
              onChange={handleChange}
              value={formData.name}
              name="name"
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 sm:px-5 sm:py-4 sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email Address
            </label>

            <input
              id="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 sm:px-5 sm:py-4 sm:text-base"
            />
          </div>
        </motion.div>

        {/* Subject */}
        <motion.div
          variants={item}
          className="mt-6"
        >
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Subject
          </label>

          <input
            id="subject"
            onChange={handleChange}
            value={formData.subject}
            name="subject"
            type="text"
            placeholder="Project Discussion"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 sm:px-5 sm:py-4 sm:text-base"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          variants={item}
          className="mt-6"
        >
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message
          </label>

          <textarea
            id="message"
            onChange={handleChange}
            value={formData.message}
            name="message"
            rows={5}
            placeholder="Write your message..."
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 sm:px-5 sm:py-4 sm:text-base"
          />
        </motion.div>

        {/* Submit Button */}
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
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(14,165,233,.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,.45)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  </div>
</section>
);
}