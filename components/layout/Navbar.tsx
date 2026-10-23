"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/socialLinks";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CV_URL = "/cv/Nayla_Fauziah_CV.pdf";

const Logo = () => (
  <Link
    href="/"
    className="inline-flex items-baseline font-display font-bold text-xl tracking-tight text-navy hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
    aria-label="Nayla Fauziah — Home"
  >
    NAYLA<span className="text-orange">.</span>
  </Link>
);

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined" || pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHome = pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    if (isHome && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY - offset;
        window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      }
    }
  };

  const getNavHref = (href: string) => (isHome ? href : `/${href}`);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-[72px]">
          <Logo />

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive =
                isHome && activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={getNavHref(link.href)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded ${
                    isActive
                      ? "text-orange"
                      : "text-secondary-text hover:text-navy"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-5 rounded-full bg-orange"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              href={CV_URL}
              variant="secondary"
              size="sm"
              isDownload
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Download CV
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-navy hover:bg-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-border bg-white"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={getNavHref(link.href)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-2 py-4 text-base font-medium text-navy border-b border-border/60 last:border-b-0 hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 pb-2">
                  <Button
                    href={CV_URL}
                    variant="primary"
                    size="lg"
                    className="w-full"
                    isDownload
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Download CV
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
