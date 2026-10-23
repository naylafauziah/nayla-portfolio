"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={initial}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="group"
      aria-label={`${project.title} — ${project.category}`}
    >
      <div
        className={`grid gap-10 lg:gap-16 items-center lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="block relative overflow-hidden rounded-[20px] border border-border bg-card aspect-[16/9] group/image focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`View case study: ${project.title}`}
        >
          <motion.div
            className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform group-hover/image:scale-[1.03]"
            style={{ transformOrigin: "center" }}
          >
            <Image
              src={project.coverImage}
              alt={`${project.title} — project preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/5 via-transparent to-transparent opacity-60 pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-0 border border-transparent group-hover/image:border-orange/30 rounded-[20px] transition-colors duration-500 pointer-events-none" aria-hidden="true" />
        </Link>

        <div className={`space-y-6 ${reverse ? "lg:pr-4" : "lg:pl-4"}`}>
          <div className="inline-flex items-center gap-3">
            <span className="text-sm font-semibold tabular-nums text-orange">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary-text">
              {project.category}
            </span>
            <span className="text-xs text-muted-text">·</span>
            <span className="text-xs tabular-nums text-muted-text">{project.year}</span>
          </div>

          <h3 className="text-project-title font-display font-bold text-navy leading-tight tracking-tight text-balance">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-base md:text-lg text-secondary-text leading-relaxed max-w-xl">
            {project.description}
          </p>

          <dl className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <dt className="text-muted-text w-20 shrink-0">Role</dt>
              <dd className="text-navy font-medium">{project.role}</dd>
            </div>
            <div className="flex items-start gap-3">
              <dt className="text-muted-text w-20 shrink-0">Stack</dt>
              <dd className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-orange-light text-orange border border-orange/10"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-navy border border-border hover:border-orange/40 hover:text-orange hover:bg-orange-light px-4 py-2.5 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`${project.title} live demo (opens in a new tab)`}
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-navy border border-border hover:border-orange/40 hover:text-orange hover:bg-orange-light px-4 py-2.5 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                GitHub
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:gap-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-2"
              aria-label={`View case study for ${project.title}`}
            >
              View Case Study
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
