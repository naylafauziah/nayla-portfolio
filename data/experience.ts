import { ExperienceItem } from "@/types/project";

// NOTE: Sample entries for a fresh graduate.
// Do not fabricate company employment history.

export const experience: ExperienceItem[] = [
  {
    date: "2022 — 2026",
    title: "Software Engineering",
    institution: "Politeknik Negeri Padang",
    description:
      "Graduated with a GPA of 3.65, building a strong foundation in software development, web and mobile applications, database systems, and artificial intelligence.",
    activities: [
      "Software Development",
      "Web & Mobile Development",
      "Database Systems",
      "Artificial Intelligence",
      "UI/UX",
    ],
    type: "education",
  },
  {
    date: "Aug 2025 — Dec 2025",
    title: "Frontend Developer Intern",
    institution: "PT cmlabs Indonesia Digital",
    description:
      "Contributed to the development and maintenance of the Visuwisu platform using Next.js 14, TypeScript, and Tailwind CSS, collaborating with the development team to improve functionality and maintainability.",
    activities: [
      "Next.js 14 & TypeScript",
      "Tailwind CSS",
      "Reusable Components",
      "REST API Integration",
      "Git & Code Reviews",
    ],
    type: "experience",
  },
  // {
  //   date: "2024",
  //   title: "Academic Project Team",
  //   institution: "[Add Project / Course Name]",
  //   description:
  //     "Placeholder for a multi-person academic or class project. Can be used to document teamwork, tooling, and deliverables.",
  //   activities: [
  //     "Collaborative requirements analysis",
  //     "Module development and integration",
  //     "Documentation and presentation",
  //   ],
  //   type: "project",
  // },
  {
    date: "Feb 2024 — Jun 2024",
    title: "National Student Exchange",
    institution: "Universitas Airlangga",
    description:
      "Participated in the Informatics Engineering program, expanding my knowledge of software development and IT systems while strengthening adaptability and cross-cultural collaboration.",
    activities: [
      "Software Development",
      "Algorithms & IT Systems",
      "Academic Collaboration",
      "Cross-cultural Communication",
    ],
    type: "education",
  },
  {
    date: "2020 — 2021",
    title: "Communication & Information Staff",
    institution: "Student Executive Board",
    description:
      "Supported organizational communication, managed social media content, and helped coordinate events and workshops to encourage student engagement.",
    activities: [
      "Social Media Management",
      "Information Dissemination",
      "Event Coordination",
      "Team Communication",
    ],
    type: "organization",
  },
];
