# AGENTS.md

Instructions for coding agents working in this repo. Read this file at the start of every session.

## What this is

Personal portfolio for Muhammad Dzaki Adani, a Unity game developer. Static site built with SvelteKit and Svelte 5, deployed to GitHub Pages. Audience and goals are in DESIGN.md §1.

## Sources of truth

- `DESIGN.md`: visual system, layout, motion, media, copy voice. Owner-reviewed (v0.3). Do not edit it without asking.
- `AGENTS.md` (this file): process, structure, code rules.
- `src/lib/data/projects.ts` and `src/lib/data/about.ts`: all content. Components contain no project facts.

If DESIGN.md and this file conflict, DESIGN.md wins for anything visual or written, and this file wins for process. If unsure, ask.

Read only the DESIGN.md sections your task touches. Before UI work, that is usually §3 to §8 and §10. Read §11 only when editing project content.

## Stack

- SvelteKit with Svelte 5. Use runes: `$state`, `$derived`, `$props()`. Do not use `export let`, `$:`, or `on:click`. Use `onclick={...}`.
- TypeScript in strict mode.
- `@sveltejs/adapter-static`. Every route is prerendered. Output goes to `build/`.
- Plain CSS: custom properties in `src/app.css`, scoped `<style>` blocks in components.
- No UI component library, no CSS framework, no analytics, no third-party scripts.
- Fonts are self-hosted with `@fontsource/orbitron` and `@fontsource/roboto`. Do not link Google Fonts.
- Node LTS (20 or newer). Pin the version in `.nvmrc`.

Approved dependencies: the packages above plus whatever `sv create` installs. Anything else needs owner approval first.

## Commands

```
npm install
npm run dev        # local dev server
npm run check      # svelte-check, must pass before every commit
npm run build      # static build into build/, must pass before every push
npm run preview    # serve build/ locally to test prerendering
```

If a script is missing, add it to package.json. Do not skip the check.

## Structure

```
src/
  app.css                    global tokens and base styles
  lib/
    components/              Nav, Hero, WorkRow, ProjectFrame, WebGLPlayer, Footer
    data/projects.ts         every project (type Project, shape in DESIGN.md §12)
    data/about.ts            experience, what I take on, recognition
  routes/
    +layout.svelte           nav and footer
    +layout.ts               prerender = true; trailingSlash = 'always'
    +page.svelte             home
    work/+page.svelte        index with filters
    work/[slug]/+page.ts     exports entries() returning every slug from projects.ts
    work/[slug]/+page.svelte project page
    about/+page.svelte       about and contact
static/
  media/<slug>/              project images, videos, posters
DESIGN.md
AGENTS.md
```

Use `base` from `$app/paths` for every media URL, so the site also works if it is a project repo.

## Content rules

- Every project is one `Project` object in `projects.ts`. Adding a project means adding that object and its media folder. Never hardcode a project inside a component.
- Never invent facts: years, clients, awards, metrics, quotes. If a fact is not in `projects.ts`, `about.ts`, or DESIGN.md §1 and §11, leave a `TODO(owner):` comment and list it in your summary.
- A link whose URL is empty or `TODO` is not rendered. Do not render dead buttons.
- `restricted` projects get no client UI images, no links, and no video. Show the placeholder frame and the note from DESIGN §6.
- Copy follows DESIGN §10: sentence case, no all-caps labels, no arrows (→) in links or buttons, no middle-dot strings, no emoji, none of the banned words.
- Until the owner answers DESIGN §14, use these defaults and mark each with `TODO(owner):`: hero option A, "Dzaki Adani" in the nav, "Muhammad Dzaki Adani" on About, English only.

## Styling rules

- Use tokens only. No hex or pixel color literals in components. Use `var(--magenta)`, `var(--paper)`, and so on.
- Radius is 0, except phone frames at 22px. No box shadows. No gradients.
- Breakpoints: 640px and 960px. Test at 360px wide.
- Keep selectors flat and component-scoped. Do not stack a class and an element selector that fight over the same padding or margin. Re-check spacing after every edit.
- Never remove focus outlines.

## Motion rules

- Only the four patterns in DESIGN §7 are allowed. Anything else needs owner approval.
- The load moment uses CSS keyframes. Svelte transitions are for user-triggered UI only.
- Every transform and keyframe sits inside `@media (prefers-reduced-motion: no-preference)`.

## Media rules

- Formats and size limits are in DESIGN §8. Check file sizes before committing, and re-export anything over the limit.
- Keep original full-resolution files out of the repo. Commit only web-ready files.
- Filenames are lowercase kebab-case.
- Every image needs alt text in `projects.ts`. Game screenshots are never given empty alt text.
- WebGL: iframe created only after the click, `loading="lazy"`, native aspect ratio.
- Preload only the featured hero frame.
- Do not open images unless the task is about visuals. Image tokens are expensive.

## Accessibility and performance

- One h1 per page. Headings in order. Buttons are `<button>`, links are `<a>`.
- Contrast follows DESIGN §3. Pink is never text on paper. Magenta is never text on night.
- No horizontal scroll at 360px.
- Home page JavaScript stays under 150KB gzipped. Check the build output after adding a dependency or a component with logic.

## Build order

Work in this order, one step per session where practical:

1. Scaffold with `npx sv create`, choose the minimal SvelteKit template with TypeScript. Add the adapter and fonts. Set up `.nvmrc`.
2. Tokens, base styles, and the layout shell (`app.css`, `+layout.svelte`, `Nav`, `Footer`).
3. `projects.ts` and `about.ts` with the real content from the inventory (DESIGN §11). Leave unconfirmed links unrendered.
4. Home page, then the work index with filters, then the project page.
5. About page.
6. Deploy workflow, GitHub Pages setup, and a check that deep links such as `/work/<slug>` load on the live site.

## Git and deploy

- `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`. Do not change the workflow or Pages settings without asking.
- For anything bigger than a copy fix, work on a branch. Keep commits small with clear messages, such as "Add AR Magazine project page".
- Never commit `build/`, `node_modules/`, `.env`, or any file with credentials.
- Never push if `npm run build` fails.

## Working in sessions

The owner pays a fixed monthly usage budget, so work efficiently:

- One task per session. If the task grows, stop and summarize.
- Read only the files the task needs. Never scan the whole repo or read `node_modules/` or `build/`.
- Prefer targeted edits to rewriting whole files.
- Describe screenshots in text. Look at an image only when the task is about visuals.

## Definition of done

Before reporting a task complete:

1. `npm run check` passes.
2. `npm run build` passes and prerenders every route.
3. Checked at 360px, 960px, and 1280px wide.
4. Reduced motion checked: no transforms, final states shown immediately.
5. Keyboard: Tab reaches every link and button, and the focus ring is visible.
6. Every new image has alt text.
7. Every new `TODO(owner):` appears in the summary.

## Ask before proceeding

Stop and ask when:

- The task needs a new dependency, a new motion pattern, or a new route.
- DESIGN.md and the request conflict.
- Content the task needs is missing.
- The change touches the deploy workflow, Pages settings, or the domain.
- You are tempted to add a form, analytics, or a backend.

Ask one specific question at a time.

## Session summary

End every session with a summary under 10 lines: files changed, checks run and their results, open `TODO(owner):` items, and any question for the owner.
