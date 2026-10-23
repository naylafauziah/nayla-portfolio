"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpStagger } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={initial}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpStagger(0.1)}
      className={`flex flex-col gap-5 ${alignment}`}
    >
      <motion.div
        variants={fadeUp}
        className={`inline-flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="text-sm font-semibold text-orange tracking-wider tabular-nums">
          {number}
        </span>
        <span className="h-px w-10 bg-orange/30" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-[0.18em] text-secondary-text uppercase">
          {label}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-section-mobile md:text-section-desktop font-display font-bold text-navy leading-[1.15] tracking-tight max-w-3xl text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-secondary-text leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
