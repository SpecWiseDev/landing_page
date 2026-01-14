"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const securityFeatures = [
  {
    category: "Data Protection",
    features: [
      "End-to-end encryption in transit and at rest",
      "Customer-managed encryption keys (BYOK)",
      "Automatic PII detection and masking",
      "Data residency options (US, EU, APAC)",
    ],
  },
  {
    category: "Access Control",
    features: [
      "SAML 2.0 and OIDC single sign-on",
      "Role-based access control (RBAC)",
      "IP allowlisting and VPN support",
      "Audit logs with 1-year retention",
    ],
  },
  {
    category: "Infrastructure",
    features: [
      "SOC 2 Type II certified infrastructure",
      "Multi-region redundancy and failover",
      "Automated vulnerability scanning",
      "Penetration tested annually",
    ],
  },
];

export function SecurityFeatures() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
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
            Enterprise security
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
            Built for your security requirements
          </h3>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#d4a574",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "20px",
                }}
              >
                {section.category}
              </h4>

              <ul className="space-y-4">
                {section.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: sectionIndex * 0.1 + featureIndex * 0.05,
                    }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: "rgba(212, 165, 116, 0.15)",
                      }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#d4a574" }} />
                    </div>
                    <span
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "rgba(250, 249, 246, 0.7)",
                      }}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
