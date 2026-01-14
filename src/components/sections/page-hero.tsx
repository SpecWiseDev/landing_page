"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  description?: string;
}

export function PageHero({ badge, title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background grid with perspective */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            perspective: "1000px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <div
            className="absolute w-[200%] h-[200%] left-[-50%] top-[-20%]"
            style={{
              transform: "rotateX(60deg)",
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
            }}
          />
        </div>

        {/* Subtle warm glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(212, 165, 116, 0.06)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-6"
              style={{
                backgroundColor: "rgba(212, 165, 116, 0.1)",
                color: "#d4a574",
                border: "1px solid rgba(212, 165, 116, 0.2)",
              }}
            >
              {badge}
            </span>
          </motion.div>
        )}

        {/* Title (italic, woody) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-0.01em",
            color: "rgb(111, 131, 159)",
            lineHeight: "1.15",
            fontStyle: "italic",
            fontWeight: 400,
            marginBottom: "8px",
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle (main headline) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "rgba(250, 249, 246, 0.95)",
            lineHeight: "1.1",
            fontWeight: 500,
          }}
        >
          {subtitle}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: "rgba(250, 249, 246, 0.7)",
              lineHeight: "1.6",
            }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
