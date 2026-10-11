# Combo Mode Motion System

**Status:** design for owner review  
**Date:** 2026-10-11

## Intent

Give the portfolio a bolder, game-like sense of interaction across all pages, with scroll reveals and feedback that connects the experience into one system. The owner selected **Combo Mode** from three browser mockups.

Keep the existing black/plum/pink palette, Orbitron headings, Roboto body text, page content, route structure, and current interactions. This is a motion and interaction layer, not a content redesign.

## Experience

### Scroll progress

A thin pink progress meter at the top edge reflects actual document scroll progress from 0% to 100%. It is decorative (`aria-hidden`) and is not a score or fabricated statistic. The meter is omitted for `prefers-reduced-motion: reduce`.

### Scroll reveals

Relevant content groups reveal once when they enter the viewport, with a short upward fade and a brief sibling stagger (capped at 240ms per group). Apply to meaningful units rather than individual text lines:

- Home featured-work cards.
- Work-index result cards, including after a filter change.
- Project-page details and media frames.
- About sections and certificate cards.
- Experience role entries and tech-tag groups.
- Playable-game cards.

The existing hero load animation and user-triggered filter/player behavior remain. No looping animation, parallax, or new route.

### Combo feedback

- Cards react together on pointer hover and keyboard focus: a clear pink/magenta active outline or surface treatment and coordinated emphasis of associated tags. Cards do not lift.
- Buttons and icon actions give a brief pressed/active response, with the existing focus ring intact.
- The Play tab and full-screen game dialog retain their current behavior; this change adds only consistent feedback around them.

## Motion rules and accessibility

- New reveal movement and transitions exist only under `prefers-reduced-motion: no-preference`.
- Under reduced motion, content is visible immediately, with no reveal transforms or animated progress meter.
- Progressive enhancement: prerendered content remains visible if JavaScript is disabled or `IntersectionObserver` is unavailable.
- Reveals run once per element and are not repeated when the user scrolls back up.
- Use existing motion and color tokens; add no dependency, third-party script, sound, or unrequested copy.
- Preserve semantic elements, keyboard reachability, and visible focus rings.

## Implementation outline

- Add a small shared Svelte action using the browser's native `IntersectionObserver` for reveal targets. It opts elements into hidden/reveal state only when motion is allowed and observation is available; otherwise content stays visible.
- Add a small shared scroll-progress component in the layout. Update its value from actual scroll position using a passive scroll listener with frame-batched updates; no per-card scroll listeners.
- Add reveal hooks to existing page-level groups and cards. Keep reveal delay bounded for long lists.
- Use CSS for reveal, card/focus, and pressed states, scoped where appropriate and token-based.
- Update `DESIGN.md` motion and quality guidance only during implementation, preserving its current owner-reviewed content and documenting the agreed behavior.

## Verification

- `npm run check` and `npm run build`.
- Inspect all five routes (home, work, project detail, Play, About, Experience; the Experience route is included despite the six page families).
- Browser check on all six route types at 360px, 960px, and 1280px: no horizontal overflow; scroll meter tracks page progress; reveal groups appear once; cards and controls respond to pointer and keyboard focus.
- Emulate reduced motion: all content is immediately visible, no reveal transforms/transitions or moving meter.
- Disable JavaScript / simulate unavailable `IntersectionObserver`: prerendered page content remains visible.
- Check keyboard traversal and focus rings, especially interactive cards and the Play dialog.

## Out of scope

- Replacing the selected Combo Mode direction with another mockup.
- New copy, scores, counters, or other game facts.
- Changing existing page layouts, project data, or the site's color/type systems.
- Publishing or changing GitHub Pages settings as part of implementation.
