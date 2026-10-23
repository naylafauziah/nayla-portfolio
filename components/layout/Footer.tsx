"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/data/socialLinks";

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

export function Footer() {
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-footer-text" role="contentinfo">
      <Container className="pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10 border-b border-white/10">
          <div className="space-y-4 max-w-sm">
            <Link
              href="/"
              className="inline-flex items-baseline font-display font-bold text-2xl tracking-tight text-white hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
            >
              NAYLA<span className="text-orange">.</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Software Engineering fresh graduate building thoughtful, accessible digital products through clean code and considered design.
            </p>
          </div>

          <div className="flex items-start gap-10 md:gap-16">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/40">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {[
                  { href: "#about", label: "About" },
                  { href: "#projects", label: "Projects" },
                  { href: "#skills", label: "Skills" },
                  { href: "#experience", label: "Experience" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-white/70 hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/40">
                Connect
              </p>
              <ul className="space-y-2.5">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
                      aria-label={`${link.label} (opens in new tab)`}
                    >
                      <SocialIcon name={link.name} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Nayla Fauziah.</p>
            <p>Designed &amp; built with Next.js.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={`footer-icon-${link.name}`}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-white/10 text-white/70 hover:text-orange hover:border-orange/40 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  <SocialIcon name={link.name} />
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollTop}
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded px-3 py-2"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
