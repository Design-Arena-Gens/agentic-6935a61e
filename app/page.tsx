import { HeroSection } from "@/sections/hero";
import { FeatureStackSection } from "@/sections/feature-stack";
import { CascadeSection } from "@/sections/cascade";
import { TestimonialsSection } from "@/sections/testimonials";
import { FaqSection } from "@/sections/faq";
import { CtaSection } from "@/sections/cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeatureStackSection />
      <CascadeSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
