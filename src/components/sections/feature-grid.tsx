"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  RefreshCw,
  Globe,
  GitBranch,
  Video,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural language testing",
    description:
      "Write tests like you write requirements. Describe scenarios in plain English, and IMQA translates intent into production-ready code.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: RefreshCw,
    title: "Self-healing selectors",
    description:
      "UI changes no longer break your tests. Selectors automatically adapt to DOM modifications, eliminating maintenance overhead.",
    span: "col-span-1",
  },
  {
    icon: Video,
    title: "Video evidence",
    description:
      "Full recording of every test run. Debug failures in seconds with timestamped video, screenshots, and network logs.",
    span: "col-span-1",
  },
  {
    icon: GitBranch,
    title: "CI/CD integration",
    description:
      "Native support for GitHub Actions, GitLab CI, Jenkins, and CircleCI. Tests run automatically on every commit.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Globe,
    title: "Cross-browser execution",
    description:
      "Chrome, Firefox, Safari, and Edge. One test suite, consistent results across every browser your users rely on.",
    span: "col-span-1",
  },
  {
    icon: BarChart3,
    title: "Analytics dashboard",
    description:
      "Track test health, coverage trends, and flakiness scores. Identify patterns before they become problems.",
    span: "col-span-1",
  },
];

export function FeatureGrid() {
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
            Core capabilities
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
            Everything you need to test with confidence
          </h3>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${feature.span} rounded-2xl p-8 transition-all duration-300`}
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: "rgba(212, 165, 116, 0.1)",
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "#d4a574" }}
                  />
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontSize: "22px",
                    fontWeight: 500,
                    lineHeight: "1.3",
                    color: "rgba(250, 249, 246, 0.9)",
                    marginBottom: "12px",
                  }}
                >
                  {feature.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "rgba(250, 249, 246, 0.6)",
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
