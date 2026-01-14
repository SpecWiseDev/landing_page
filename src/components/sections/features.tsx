"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Describe your test",
    description:
      "Specify what to test in natural language. IMQA generates a detailed test plan you can review and refine before execution.",
    image: "/screenshots/dashboard.png",
  },
  {
    id: 2,
    title: "Generate code",
    description:
      "Watch as IMQA writes production-ready test code. Every step is visible, editable, and can be adjusted in real-time.",
    image: "/screenshots/side-nav.png",
  },
  {
    id: 3,
    title: "Refine and iterate",
    description:
      "Review generated tests, request modifications in natural language, or edit directly. Collaborative refinement until your tests are exactly right.",
    image: "/screenshots/test-results.png",
  },
  {
    id: 4,
    title: "Deploy with confidence",
    description:
      "Push to CI/CD, monitor results, and let self-healing selectors handle maintenance. Your tests stay reliable as your product evolves.",
    image: "/screenshots/dashboard.png",
  },
];

const PROGRESS_DURATION = 5000;

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + (100 / (PROGRESS_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const handleFeatureHover = (index: number) => {
    setIsPaused(true);
    setActiveIndex(index);
    setProgress(0);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[#d4a574] text-2xl md:text-3xl font-light italic mb-2">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-[-0.02em] leading-[1.15] text-[var(--text-primary)] max-w-2xl">
            From intent to passing tests in minutes
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Feature List */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onMouseLeave={handleMouseLeave}
          >
            {features.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={feature.id}
                  className={`relative cursor-pointer transition-all duration-300 rounded-[10px] ${
                    isActive ? "bg-[#1e1e1e]" : "opacity-50 hover:opacity-70"
                  }`}
                  onMouseEnter={() => handleFeatureHover(index)}
                >
                  <div className="flex items-start gap-4 p-5">
                    {/* Number - Square, aligned to top */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-[4px] bg-[#2a2a2a] flex items-center justify-center text-[15px] text-white">
                      {feature.id}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Progress Bar */}
                      <div
                        className={`h-[3px] rounded-full overflow-hidden mb-4 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ background: "rgba(255, 255, 255, 0.16)" }}
                      >
                        <div
                          className="h-full bg-white rounded-full"
                          style={{
                            width: `${isActive ? progress : 0}%`,
                            transition: "none",
                          }}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-[22px] font-medium leading-[25px] text-[rgba(250,249,246,0.9)] mb-2">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[15px] leading-[25px] text-[rgba(250,249,246,0.7)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right - Screenshot on full-height scenic background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-full min-h-[600px] lg:min-h-full"
          >
            {/* Full height container with scenic background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              {/* Scenic Background - spans full height */}
              <Image
                src="/screenshots/hero-bg.jpg"
                alt=""
                fill
                className="object-cover object-bottom"
              />
            </div>

            {/* Screenshot overlaid - vertically centered */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 w-full h-[400px] md:h-[450px]">
                <Image
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
