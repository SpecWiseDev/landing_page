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
import { RotatingCubeBackground } from "@/components/ui/rotating-cube-background";

export default function Home() {
  return (
    <>
      {/* Fixed rotating cube background - visible after hero */}
      <RotatingCubeBackground />

      <main className="relative min-h-screen" style={{ zIndex: 1 }}>
        <Navigation />
        <Hero />
        {/* Content after hero sits above the rotating cube background */}
        <div className="relative" style={{ zIndex: 1 }}>
          <ProblemSolution />
          <Features />
          <Testimonial />
          <FullCycle />
          <StateOfArt />
          <FAQ />
          <FinalCTA />
          <Footer />
        </div>
      </main>
    </>
  );
}
