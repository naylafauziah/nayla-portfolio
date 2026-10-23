import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="relative pt-[120px] md:pt-[140px] pb-14 md:pb-20">
      <div className="container-custom">
        <div className="flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <Link
            href="/#projects"
            className="flex w-fit items-center gap-1.5 text-sm font-medium text-secondary-text hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-2"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-orange">
              {project.category}
            </span>
            <span
              className="h-1 w-1 rounded-full bg-border"
              aria-hidden="true"
            />
            <span className="text-xs tabular-nums text-muted-text">
              {project.year}
            </span>
          </div>
        </div>
        <div className="mt-7 max-w-2xl space-y-7">
          <h1 className="text-section-mobile md:text-section-desktop font-display font-bold text-navy leading-[1.1] tracking-tight text-balance">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-secondary-text leading-relaxed max-w-2xl">
            {project.longDescription}
          </p>
        </div>
      </div>

      <div className="container-custom mt-14 md:mt-16">
        <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden border border-border bg-card shadow-card">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover image`}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
