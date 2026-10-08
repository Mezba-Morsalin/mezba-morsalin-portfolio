import "./globals.css";

import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { firaCode, inter } from "@/lib/font";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";

export const metadata = {
  title: "Mezba Morsalin | Frontend Developer",
  description:
    "Portfolio of Mezba Morsalin, a Frontend Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, and modern web application development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body className="relative min-h-full bg-background">
        <ThemeProvider>
          <SmoothScroll>
            {/* Global Website Background */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
              {/* Main atmospheric background */}
              <div className="absolute inset-0 bg-background" />

              {/* Top blue glow */}
              <div className="absolute left-1/2 top-[-15%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px] dark:bg-primary/15" />

              {/* Left cyan glow */}
              <div className="absolute left-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px] dark:bg-accent/10" />

              {/* Right blue glow */}
              <div className="absolute right-[-15%] top-[50%] h-[600px] w-[600px] rounded-full bg-primary/8 blur-[160px] dark:bg-primary/10" />

              {/* Bottom ambient glow */}
              <div className="absolute bottom-[-15%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/6 blur-[150px] dark:bg-accent/8" />

              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                  backgroundSize: "70px 70px",
                }}
              />

              {/* Soft vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-40" />
            </div>

            <PreloaderWrapper />
            <Cursor />
            <Navbar />

            {/* All website sections share the same global background */}
            <div className="relative">
              {children}
            </div>

            <Toaster
              position="top-center"
              richColors
              closeButton
              duration={3000}
            />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}