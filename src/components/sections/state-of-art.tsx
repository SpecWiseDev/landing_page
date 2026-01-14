"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    image: "/screenshots/hero-bg.jpg",
    title: "Run tests across all major browsers",
    description:
      "Execute your tests on Chrome, Firefox, Safari, and Edge. IMQA handles browser automation seamlessly across your entire test suite.",
  },
  {
    id: 2,
    image: "/screenshots/hero-bg.jpg",
    title: "Self-healing selectors that adapt to UI changes",
    description:
      "IMQA's AI automatically updates selectors when your UI changes, eliminating flaky tests and reducing maintenance overhead.",
  },
  {
    id: 3,
    image: "/screenshots/hero-bg.jpg",
    title: "Natural language test creation",
    description:
      "Write tests in plain English. IMQA understands your intent and generates production-ready test code that integrates with your CI/CD pipeline.",
  },
];

function FeatureCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]">
      {/* Card with scenic background */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "#1a1a1a",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Image Container */}
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Overlay for icons/content would go here */}
        </div>
        {/* Footer */}
        <div className="p-6">
          <p
            style={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "140%",
              color: "rgba(250, 249, 246, 0.9)",
              marginBottom: "8px",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "160%",
              color: "rgba(250, 249, 246, 0.6)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function StateOfArt() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : features.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < features.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="flex justify-between items-start mb-12">
          {/* Left - Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
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
              State Of The Art
            </h2>
            <h2
              style={{
                fontSize: "36px",
                letterSpacing: "-0.01em",
                color: "rgba(250, 249, 246, 0.9)",
                lineHeight: "1.2",
                fontWeight: 400,
              }}
            >
              IMQA has everything you expect from a modern AI-powered testing tool
            </h2>
          </motion.div>

          {/* Right - Navigation Arrows */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              aria-label="Previous"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="rgba(250, 249, 246, 0.7)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              aria-label="Next"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="rgba(250, 249, 246, 0.7)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-6 overflow-hidden"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
