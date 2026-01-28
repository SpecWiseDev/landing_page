"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface ImageComparisonSliderProps {
  beforeBackground: string;
  afterBackground: string;
  beforeOverlay?: string;
  afterOverlay?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  beforeOverlayIsGif?: boolean;
  afterOverlayIsGif?: boolean;
}

export function ImageComparisonSlider({
  beforeBackground,
  afterBackground,
  beforeOverlay,
  afterOverlay,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
  beforeOverlayIsGif = false,
  afterOverlayIsGif = false,
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
      style={{ borderRadius: "16px", aspectRatio: "16 / 9" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* After Side (Right/Background) */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <Image
          src={afterBackground}
          alt=""
          fill
          className="object-cover blur-[2px] brightness-110"
          draggable={false}
        />
        {/* Overlay GIF/Image */}
        {afterOverlay && (
          <div className="absolute inset-8 md:inset-12 lg:inset-16 flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden shadow-2xl" style={{ borderRadius: "8px" }}>
              <Image
                src={afterOverlay}
                alt={afterLabel}
                fill
                className="object-cover object-top"
                draggable={false}
                unoptimized={afterOverlayIsGif}
                quality={100}
              />
            </div>
          </div>
        )}
      </div>

      {/* Before Side (Left/Overlay) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="absolute top-0 left-0 h-full"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        >
          {/* Background Image */}
          <Image
            src={beforeBackground}
            alt=""
            fill
            className="object-cover blur-[2px]"
            draggable={false}
          />
          {/* Overlay GIF/Image */}
          {beforeOverlay && (
            <div className="absolute inset-8 md:inset-12 lg:inset-16 flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden shadow-2xl" style={{ borderRadius: "8px" }}>
                <Image
                  src={beforeOverlay}
                  alt={beforeLabel}
                  fill
                  className="object-cover object-top brightness-75"
                  draggable={false}
                  unoptimized={beforeOverlayIsGif}
                  quality={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 h-full flex justify-center items-center z-10"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
        }}
      >
        {/* Vertical Line */}
        <div
          className="h-full w-px"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.14)" }}
        />

        {/* Slider Handle */}
        <div
          className="absolute cursor-ew-resize touch-pan-x"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <circle cx="19" cy="19" r="19" fill="rgb(250,249,246)" />
            <path
              d="M 23.248 23.416 L 22.48 22.648 L 25.52 19.592 L 12.48 19.592 L 15.536 22.648 L 14.752 23.416 L 10.352 19 L 14.768 14.584 L 15.552 15.368 L 12.48 18.408 L 25.52 18.408 L 22.464 15.368 L 23.232 14.584 L 27.648 19 Z"
              fill="rgba(18,18,18,0.9)"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        className="absolute top-4 left-4 transition-opacity duration-200"
        style={{ opacity: sliderPosition < 15 ? 0 : 1 }}
      >
        <div
          className="inline-flex items-center px-4 py-2 text-sm font-medium"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "rgba(250, 249, 246, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "4px",
            backdropFilter: "blur(8px)",
          }}
        >
          {beforeLabel}
        </div>
      </div>
      <div
        className="absolute top-4 right-4 transition-opacity duration-200"
        style={{ opacity: sliderPosition > 85 ? 0 : 1 }}
      >
        <div
          className="inline-flex items-center px-4 py-2 text-sm font-medium"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#121212",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "4px",
            backdropFilter: "blur(8px)",
          }}
        >
          {afterLabel}
        </div>
      </div>
    </div>
  );
}
