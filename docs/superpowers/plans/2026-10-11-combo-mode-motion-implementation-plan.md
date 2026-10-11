# Combo Mode Motion System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a bold, coordinated motion and interaction layer across the portfolio while preserving its content, visual tokens, and accessibility behavior.

**Architecture:** Add one shared `IntersectionObserver` Svelte action for progressive scroll reveals and one layout-level scroll progress component. Opt existing page groups and cards into the action, then add coordinated hover/focus/pressed styles in existing scoped components; no new routes or dependencies.

**Tech Stack:** Svelte 5 runes, TypeScript, native `IntersectionObserver`, CSS custom properties/media queries.

**Spec:** `docs/superpowers/specs/2026-10-11-combo-mode-motion-design.md`

## Global Constraints

- No dependency, third-party script, sound, new route, fabricated score, or unrequested copy.
- Keep existing content, route structure, palette, and typography.
- Apply reveals to meaningful content groups; each reveals once with a short upward fade and sibling stagger capped at 240ms.
- New reveal transforms/transitions and the progress meter exist only under `prefers-reduced-motion: no-preference`.
- Reduced-motion visitors see final content immediately, with no reveal movement or animated progress meter.
- Prerendered content remains visible with JavaScript disabled or `IntersectionObserver` unavailable.
- Do not add hover lifts, looping animation, or parallax; preserve focus rings and keyboard access.
- The scroll meter reflects actual document scroll from 0% to 100%; it is decorative, not a score.
- Preserve the existing hero load motion, Work filter fade, image hover behavior, and full-screen Play dialog behavior.

## Review Focus

1. Reduced-motion preference: no reveal movement and no moving meter. Verify in Tasks 1, 2, and 4.
2. JavaScript disabled or missing `IntersectionObserver`: all prerendered text and controls remain visible. Verify in Task 2.
3. Filter changes and browser back/forward on Work: existing result fade and URL state still work alongside reveals. Verify in Task 3.
4. Short pages and top/bottom scroll positions: progress remains in [0, 1], and no horizontal overflow occurs. Verify in Task 1 and final checks.
5. Keyboard focus and Play dialog controls: active styling is visible without breaking the dialog's close/focus behavior. Verify in Task 4.

---

### Task 1: Add the scroll progress meter

**Files:**
- Create: `src/lib/components/ScrollProgress.svelte`
- Modify: `src/routes/+layout.svelte`

**Interfaces:**
- Produces: `<ScrollProgress />`, a decorative fixed top-edge meter shared by every route.

- [ ] **Step 1: Run the failing browser check**

Open `/work/` in the current preview. Assert `document.querySelector('.scroll-progress')` is `null`; this is the expected pre-change failure.

- [ ] **Step 2: Implement the meter**

Create `ScrollProgress.svelte` with progress state in the range 0–1. On mount, calculate `scrollY / (document.documentElement.scrollHeight - innerHeight)`, clamp the result, treat a non-scrollable page as 0, and update from a passive scroll listener batched with `requestAnimationFrame`. Remove the listener and cancel a pending frame on teardown. Render an `aria-hidden="true"` element with a 2px pink fill scaled from the left. Hide it under reduced motion. Add `<ScrollProgress />` once in `+layout.svelte`.

- [ ] **Step 3: Verify progress behavior**

In the browser, assert width is 0 at the top, between 0 and 1 after a partial scroll, and 1 at the bottom of `/experience/`. Confirm a short page does not produce `NaN` or overflow. Check the reduced-motion CSS rule hides the meter.

- [ ] **Step 4: Run checks and commit**

Run `npm run check` and `npm run build`; commit as `Add a shared page scroll progress meter`.

### Task 2: Add progressive scroll reveals

**Files:**
- Create: `src/lib/actions/reveal.ts`
- Modify: `src/app.css`

**Interfaces:**
- Produces: `reveal(node: HTMLElement, delayMs?: number): { destroy(): void } | void`, usable as `use:reveal={delayMs}`.
- Adds state classes `reveal-pending` and `reveal-visible` to opted-in elements.

- [ ] **Step 1: Run the failing browser check**

On `/experience/`, assert the role entries lack reveal state classes and do not change visibility when scrolled into view. Record that this is the expected pre-change behavior.

- [ ] **Step 2: Implement the action and CSS states**

The action must return without hiding content if reduced motion is requested or `IntersectionObserver` is unavailable. Otherwise set a capped delay of at most 240ms, add `reveal-pending`, observe once, then switch to `reveal-visible` and unobserve on intersection. Disconnect on destroy. In `app.css`, define the pending/visible opacity and upward-fade transition only inside `@media (prefers-reduced-motion: no-preference)`; default markup stays visible.

- [ ] **Step 3: Verify one-time and fallback behavior**

In the browser, confirm a below-fold target is initially pending, becomes visible at intersection, and remains visible after scrolling away/back. Repeat with reduced motion and with JavaScript disabled or `IntersectionObserver` unavailable; content must remain visible in both cases.

- [ ] **Step 4: Run checks and commit**

Run `npm run check` and `npm run build`; commit as `Add progressive scroll reveal action`.

### Task 3: Opt existing page content into reveals

**Files:**
- Modify: `src/lib/components/WorkCard.svelte`
- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/work/+page.svelte`
- Modify: `src/routes/work/[slug]/+page.svelte`
- Modify: `src/routes/about/+page.svelte`
- Modify: `src/routes/experience/+page.svelte`
- Modify: `src/routes/play/+page.svelte`

**Interfaces:**
- `WorkCard` gains optional `revealDelay?: number`, defaulting to 0; it applies `use:reveal` to its existing root card.
- Other route sections use `use:reveal={delayMs}` directly on existing block/list items.

- [ ] **Step 1: Run the failing route coverage check**

Visit all six route types and count reveal targets. The expected pre-change result is zero on each route.

- [ ] **Step 2: Add reveal targets**

Opt in home featured cards; Work cards while retaining `<li in:fade>` and query-string filtering; project detail text/media groups; About sections and certificate cards; Experience role entries; and Play cards. Stagger sibling items by 60ms, capped at 240ms. Do not reveal individual paragraphs or headings independently from their content group.

- [ ] **Step 3: Verify route and filter coverage**

Confirm every route type has its specified targets. On Work, switch filters and use back/forward; newly visible cards reveal while the existing fade and URL state remain intact. Check 360px, 960px, and 1280px for horizontal overflow.

- [ ] **Step 4: Run checks and commit**

Run `npm run check` and `npm run build`; commit as `Add scroll reveals across portfolio pages`.

### Task 4: Add Combo Mode interaction feedback and update design guidance

**Files:**
- Modify: `src/lib/components/WorkCard.svelte`
- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/work/+page.svelte`
- Modify: `src/routes/work/[slug]/+page.svelte`
- Modify: `src/routes/about/+page.svelte`
- Modify: `src/routes/experience/+page.svelte`
- Modify: `src/routes/play/+page.svelte`
- Modify: `src/lib/components/Nav.svelte`
- Modify: `src/lib/components/Footer.svelte`
- Modify: `DESIGN.md` motion and quality guidance

- [ ] **Step 1: Run the failing interaction check**

On Work, Play, About, and Experience, verify that existing cards/buttons have no coordinated pink active treatment beyond current behavior. Record as the expected pre-change baseline.

- [ ] **Step 2: Add coordinated interaction states**

Use existing tokens for pink/magenta border or surface emphasis on card hover and `:focus-visible`; emphasize associated tech tags with the active card. Add a brief pressed response to action buttons and icon links. Do not lift cards, replace focus outlines, change labels, or alter the Play dialog flow. Put all new transforms/transitions inside `prefers-reduced-motion: no-preference`.

- [ ] **Step 3: Update `DESIGN.md`**

Replace the prohibition on scroll-triggered reveals with the approved one-time, reduced-motion-safe reveal rule. Document the real-scroll progress meter, Combo Mode hover/focus/press feedback, no-card-lift rule, and reduced-motion behavior.

- [ ] **Step 4: Verify pointer, keyboard, and reduced motion**

Hover/focus cards and actions on desktop and narrow widths; confirm pink feedback and visible focus rings. Open and close the Play dialog with keyboard and pointer. Emulate reduced motion and confirm final content is immediately visible with no reveal transforms/transitions or progress meter.

- [ ] **Step 5: Run full verification and commit**

Run `npm run check` and `npm run build`. Verify all six route types at 360px, 960px, and 1280px, and verify prerendered content remains visible without JavaScript. Commit as `Add Combo Mode interactions and document motion rules`.
