import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { firaCode, inter } from "@/lib/font";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Mezba Morsalin | Portfolio",
  description: "Full Stack Web Developer Portfolio",
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
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
