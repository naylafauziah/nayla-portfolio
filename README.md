# Nayla Fauziah — Software Engineer Portfolio

A production-ready, minimal, and elegant personal portfolio for Nayla Fauziah, a Software Engineering fresh graduate targeting Software Engineer, Frontend Developer, Web Developer, and related technology roles.

---

## Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with design tokens (orange accent, editorial neutrals)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (sparing + `prefers-reduced-motion` aware)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Images**: `next/image`
- **Fonts**: `next/font` (Inter for body, Manrope for display headings)
- **Linting**: ESLint (Next.js core-web-vitals preset)

No Bootstrap / jQuery / heavy UI libraries / unnecessary state management. The site is mostly static and performance-optimized.

---

## Project Structure

```
app/
  layout.tsx                 # Root layout (metadata, fonts, OG/Twitter)
  page.tsx                   # Homepage composition only
  globals.css                # Tailwind layers + design tokens
  sitemap.ts                 # SEO sitemap
  robots.ts                  # Search engine rules
  projects/[slug]/page.tsx   # Dynamic project case-study page

components/
  layout/
    Navbar.tsx               # Sticky nav, scroll state, mobile hamburger menu, active section highlight
    Footer.tsx               # Dark footer with links + back-to-top
  sections/
    Hero.tsx                 # Headline, intro text, CTAs, profile photo, social links
    About.tsx                # 01 / ABOUT — two-column layout + highlights
    Projects.tsx             # 02 / PROJECTS — alternating large project layouts
    Skills.tsx               # 03 / TOOLS & TECHNOLOGIES — categorized grid
    Experience.tsx           # 04 / EXPERIENCE & EDUCATION — elegant timeline
    Contact.tsx              # 05 / CONTACT CTA — dark section with LET'S TALK backdrop
  project/
    ProjectCard.tsx          # Reusable alternating project card
    ProjectHero.tsx          # Case-study hero + cover image
    ProjectGallery.tsx       # Screenshot gallery
  ui/
    Button.tsx               # Primary / Secondary / Ghost variants
    Badge.tsx                # Status / tone badges
    Container.tsx            # Max-width container (1200px) with responsive padding
    SectionHeading.tsx       # Numbered section header w/ orange accent

data/
  projects.ts                # Project list + helpers (getProjectBySlug, getNextProject)
  skills.ts                  # Categorized skills (Frontend, Backend, Mobile, Design, Tools)
  experience.ts              # Timeline entries (education, experience, org, project)
  socialLinks.ts             # Nav links + social URLs (centralized)

types/
  project.ts                 # Shared TS interfaces (Project, SkillCategory, ExperienceItem, ...)

lib/
  utils.ts                   # cn() helper
  animations.ts              # Reusable Framer Motion variants (fadeUp, scaleIn, stagger)

hooks/
  useReducedMotion.ts        # prefers-reduced-motion hook

public/
  favicon.svg                # "N." favicon with orange dot
  site.webmanifest
  images/                    # OG / social images (SVG placeholders, replace as needed)
  cv/                        # Drop Nayla-Fauziah-CV.pdf here
```

---

## Design System

### Color (90% neutral · 10% orange)

| Token | Value | Usage |
| --- | --- | --- |
| `Background` | `#FAFAF9` | Page background |
| `Navy` | `#0F172A` | Primary text, dark footer, contact section |
| `Secondary text` | `#64748B` | Body copy |
| `Muted text` | `#94A3B8` | Metadata |
| `Orange` | `#F97316` | Accent — logo dot, CTAs, section numbers, nav active, hover states |
| `Orange hover` | `#EA580C` | Primary button hover |
| `Very light orange` | `#FFF7ED` | Accent chips / backgrounds |
| `Border` | `#E7E5E4` | Dividers and card borders |
| `Card` | `#FFFFFF` | Card backgrounds |

### Typography

- **Primary**: Inter (optimized via `next/font/google`)
- **Display headings**: Manrope
- Hierarchy follows the spec (hero: 40 / 52 / 72px, section titles 32 / 40–48px, project titles 24–28px, body 16–18px, metadata 13–14px).

### Layout

- Content max-width: **1200px**
- Horizontal padding: **20px mobile → 32px tablet → 48px desktop**
- Section vertical spacing: **72px mobile → 96px tablet → 120px desktop**

### Animation

- Duration **0.4–0.7s**, `easeOut`.
- Section entrance: `opacity 0→1, y 24→0`.
- **All animations are disabled when user `prefers-reduced-motion`**.

---

## Local Installation

> Requires Node.js **18.17+** (Next.js 14 requirement).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev
```

## Build & Production

```bash
# TypeScript check + production build
npm run build

# Serve the production build locally
npm run start

# Linting
npm run lint
```

---

## Customization Guide

All content is centralized so updates stay local and non-invasive.

### Personal content

| What to change | Where |
| --- | --- |
| Projects (title, descriptions, URLs, case study) | `data/projects.ts` |
| Skills / tools / categories | `data/skills.ts` |
| Experience & Education timeline entries | `data/experience.ts` |
| Nav links + social URLs (GitHub, LinkedIn, Email) | `data/socialLinks.ts` |
| Profile photo URL | Inside `components/sections/Hero.tsx` → `PROFILE_IMAGE` constant |
| CV file | Drop real PDF at `public/cv/Nayla-Fauziah-CV.pdf` (button paths already point here) |
| Email in Contact CTA | Updates via `data/socialLinks.ts` `Email` entry |

### Brand / colors / type

- **Colors**: `tailwind.config.ts` → `theme.extend.colors`
- **Fonts**: `app/layout.tsx` — `Inter` and `Manrope` are loaded and exposed via CSS variables (`--font-inter`, `--font-manrope`).
- **Favicon**: Replace `public/favicon.svg` (and ideally supply `favicon.ico`, `apple-touch-icon.png` for broader coverage).
- **OG / social image**: Replace `public/images/og-image.svg` and update the `metadata.openGraph.images` path in `app/layout.tsx` to the final raster (`.jpg` / `.png`).

---

## Routing & URLs

| Path | Page |
| --- | --- |
| `/` | Homepage (Hero → About → Projects → Skills → Experience → Contact) |
| `/projects/[slug]` | Project case-study page (dynamic; statically generated via `generateStaticParams` for all projects in `data/projects.ts`) |

Navigation anchors scroll smoothly to each section (`#about`, `#projects`, `#skills`, `#experience`, `#contact`) and offset by the sticky navbar height.

---

## Accessibility Highlights

- Semantic `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- `aria-label`s on icon-only links, nav, mobile menu toggle
- Keyboard-navigable with visible focus rings (orange `ring-2`)
- Image `alt` text throughout
- `mailto:` / external links use `target="_blank"` with `rel="noopener noreferrer"`
- `prefers-reduced-motion` respected across all animations

---

## Deployment (Vercel)

This project is **Vercel-ready** — no additional configuration required.

### Deploy via GitHub → Vercel UI

1. Push this repository to GitHub (GitLab / Bitbucket are also supported).
2. Open https://vercel.com/new
3. **Import** the repository.
4. Framework preset will auto-detect **Next.js**. Keep defaults.
5. Click **Deploy**.

Vercel will run `next build`, host the result, and provide a production domain (and auto-created preview deployments for PRs).

### Production checks

Target Lighthouse scores (baseline achieved by the static-first approach):

- Performance **> 90**
- Accessibility **> 95**
- Best Practices **> 95**
- SEO **> 95**

---

## Final Polish Checklist (Before Launch)

- [ ] Replace all placeholder URLs in `data/socialLinks.ts` (LinkedIn / GitHub / Email)
- [ ] Update / verify project entries in `data/projects.ts`
- [ ] Update timeline entries in `data/experience.ts`
- [ ] Replace skills in `data/skills.ts`
- [ ] Drop real CV PDF at `public/cv/Nayla-Fauziah-CV.pdf`
- [ ] Replace profile photo in `components/sections/Hero.tsx` (`PROFILE_IMAGE` constant)
- [ ] Replace project cover / gallery images (or keep placeholders until real screenshots ready)
- [ ] Add final `og-image.jpg` (1200×630) to `public/images/` and update metadata URL in `app/layout.tsx`
- [ ] Update `metadataBase` URL in `app/layout.tsx` to the final production domain so OG/Twitter/sitemap/robots resolve correctly
- [ ] Run `npm run build` locally and confirm 0 errors before deploy

---

## License

Portfolio content © Nayla Fauziah. All source code in the project is provided as a template for the above portfolio.
