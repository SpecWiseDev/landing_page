import { Navigation } from "@/components/sections/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { UseCaseCards } from "@/components/sections/use-case-cards";
import { IndustryTabs } from "@/components/sections/industry-tabs";
import { Testimonial } from "@/components/sections/testimonial";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Use Cases - IMQA | AI-Powered Test Automation",
  description:
    "See how QA engineers, developers, product teams, and DevOps use IMQA to accelerate testing across e-commerce, SaaS, finance, and healthcare.",
};

export default function UseCasesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#121212" }}>
      <Navigation />

      <PageHero
        badge="Use Cases"
        title="Built for your team"
        subtitle="Testing that adapts to how you work"
        description="Whether you're a QA engineer focused on coverage or a developer shipping features fast, IMQA meets you where you are."
      />

      <UseCaseCards />

      <IndustryTabs />

      <Testimonial />

      <FinalCTA />

      <Footer />
    </main>
  );
}
