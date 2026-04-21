# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** corporate site for SAGE International, a UAE-based workforce recruitment firm. All content is statically rendered; there is no backend, CMS, or API integration. Content lives as hard-coded arrays/objects inside each page file.

### Routing

All routes are under `app/` using the App Router convention. Most pages are server components; `contact/page.tsx`, `Navbar.tsx`, and `Footer.tsx` use `'use client'` for interactivity.

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, services overview, FAQ |
| `/about` | Company history, mission, values |
| `/services` | Six core service offerings |
| `/experience` | Project portfolio |
| `/clients` | Client logos and testimonials |
| `/industries` | Industry focus areas |
| `/contact` | Contact form (client-side only, no submission backend) |

### Styling

**Tailwind CSS v4.2** — no `tailwind.config.js`. Theme is defined via `@theme` directive in [app/globals.css](app/globals.css). Brand tokens:
- Primary: `#1E7F5C` (sage green)
- Secondary: `#4B3FA6` (purple)
- Footer bg: `#0F172A` (dark navy)

Component library is **shadcn/ui** (new-york style, Lucide icons). Radix UI primitives and 50+ pre-built components live in `components/ui/`. Add new shadcn components with `npx shadcn@latest add <component>`.

### Key Files

- [app/layout.tsx](app/layout.tsx) — root layout: metadata, Inter font, ThemeProvider, Navbar, Footer, Vercel Analytics
- [app/globals.css](app/globals.css) — all CSS custom properties and Tailwind v4 theme
- [components/Navbar.tsx](components/Navbar.tsx) — responsive nav with scroll detection and mobile menu
- [next.config.mjs](next.config.mjs) — build errors ignored, images unoptimized (Netlify deployment)
- [netlify.toml](netlify.toml) — deployment config using `@netlify/plugin-nextjs`

### SEO Pattern

Every page exports a `metadata` object with title, description, keywords, OpenGraph tags, canonical URL, and `robots` directives. Some pages include JSON-LD structured data. [app/sitemap.ts](app/sitemap.ts) and [app/robots.ts](app/robots.ts) are auto-generated.

### Installed but Underused

`react-hook-form` and `zod` are in `package.json` but not actively integrated. The contact form uses plain `useState`.
