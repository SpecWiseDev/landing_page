import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "purple";
}

export function GradientText({
  children,
  className,
  variant = "default",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        variant === "default" ? "text-gradient" : "text-gradient-purple",
        className
      )}
    >
      {children}
    </span>
  );
}
