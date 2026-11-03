# Project memory

## Product intent & audience

- Personal portfolio site for Pramod Kumar Singh, positioning him as a digital marketing learner/practitioner.
- Audience: potential employers, clients, collaborators evaluating marketing skills and creative work.

## Brand personality & voice

- Professional yet approachable; communicates marketing competence.
- Premium feel — not entry-level or generic.

## Visual design & UX direction

- Dark theme, premium aesthetic; fully responsive.
- Sections: sticky nav, hero, about, skills (with brand logos), projects, portfolio creatives, contact.
- Brand logos rendered via inlined SVG path data in `BrandLogo.tsx` (Meta, Google Ads, GA4, Facebook, Instagram, Google Tag Manager) — no runtime icon package for brand marks.
- `lucide-react` used for general UI icons per `.bolt/prompt`.
- Tailwind CSS for styling; components organized under `src/components/` with `@/` alias.

## Decisions, constraints & rationale

- **Removed `simple-icons` dependency**: Vite dev server failed to resolve the package despite Node-level imports working. Rather than fight Vite's dep optimizer on a large package, brand SVG path data was inlined directly in the component. Rationale: zero runtime dependency, smaller bundle, no resolution issues, same visual output.
- `lucide-react` remains in `optimizeDeps.exclude` in Vite config.
- Tech stack locked: Vite + React (JSX), Tailwind CSS, lucide-react. No additional UI/icon packages unless explicitly requested.

## Open questions & assumptions

- Assumption: inlined SVG paths are kept in sync with brand guidelines manually; no automatic updates.
- No analytics, CMS, or backend inferred yet — contact form handling approach undecided.
- Deployment target and domain not yet specified.