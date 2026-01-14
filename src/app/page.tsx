import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Features } from "@/components/sections/features";
import { Testimonial } from "@/components/sections/testimonial";
import { FullCycle } from "@/components/sections/full-cycle";
import { StateOfArt } from "@/components/sections/state-of-art";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonial />
      <FullCycle />
      <StateOfArt />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
