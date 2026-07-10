"use client"

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-2xl rounded-3xl border border-sky-500/30 bg-card/60 p-10 text-center backdrop-blur-xl">

        <h1 className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-8xl font-black text-transparent md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold font-mono md:text-4xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          The page you're looking for doesn't exist, has been moved, or the URL
          may be incorrect.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            <Home size={18} />
            Back Home
          </Link>

          <button
            onClick={() => history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-500/30 bg-background px-6 py-3 font-semibold transition hover:border-sky-500 hover:bg-sky-500/10"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>
    </section>
  );
}