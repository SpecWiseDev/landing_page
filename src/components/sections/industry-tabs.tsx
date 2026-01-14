"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Cloud, Building2, Heart } from "lucide-react";

const industries = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    name: "E-commerce",
    headline: "Ship features without breaking checkout",
    challenges: [
      "Complex user journeys across cart, checkout, and payment",
      "Seasonal traffic spikes require rapid feature deployment",
      "Multiple payment integrations need continuous validation",
    ],
    solutions: [
      "End-to-end purchase flow testing with payment mocking",
      "Visual regression for product pages and cart UI",
      "Performance baseline monitoring during high-traffic events",
    ],
    stat: "99.9% checkout reliability",
  },
  {
    id: "saas",
    icon: Cloud,
    name: "SaaS",
    headline: "Accelerate releases without compromising quality",
    challenges: [
      "Weekly releases require comprehensive regression testing",
      "Multi-tenant architecture complicates test isolation",
      "Feature flags create exponential test combinations",
    ],
    solutions: [
      "Automated regression suites that scale with your codebase",
      "Tenant-isolated test environments with data partitioning",
      "Smart test selection based on code changes and feature flags",
    ],
    stat: "50% faster release cycles",
  },
  {
    id: "finance",
    icon: Building2,
    name: "Finance",
    headline: "Meet compliance without slowing innovation",
    challenges: [
      "Regulatory requirements demand comprehensive audit trails",
      "Security vulnerabilities must be caught before production",
      "Complex calculations require precise validation",
    ],
    solutions: [
      "Full test execution logs with timestamp and video evidence",
      "Security-focused test patterns for OWASP compliance",
      "Precision numeric validation for financial calculations",
    ],
    stat: "100% audit trail coverage",
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare",
    headline: "Patient safety through rigorous testing",
    challenges: [
      "HIPAA compliance requires strict data handling",
      "Critical workflows cannot tolerate failures",
      "Integration with EHR systems requires careful validation",
    ],
    solutions: [
      "PHI-safe test data generation and handling",
      "Critical path monitoring with instant alerting",
      "HL7/FHIR integration testing with mock servers",
    ],
    stat: "Zero critical path failures",
  },
];

export function IndustryTabs() {
  const [activeTab, setActiveTab] = useState("ecommerce");

  const activeIndustry = industries.find((i) => i.id === activeTab);

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2
            style={{
              fontSize: "36px",
              letterSpacing: "-0.01em",
              color: "rgb(111, 131, 159)",
              lineHeight: "1.15",
              fontStyle: "italic",
              fontWeight: 400,
              marginBottom: "8px",
            }}
          >
            Industry solutions
          </h2>
          <h3
            style={{
              fontSize: "36px",
              letterSpacing: "-0.01em",
              color: "rgba(250, 249, 246, 0.9)",
              lineHeight: "1.2",
              fontWeight: 400,
            }}
          >
            Purpose-built for your domain
          </h3>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isActive = activeTab === industry.id;
            return (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className="flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isActive
                    ? "rgba(212, 165, 116, 0.15)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: isActive
                    ? "1px solid rgba(212, 165, 116, 0.3)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  color: isActive ? "#d4a574" : "rgba(250, 249, 246, 0.6)",
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeIndustry && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-8 md:p-12"
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Headline */}
              <h4
                className="text-center mb-10"
                style={{
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "rgba(250, 249, 246, 0.9)",
                }}
              >
                {activeIndustry.headline}
              </h4>

              {/* Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenges */}
                <div>
                  <h5
                    className="mb-4"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "rgba(250, 249, 246, 0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Challenges
                  </h5>
                  <ul className="space-y-3">
                    {activeIndustry.challenges.map((challenge, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.6",
                          color: "rgba(250, 249, 246, 0.6)",
                        }}
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "rgba(239, 68, 68, 0.5)" }}
                        />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h5
                    className="mb-4"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "rgba(250, 249, 246, 0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    IMQA Solutions
                  </h5>
                  <ul className="space-y-3">
                    {activeIndustry.solutions.map((solution, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.6",
                          color: "rgba(250, 249, 246, 0.6)",
                        }}
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#d4a574" }}
                        />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stat */}
              <div
                className="mt-10 pt-8 text-center"
                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#d4a574",
                  }}
                >
                  {activeIndustry.stat}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
