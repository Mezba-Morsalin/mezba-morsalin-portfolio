
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { firaCode, inter } from "@/lib/font";



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
      <body className="min-h-full flex flex-col scroll-smooth">
        <ThemeProvider>
        <Cursor/>
        <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
