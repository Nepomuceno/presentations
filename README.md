# Presentations (React + Vite + Tailwind v4)

A lightweight, modular slide system to build beautiful presentations fast using React, Vite, Tailwind v4, and Framer Motion. Each presentation is a component; each slide is a tiny TSX file for maximum reuse and composability.

## Stack

- React 18 + Vite 5
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- TypeScript
- Framer Motion (animations)
- Bun (package manager & scripts)

## Quickstart

- Install deps: `bun install`
- Dev server: `bun dev` then open http://localhost:5173
- Build: `bun run build` (outputs to `dist/`)
- Preview build: `bun run preview`
- Typecheck: `bun run typecheck`

## Project layout

```
src/
  App.tsx                    # routes
  routes/
    PresentationList.tsx     # list of decks
    DeckRunner.tsx           # renders a selected deck
  shared/
    deck/                    # Deck, Slide, controls, navigation
    motion/                  # animation presets
  presentations/
    index.ts                 # registry of all presentations
    sample/                  # example deck
    storypoints/             # Story Points deck (slides as TSX files)
      slides/
        Title.tsx
        HookJeffries.tsx
        ComplexityTrap.tsx
        Weaponization.tsx
        AccuracyVsCounting.tsx
        Goodhart.tsx
        ValueOverEffort.tsx
        FocusPrioritizationImpact.tsx
        WhatToUseInstead.tsx
        MiniExample.tsx
        CloseSlide.tsx
        Citations.tsx
```

## Create a new presentation

1. Create a deck component under `src/presentations/<your-deck>/slides/` with one TSX per slide.
2. Export a router component that switches on `slide.id`.
3. Register it in `src/presentations/index.ts` with an `id`, `title`, and `slides` array.
4. Navigate to `/p/<id>` or click from the homepage.

## Authoring slides

- Keep slides small and focused. Compose visuals using Tailwind and Framer Motion.
- Use the identity gradient with `bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent`.
- Built-in transitions: `'fade' | 'slide' | 'up' | 'scale'`. See `shared/motion/presets.ts`.
- Keyboard: `←` `→` and `Space`. Mouse wheel supported.

## Tailwind v4 notes

- Config is plugin-based; no `tailwind.config.js` required. Tokens are defined in `src/styles/index.css` under `@theme`.
- Add global styles/tokens in `src/styles/index.css`.

## GitHub Actions (CI)

- `.github/workflows/ci.yml` runs install, typecheck, and build on pushes and PRs to `main` using Bun.

## Recommended Git commands

```bash
# First time
git init
git add .
git commit -m "chore: bootstrap presentations app"

# Create the main branch (if needed)
git branch -M main

# Set the remote and push
# git remote add origin git@github.com:<you>/<repo>.git
# git push -u origin main
```

## License

No license is declared yet. Add a LICENSE file if you plan to open source.

