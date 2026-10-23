import Image from "next/image";
import type { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  if (!project.images || project.images.length === 0) return null;

  const isMobileProject =
    project.slug === "mindcheck" || project.slug === "travelwell";

  return (
    <section aria-labelledby="gallery-heading" className="space-y-8">
      <div className="flex items-baseline gap-3">
        <h2
          id="gallery-heading"
          className="text-xl md:text-2xl font-display font-bold text-navy tracking-tight"
        >
          Gallery
        </h2>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      <div
        className={`grid gap-5 ${
          isMobileProject
            ? project.images.length === 3
              ? "grid-cols-2 md:grid-cols-3 md:max-w-[680px] md:mx-auto"
              : "grid-cols-2 md:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {project.images.map((image, index) => (
          <figure
            key={`${project.slug}-image-${index}`}
            className={`rounded-xl overflow-hidden border border-border bg-card ${
              isMobileProject ? "relative aspect-[9/20]" : ""
            }`}
          >
            {isMobileProject ? (
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                className="block w-full h-auto"
              />
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
