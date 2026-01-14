"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "Nov 2025",
    title: "Founded",
    description:
      "Started with a simple idea: testing should be as easy as describing what you want to test.",
  },
  {
    year: "Dec 2025",
    title: "First prototype",
    description:
      "Built the core AI engine. Natural language to test code became reality.",
  },
  {
    year: "Jan 2026",
    title: "Beta launch",
    description:
      "Launched beta with early design partners. Learning what engineering teams actually need.",
  },
  {
    year: "Future",
    title: "What's next",
    description:
      "Self-healing selectors, cross-browser execution, and seamless CI/CD integration.",
  },
];

export function CompanyTimeline() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
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
            Our journey
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
            Building the future of testing
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                  style={{
                    backgroundColor: "#d4a574",
                    boxShadow: "0 0 20px rgba(212, 165, 116, 0.3)",
                  }}
                />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                  }`}
                >
                  <span
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-3"
                    style={{
                      backgroundColor: "rgba(212, 165, 116, 0.1)",
                      color: "#d4a574",
                    }}
                  >
                    {milestone.year}
                  </span>
                  <h4
                    style={{
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "rgba(250, 249, 246, 0.9)",
                      marginBottom: "8px",
                    }}
                  >
                    {milestone.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "rgba(250, 249, 246, 0.6)",
                    }}
                  >
                    {milestone.description}
                  </p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
