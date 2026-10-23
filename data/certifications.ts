import { Certification } from "@/types/project";

// NOTE: Placeholder data — replace with your real certificates.
// 1. Drop each certificate image inside /public/certificates/ (e.g. my-cert.jpg).
// 2. Update `title`, `issuer`, `year`, and `image` below.
// Language certificates (TOEFL / IELTS / EPT / etc.) use category: "language".

export const certifications: Certification[] = [
  {
    title: "Junior Web Developer",
    issuer: "Digital Talent Scholarship",
    year: "2024",
    category: "technical",
    image: "/certificates/technical-1.svg",
  },
  {
    title: "AWS Academy Cloud Developing",
    issuer: "AWS Academy",
    year: "2023",
    category: "technical",
    image: "/certificates/technical-2.svg",
  },
  {
    title: "AWS Machine Learning Foundations",
    issuer: "AWS Academy",
    year: "2024",
    category: "technical",
    image: "/certificates/technical-3.svg",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    year: "2026",
    category: "technical",
    image: "/certificates/technical-4.svg",
  },
  {
    title: "AWS Generative AI Foundations",
    issuer: "AWS Academy",
    year: "2026",
    category: "technical",
    image: "/certificates/technical-5.svg",
  },
  {
    title: "Intermediate HCIA AI",
    issuer: "Huawei",
    year: "2026",
    category: "technical",
    image: "/certificates/technical-6.svg",
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Google",
    year: "2026",
    category: "technical",
    image: "/certificates/technical-7.svg",
  },
  {
    title: "Google Project Management Professional Certificate",
    issuer: "Google",
    year: "2026",
    category: "technical",
    image: "/certificates/technical-8.svg",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2022",
    category: "technical",
    image: "/certificates/technical-9.svg",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    year: "2022",
    category: "technical",
    image: "/certificates/technical-10.svg",
  },
  {
    title: "TOEFL Prediction Test (520)",
    issuer: "Central Course",
    year: "2026",
    category: "language",
    image: "/certificates/language-1.svg",
  },
  {
    title: "Pertukaran Mahasiswa Merdeka (PMM) Batch 4",
    issuer: "Kampus Merdeka",
    year: "2024",
    category: "academic",
    image: "/certificates/academic-1.svg",
  },
  {
    title: "AI-Based Digital Marketing",
    issuer: "Competent",
    status: "Certificate Pending",
    category: "professional",
  },
];
