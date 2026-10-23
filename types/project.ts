export interface Project {
  slug: string;
  title: string;
  category: string;
  year?: string;

  description: string;
  longDescription?: string;

  role?: string;

  technologies: string[];

  coverImage: string;
  images?: string[];

  githubUrl?: string;
  liveUrl?: string;

  overview?: string;
  problem?: string;
  solution?: string;
  myRole?: string;

  technology?: string[];
  keyFeatures?: string[];

  process?: string;
  challenges?: string;
  learnings?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  date: string;
  title: string;
  institution: string;
  description: string;
  activities: string[];
  type: "education" | "experience" | "organization" | "project";
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
}

export type CertificationCategory = "technical" | "professional" | "language" | "academic";

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  status?: string;
  category: CertificationCategory;
  /** Image path inside /public, e.g. "/certificates/technical-1.svg" */
  image?: string;
  /** Optional link to the online credential */
  credentialUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
