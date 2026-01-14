"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{
                backgroundColor: "rgba(212, 165, 116, 0.1)",
              }}
            >
              <Target className="w-6 h-6" style={{ color: "#d4a574" }} />
            </div>

            <h3
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#d4a574",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "12px",
              }}
            >
              Our Mission
            </h3>

            <h4
              style={{
                fontSize: "28px",
                fontWeight: 500,
                lineHeight: "1.3",
                color: "rgba(250, 249, 246, 0.9)",
                marginBottom: "16px",
              }}
            >
              Eliminate the gap between writing code and proving it works
            </h4>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "rgba(250, 249, 246, 0.6)",
              }}
            >
              We believe every engineer should be able to ship with confidence.
              Testing shouldn&apos;t be a bottleneck—it should be a
              superpower. IMQA exists to make comprehensive testing as natural
              as writing code.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{
                backgroundColor: "rgba(212, 165, 116, 0.1)",
              }}
            >
              <Eye className="w-6 h-6" style={{ color: "#d4a574" }} />
            </div>

            <h3
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#d4a574",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "12px",
              }}
            >
              Our Vision
            </h3>

            <h4
              style={{
                fontSize: "28px",
                fontWeight: 500,
                lineHeight: "1.3",
                color: "rgba(250, 249, 246, 0.9)",
                marginBottom: "16px",
              }}
            >
              A world where software quality is automatic, not afterthought
            </h4>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "rgba(250, 249, 246, 0.6)",
              }}
            >
              We envision a future where AI handles the mechanics of testing
              while humans focus on creativity and strategy. Where releases
              happen daily without fear, and users never encounter preventable
              bugs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
