"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Database,
  Smartphone,
  Palette,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CATEGORY_ICONS = {
  Frontend: LayoutGrid,
  "Backend / Database": Database,
  Mobile: Smartphone,
  Design: Palette,
  Tools: Wrench,
} as const;

export function Skills() {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-spacing scroll-mt-24 bg-orange-light/30 border-y border-orange/10"
    >
      <Container className="space-y-14">
        <SectionHeading
          number="03"
          label="Tools & Technologies"
          title="Technologies I work with"
        />

        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skills.map((category, i) => {
            const Icon =
              (CATEGORY_ICONS as Record<string, typeof LayoutGrid>)[
                category.title
              ] ?? Wrench;
            return (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-orange/30 hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-orange-light text-orange">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-navy tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5" role="list">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-secondary-text"
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-orange/60"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
