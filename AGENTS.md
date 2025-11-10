# Repository Guidelines

## Project Structure & Module Organization
`src/app` holds the app-router routes and top-level layouts; colocate route-specific components there. Shared UI lives in `src/components`, while `src/lib`, `src/constants`, and `src/types` store helpers, config objects, and TypeScript contracts. Reusable data (hero copy, card metadata, markdown posts) sits in `src/data` and `content`, and static assets (logos, OG images, animations) belong in `public`. Email templates reside in `src/emails`, so keep transactional markup self-contained. Supabase wiring is centralized in `src/lib/supabase.ts` and should be the only place that touches environment secrets.

## Build, Test, and Development Commands
```bash
npm install         # install dependencies once per clone
npm run dev         # start Next.js 15 with Turbopack at http://localhost:3000
npm run build       # production build; use before shipping infra changes
npm run start       # serve the built app locally
npm run lint        # enforce Next.js + TypeScript + Tailwind rules
```

## Coding Style & Naming Conventions
Use TypeScript everywhere, 2-space indentation, and `PascalCase` for components/hooks, `camelCase` for helpers, and `SCREAMING_SNAKE_CASE` for env constants. Prefer functional components with React Server Components by default; add `"use client"` only when browser APIs or hooks demand it. Tailwind 4 utilities should stay inline; extract shared patterns into `src/components/ui`. Import paths should use the `@/` alias to avoid relative traversals.

## Testing Guidelines
There is no dedicated test harness yet; treat `npm run lint` as the gatekeeper and manually validate critical flows (seller verification, blog rendering, Supabase interactions) through the browser. When adding automated tests, mirror the route tree inside `src/__tests__` and name files `*.spec.tsx` for clarity. Document new manual test cases in pull requests until tooling lands.

## Commit & Pull Request Guidelines
Match the existing log by writing imperative, present-tense summaries (`feat: add seller verification system`, `update social media link`). Keep commits scoped to one concern and include relevant directories in the body if helpful. Pull requests should explain the user impact, list test evidence (`npm run lint`, screenshots, recordings), and reference issues or Linear tickets when available. Include screenshots or Loom links for any UI-visible adjustment to seller cards, pricing sections, or verification workflows.

## Security & Configuration Tips
Store Supabase credentials in `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) and never commit them. Regenerate keys if leaked, and avoid logging Supabase responses client-side. When handling new seller data, prefer server actions or API routes under `src/app/api` to keep sensitive logic off the client bundle.
