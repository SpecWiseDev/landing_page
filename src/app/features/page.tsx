import { Navigation } from "@/components/sections/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { StateOfArt } from "@/components/sections/state-of-art";
import { IntegrationLogos } from "@/components/sections/integration-logos";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Features - IMQA | AI-Powered Test Automation",
  description:
    "Discover IMQA's powerful features: natural language testing, self-healing selectors, cross-browser execution, and seamless CI/CD integration.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#121212" }}>
      <Navigation />

      <PageHero
        badge="Platform"
        title="Platform capabilities"
        subtitle="Built for modern engineering teams"
        description="IMQA combines AI-powered test generation with enterprise-grade reliability. Every feature designed to eliminate friction and accelerate delivery."
      />

      <FeatureGrid />

      <StateOfArt />

      <IntegrationLogos />

      <FinalCTA />

      <Footer />
    </main>
  );
}
