"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { cascades } from "@/data/content";

export function CascadeSection() {
  return (
    <section
      id="cascades"
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[48px] border border-white/10 bg-white/5 px-6 py-24 sm:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,136,255,0.35),rgba(11,16,38,0.9))]" />
      <div className="relative z-10 flex flex-col gap-16">
        <SectionHeading
          eyebrow="Activation Cascades"
          title="Routes that flex with your signal chain."
          description="Compose the flow once. Kling watches for customer state changes and hands off to humans, AI agents, or knowledge bases without breaking tone."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6">
            {cascades.map((cascade, index) => (
              <motion.div
                key={cascade.label}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-3xl border border-white/10 bg-midnight/60 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl text-white">{cascade.label}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-accent-100/70">Cascade</span>
                </div>
                <p className="mt-4 text-sm text-slate-300/80">{cascade.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex h-full items-center justify-center"
          >
            <div className="relative w-full max-w-md rounded-[40px] border border-white/10 bg-midnight/80 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="rounded-[32px] bg-black/70 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <p className="text-xs uppercase tracking-[0.4em] text-accent-100/70">Live Relay</p>
                </div>
                <h4 className="mt-5 font-heading text-2xl text-slate-100">
                  KL-42 Mesh Node — Buenos Aires
                </h4>
                <p className="mt-3 text-sm text-slate-300/80">
                  Real-time co-pilot bridging Spanish ↔ English with local idiom guidance. Auto-summarizing
                  segments every 90 seconds.
                </p>
                <div className="mt-6 space-y-3 text-sm text-slate-200/80">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>Latency</span>
                    <span className="font-heading text-lg text-accent-200">41 ms</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>Signal Confidence</span>
                    <span className="font-heading text-lg text-accent-200">98%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>Sentiment Balance</span>
                    <span className="font-heading text-lg text-rose-200">Positive</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white/5 px-4 py-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
                    <span className="absolute inset-0 bg-gradient-to-br from-accent-400 via-purple-500 to-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-200/90">Operator • Live Orchestrator</p>
                    <p className="text-xs text-slate-300/70">
                      “Switch to idiomatic tone; highlight the contract renewal clause.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
