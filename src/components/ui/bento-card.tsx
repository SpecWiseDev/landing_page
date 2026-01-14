"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

export function BentoCard({
  title,
  description,
  icon: Icon,
  children,
  className,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card p-8",
        "hover:border-accent-primary hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
        "transition-all duration-300",
        className
      )}
    >
      {Icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/10">
          <Icon className="h-6 w-6 text-accent-primary" />
        </div>
      )}

      <h3 className="mb-2 text-xl font-semibold text-text-primary">
        {title}
      </h3>

      <p className="text-text-muted">
        {description}
      </p>

      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}

      {/* Purple glow effect on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 glow-purple" />
    </motion.div>
  );
}
