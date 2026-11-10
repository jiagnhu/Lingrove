# Lingrove — B2B SaaS marketing site (concept)

A five-page marketing site for **Lingrove**, a fictional localization platform. It was designed and built as a portfolio piece to show calm, credible B2B SaaS design implemented as clean, reusable Vue components.

> Concept project. Lingrove, its customers, people and figures are fictional.

**Pages:** Home · Product · Customers · Pricing · About (plus 404)

## Stack

- Vue 3 (`<script setup>`) + Vue Router
- Vite 6
- Tailwind CSS 4 with design tokens defined in `src/style.css`
- No UI library; all components are hand-built

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Project structure

```
src/
  style.css          Design tokens: colors (ink / grove / clay), fonts, page container
  content/           All page copy as JSON (one file per page + site.json for nav/footer)
  components/        Reusable building blocks
    SiteHeader / SiteFooter   Global layout, responsive navigation
    BaseButton                Primary, secondary, ghost and light variants
    SectionHeader / PageHero  Consistent heading hierarchy
    FeatureCard, LogoCloud, CtaBand, ProductMock, AppIcon, LogoMark
  pages/             One component per route; composes components + content
  router/            Routes, scroll behaviour and page titles
```

## Design system

- **Type:** Inter for UI and body, Instrument Serif for accents and quotes.
- **Color:** `ink` (deep green-black neutrals), `grove` (brand green), `clay` (warning / in-review accent), all on a warm `paper` background.
- **Spacing:** 24–28 (6–7rem) vertical rhythm between sections, `container-page` utility for a consistent max width and gutters.
- **Motion:** intentionally minimal: hover and focus states only.

## How to add or edit a page

1. Put the copy in a new file under `src/content/`, e.g. `security.json`.
2. Create `src/pages/SecurityPage.vue`, import the JSON, and compose it from existing components (`PageHero`, `SectionHeader`, `FeatureCard`, `CtaBand`).
3. Register the route in `src/router/index.js` with a `meta.title`.
4. Add a nav or footer link in `src/content/site.json`.

To change wording only, edit the JSON in `src/content/`; no template changes are needed.

## Deploy

Deployed on Vercel as a static Vite build. `vercel.json` rewrites all paths to `index.html` so client-side routes work on refresh.
