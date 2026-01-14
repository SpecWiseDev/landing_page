"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started",
    price: "Free",
    period: "",
    features: [
      "Up to 100 test runs/month",
      "1 project",
      "Basic reporting",
      "Community support",
      "7-day test history",
    ],
    cta: "Get started",
    href: "https://app.imqa.ai/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For growing teams that need more power",
    price: "$49",
    period: "/month",
    features: [
      "Unlimited test runs",
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Self-healing selectors",
      "CI/CD integrations",
      "Video recordings",
      "90-day test history",
    ],
    cta: "Start free trial",
    href: "https://app.imqa.ai/signup",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with custom requirements",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "SSO & SAML",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated success manager",
      "On-premise deployment",
      "Unlimited history",
    ],
    cta: "Contact sales",
    href: "mailto:sales@imqa.ai",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium uppercase tracking-wider mb-4"
            style={{ color: "#d4a574" }}
          >
            Pricing
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{
              color: "rgba(250, 249, 246, 0.9)",
              letterSpacing: "-0.02em",
            }}
          >
            Simple, transparent pricing
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(250, 249, 246, 0.6)" }}
          >
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted ? "md:-mt-4 md:mb-4" : ""
              }`}
              style={{
                backgroundColor: "#1a1a1a",
                border: plan.highlighted
                  ? "1px solid #d4a574"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: plan.highlighted
                  ? "0 0 60px rgba(212, 165, 116, 0.15)"
                  : "none",
              }}
            >
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "#d4a574",
                    color: "#1a1a1a",
                  }}
                >
                  Most popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "rgba(250, 249, 246, 0.9)" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(250, 249, 246, 0.6)" }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ color: "rgba(250, 249, 246, 0.95)" }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className="text-base"
                    style={{ color: "rgba(250, 249, 246, 0.5)" }}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href={plan.href}
                className="block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] mb-8"
                style={{
                  backgroundColor: plan.highlighted ? "#d4a574" : "transparent",
                  color: plan.highlighted ? "#1a1a1a" : "rgba(250, 249, 246, 0.9)",
                  border: plan.highlighted
                    ? "1px solid #d4a574"
                    : "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#d4a574" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "rgba(250, 249, 246, 0.7)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-sm"
          style={{ color: "rgba(250, 249, 246, 0.5)" }}
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
