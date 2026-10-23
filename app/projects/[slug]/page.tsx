import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { getProjectBySlug, getNextProject, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title}`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Nayla Fauziah`,
      description: project.description,
      type: "article",
      url: `/projects/${project.slug}`,
      images: [{ url: project.coverImage, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Nayla Fauziah`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

interface SectionBlockProps {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}

function SectionBlock({ eyebrow, title, children }: SectionBlockProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-2.5">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-navy tracking-tight leading-tight">
        {title}
      </h2>
      </div>
      <div className="text-base md:text-lg text-secondary-text leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const nextProject = getNextProject(params.slug);

  return (
    <>
      <Navbar />
      <main>
        <article>
          <ProjectHero project={project} />
          <Container className="pb-24 md:pb-32">
            <div className="max-w-3xl mx-auto space-y-20 md:space-y-24">
              {(project.role || project.year) && (
                <dl className="grid sm:grid-cols-2 gap-5 border-y border-border py-8">
                  {project.role && (
                    <div className="space-y-1">
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-text font-semibold">
                        Role
                      </dt>
                      <dd className="text-base font-semibold text-navy">
                        {project.role}
                      </dd>
                    </div>
                  )}
                  {project.year && (
                    <div className="space-y-1">
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-text font-semibold">
                        Year
                      </dt>
                      <dd className="text-base font-semibold tabular-nums text-navy">
                        {project.year}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              {project.overview && (
                <SectionBlock eyebrow="Overview" title="Overview">
                  <p>{project.overview}</p>
                </SectionBlock>
              )}

              {project.problem && (
                <SectionBlock eyebrow="Problem" title="The problem I explored">
                  <p>{project.problem}</p>
                </SectionBlock>
              )}

              {project.solution && (
                <SectionBlock eyebrow="Solution" title="How the product addresses it">
                  <p>{project.solution}</p>
                </SectionBlock>
              )}

              {project.myRole && (
                <SectionBlock eyebrow="My Role" title="What I worked on">
                  <p>{project.myRole}</p>
                </SectionBlock>
              )}

              {project.technology && project.technology.length > 0 && (
                <SectionBlock eyebrow="Technology" title="Tools and stack">
                  <ul className="flex flex-wrap gap-2.5 pt-2">
                    {project.technology.map((tech) => (
                      <li
                        key={tech}
                        className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-orange-light text-orange border border-orange/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </SectionBlock>
              )}

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <SectionBlock eyebrow="Key Features" title="What this project ships with">
                  <ul className="space-y-3.5 pt-1">
                    {project.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-base md:text-lg text-secondary-text"
                      >
                        <CheckCircle2
                          className="w-5 h-5 text-orange shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </SectionBlock>
              )}

              {project.process && (
                <SectionBlock
                  eyebrow="Design / Development Process"
                  title="How I approached the work"
                >
                  <p>{project.process}</p>
                </SectionBlock>
              )}

              {project.challenges && (
                <SectionBlock eyebrow="Challenges" title="What I had to work through">
                  <p>{project.challenges}</p>
                </SectionBlock>
              )}

              {project.learnings && (
                <SectionBlock
                  eyebrow="What I Learned"
                  title="Takeaways and new skills"
                >
                  <p>{project.learnings}</p>
                </SectionBlock>
              )}

              <div className="pt-8">
                <ProjectGallery project={project} />
              </div>

              {(project.githubUrl || project.liveUrl) && (
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-6 border-t border-border">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-semibold bg-orange hover:bg-orange-hover text-white rounded-xl transition-all duration-300 shadow-subtle hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-semibold border border-secondary-border text-navy hover:border-orange/40 hover:bg-orange-light rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      View Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </Container>

          {nextProject && (
            <div className="border-t border-border">
              <Container className="py-16 md:py-20">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
                  <div className="space-y-3 max-w-md">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary-text">
                      Next Project
                    </p>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-navy tracking-tight leading-tight">
                      {nextProject.title}
                    </h3>
                    <p className="text-secondary-text leading-relaxed">
                      {nextProject.description}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="group inline-flex items-center gap-2 self-start sm:self-end px-5 py-3 border border-secondary-border text-navy rounded-xl hover:border-orange hover:bg-orange-light hover:text-orange transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span className="font-semibold">Read case study</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Container>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
