"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Coming Soon",
    role: "Founder & CEO",
    initials: "CS",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Coming Soon",
    role: "CTO",
    initials: "CS",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Coming Soon",
    role: "Head of Engineering",
    initials: "CS",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Coming Soon",
    role: "Head of Product",
    initials: "CS",
    color: "from-orange-400 to-orange-600",
  },
];

export function TeamGrid() {
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
            The team
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
            People building the future of QA
          </h3>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Avatar */}
              <div
                className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-5`}
              >
                <span
                  className="text-2xl font-medium text-white"
                  style={{ opacity: 0.8 }}
                >
                  {member.initials}
                </span>
              </div>

              {/* Name */}
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "rgba(250, 249, 246, 0.9)",
                  marginBottom: "4px",
                }}
              >
                {member.name}
              </h4>

              {/* Role */}
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(250, 249, 246, 0.5)",
                }}
              >
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hiring CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p
            style={{
              fontSize: "16px",
              color: "rgba(250, 249, 246, 0.6)",
              marginBottom: "16px",
            }}
          >
            Interested in joining us?
          </p>
          <a
            href="mailto:careers@imqa.ai"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "rgba(212, 165, 116, 0.1)",
              color: "#d4a574",
              border: "1px solid rgba(212, 165, 116, 0.2)",
            }}
          >
            View open positions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
