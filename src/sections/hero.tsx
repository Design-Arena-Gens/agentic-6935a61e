"use client";

import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/button";
import { metrics } from "@/data/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="absolute inset-x-0 top-0 h-[620px] bg-grid-radial" />
      <div className="absolute inset-x-0 top-0 h-[620px] opacity-60 blur-3xl">
        <div className="mx-auto h-full max-w-4xl rounded-full bg-accent-500/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pb-24 sm:px-8">
        <nav className="flex w-full items-center justify-between text-sm text-slate-300/80">
          <span className="font-heading text-lg">Kling</span>
          <div className="hidden gap-6 md:flex">
            <a href="#stack" className="transition hover:text-white">
              Stack
            </a>
            <a href="#cascades" className="transition hover:text-white">
              Cascades
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              Proof
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>
          <SecondaryButton href="#contact">Request Pilot</SecondaryButton>
        </nav>

        <div className="relative flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.3em] text-accent-100/80"
          >
            Polyglot intelligence mesh
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 font-heading text-4xl leading-tight sm:text-5xl md:text-6xl"
          >
            Speak locally with <span className="text-accent-200">global precision</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-8 text-lg text-slate-200/80 sm:text-xl"
          >
            Kling listens, translates, and routes conversations in milliseconds. Your teams operate in
            every dialect as if they’ve lived there for years.
          </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <PrimaryButton href="#contact">Launch a live mesh</PrimaryButton>
          <SecondaryButton href="#stack">Explore the stack</SecondaryButton>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6"
        >
          <div className="noise-overlay rounded-2xl bg-midnight/70 p-6 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <span className="text-sm uppercase tracking-[0.4em] text-accent-200/60">
                  Mesh overview
                </span>
                <h3 className="font-heading text-2xl">Unified Conversational Canvas</h3>
                <p className="text-sm text-slate-300/70">
                  Deploy Kling across contact centers, product squads, and on-the-ground ops. Every input
                  stream is monitored, translated, and routed through one command console.
                </p>
              </div>
              <div className="grid gap-4">
                {metrics.map(({ label, value, detail }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-accent-100/80">{label}</div>
                    <div className="mt-2 font-heading text-3xl text-accent-200">{value}</div>
                    <p className="mt-2 text-sm text-slate-300/70">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
