import { Navigation } from "@/components/sections/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { EnterpriseBadges } from "@/components/sections/enterprise-badges";
import { SecurityFeatures } from "@/components/sections/security-features";
import { FullCycle } from "@/components/sections/full-cycle";
import { FAQ } from "@/components/sections/faq";
import { EnterpriseContact } from "@/components/sections/enterprise-contact";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Enterprise - IMQA | AI-Powered Test Automation",
  description:
    "Enterprise-grade test automation with SOC 2 compliance, SSO, dedicated support, and custom integrations. Built for teams that demand reliability.",
};

export default function EnterprisePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#121212" }}>
      <Navigation />

      <PageHero
        badge="Enterprise"
        title="Built for enterprise"
        subtitle="Scale testing across your organization"
        description="Security, compliance, and dedicated support for teams that can't afford to compromise on quality."
      />

      <EnterpriseBadges />

      <SecurityFeatures />

      <FullCycle />

      <FAQ />

      <EnterpriseContact />

      <Footer />
    </main>
  );
}
