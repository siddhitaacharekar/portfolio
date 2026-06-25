# portfolio

Next.js 15 (App Router) portfolio for Siddhita Acharekar — Product Manager based in Mumbai.

## Stack

- Next.js 15, React 19, TypeScript (strict)
- App Router, Edge runtime for OG image + favicon
- Semantic HTML5 (`main`, `header`, `section`, `article`, `nav`, `aside`, `footer`, `blockquote`, `dl`)
- CSS variables, OKLCH color palette, light + dark themes
- Instrument Serif + DM Sans via `next/font/google`
- JSON-LD (`Person`, `WebSite`) for SEO
- Dynamic `opengraph-image`, `icon`, `robots`, `sitemap`, `manifest`
- `prefers-reduced-motion` support + full keyboard nav for the modal

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Structure

```
app/
  layout.tsx            # metadata, OG, JSON-LD, fonts
  page.tsx              # renders <PortfolioPage />
  opengraph-image.tsx   # 1200×630 dynamic OG
  icon.tsx              # dynamic favicon
  robots.ts / sitemap.ts / manifest.ts
  globals.css
components/
  PortfolioPage.tsx     # top-level client shell
  SiteHeader.tsx
  PillNav.tsx           # floating pill nav + theme toggle
  Hero.tsx
  Marquee.tsx
  AboutSection.tsx
  FeaturedWork.tsx
  AllPieces.tsx
  SkillsSection.tsx
  ContactSection.tsx
  CaseStudyModal.tsx    # accessible, focus-managed, ESC to close
  SiteFooter.tsx
  ThemeProvider.tsx
  ScrollProgress.tsx
  RevealOnScroll.tsx
lib/
  site-config.ts
  case-studies.ts       # 12 case studies
  scroll.ts
```

Siddhita Acharekar · 2026.
