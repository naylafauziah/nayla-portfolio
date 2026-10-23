"use client";

import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-spacing scroll-mt-24"
    >
      <Container className="space-y-16 lg:space-y-20">
        <SectionHeading
          number="02"
          label="Featured Projects"
          title="Selected work"
          subtitle="A selection of projects where I explored software engineering, product design, and problem solving."
        />

        <div className="space-y-10 lg:space-y-14" role="list">
          {projects.map((project, i) => (
            <div role="listitem" key={project.slug}>
              <ProjectCard project={project} index={i} />
              {i < projects.length - 1 && (
                <div className="mt-10 lg:mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
