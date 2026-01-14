"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="relative py-8">
      {/* Full-width container with scenic background */}
      <div className="relative mx-6 rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/screenshots/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
          {/* Gradient overlay - woody/warm tones */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(212, 165, 116, 0.3) 0%, rgba(180, 130, 80, 0.2) 50%, rgba(139, 90, 43, 0.15) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 py-24 md:py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Subtitle */}
            <p
              style={{
                fontSize: "24px",
                color: "rgb(111, 131, 159)",
                fontStyle: "italic",
                fontWeight: 400,
                marginBottom: "8px",
              }}
            >
              Ready to transform your QA?
            </p>

            {/* Main Headline */}
            <h2
              style={{
                fontSize: "48px",
                letterSpacing: "-0.02em",
                color: "rgba(250, 249, 246, 0.95)",
                lineHeight: "1.15",
                fontWeight: 500,
                marginBottom: "24px",
              }}
            >
              Start testing smarter with IMQA today
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "18px",
                lineHeight: "160%",
                color: "rgba(250, 249, 246, 0.7)",
                marginBottom: "32px",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Join thousands of QA teams who have eliminated flaky tests and
              reduced testing time by 10x with AI-powered automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.imqa.ai/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "#d4a574",
                  color: "#1a1a1a",
                }}
              >
                Get started free
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:sales@imqa.ai"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-medium transition-all duration-200 hover:bg-white/20"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "rgba(250, 249, 246, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                Contact sales
              </a>
            </div>

            {/* Trust indicators */}
            <p
              className="mt-8"
              style={{
                fontSize: "14px",
                color: "rgba(250, 249, 246, 0.5)",
              }}
            >
              No credit card required • Free tier available • Setup in minutes
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
