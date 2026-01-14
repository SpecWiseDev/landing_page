"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Card({
  image,
  alt,
  title,
  description,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden h-full"
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Image/Video Container */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "3 / 2",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          style={{
            objectPosition: "center center",
            objectFit: "cover",
          }}
        />
      </div>
      {/* Footer */}
      <div className="p-6">
        <p
          style={{
            fontSize: "36px",
            letterSpacing: "-0.02em",
            lineHeight: "115%",
            color: "rgba(250, 249, 246, 0.9)",
            marginBottom: "8px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "140%",
            color: "rgba(250, 249, 246, 0.7)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function FullCycle() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Top Left - Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h2
                style={{
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  color: "rgb(111, 131, 159)",
                  lineHeight: "1.15",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Complete testing workflow
              </h2>
              <h2
                style={{
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  color: "rgba(250, 249, 246, 0.9)",
                  lineHeight: "1.15",
                  fontWeight: 400,
                }}
              >
                Create. Execute. Analyze.
              </h2>
            </motion.div>

            {/* Top Right - Card 1: Create (Code) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card
                image="/screenshots/dashboard.png"
                alt="IMQA Create Tests"
                title="Create"
                description="Write tests in natural language. IMQA interprets your intent and generates production-ready, maintainable code."
              />
            </motion.div>

            {/* Bottom Left - Card 2: Execute (Maintain) - with cube behind */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Rotating Cube - behind this card */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[773px] h-[860px] pointer-events-none opacity-10 hidden md:block -z-10"
                style={{
                  animation: "rotateCube 30s linear infinite",
                }}
              >
                <svg viewBox="0 0 822 914" fill="none" className="w-full h-full">
                  <path
                    d="M411 0L822 237V677L411 914L0 677V237L411 0Z"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M411 237L822 0M411 237L0 0M411 237V914M411 237L822 474M411 237L0 474"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <Card
                image="/screenshots/test-results.png"
                alt="IMQA Execute Tests"
                title="Execute"
                description="Run across browsers with self-healing selectors. Tests adapt to UI changes automatically, keeping your pipeline stable."
              />
            </motion.div>

            {/* Bottom Right - Card 3: Analyze (Deploy) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card
                image="/screenshots/side-nav.png"
                alt="IMQA Analyze Results"
                title="Analyze"
                description="Video recordings, detailed logs, and AI-powered diagnostics. Understand failures in seconds, not hours."
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotateCube {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
