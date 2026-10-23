"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Globe,
  X,
  ExternalLink,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";
import type { Certification, CertificationCategory } from "@/types/project";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const GROUPS: {
  id: CertificationCategory;
  label: string;
  icon: typeof Award;
}[] = [
  { id: "technical", label: "Technical Certifications", icon: Award },
  { id: "professional", label: "Professional Competency", icon: Award },
  { id: "language", label: "Language Certifications", icon: Globe },
  { id: "academic", label: "Academic Achievements", icon: Globe },
];

const CARD_BASIS =
  "shrink-0 basis-full sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] snap-start";

interface CertificateCarouselProps {
  label: string;
  icon: typeof Award;
  items: Certification[];
  onOpen: (cert: Certification) => void;
}

function CertificateCarousel({
  label,
  icon: Icon,
  items,
  onOpen,
}: CertificateCarouselProps) {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const metrics = React.useRef({ step: 0, visible: 1 });
  const drag = React.useRef({
    active: false,
    startX: 0,
    startLeft: 0,
    moved: 0,
  });
  const suppressClick = React.useRef(false);
  const [index, setIndex] = React.useState(0);
  const [maxIndex, setMaxIndex] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);

  const measure = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const step =
      cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : cardWidth;
    const safeStep = step > 0 ? step : cardWidth;
    const gap = Math.max(0, safeStep - cardWidth);
    const visible = Math.max(
      1,
      Math.min(cards.length, Math.round((el.clientWidth + gap) / safeStep)),
    );

    metrics.current = { step: safeStep, visible };
    const nextMax = Math.max(0, cards.length - visible);
    setMaxIndex(nextMax);
    setIndex((prev) => Math.min(prev, nextMax));
  }, []);

  React.useEffect(() => {
    measure();
    const el = scrollRef.current;
    if (!el) return;

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const observer = new ResizeObserver(() => measure());
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  const scrollToIndex = React.useCallback(
    (target: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const max = Math.max(0, items.length - metrics.current.visible);
      const clamped = Math.min(Math.max(target, 0), max);
      el.scrollTo({
        left: clamped * metrics.current.step,
        behavior: reduce ? "auto" : "smooth",
      });
      // setIndex(clamped);
    },
    [items.length, reduce],
  );

  const handleScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const step = metrics.current.step;
    if (!step) return;
    const max = Math.max(0, items.length - metrics.current.visible);
    const next = Math.round(el.scrollLeft / step);
    setIndex(Math.min(Math.max(next, 0), max));
  }, [items.length]);

  // const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
  //   if (e.pointerType !== "mouse") return;
  //   const el = scrollRef.current;
  //   if (!el) return;
  //   drag.current = {
  //     active: true,
  //     startX: e.clientX,
  //     startLeft: el.scrollLeft,
  //     moved: 0,
  //   };
  //   // Let the pointer drive scrolling directly instead of the CSS snap engine.
  //   el.style.scrollSnapType = "none";
  //   el.setPointerCapture(e.pointerId);
  //   setDragging(true);
  // };

  // const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
  //   if (!drag.current.active) return;

  //   const el = scrollRef.current;
  //   if (!el) return;

  //   const delta = e.clientX - drag.current.startX;

  //   drag.current.moved = Math.max(drag.current.moved, Math.abs(delta));
  //   el.scrollLeft = drag.current.startLeft - delta;
  // };

  // const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
  //   if (!drag.current.active) return;
  //   drag.current.active = false;
  //   setDragging(false);

  //   const el = scrollRef.current;
  //   if (!el) return;
  //   el.style.scrollSnapType = "";
  //   if (el.hasPointerCapture(e.pointerId)) {
  //     el.releasePointerCapture(e.pointerId);
  //   }
  //   if (drag.current.moved > 6) {
  //     suppressClick.current = true;
  //   }
  //   if (metrics.current.step) {
  //     scrollToIndex(Math.round(el.scrollLeft / metrics.current.step));
  //   }
  // };
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;

    const el = scrollRef.current;
    if (!el) return;

    // Reset click suppression for a new interaction
    suppressClick.current = false;

    drag.current = {
      active: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: 0,
    };

    // Do not capture the pointer yet.
    // Allow normal clicks to open the certificate preview.
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;

    const el = scrollRef.current;
    if (!el) return;

    // Prevent a stale drag if the mouse button was released outside.
    if (e.buttons !== 1) {
      drag.current.active = false;
      el.style.scrollSnapType = "";
      setDragging(false);
      return;
    }

    const delta = e.clientX - drag.current.startX;

    drag.current.moved = Math.max(drag.current.moved, Math.abs(delta));

    // Only start dragging after moving more than 6px.
    if (drag.current.moved <= 6) return;

    if (!el.hasPointerCapture(e.pointerId)) {
      // Disable snapping while manually dragging.
      el.style.scrollSnapType = "none";

      el.setPointerCapture(e.pointerId);
      setDragging(true);
    }

    // Move the carousel with the mouse.
    el.scrollLeft = drag.current.startLeft - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;

    drag.current.active = false;

    const el = scrollRef.current;
    if (!el) return;

    const didDrag = drag.current.moved > 6;

    setDragging(false);

    // Restore the original scroll snapping.
    el.style.scrollSnapType = "";

    if (el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }

    // A regular click should open the certificate modal.
    if (!didDrag) return;

    // Prevent opening the modal after dragging.
    suppressClick.current = true;

    // Snap to the nearest certificate.
    if (metrics.current.step) {
      scrollToIndex(Math.round(el.scrollLeft / metrics.current.step));
    }
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (suppressClick.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClick.current = false;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(index - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="h-9 w-9 shrink-0 inline-flex items-center justify-center rounded-lg bg-orange-light text-orange">
          <Icon className="w-4 h-4" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-display font-bold text-navy tracking-tight">
          {label}
        </h3>
        <span className="hidden sm:block h-px flex-1 bg-border" aria-hidden="true" />
        {maxIndex > 0 ? (
          <span
            className="ml-auto inline-flex shrink-0 items-center whitespace-nowrap text-xs tabular-nums text-muted-text"
            aria-live="polite"
          >
            <span className="inline-flex min-w-[2ch] justify-end overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={index}
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -6 }}
                  transition={{
                    duration: reduce ? 0 : 0.18,
                    ease: "easeOut",
                  }}
                >
                  {index + 1}
                </motion.span>
              </AnimatePresence>
            </span>

            <span className="ml-1">/ {maxIndex + 1}</span>
          </span>
        ) : (
          <span className="hidden sm:inline text-xs tabular-nums text-muted-text">
            {items.length}
          </span>
        )}
        {/* {maxIndex > 0 ? (
          <span className="text-xs tabular-nums text-muted-text" aria-live="polite">
            {index + 1} / {maxIndex + 1}
          </span>
        ) : (
          <span className="text-xs tabular-nums text-muted-text">
            {items.length}
          </span>
        )} */}
        {maxIndex > 0 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(index - 1)}
              disabled={index === 0}
              aria-label={`Show previous ${label.toLowerCase()} certificates`}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border text-navy transition-all duration-300 hover:border-orange/40 hover:bg-orange-light hover:text-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(index + 1)}
              disabled={index >= maxIndex}
              aria-label={`Show next ${label.toLowerCase()} certificates`}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border text-navy transition-all duration-300 hover:border-orange/40 hover:bg-orange-light hover:text-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <motion.div
        ref={scrollRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${label} certificates`}
        tabIndex={0}
        initial={initial}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } },
        }}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={handleClickCapture}
        className={`no-scrollbar scroll-auto flex gap-6 overflow-x-auto snap-x snap-mandatory rounded-xl pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {items.map((cert, i) => (
          <motion.div
            key={cert.image ?? cert.title}
            data-card
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className={CARD_BASIS}
          >
            {cert.image ? (
              <button
                type="button"
                onClick={() => onOpen(cert)}
                aria-haspopup="dialog"
                aria-label={`View certificate: ${cert.title}`}
                className="group block w-full text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <figure className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 group-hover:border-orange/30 group-hover:shadow-card">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer}`}
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span
                    className="absolute right-3 top-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-navy/70 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </figure>

                <div className="mt-4 space-y-1">
                  <h4 className="text-sm font-semibold text-navy transition-colors duration-300 group-hover:text-orange">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-secondary-text">{cert.issuer}</p>
                  {cert.year && (
                    <p className="text-xs tabular-nums text-muted-text">
                      {cert.year}
                    </p>
                  )}
                </div>
              </button>
            ) : (
              <article className="block w-full rounded-xl border border-border bg-card">
                <div className="flex aspect-[4/3] items-center rounded-xl bg-orange-light p-6">
                  <p className="font-display text-lg font-bold leading-snug text-navy">
                    {cert.status}
                  </p>
                </div>
                <div className="mt-4 space-y-1 px-4 pb-4">
                  <h4 className="text-sm font-semibold text-navy">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-secondary-text">{cert.issuer}</p>
                </div>
              </article>
            )}
          </motion.div>
        ))}
      </motion.div>

      {maxIndex > 0 && (
        <div
          className="flex items-center justify-center gap-2 pt-1"
          aria-label={`${label} certificate navigation`}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${label.toLowerCase()} certificate ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                i === index
                  ? "w-6 bg-orange"
                  : "w-2 bg-border hover:bg-orange/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Certifications() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState<Certification | null>(null);

  React.useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-spacing scroll-mt-24 border-t border-border"
    >
      <Container className="space-y-14">
        <SectionHeading
          number="05"
          label="Credentials"
          title="Certifications & Achievements"
          subtitle="Technical certifications, professional competency, and language and academic achievements."
        />

        <div className="space-y-14">
          {GROUPS.map((group) => {
            const items = certifications.filter(
              (cert) => cert.category === group.id,
            );
            if (items.length === 0) return null;

            return (
              <CertificateCarousel
                key={group.id}
                label={group.label}
                icon={group.icon}
                items={items}
                onOpen={setActive}
              />
            );
          })}
        </div>
      </Container>

      <AnimatePresence>
        {active?.image && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} certificate preview`}
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-navy/90 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close certificate preview"
              className="absolute right-4 top-4 sm:right-6 sm:top-6 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <motion.figure
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white">
                <Image
                  src={active.image}
                  alt={`${active.title} — ${active.issuer}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                />
              </div>

              <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-4 text-white">
                <div className="space-y-0.5">
                  <p className="font-display font-bold text-lg leading-tight">
                    {active.title}
                  </p>
                  <p className="text-sm text-white/60">
                    {active.issuer} · {active.year}
                  </p>
                </div>
                {active.credentialUrl && (
                  <a
                    href={active.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-orange/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded px-2 py-2"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    View credential
                  </a>
                )}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
