"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  cta
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  cta?: ReactNode;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignment}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.3em] text-accent-200/80">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight">{title}</h2>
      {description ? (
        <p className="text-base text-slate-300/80 sm:text-lg">{description}</p>
      ) : null}
      {cta ? <div className="pt-2">{cta}</div> : null}
    </motion.header>
  );
}
