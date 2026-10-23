"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Eye } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/data/socialLinks";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CV_URL = "/cv/Nayla_Fauziah_CV.pdf";
const PROFILE_IMAGE = "/images/profile/nayla-fauziah3.png";

function SocialIcon({ name }: { name: string }) {
  const className = "w-4 h-4";
  switch (name.toLowerCase()) {
    case "github":
      return <Github className={className} aria-hidden="true" />;
    case "linkedin":
      return <Linkedin className={className} aria-hidden="true" />;
    case "email":
      return <Mail className={className} aria-hidden="true" />;
    default:
      return null;
  }
}

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-[112px] md:pt-[120px] lg:pt-[128px] pb-[72px] md:pb-[96px] lg:pb-[120px] overflow-hidden"
    >
      <Container>
        <motion.div
          initial={initial}
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Badge tone="orange">Available for opportunities</Badge>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-secondary-text">
                  Software Engineer · Web & Mobile Developer · AI/ML Enthusiast
                </span>
              </div>
              <p className="text-lg md:text-xl text-navy/80 font-medium">
                Hi, I&apos;m Nayla Fauziah.
              </p>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-hero-mobile md:text-hero-tablet lg:text-hero-desktop font-display font-bold text-navy leading-[1.05] tracking-tight text-balance"
            >
              Software Engineer{" "}
              <br className="hidden sm:block" />
              building{" "}
              <span className="text-orange">thoughtful</span>{" "}
              <br className="hidden sm:block" />
              digital experiences.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-base md:text-lg text-secondary-text leading-relaxed max-w-xl"
            >
              Software Engineering fresh graduate passionate about building
              functional, accessible, and user-friendly digital products through
              clean code and thoughtful design.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button href="#projects" size="lg" showArrow>
                View My Work
              </Button>
              <Button href={CV_URL} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
                <Eye className="w-4 h-4" aria-hidden="true" />
                View CV
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-orange transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 py-1"
                  aria-label={`${link.label} (opens in a new tab)`}
                >
                  <SocialIcon name={link.name} />
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.98 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15,
                },
              },
            }}
            initial={initial}
            animate="visible"
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 w-28 h-28 border-l-2 border-t-2 border-orange/40 rounded-tl-3xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-40 h-1.5 bg-orange/60 rounded-full pointer-events-none"
              />

              <div className="relative rounded-[24px] overflow-hidden border border-border bg-white shadow-card aspect-[4/5]">
                <Image
                  src={PROFILE_IMAGE}
                  alt="Professional portrait of Nayla Fauziah"
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-3 md:-left-8 bg-white border border-border rounded-2xl px-5 py-4 shadow-card max-w-[240px]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-secondary-text">
                    Status
                  </p>
                </div>
                <p className="text-sm font-semibold text-navy">
                  Software Engineering
                </p>
                <p className="text-xs text-muted-text mt-0.5">Fresh Graduate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </section>
  );
}
