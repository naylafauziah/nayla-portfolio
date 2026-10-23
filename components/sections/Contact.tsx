"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/data/socialLinks";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EMAIL_URL = socialLinks.find((l) => l.name === "Email")?.url ?? "mailto:nayla.fauziah@example.com";
const LINKEDIN_URL =
  socialLinks.find((l) => l.name === "LinkedIn")?.url ?? "https://linkedin.com/in/";
const GITHUB_URL =
  socialLinks.find((l) => l.name === "GitHub")?.url ?? "https://github.com/";

export function Contact() {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-spacing scroll-mt-24 bg-navy relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span
          className="font-display font-black tracking-[0.1em] text-[min(22vw,240px)] leading-none text-white/[0.025]"
        >
          LET&apos;S TALK
        </span>
      </div>

      <Container className="relative">
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="max-w-3xl mx-auto text-center space-y-10"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/60">
              06 · Let&apos;s Connect
            </span>
          </motion.div>

          <motion.h2
            id="contact-heading"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-section-mobile md:text-section-desktop font-display font-bold text-white leading-[1.1] tracking-tight text-balance"
          >
            Let&apos;s build something meaningful.
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-base md:text-lg text-white/65 leading-relaxed max-w-xl mx-auto"
          >
            I&apos;m currently open to software engineering and frontend development
            opportunities. Feel free to reach out if you&apos;d like to work together
            or discuss an opportunity.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={EMAIL_URL}
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-base font-semibold bg-orange hover:bg-orange-hover text-white rounded-xl transition-all duration-300 shadow-subtle hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              aria-label="Send an email to Nayla Fauziah"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Get in Touch
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex flex-wrap items-center justify-center gap-5 pt-2"
            aria-label="Social and contact links"
          >
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-orange transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded px-2 py-2"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <span className="h-4 w-px bg-white/10" aria-hidden="true" />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-orange transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded px-2 py-2"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium">GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
