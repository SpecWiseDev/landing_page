"use client";

import { motion } from "framer-motion";

const LogoFace = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full">
    {/* Checkmark */}
    <path
      d="M28 60 L48 80 L92 36"
      stroke="rgba(255, 255, 255, 0.12)"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Woody accent dot */}
    <circle cx="96" cy="96" r="8" fill="rgba(212, 165, 116, 0.25)" />
  </svg>
);

export function RotatingCubeBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center"
      style={{
        zIndex: 0,
        backgroundColor: "#121212",
      }}
    >
      {/* 3D Cube Container */}
      <div
        className="relative"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <motion.div
          className="relative"
          style={{
            width: "400px",
            height: "400px",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "translateZ(200px)",
                            backgroundColor: "rgba(212, 165, 116, 0.03)",
              backfaceVisibility: "hidden",
            }}
          >
            <LogoFace />
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "translateZ(-200px) rotateY(180deg)",
                            backgroundColor: "rgba(212, 165, 116, 0.03)",
              backfaceVisibility: "hidden",
            }}
          >
            <LogoFace />
          </div>

          {/* Left face */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "translateX(-200px) rotateY(-90deg)",
                            backgroundColor: "rgba(212, 165, 116, 0.03)",
              backfaceVisibility: "hidden",
            }}
          >
            <LogoFace />
          </div>

          {/* Right face */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "translateX(200px) rotateY(90deg)",
                            backgroundColor: "rgba(212, 165, 116, 0.03)",
              backfaceVisibility: "hidden",
            }}
          >
            <LogoFace />
          </div>

          {/* Top face */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "translateY(-200px) rotateX(90deg)",
                            backgroundColor: "rgba(212, 165, 116, 0.03)",
              backfaceVisibility: "hidden",
            }}
          >
            <LogoFace />
          </div>

          {/* Bottom face */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "translateY(200px) rotateX(-90deg)",
                            backgroundColor: "rgba(212, 165, 116, 0.03)",
              backfaceVisibility: "hidden",
            }}
          >
            <LogoFace />
          </div>


        </motion.div>
      </div>

      {/* Subtle woody glow behind cube */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 165, 116, 0.12) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
