"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Politeknik Negeri Padang",
    subtitle: "Software Engineering",
  },
  {
    icon: Code2,
    title: "Web · Mobile · AI/ML",
    subtitle: "Technical Focus",
  },
  {
    icon: Briefcase,
    title: "Full-time Opportunities",
    subtitle: "Open to Work",
  },
] as const;

export function About() {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-spacing scroll-mt-24"
    >
      <Container>
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-20"
        >
          <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="lg:col-span-5 space-y-8"
          >
            <div className="inline-flex items-center gap-3">
              <span className="text-sm font-semibold text-orange tracking-wider tabular-nums">
                01
              </span>
              <span className="h-px w-10 bg-orange/30" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary-text">
                About Me
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-section-mobile md:text-section-desktop font-display font-bold text-navy leading-[1.1] tracking-tight text-balance"
            >
              I build web and mobile products, and keep learning along the way.
            </h2>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-5 text-base md:text-lg text-secondary-text leading-relaxed">
              <p>
              I&apos;m a Software Engineering graduate from Politeknik Negeri Padang with a strong interest in building practical, user-friendly web and mobile applications.
              </p>
              <p>
              During my frontend internship at cmlabs, I gained hands-on experience working with Next.js and TypeScript. I also independently developed full-stack, mobile, and AI-based projects, strengthening my problem-solving and software development skills.
              </p>
              <p>
              I&apos;m looking for opportunities as a Software Engineer or Frontend Developer where I can contribute to real products, collaborate with a team, and continue growing professionally.
              </p>
            </div>

            <div className="pt-4 border-t border-border" aria-label="Highlights">
              <dl className="grid grid-cols-3 gap-3 sm:gap-8">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="h-full flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 h-10 w-10 inline-flex items-center justify-center rounded-xl bg-orange-light text-orange">
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 min-h-[3.25rem]">
                    <dt className="text-base font-semibold text-navy leading-tight">{item.title}</dt>
                    <dd className="text-xs text-muted-text tracking-wide uppercase leading-none">
                      {item.subtitle}
                    </dd>
                  </div>
                </motion.div>
              ))}
            </dl>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
