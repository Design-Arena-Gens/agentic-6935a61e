"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/button";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-accent-500/20 via-white/5 to-white/0 px-6 py-20 sm:px-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-accent-100/80">
          Launch a live mesh
        </p>
        <h3 className="font-heading text-3xl text-white sm:text-4xl">
          Ready to sound local everywhere?
        </h3>
        <p className="max-w-2xl text-sm text-slate-300/80 sm:text-base">
          We’ll pair you with a Kling architect, tune a proof-of-impact pilot, and stand up the first cascade in under two weeks.
        </p>
        <PrimaryButton href="mailto:launch@kling.global?subject=Kling%20Mesh%20Pilot">
          Schedule pilot architecture session
        </PrimaryButton>
      </motion.div>
    </section>
  );
}
