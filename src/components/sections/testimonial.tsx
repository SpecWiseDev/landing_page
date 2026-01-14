"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonial() {
  return (
    <section className="relative py-8">
      {/* Full-width scenic background */}
      <div className="relative mx-6 rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/screenshots/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 py-24 md:py-32 px-6">
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#1e1e1e]/80 backdrop-blur-xl rounded-2xl p-10 md:p-14 text-center">
              {/* Company Logo */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center">
                  <span className="text-2xl font-bold text-white tracking-wide">
                    MoonForge
                  </span>
                  <span className="ml-1 text-purple-400 text-2xl">✦</span>
                </div>
              </div>

              {/* Quote - Large text */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
                We reduced test maintenance from 15 hours a week to under 2.
              </h2>

              {/* Quote continuation */}
              <p className="text-lg md:text-xl text-[rgba(250,249,246,0.7)] leading-relaxed max-w-2xl mx-auto mb-10">
                IMQA fundamentally changed how our team approaches quality — we ship faster and with more confidence than ever.
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white/20">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xl font-medium">
                    KS
                  </div>
                </div>

                {/* Name */}
                <p className="text-white font-medium text-lg">
                  Karim Soliman
                </p>

                {/* Title */}
                <p className="text-[rgba(250,249,246,0.6)] text-sm">
                  Chief Product Officer at MoonForge
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
