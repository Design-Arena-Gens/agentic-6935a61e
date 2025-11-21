"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/glow-card";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 pb-32 sm:px-8">
      <SectionHeading
        eyebrow="Proof"
        title="Trusted by teams who ship at global velocity."
        description="Every deployment is co-architected to your compliance grid, signal quality, and organizational cadence."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <GlowCard key={testimonial.name} delay={index * 0.1}>
            <div className="flex h-full flex-col justify-between gap-8">
              <p className="text-lg text-slate-100/90">“{testimonial.quote}”</p>
              <div>
                <p className="font-heading text-lg text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-300/70">{testimonial.role}</p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
