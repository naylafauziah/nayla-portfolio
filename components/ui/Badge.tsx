import * as React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: "orange" | "neutral";
}

export function Badge({
  children,
  className = "",
  tone = "neutral",
}: BadgeProps) {
  const toneClasses =
    tone === "orange"
      ? "bg-orange-light text-orange border-orange/20"
      : "bg-white text-secondary-text border-border";

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full border ${toneClasses} ${className}`}
    >
      {tone === "orange" && (
        <span
          className="relative flex h-1.5 w-1.5"
          aria-hidden="true"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange" />
        </span>
      )}
      {children}
    </span>
  );
}
