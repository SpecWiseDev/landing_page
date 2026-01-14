import { Navigation } from "@/components/sections/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { MissionVision } from "@/components/sections/mission-vision";
import { CompanyTimeline } from "@/components/sections/company-timeline";
import { TeamGrid } from "@/components/sections/team-grid";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "About - IMQA | AI-Powered Test Automation",
  description:
    "Learn about IMQA's mission to eliminate the gap between writing code and proving it works. Meet the team building the future of QA.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#121212" }}>
      <Navigation />

      <PageHero
        badge="About Us"
        title="Our mission"
        subtitle="Making quality engineering effortless"
        description="We're building the infrastructure that lets engineering teams ship faster without sacrificing reliability."
      />

      <MissionVision />

      <CompanyTimeline />

      <TeamGrid />

      <FinalCTA />

      <Footer />
    </main>
  );
}
