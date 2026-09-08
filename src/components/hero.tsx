"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open to new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          {profile.name} —{" "}
          <span className="text-gradient">{profile.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center gap-2 text-sm text-muted"
        >
          <MapPin className="h-4 w-4" />
          {profile.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {[
            { value: "13+", label: "Years Experience" },
            { value: "5,000+", label: "Chain Integrations" },
            { value: "35%", label: "Core Web Vitals Gain" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-semibold sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-xs text-muted sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
