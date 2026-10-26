
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

      <body className="relative min-h-full bg-background text-foreground">
        <ThemeProvider>
          <SmoothScroll>
            {/* Minimal monochrome global background */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
              {/* Base background */}
              <div className="absolute inset-0 bg-background" />

              {/* Subtle dotted texture */}
              <div
                className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--foreground) 0.7px, transparent 0.7px)",
                  backgroundSize: "22px 22px",
                }}
              />

              {/* Soft monochrome vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 40%, var(--background) 100%)",
                  opacity: 0.45,
                }}
              />
            </div>

            <PreloaderWrapper />
            <Cursor />
            <Navbar />

            {/* Website sections */}
            <div className="relative">{children}</div>

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
