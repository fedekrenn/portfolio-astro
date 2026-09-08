# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Federico Krenn's personal portfolio site, built with Astro + TypeScript. Fully static — content is pre-rendered at build time from a TypeScript data file, no CMS or backend. Deployed to Vercel.

## Commands

Package manager is **pnpm** (`packageManager: pnpm@11.2.2` in package.json — use pnpm, not npm/yarn).

```bash
pnpm start          # astro dev — local dev server
pnpm stop           # astro dev stop
pnpm build          # astro check && astro build — type-checks THEN builds; a type error fails the build
pnpm preview         # preview the production build locally
pnpm lint            # eslint .
pnpm lint:fix        # eslint . --fix
pnpm cloud           # cloudflared tunnel --url http://localhost:4321 — expose local dev server publicly
```

There is no test suite in this project.

## Architecture

### Data-driven content — single source of truth

All project/experience content lives in one place: the `data` array in `src/services/experience.ts` (typed as `Project[]`, interface in `src/types/types.ts`). There is no CMS, no markdown collection, no external API — every project card and detail page is generated from this array.

`src/services/getData.ts` derives everything else from `data`:
- `getExperience()` — items where `client !== "Proyecto personal"` (client work)
- `getProjects()` — items where `client === "Proyecto personal"` (personal projects)

The `client` field value `"Proyecto personal"` is the discriminator between the two categories — it's a magic string, not an enum.

### Dynamic routes derive paths from data

`src/pages/experiencia/[id].astro` and `src/pages/proyecto/[id].astro` both render project detail pages via the shared `Detail` component. Each `getStaticPaths()` maps over `getExperience()` / `getProjects()` respectively and passes the matched `Project` through as a route `prop` (not re-fetched via `Astro.params` + a lookup). Adding a new entry to `data` in `experience.ts` is enough — its detail route is generated automatically, no manual ID list to keep in sync.

### Path aliases

Defined in `tsconfig.json`, used throughout instead of relative imports:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@assets/*` → `src/assets/*`
- `@services/*` → `src/services/*`
- `@icons/*` → `src/icons/*`

(`src/types/*` has no alias — it's imported with relative/absolute `src/types/types` paths.)

### Page composition

`src/pages/index.astro` assembles the whole one-page site by stacking section components (`Presentation`, `Experience`, `Projects`, `Knowledges`, `Timeline`, `Contact`) inside `Layout.astro`. Each section component (e.g. `Experience.astro`, `Projects.astro`) pulls its own data directly from `@services/getData` in its frontmatter and maps it to a card component (`CardItem.astro` for experience, `BentoItem.astro` for personal projects laid out in a hand-authored CSS grid with named `grid-template-areas` per project).

`Layout.astro` centralizes SEO/meta: Open Graph, Twitter cards, canonical URL, sitemap link, and a JSON-LD `Person` schema block — all built from `title`/`description` props plus `Astro.request.url`. It also wraps everything in `<ClientRouter />` for Astro View Transitions.

### Styling

No CSS framework. Global styles/tokens (`--primary`, `--secondary`, `--dark`, `.btn`, scrollbar styling) live in a global `<style is:global>` block in `Layout.astro`. Component-scoped styles live in each `.astro` file's own `<style>` block, including per-component responsive breakpoints (notably the bento grid areas in `Projects.astro`).

### Astro config notes

- `astro.config.mjs` sets `site` (used for canonical URLs / sitemap) and adds `@astrojs/sitemap`.
- `tsconfig.json` extends `astro/tsconfigs/strict`.
- `pnpm-workspace.yaml` pins `allowBuilds` for `esbuild`/`sharp` and overrides the `yaml` dependency version — check here before running `pnpm audit` fixes, since overrides can mask or reintroduce issues.
