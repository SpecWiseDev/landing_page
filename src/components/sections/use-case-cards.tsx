"use client";

import { motion } from "framer-motion";
import { TestTube, Code2, Package, Server } from "lucide-react";

const roles = [
  {
    icon: TestTube,
    title: "QA Engineers",
    pain: "Spending 60% of time on test maintenance",
    solution:
      "Self-healing selectors eliminate maintenance. Focus on strategy, not fixing broken locators.",
    metric: "80% less maintenance time",
  },
  {
    icon: Code2,
    title: "Developers",
    pain: "Writing tests feels like a second job",
    solution:
      "Describe behavior in natural language. IMQA writes the code, you review and refine.",
    metric: "10x faster test creation",
  },
  {
    icon: Package,
    title: "Product Teams",
    pain: "Releases delayed by testing bottlenecks",
    solution:
      "Parallel execution across browsers. Complete test suites finish in minutes, not hours.",
    metric: "3x faster release cycles",
  },
  {
    icon: Server,
    title: "DevOps",
    pain: "Flaky tests blocking CI/CD pipelines",
    solution:
      "AI-powered stability analysis identifies and fixes flakiness before it impacts deployments.",
    metric: "98.5% pipeline reliability",
  },
];

export function UseCaseCards() {
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
            Built for your role
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
            Solve real problems, not just automate tasks
          </h3>
        </motion.div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "rgba(212, 165, 116, 0.1)",
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#d4a574" }} />
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.3",
                    color: "rgba(250, 249, 246, 0.9)",
                    marginBottom: "16px",
                  }}
                >
                  {role.title}
                </h4>

                {/* Pain Point */}
                <p
                  className="mb-4"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    color: "rgba(250, 249, 246, 0.5)",
                  }}
                >
                  <span style={{ color: "rgba(239, 68, 68, 0.7)" }}>
                    Pain:
                  </span>{" "}
                  {role.pain}
                </p>

                {/* Solution */}
                <p
                  className="flex-grow"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(250, 249, 246, 0.6)",
                  }}
                >
                  {role.solution}
                </p>

                {/* Metric */}
                <div
                  className="mt-6 pt-4"
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#d4a574",
                    }}
                  >
                    {role.metric}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
