"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-foreground/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-foreground/[0.06] blur-[120px]" />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl rounded-3xl border border-border bg-card/60 p-10 text-center shadow-xl backdrop-blur-xl">

        {/* 404 */}
        <h1 className="bg-gradient-to-r from-foreground via-foreground/70 to-muted-foreground bg-clip-text text-8xl font-black text-transparent md:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 font-mono text-3xl font-bold text-foreground md:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or the URL
          may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          {/* Back Home */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition-all duration-300 hover:scale-105 hover:opacity-85"
          >
            <Home size={18} />
            Back Home
          </Link>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-foreground hover:bg-secondary"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>
      </div>
    </section>
  );
}