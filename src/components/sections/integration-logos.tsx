"use client";

import { motion } from "framer-motion";

const integrations = [
  {
    name: "GitHub Actions",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "GitLab CI",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
      </svg>
    ),
  },
  {
    name: "Jenkins",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6 0 5.302-4.298 9.6-9.6 9.6-5.302 0-9.6-4.298-9.6-9.6 0-5.302 4.298-9.6 9.6-9.6zm-.6 3c-.9 0-1.5.6-1.5 1.5s.6 1.5 1.5 1.5 1.5-.6 1.5-1.5-.6-1.5-1.5-1.5zm-3 3c-.6 0-1.2.6-1.2 1.2 0 .6.6 1.2 1.2 1.2.6 0 1.2-.6 1.2-1.2 0-.6-.6-1.2-1.2-1.2zm6 0c-.6 0-1.2.6-1.2 1.2 0 .6.6 1.2 1.2 1.2.6 0 1.2-.6 1.2-1.2 0-.6-.6-1.2-1.2-1.2zm-3 2.4c-1.8 0-3.3 1.5-3.3 3.3v1.5c0 .3.3.6.6.6h5.4c.3 0 .6-.3.6-.6v-1.5c0-1.8-1.5-3.3-3.3-3.3z" />
      </svg>
    ),
  },
  {
    name: "CircleCI",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4.8c3.97 0 7.2 3.23 7.2 7.2 0 3.97-3.23 7.2-7.2 7.2-3.97 0-7.2-3.23-7.2-7.2 0-3.97 3.23-7.2 7.2-7.2zm0 2.4c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 2.4c1.32 0 2.4 1.08 2.4 2.4s-1.08 2.4-2.4 2.4-2.4-1.08-2.4-2.4 1.08-2.4 2.4-2.4z" />
      </svg>
    ),
  },
  {
    name: "Bitbucket Pipelines",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z" />
      </svg>
    ),
  },
  {
    name: "Azure DevOps",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z" />
      </svg>
    ),
  },
];

export function IntegrationLogos() {
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
            Seamless integration
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
            Works with your existing pipeline
          </h3>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="mb-4"
                style={{ color: "rgba(250, 249, 246, 0.5)" }}
              >
                {integration.logo}
              </div>
              <p
                className="text-center"
                style={{
                  fontSize: "13px",
                  color: "rgba(250, 249, 246, 0.6)",
                }}
              >
                {integration.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
          style={{
            fontSize: "14px",
            color: "rgba(250, 249, 246, 0.5)",
          }}
        >
          Plus REST API for custom integrations
        </motion.p>
      </div>
    </section>
  );
}
