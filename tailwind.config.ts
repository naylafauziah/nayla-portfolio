import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        navy: "#0F172A",
        "secondary-text": "#64748B",
        "muted-text": "#94A3B8",
        orange: {
          DEFAULT: "#F97316",
          hover: "#EA580C",
          light: "#FFF7ED",
        },
        border: "#E7E5E4",
        card: "#FFFFFF",
        "secondary-border": "#D6D3D1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.02)",
      },
      borderRadius: {
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      fontSize: {
        "hero-desktop": ["72px", { lineHeight: "1.1" }],
        "hero-tablet": ["52px", { lineHeight: "1.15" }],
        "hero-mobile": ["40px", { lineHeight: "1.2" }],
        "section-desktop": ["48px", { lineHeight: "1.15" }],
        "section-mobile": ["32px", { lineHeight: "1.25" }],
        "project-title": ["28px", { lineHeight: "1.3" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
