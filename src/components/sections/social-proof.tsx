import { Container } from "@/components/ui/container";
import { BlurFade } from "@/components/ui/blur-fade";

export function SocialProof() {
  const logos = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
    "Company F",
  ];

  return (
    <section className="py-20 border-t border-border-subtle">
      <Container>
        <BlurFade>
          <p className="text-center text-sm text-text-muted mb-12">
            Trusted by engineering teams at
          </p>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, i) => (
            <BlurFade key={logo} delay={0.1 * i}>
              <div className="text-text-muted/50 font-semibold text-sm">
                {logo}
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
