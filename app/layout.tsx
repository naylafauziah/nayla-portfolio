import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://naylafauziah.dev"),
  title: {
    default: "Nayla Fauziah | Software Engineer",
    template: "%s | Nayla Fauziah",
  },
  description:
    "Software Engineer portfolio of Nayla Fauziah, featuring web, mobile, UI/UX, and AI-based software projects.",
  keywords: [
    "Nayla Fauziah",
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [
    {
      name: "Nayla Fauziah",
      url: "https://naylafauziah.dev",
    },
  ],
  creator: "Nayla Fauziah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naylafauziah.dev",
    siteName: "Nayla Fauziah Portfolio",
    title: "Nayla Fauziah | Software Engineer",
    description:
      "Software Engineer portfolio of Nayla Fauziah, featuring web, mobile, UI/UX, and AI-based software projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayla Fauziah | Software Engineer",
    description:
      "Software Engineer portfolio of Nayla Fauziah, featuring web, mobile, UI/UX, and AI-based software projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
