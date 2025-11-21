"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/data/content";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-6 pb-32 sm:px-8">
      <SectionHeading
        eyebrow="Clarity"
        title="Answers for operators who go live in days, not quarters."
        description="If you need deeper architectural docs, we share them post-NDA. Here’s what most teams ask before spinning up their first mesh."
      />

      <div className="mt-16 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
        {faqs.map((faq, index) => (
          <motion.details
            key={faq.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
          >
            <summary className="cursor-pointer list-none px-6 py-5 text-lg font-medium text-white transition group-open:bg-white/10">
              {faq.question}
            </summary>
            <div className="px-6 pb-6 text-sm text-slate-300/80">{faq.answer}</div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
