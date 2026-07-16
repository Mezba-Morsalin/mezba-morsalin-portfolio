import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { firaCode, inter } from "@/lib/font";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";

export const metadata = {
  title: "Mezba Morsalin | MERN Stack Developer",
  description:
    "Portfolio of Mezba Morsalin, a MERN Stack Developer specializing in React, Next.js, Node.js, Express.js MongoDB, and modern web application development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SmoothScroll>
            <PreloaderWrapper />
            <Cursor />
            <Navbar />
            {children}
            <Toaster position="top-center"
              richColors
              closeButton
              duration={3000}/>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
