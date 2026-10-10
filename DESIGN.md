# DESIGN.md: Muhammad Dzaki Adani portfolio

Status: draft v0.1 for owner review.
Read this before writing any UI. Treat the tokens and rules here as fixed until the owner changes them.

---

## 1. Context

### Who he is

Muhammad Dzaki Adani is a Unity game developer. Most of his work falls into three areas:

- **EdTech games.** Educational 2D games for schools, publishers, and training teams (Unity 2D).
- **AR and VR.** Markerless and marker-based AR, plus VR training (Unity AR Foundation, Vuforia, Unity VR).
- **WebGL.** Games that play in the browser.

He also has casual and hypercasual mobile games (AdMob, in-app purchases), a visual novel, a Unity and Mapbox 360 tour linked to maps, and a game jam pitch nominee. On client work he is usually the programmer: scenario code, asset integration, scene mapping, marker setup, and gameplay flow, built to the client's brief.

### Who visits

1. Freelance clients (Upwork and referrals) who need an educational, AR, or WebGL build and want proof quickly.
2. Studios and recruiters hiring junior to mid-level Unity developers.
3. Training and education buyers (institutions, companies) who want AR or VR content.

### Primary job

Show that he has shipped working Unity builds in these areas. A visitor should be able to play one within two clicks.

### Recognition to surface

- GameJamPlus Indonesia 23/24: Best Pitch nominee (Purring Post & Delivery)
- Masterclass for Game Developers: Game Design, Ministry of Tourism and Creative Economy (August 2020)
- Sepay Games funded by PKMV, the vocational student entrepreneurship program (September 2020)
- MAGE 2017: finalist, student Game Dev Competition
- FTIf GameDeff 2017: top 20
- Gameloft Indonesia workshop: Producership and Project Management in Game Companies (October 2016)
- Trainer at Agate Academy (listed as Jr. Game Programmer)

---

## 2. Concept

**The site should look like the deck he already uses.** The plum band and the magenta tab carry over, so his Upwork profile, his deck, and his site read as one person. Nothing else from the deck template comes along: no glow, no slide chrome.

**Most of his work is portrait.** Mobile games and AR on phones dominate. So the unit of display is a 9:16 frame everywhere. The hero is never landscape.

**One bold move.** The hero band has a shallow curved bottom edge, the same arc as the deck's title band. The featured game frame crosses that edge. Everything else stays quiet. Spend the boldness there and nowhere else.

---

## 3. Color

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--night` | #1C1229 | Hero band, footer | Base for light text |
| `--paper` | #F4F2F7 | Page background | Base for dark text |
| `--ink` | #15101C | Body text on paper | About 17:1 on paper |
| `--muted` | #6E6578 | Captions, metadata on paper | 5.0:1 on paper |
| `--magenta` | #B3175E | Links, active nav tab, focus ring on paper | 5.9:1 on paper |
| `--pink` | #E8457F | Accents, buttons, focus ring on night | 4.8:1 on night |

Rules:

- No gradients. The deck's radial glow is a slide-template effect and stays in the deck.
- Magenta fails as text on night. Pink fails as text on paper. Use each only on its own surface.
- Dividers are 1px. On paper: `rgba(21, 16, 28, 0.12)`. On night: `rgba(244, 242, 247, 0.16)`.

---

## 4. Type

Two families with clearly different voices:

- **Familjen Grotesk** for headings, navigation, UI, and captions. Weights 400 and 600.
- **Source Serif 4** for the About text and project descriptions. Weights 400 and 600.

Scale, roughly a 1.25 ratio from a 17px base:

| Token | Size | Use |
|---|---|---|
| `--text-caption` | 13px | Captions, tags, metadata |
| `--text-small` | 15px | UI labels, nav |
| `--text-body` | 17px grotesk / 18px serif | Body text |
| `--text-h3` | 21px | Project titles in lists |
| `--text-h2` | clamp(28px, 4vw, 40px) | Section headings |
| `--text-hero` | clamp(52px, 9vw, 120px) | Hero name. Tracking -0.035em, line-height 0.95 |

Rules:

- Serif prose: line-height 1.6, max width 62ch.
- Grotesk body: line-height 1.5, max width 68ch.
- No all-caps labels.
- No single-word accent in a headline (no italic or colored word).
- No arrows (→) in links or buttons.
- No middle-dot strings ("AR · Unity · Live").

---

## 5. Layout

- 12 columns. Max content width 1200px. Gutter 24px (16px below 640px).
- Side padding: `clamp(20px, 5vw, 64px)`.
- Everything is left-aligned. No centered text blocks.
- Breakpoints: 640px and 960px. Works from 360px wide with no horizontal scroll.
- Radius is 0 everywhere except phone-style frames, which get 22px to match device corners.
- No box shadows.

**Home, desktop**

```
+--------------------------------------------------------------+
| Dzaki Adani                        Work   About   Contact    |
|                                                              |
|  I build educational games,                                  |
|  AR and WebGL projects in Unity.       +-------------+       |
|                                        |             |       |
|  Shipped apps, client builds,          |  featured   |       |
|  and game jam projects.                |    9:16     |       |
|                                        |   frame     |       |
|  [See the work]   [Email me]           |             |       |
|                                        +-------------+       |
+--------------------------------------------------------------+
   Bottom edge of the plum band is a shallow curve.
   The featured frame's lower part sits over that curve.
```

**Work index, desktop**

```
Work       All   EdTech   AR   VR   WebGL   Games
-----------------------------------------------------------
[thumb]    AR Magazine (Klikuark!)                AR      Live
           AR lessons for a comic magazine
[thumb]    Math-Adventure                         EdTech  Live
           Map-based learning game with addressable content
[thumb]    Far From Shore                         WebGL   Demo
           Narrative survival game, plays in browser
```

**Project page, desktop**

```
+----------------------------+  +-----------+  +-----------+
| AR Magazine                |  |           |  |           |
| AR lessons for a comic     |  |   9:16    |  |   9:16    |
| magazine, built with       |  |   frame   |  |   frame   |
| TICTECH Studio             |  |           |  |           |
|                            |  +-----------+  +-----------+
| My role                    |
| - AR scenarios, gameplay   |
| - Asset input, scene map   |
| - Marker setup             |
|                            |
| [Google Play] [App Store]  |
+----------------------------+
```

Text column is about 40% wide and sticky on desktop. Media takes the rest. Everything stacks on mobile.

---

## 6. Components

**Nav.** Wordmark "Dzaki Adani" on the left. Links: Work, About, Contact (Contact jumps to the contact block in the footer). The active section is marked by a 3px × 18px magenta bar to the left of its link. This is the deck's tab, reused as a location marker. The three links fit on one row on mobile, so there is no hamburger.

**Hero.** Full width on `--night`. Bottom edge curved, about 40px deep at the center. Draw it with an SVG or `clip-path`, not an image. Name as the h1 at `--text-hero`, two lines at most. One line of support text. Two actions: "See the work" (pink fill, night text) and "Email me" (outlined). The featured 9:16 frame sits on the right and crosses the curve from 960px up. Below 960px, it sits under the text.

**Work index.** Filters are plain buttons in one row, with `aria-pressed`. The active filter gets a 2px magenta underline. Results are rows, not cards: a 72px-wide 9:16 thumbnail, the title as h3, one sentence of summary, area and tech as plain text, and status as text. Rows are separated by 1px lines. Filter state lives in the URL (`/work?area=ar`) so links can be shared.

**Project page.** Route `/work/[slug]`. Left column: title, one-sentence summary, client name only if the client allows it, "My role" (3 to 5 short bullets), tech list, and links. Right column: 9:16 frames in a two-up grid on desktop and one column on mobile. WebGL projects keep the game's native aspect ratio, so landscape games are not forced into 9:16. Show a cover image and a "Play demo" button, and load the iframe only after the click. Restricted projects keep the same layout with role text and a plain note: "Client project. The build can't be shown under the client's agreement. Details on request."

**About.** One serif intro paragraph. Then experience (company, role, years), a "What I take on" list, and the recognition list in reverse date order. An optional 1:1 portrait, about 320px, sits beside the intro. No photo grid.

**Contact.** No form in v1. Email as a `mailto:` link, plus the Upwork profile and LinkedIn if he wants them. The footer repeats the email.

**Footer.** `--night` background. Name, year, and links. Nothing else.

---

## 7. Motion

Motion appears in three places only.

1. **Load moment (once).** The hero band fades in over 600ms. The name rises 16px and fades in over 420ms, starting at 120ms. The featured frame rises 40px and fades in over 900ms, starting at 240ms. Use `--ease-out` and CSS keyframes with `animation-fill-mode: both`. Svelte's `in:` transitions do not run on first render by default, so keyframes are simpler here.
2. **User-triggered UI (Svelte transitions).** Filter results fade over 180ms. The demo player opens with a height and opacity transition over 420ms. Nothing else animates on click.
3. **Hover, work rows only.** The thumbnail moves 6px right. The title gets a magenta underline that draws left to right over 180ms.

Not allowed: fade-up on every section, scroll-triggered reveals, parallax, hover lifts on every card, and looping background motion.

Tokens:

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--dur-quick: 180ms;
--dur-medium: 420ms;
--dur-load: 900ms;
```

Reduced motion: wrap all transforms and keyframe animations in `@media (prefers-reduced-motion: no-preference)`. Under reduced motion, elements appear in their final state.

---

## 8. Media

- **Thumbnails:** 9:16, 540×960, WebP or AVIF, under 120KB each.
- **Detail frames:** 1080×1920 at most, under 300KB each.
- **AR and gameplay clips:** muted, looping, `playsinline`. H.264 MP4 plus WebM, under 2MB each, with a poster image.
- **WebGL:** iframe with `loading="lazy"`, created only on click. Keep the native aspect ratio.
- **Alt text** names the project and what is on screen, for example: "AR Magazine: a comic page with an animated carbon cycle explanation overlaid on a table."
- **Client-restricted projects** get a neutral placeholder frame with the project name and area. No client UI screenshots.
- **Hero frame:** preload it. It is the largest element on the page.

---

## 9. Quality floor

- Text meets WCAG AA: 4.5:1 for normal text, 3:1 for large text.
- Focus ring: 2px outline, 3px offset. Magenta on paper, pink on night.
- One h1 per page: the hero name on home, the project title on project pages. h2 for sections, h3 for project titles.
- Filters and buttons are real `<button>` elements. Links are real `<a>` elements.
- All text and images work with JavaScript disabled, because routes are prerendered HTML.
- Targets on the home page: Lighthouse 95+ for performance, accessibility, best practices, and SEO.
- Home page JavaScript: under 150KB gzipped, excluding images.

---

## 10. Copy

**Voice:** plain, first person, specific. Use the work's own vocabulary: scenario code, asset integration, scene mapping, marker setup, gameplay flow.

**Avoid:** "passionate," "innovative," "immersive," "cutting-edge," "seamless," "unlock," and any sentence that could appear on a stranger's portfolio.

**Headings:** sentence case.

**Buttons** say what happens: "See the work," "Email me," "Play demo," "Open on Google Play."

**Hero options:**

- A: "I build educational games, AR and WebGL projects in Unity."
- B: "Unity developer for learning games, AR training, and browser builds."

**Support line:** "Shipped apps, client builds, and game jam projects. Each one links to a build or a preview where the client allows it."

**About intro (draft):** "I'm a Unity developer. Most of my work is educational games, AR, and VR training. On client projects I usually write the scenario and gameplay code, bring in assets, map scenes, and set up AR markers, working from the client's brief to a build."

**What I take on (draft, confirm before publishing):**

- Educational games in Unity 2D and WebGL
- Markerless and marker-based AR (Unity AR Foundation, Vuforia)
- VR training scenarios
- 360 tours linked to maps (Unity with Mapbox)
- Casual and hypercasual mobile games with ads and in-app purchases

---

## 11. Content

**Status values:**

- `live`: playable or downloadable now
- `demo`: playable in browser, may be partial
- `preview`: preview link only
- `restricted`: client work, no build shown
- `wip`: in progress
- `tba`: in development, nothing public yet

**Featured on home:** AR Magazine (AR), Math-Adventure (EdTech), and Far From Shore (WebGL). Together they cover the three focus areas with the strongest proof available.

**Inventory.** Projects whose link is marked "confirm" were shown in the deck as "Access here" hyperlinks. The URLs were not readable, so please send them.

| Project | Area | Tech | Status | Link |
|---|---|---|---|---|
| AR Magazine (Klikuark!) | AR, education | Unity, Vuforia | live | Google Play, App Store, bit.ly/Klikuark |
| SENALAPAN Mold Cleaner Instructions | AR, industrial training | Unity, markerless AR | live | bit.ly/2NJUJzi |
| AR Name Card | AR | Unity, AR marker | live | bit.ly/AR_NameCard |
| 3D House AR Showcase | AR, property | Unity AR Foundation | live | bit.ly/3fDQ7EW |
| 3D AR COVID-19 Education | AR, education | Unity AR Foundation | live | bit.ly/3f8WVM1 |
| 3D AR Tarpaulin Pond, Lobster Cultivation | AR | Unity AR Foundation | live | bit.ly/3bIQEEA |
| GIZ Solar Panel VR | VR training | Unity VR | preview | bit.ly/37xRt0L |
| Petro 360 Tour | 360 tour, maps | Unity, Mapbox, REST API | restricted | none |
| Math-Adventure | EdTech | Unity 2D, Addressables, IAP | live | confirm |
| Explore Math | EdTech | Unity 2D, drag and drop | live | confirm |
| Chem | EdTech | Unity 2D | live | confirm |
| Simple Mini Quiz Game | EdTech, quiz | Construct 2, JSON | live | confirm |
| Guess Color Quiz | EdTech, trivia | Unity 2D, AdMob | live | confirm |
| Wonder Word | EdTech, word game | Unity 2D, AdMob | live | confirm |
| Forestdom | Trivia | Unity 2D, AdMob | live | confirm |
| Memories | Visual novel | Unity 2D, API integration | confirm | confirm |
| Far From Shore | Narrative survival | Unity, WebGL | demo | confirm |
| Little Muslim Heroes, Edufic | Islamic EdTech | Unity WebGL | tba | none |
| Purring Post & Delivery | Management, narrative | Unity 2D | wip | none |
| Petal Pals | Desktop companion | Unity 2D | tba | none |
| Juggler (Endless 3D) | Casual 3D | Unity 3D | live | confirm |
| Buto Beat | Music shooter | Unity 2D | live | confirm |
| Paradixe City | Local co-op shooter | Construct 2 | live | confirm |
| FlappyRabbit | Hypercasual | Unity 2D, IAP, AdMob | confirm | confirm |
| G-Escape | Action shooter, client work | Unity 2D, IAP | confirm | confirm |
| Love Wars | Tabletop card game | Not digital | rulebook link | confirm |

Notes:

- Memories lists "Muhammad Dzaki Adani" under Game Programmer in its credits.
- Love Wars is not digital. Show it in a short "Other" line on About, not in the filters.

---

## 12. Svelte notes

- SvelteKit with `adapter-static`. Prerender every route.
- Use the repo `username.github.io` so the site sits at the root. If it's a project repo, set `paths.base`.
- Routes: `/`, `/work`, `/work/[slug]`, `/about`. Contact lives on `/about` and in the footer.
- Project data lives in `src/lib/data/projects.ts`, typed as below. Pages read from it. No CMS.
- Global tokens go in `src/app.css` as `:root` custom properties. Component styles stay scoped. No UI component library.
- Filter state lives in the URL query string.
- Heavy embeds and videos load lazily or on user action.

```ts
type Project = {
  slug: string;
  title: string;
  area: 'edtech' | 'ar' | 'vr' | 'webgl' | 'game' | 'other';
  tech: string[];            // e.g. ['Unity 2D', 'AdMob']
  status: 'live' | 'demo' | 'preview' | 'restricted' | 'wip' | 'tba';
  client?: string;           // only if the client allows naming them
  summary: string;           // one sentence, plain language
  role: string[];            // what I built, short bullets
  links: { label: string; url: string }[];
  media: { src: string; alt: string; kind: 'image' | 'video' | 'webgl' }[];
  featured?: boolean;
};
```

---

## 13. What I deliberately avoided

- Cream background with a serif display face and terracotta accent. A common AI-design look.
- Near-black with acid green or vermilion. Same problem.
- A stats row with big numbers and small labels. Nothing here is a number-first story.
- A card grid with identical rounded corners and soft shadows.
- Numbered markers (01, 02, 03). Nothing on the site is a sequence.
- Tracked all-caps eyebrows above headings.
- Gradient blobs and glow.
- Arrows on buttons and links.
- Monospace labels. The deck uses them; the site doesn't need them.

---

## 14. Open questions for the owner

1. **Name on the site.** "Dzaki Adani" in the nav and hero, and "Muhammad Dzaki Adani" on About? Or the full name everywhere?
2. **Hero line.** Option A, option B, or your own?
3. **Client names and restrictions.** May I name Kuark, Senalapan, GIZ, and Petrokimia publicly? Are Petro 360 and GIZ Solar Panel VR restricted, and is the GIZ preview cleared?
4. **Links.** Send the URLs behind the "Access here" links, and confirm the bit.ly links still work.
5. **Contact and language.** Which email, Upwork profile, and LinkedIn go on the site? Do you want your city shown? English only, or add Bahasa Indonesia?
6. **Certificates.** List as text (proposed) or show the certificate images?
