"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Describe your scenario",
    description:
      "Share your requirements in plain language. The autonomous agent understands context and creates detailed test steps automatically.",
    image: "/screenshots/Chat.png",
    isGif: true,
  },
  {
    id: 2,
    title: "Autonomous execution",
    description:
      "The AI agent takes over — navigating your app, interacting with elements, and testing the scenario end-to-end without manual intervention.",
    image: "https://xhwueqrzbgdvqaranpkl.supabase.co/storage/v1/object/public/imqa_cdn/Square_Agent_Live.gif",
    isGif: true,
  },
  {
    id: 3,
    title: "Self-healing intelligence",
    description:
      "When the experience changes, the agent adapts. If stuck, it asks clarifying questions. No brittle selectors, no flaky tests.",
    image: "/screenshots/Agent_Input.png",
    isGif: false,
  },
  {
    id: 4,
    title: "Complete visibility",
    description:
      "Get full context with console logs, network requests, and accessibility insights. Deploy with confidence knowing exactly what happened.",
    image: "https://xhwueqrzbgdvqaranpkl.supabase.co/storage/v1/object/public/imqa_cdn/Details.gif",
    isGif: true,
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
                  className={`relative cursor-pointer transition-all duration-300 rounded-[10px] ${isActive ? "bg-[#1e1e1e]" : "opacity-50 hover:opacity-70"
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
                        className={`h-[3px] rounded-full overflow-hidden mb-4 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
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

            {/* Screenshot/GIF overlaid - vertically centered */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
              <div
                className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 aspect-square w-[95%]"
              >
                <Image
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  fill
                  className="object-fill"
                  unoptimized={features[activeIndex].isGif}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
