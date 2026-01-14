"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden bg-[var(--bg-primary)]">
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]" />

        {/* 3D Grid with perspective */}
        <div
          className="absolute inset-0"
          style={{
            perspective: '1000px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          <div
            className="absolute w-[200%] h-[200%] left-[-50%] top-[-20%]"
            style={{
              transform: 'rotateX(60deg)',
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)'
            }}
          />
        </div>

        {/* Subtle warm glow at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[120px]" style={{ backgroundColor: "rgba(212, 165, 116, 0.08)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-medium tracking-[-0.04em] leading-[0.95] text-[var(--text-primary)]"
            >
              Tests that write
              <br />
              themselves.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-[var(--text-secondary)] leading-relaxed"
            >
              Describe what to test in plain language. IMQA generates production-ready code, runs it across browsers, and maintains it automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col gap-4"
            >
              <Link
                href="https://app.imqa.ai/signup"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium w-fit transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "rgb(249, 250, 245)",
                  borderRadius: "4px",
                  color: "#1a1a1a",
                }}
              >
                Run Agent
                <ArrowRight className="w-4 h-4" />
              </Link>

            </motion.div>
          </div>

          {/* Right side - Product screenshot with scenic background */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Scenic background image container */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background scenic image */}
              <Image
                src="/screenshots/hero-bg.jpg"
                alt=""
                width={1100}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Screenshot window overlaid on scenic background */}
              <div className="absolute inset-4 md:inset-6 lg:inset-8">
                <div className="relative rounded-xl overflow-hidden shadow-2xl h-full">
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="IMQA Dashboard"
                    width={1000}
                    height={700}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
