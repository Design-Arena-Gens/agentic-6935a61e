"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function GlowCard({
  children,
  delay = 0
}: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-px"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-500/40 via-purple-500/20 to-transparent opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />
      <div className="relative h-full rounded-3xl bg-midnight/80 p-8 backdrop-blur-xl">
        {children}
      </div>
    </motion.div>
  );
}
