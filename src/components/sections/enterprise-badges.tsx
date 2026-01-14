"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Annual audits by independent third parties",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Full data privacy controls for EU customers",
  },
  {
    icon: FileCheck,
    title: "HIPAA Ready",
    description: "BAA available for healthcare organizations",
  },
  {
    icon: Server,
    title: "99.99% SLA",
    description: "Enterprise uptime guarantee with credits",
  },
];

export function EnterpriseBadges() {
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
            Trust & compliance
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
            Security your team can rely on
          </h3>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="rounded-2xl p-6 text-center"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "rgba(212, 165, 116, 0.1)",
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#d4a574" }} />
                </div>

                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgba(250, 249, 246, 0.9)",
                    marginBottom: "8px",
                  }}
                >
                  {badge.title}
                </h4>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    color: "rgba(250, 249, 246, 0.5)",
                  }}
                >
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
