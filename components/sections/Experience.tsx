"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, FolderGit2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import type { ExperienceItem } from "@/types/project";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function TypeIcon({ type }: { type: ExperienceItem["type"] }) {
  const props = { className: "w-4 h-4", "aria-hidden": "true" as const };
  switch (type) {
    case "education":
      return <GraduationCap {...props} />;
    case "experience":
      return <Briefcase {...props} />;
    case "organization":
      return <Users {...props} />;
    case "project":
    default:
      return <FolderGit2 {...props} />;
  }
}

export function Experience() {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-spacing scroll-mt-24"
    >
      <Container className="space-y-14">
        <SectionHeading
          number="04"
          label="Experience & Education"
          title="My journey so far"
          subtitle="Education, projects, and experiences that shaped my growth as a software engineer."
        />

        <div className="relative max-w-4xl mx-auto">
          <div
            aria-hidden="true"
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-orange/60 via-border to-transparent"
          />
          <ol className="space-y-10" role="list">
            {experience.map((item, i) => (
              <motion.li
                key={`${item.title}-${item.date}`}
                initial={initial}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -16 : 16, y: 12 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="relative pl-14 md:pl-20"
              >
                <span
                  className="absolute left-0 md:left-2 top-0 h-8 w-8 md:h-9 md:w-9 inline-flex items-center justify-center rounded-full bg-white border border-border text-orange shadow-subtle"
                  aria-hidden="true"
                >
                  <TypeIcon type={item.type} />
                </span>

                <div className="bg-white border border-border rounded-xl p-6 md:p-7 transition-all duration-300 hover:border-orange/30 hover:shadow-card">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="text-xs font-semibold tabular-nums tracking-wide text-orange bg-orange-light px-2.5 py-1 rounded-md">
                      {item.date}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-muted-text font-medium">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-bold text-navy tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary-text font-medium mt-1">
                    {item.institution}
                  </p>

                  <p className="mt-4 text-sm md:text-[15px] text-secondary-text leading-relaxed">
                    {item.description}
                  </p>

                  {item.activities.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-border/70">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-text font-semibold mb-2.5">
                        Relevant areas
                      </p>
                      <ul className="flex flex-wrap gap-2" role="list">
                        {item.activities.map((activity) => (
                          <li
                            key={activity}
                            className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-background text-secondary-text border border-border"
                          >
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
