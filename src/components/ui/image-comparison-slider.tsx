"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
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
      style={{ borderRadius: "16px" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* After Image (Right/Background) */}
      <div className="relative w-full">
        <Image
          src={afterImage}
          alt={afterLabel}
          width={1400}
          height={800}
          className="w-full h-auto object-cover"
          draggable={false}
        />
      </div>

      {/* Before Image (Left/Overlay) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="absolute top-0 left-0 h-full"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            width={1400}
            height={800}
            className="w-full h-auto object-cover"
            draggable={false}
          />
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
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[var(--text-muted)]" />
        <span className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="text-sm text-[var(--text-primary)] uppercase tracking-wider">
          {afterLabel}
        </span>
        <div className="w-2 h-2 rounded-full bg-purple-500" />
      </div>
    </div>
  );
}
