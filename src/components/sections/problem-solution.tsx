"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProblemSolution() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left - Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#d4a574] text-lg md:text-xl font-medium mb-4">
              A new way to test
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-[-0.03em] leading-[1.1] text-[var(--text-primary)]">
              An AI-powered testing environment
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pt-8"
          >
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              QA teams using IMQA save on average 10 hours a week from eliminating flaky tests, self-healing selectors, and accomplishing more of their testing workflow from a single app.
            </p>
          </motion.div>
        </div>

        {/* Large Product Screenshot with Labels */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-32"
        >
          {/* Labels */}
          <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                Traditional QA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--text-primary)] uppercase tracking-wider">
                IMQA
              </span>
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
          </div>

          {/* Screenshot Container with Scenic Background */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Scenic Background */}
            <Image
              src="/screenshots/hero-bg.jpg"
              alt=""
              width={1400}
              height={800}
              className="w-full h-auto object-cover"
            />

            {/* Screenshot Overlay */}
            <div className="absolute inset-4 md:inset-8 lg:inset-12">
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-full border border-white/10">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="IMQA Dashboard"
                  width={1200}
                  height={700}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* State of the Art Section with Scenic Background */}
        <div className="relative mb-16">
          {/* Scenic Background */}
          <div className="absolute inset-0 -mx-6 overflow-hidden">
            <div className="absolute inset-0 w-[calc(100%+48px)] h-full">
              <Image
                src="/screenshots/hero-bg.jpg"
                alt=""
                fill
                className="object-cover opacity-30"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>

          <div className="relative py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-[-0.03em] leading-[1.1] text-[var(--text-primary)] mb-6">
                State of the art AI
              </h2>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
                Leading AI models and full browser automation across the software testing lifecycle
              </p>
            </motion.div>

            {/* Rankings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-8 mb-16"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border)]">
                <span className="text-lg">🏆</span>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">98.5%</p>
                  <p className="text-xs text-[var(--text-muted)]">Test Pass Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border)]">
                <span className="text-lg">⚡</span>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">10x Faster</p>
                  <p className="text-xs text-[var(--text-muted)]">Than Manual Testing</p>
                </div>
              </div>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Visual Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--text-primary)] text-center px-4">
                    AI-Powered<br />Testing
                  </span>
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">
                  <span className="text-sm text-[var(--text-secondary)]">Natural Language</span>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">
                  <span className="text-sm text-[var(--text-secondary)]">Self-Healing</span>
                </div>
                <div className="absolute top-1/2 left-4 -translate-y-1/2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">
                  <span className="text-sm text-[var(--text-secondary)]">Video Evidence</span>
                </div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">
                  <span className="text-sm text-[var(--text-secondary)]">CI/CD Ready</span>
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </motion.div>

            {/* Right - Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="border-b border-[var(--border)] pb-8">
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                  The multi-model advantage
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Instant access to the latest AI models. Our multi-model approach outperforms single-model setups, keeping you testing with the best AI on the market.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-8 h-8 rounded bg-[var(--bg-muted)] flex items-center justify-center text-xs font-bold">AI</div>
                  <div className="w-8 h-8 rounded bg-[var(--bg-muted)] flex items-center justify-center text-xs">🧠</div>
                  <div className="w-8 h-8 rounded bg-[var(--bg-muted)] flex items-center justify-center text-xs">✨</div>
                </div>
              </div>

              <div className="border-b border-[var(--border)] pb-8">
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                  Full testing lifecycle, from one app
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  IMQA is built at the browser level, meaning it can write tests, run them, capture evidence, and even integrate with your CI/CD pipeline.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-purple-400 mb-3">
                  Full Browser Automation
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  IMQA agents run real browser interactions, work inside any web app, and use advanced element detection for reliable test execution.
                </p>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
