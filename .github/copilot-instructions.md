## Repository orientation — key facts for an AI code agent

- Project type: Next.js (React). Both the legacy `pages/` router and an `app/` folder are present; most pages live in `pages/` (e.g. `pages/index.js`, `pages/listings/[id].js`). When changing routing be careful about mixing `app/` and `pages/` behaviors.
- Styling: heavy use of inline styles in components (see `components/Layout.jsx`, `components/Footer.tsx`) plus global CSS imports in `pages/_app.js` (`styles/globals.css`, `styles/mobile.css`). Follow existing inline-styling patterns for small UI changes; prefer existing style approach over adding new CSS files unless implementing a cross-cutting style.
- Images: image optimization uses `next/image` (see `components/OptimizedImage.jsx`). External image hosts must be listed in `next.config.mjs` `images.domains`. If you add new external image sources, update `next.config.mjs`.
- Map & charts: the site includes `leaflet` and `leaflet.heat` (heatmap), and `recharts` for analytics visualizations. Map styles and Leaflet CSS are imported globally in `pages/_app.js` — preserve that import when editing map pages (e.g. `pages/heatmap.js`).
- Data flows: most pages are static React components with in-file example data (see `pages/listings/[id].js` for an example of structured property data). Small client-side state is used (`useState`, `useEffect`) and Next router (`next/router`) for dynamic routes.
- Type artifacts: there is a `components/Footer.tsx` file (TypeScript JSX) but the repo otherwise uses `.js`/`.jsx`. Do not assume full TypeScript setup exists — if you introduce TypeScript, add the required config and dependencies.

## Workflow & commands (how to run/test locally)

- Development: `npm run dev` — runs `next dev`. Use this when iterating on UI and client code.
- Build for production: `npm run build` then `npm run start` to preview the production build.
- Linting: `npm run lint` runs `eslint` (config is at `eslint.config.mjs`). Prefer fixing lint issues in small, focused commits.

## Project-specific conventions and patterns

- Inline styles dominate. When modifying component layout or colors, mirror the style shape used nearby (see `components/Layout.jsx` for header/nav examples and `components/Footer.tsx` for footer patterns).
- Navigation uses `next/link` and client-side nav; mobile menu state toggles `document.body.style.overflow` to prevent background scroll (`components/MobileMenu.jsx`). Keep accessibility attributes (e.g. `aria-label`) when editing menu buttons.
- Image components: prefer `components/OptimizedImage.jsx` when adding a responsive image to preserve sizing/priority and Next Image optimizations.
- Example data is embedded inside pages for prototype content (e.g. `pages/index.js`, `pages/listings/[id].js`). If you add external data sources, keep the same data shape (title, location, price, specs, gallery[]).

## Integration points / external dependencies to be aware of

- next.config.mjs — image domains and sizing are configured here. Update when adding new remote image hosts.
- pages/api/* — API routes live under `pages/api` (e.g. `pages/api/hello.js`). Edit these for server-side endpoints.
- Leaflet & Recharts — ensure CSS / client imports remain in `_app.js` when changing map/chart pages.

## How the AI should make edits (practical rules)

1. Minimal, focused changes: prefer small PRs that change a single feature or component.
2. Preserve style patterns: follow inline styles and the component structure used in the same directory/file.
3. If adding images from external hosts, add the host to `next.config.mjs` and reference `components/OptimizedImage.jsx`.
4. Avoid converting many files to TypeScript in a single PR. If TypeScript is required, add `tsconfig.json` and the minimal deps, and limit changes to a single incremental effort.
5. Run the dev server locally to verify visual changes: `npm run dev`. If the change affects build/runtime, run `npm run build` to catch build errors.

## Quick file references (examples to inspect)

- Routing & pages: `pages/index.js`, `pages/listings/[id].js`, `pages/_app.js`
- Layout & navigation: `components/Layout.jsx`, `components/MobileMenu.jsx`, `components/Footer.tsx`
- Images: `components/OptimizedImage.jsx`, `next.config.mjs`
- Maps & charts: `pages/heatmap.js`, `components/RegionalInsights.jsx`

If any section is unclear or you want a longer checklist for a specific task (adding TypeScript, adding new external images, or adding a new API route), tell me which topic and I'll expand the instructions with step-by-step examples.
