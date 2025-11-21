"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/glow-card";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icons";
import { features } from "@/data/content";

export function FeatureStackSection() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 pb-32 sm:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-accent-500/10 via-transparent" />
      <SectionHeading
        eyebrow="Stack"
        title="The Kling lattice locks to your stack in three moves."
        description="Each layer is modular. Drop in voice, text, or multi-channel orchestration without refactoring your pipelines."
        align="left"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map(({ title, description, icon }, index) => (
          <GlowCard key={title} delay={index * 0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-accent-100/70">Layer {index + 1}</span>
                <Icon name={icon as "waveform" | "spark" | "mesh"} className="h-10 w-10 text-accent-200" />
              </div>
              <h3 className="font-heading text-2xl text-white">{title}</h3>
              <p className="text-sm text-slate-300/80">{description}</p>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-auto h-1 rounded-full bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500"
              />
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
