# DESIGN.md: Muhammad Dzaki Adani portfolio

Status: draft v0.2, content updated from Resume.pdf.
Read this before writing any UI. Treat the tokens and rules here as fixed until the owner changes them.

Changes from v0.1 (content only):

- §1 rebuilt from the resume: dated experience, education, tools, and updated recognition. It now includes game design work, not only programming.
- §10 About intro and "What I take on" updated.
- §11 inventory: added Goddess Summoner and the Zepeto game. Memories role corrected to rework and maintenance, status set to live. Little Muslim Heroes set to wip. Petal Pals corrected to Script Smelter Studio's IP. A Notes column shows where each row came from.
- §14 open questions updated.

Layout, color, type, motion, media, quality, Svelte notes, and the avoid list are unchanged from v0.1.

---

## 1. Context

### Who he is

Muhammad Dzaki Adani, shown as Dzaki Adani, is a Unity game developer based in Surabaya, Indonesia. He has been building games since 2020, starting as a Unity intern and later working as a game programmer at studios and as a freelancer. Whether the location appears on the site is an open question (§14).

### What he works on

- Educational games in Unity 2D, Construct, and Phaser (resume)
- Browser and WebGL builds, with Unity WebGL optimization (resume)
- Multiplayer games with Photon Fusion, including a Zepeto game (resume)
- Casual and hypercasual mobile games with AdMob, Unity Ads, and in-app purchases (resume and deck)
- Game mechanics, game flow, and UI/UX design, not only code (resume)
- Backend integration with REST APIs (resume)
- AR with Unity AR Foundation, ARCore, and Vuforia, VR training, and 360 tours with Mapbox (deck only, not on the resume; see §14)

On client work he is often the programmer, but the resume shows he also designs mechanics, game flow, and features such as gacha and evolution systems.

### Who visits

1. Freelance clients (Upwork and referrals) who need an educational, AR, or WebGL build and want proof quickly.
2. Studios and recruiters hiring junior to mid-level Unity developers.
3. Training and education buyers (institutions, companies) who want AR or VR content.

### Primary job

Show that he has shipped working Unity builds in these areas. A visitor should be able to play one within two clicks.

### Experience (from the resume, newest first)

- **Freelance Web Game Developer, Edufic.** Sept 2025 to present, Surabaya. Developing Little Muslim Heroes, a gamified web platform about the journey of the Prophet Muhammad. Part-time coding tutor for elementary students using Scratch.
- **Freelance Game Developer, Upwork and others.** Dates: TODO(owner). Far From Shore, from proof of concept to demo. Mining mini-game for the idle game Goddess Summoner: Katsi Idle. Proof of concept for 3D character customization with UMA 2.
- **Unity Programmer, Script Smelter Studio.** Apr 2025 to Sept 2025, remote. Petal Pals, a desktop companion monster-collection game, the studio's own IP. Feature updates and bug fixes during playtests. Helped design features such as gacha and evolution.
- **Game Programmer, Shireishi Production.** Nov 2023 to Apr 2024, Malang. Fast prototypes for the studio's B2B services. Several game genres in Unity. Worked with game designers and artists.
- **Game Programmer, Agate International.** June 2022 to Nov 2023, Bandung. Researched Photon Fusion and wrote internal documentation. Reworked and maintained Memories: My Story My Choices with Majamojo, including the UI rework with the UI/UX designer and bug fixes from QC reports. Built a multiplayer 3D game for Zepeto in Unity using TypeScript.
- **Game Developer (freelance), Coding Collective.** Sept 2023 to Oct 2023, remote. A 3D interactive web project and a 2D interactive hot-pot game for B2B clients.
- **Game Developer, Falkana Studio.** Aug 2021 to July 2022, Surabaya. A 2D interactive educational game for learning-course clients. Designed mechanics, game flow, and UI/UX. Integrated REST APIs into Unity.
- **Unity Developer Intern, TicTech Studio.** Jan 2020 to Feb 2020, Surabaya. Interactive AR app, game-world layout in Unity, a B2B AR/VR app, and a social media filter.

### Education

B.Sc. in Applied Computer Science (S.Tr.Kom.), Politeknik Elektronika Negeri Surabaya (PENS), 2016 to 2021.

### Tools (resume)

- Languages: C#, JavaScript, TypeScript, Dart, Python, HTML5
- Engines and frameworks: Unity, Phaser, Construct, Three.js
- Services: Photon Fusion, AdMob, Unity Ads, Firebase, ARCore, AR Foundation
- Data and tools: Git, PostgreSQL, SQLite, Notion, Jira, Figma
- Other: Unity WebGL optimization, Unity DOTS, ScriptableObject data structures

### Recognition to surface

- GameJam+ Indonesia 23/24 (resume: 2023): Best Pitch nominee, for Purring Post & Delivery
- Chief of Tabletop Community (resume; details TODO(owner))
- MAGE 2017: finalist, student Game Dev Competition
- FTIf GameDeff 2017: the resume says "finalist," the certificate says top 20 (§14)
- Penerima Pendanaan Program Kewirausahaan Mahasiswa Vokasi (PKMV) 2020, for Sepay Games (resume and certificate)
- Deck only, not on the resume: Masterclass for Game Developers: Game Design, Ministry of Tourism and Creative Economy (Aug 2020); Gameloft Indonesia workshop on producership and project management (Oct 2016); trainer at Agate Academy (§14)

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

**About.** One serif intro paragraph. Then experience (company, role, dates), a "What I take on" list, education, and the recognition list in reverse date order. An optional 1:1 portrait, about 320px, sits beside the intro. No photo grid.

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

**Voice:** plain, first person, specific. Use the work's own vocabulary: scenario code, asset integration, scene mapping, marker setup, gameplay flow, mechanics.

**Avoid:** "passionate," "innovative," "immersive," "cutting-edge," "seamless," "unlock," and any sentence that could appear on a stranger's portfolio.

**Headings:** sentence case.

**Buttons** say what happens: "See the work," "Email me," "Play demo," "Open on Google Play."

**Hero options:**

- A: "I build educational games, AR and WebGL projects in Unity."
- B: "Unity developer for learning games, AR training, and browser builds."

**Support line:** "Shipped apps, client builds, and game jam projects. Each one links to a build or a preview where the client allows it."

**About intro (draft v0.2):** "I'm a Unity developer, and I've been building games since 2020. Most of my work is educational games, browser builds, and multiplayer, for studios, clients, and my own projects. On client projects I write the gameplay and scenario code, and I design mechanics and game flow when a brief needs it."

**What I take on (draft v0.2, confirm before publishing):**

- Educational games in Unity 2D, Construct, and Phaser, including browser builds
- WebGL builds with Unity WebGL optimization, playable in a browser
- Multiplayer games with Photon Fusion
- Casual and hypercasual mobile games with AdMob, Unity Ads, and in-app purchases
- Mechanics, game flow, and UI/UX design, plus the gameplay code
- REST API integration into Unity
- AR apps with Unity AR Foundation, ARCore, and Vuforia (deck only; confirm)
- VR training and 360 tours with Mapbox (deck only; confirm)

---

## 11. Content

**Status values:**

- `live`: playable or downloadable now
- `demo`: playable in browser, may be partial
- `preview`: preview link only
- `restricted`: client work, no build shown
- `wip`: in progress
- `tba`: in development, nothing public yet

**Featured on home:** AR Magazine (AR), Math-Adventure (EdTech), and Far From Shore (WebGL). Together they cover the three focus areas. Double-check Math-Adventure, because it may be the Falkana game (§14).

**Inventory.** The Notes column shows the source of each row. "Deck only" means the resume doesn't mention it, so the owner should confirm it. Rows marked "confirm" in the Link column were shown as "Access here" hyperlinks in the deck, and the URLs were not readable. Rows marked "resume link" have a link on the resume, but the URL was not readable either.

| Project | Area | Tech | Status | Link | Notes |
|---|---|---|---|---|---|
| AR Magazine (Klikuark!) | AR, education | Unity, Vuforia | live | Google Play, App Store, bit.ly/Klikuark | Deck only. Built with TICTECH Studio for PT Kuark International. |
| SENALAPAN Mold Cleaner Instructions | AR, industrial training | Unity, markerless AR | live | bit.ly/2NJUJzi | Deck only. For PT Senalapan Perkasa. |
| AR Name Card | AR | Unity, AR marker | live | bit.ly/AR_NameCard | Deck only. |
| 3D House AR Showcase | AR, property | Unity AR Foundation | live | bit.ly/3fDQ7EW | Deck only. Test project for PT Bersama Kreatif Teknologi. |
| 3D AR COVID-19 Education | AR, education | Unity AR Foundation | live | bit.ly/3f8WVM1 | Deck only. Same employer as above. |
| 3D AR Tarpaulin Pond, Lobster Cultivation | AR | Unity AR Foundation | live | bit.ly/3bIQEEA | Deck only. Same employer as above. |
| GIZ Solar Panel VR | VR training | Unity VR | preview | bit.ly/37xRt0L | Deck only. Client work. |
| Petro 360 Tour | 360 tour, maps | Unity, Mapbox, REST API | restricted | none | Deck only. Client work. |
| Math-Adventure | EdTech | Unity 2D, Addressables, IAP | live | confirm | Deck: client project. May be the Falkana game (§14). |
| Explore Math | EdTech | Unity 2D, drag and drop | live | confirm | Deck: freelance. |
| Chem | EdTech | Unity 2D | live | confirm | Deck: freelance. |
| Simple Mini Quiz Game | EdTech, quiz | Construct 2, JSON | live | confirm | Deck only. |
| Guess Color Quiz | EdTech, trivia | Unity 2D, AdMob | live | confirm | Deck only. |
| Wonder Word | EdTech, word game | Unity 2D, AdMob | live | confirm | Deck only. |
| Forestdom | Trivia | Unity 2D, AdMob | live | confirm | Deck only. |
| Memories: My Story My Choices | Visual novel | Unity 2D, API integration | live | resume link | Resume: Agate International, 2022 to 2023. Reworked UI with the UI/UX designer and maintained the game for Majamojo. Status set to live based on maintenance; verify. |
| Far From Shore | Narrative survival | Unity, WebGL | demo | resume link | Resume: freelance, from proof of concept to demo. |
| Little Muslim Heroes, Edufic | Islamic EdTech | Unity WebGL | wip | resume link | Resume: Edufic, Sept 2025 to present, web platform. Status changed from tba. |
| Purring Post & Delivery | Management, narrative | Unity 2D | wip | resume link | GameJam+ Best Pitch nominee (2023). Deck: in progress. |
| Petal Pals | Desktop companion, monster collection | Unity 2D | wip | resume link | Resume: Script Smelter Studio's IP, not freelance. In playtests. Deck said TBA. |
| Goddess Summoner: Katsi Idle, mining mini-game | Idle game mini-game | TODO(owner) | confirm | resume link | Resume: designed and built the mini-game, Upwork freelance. Added from resume. |
| Zepeto multiplayer 3D game | Multiplayer | Unity, TypeScript | confirm | resume link | Resume: Agate International, 2022 to 2023. Added from resume. |
| Juggler (Endless 3D) | Casual 3D | Unity 3D | live | confirm | Deck only. |
| Buto Beat | Music shooter | Unity 2D | live | confirm | Deck only. |
| Paradixe City | Local co-op shooter | Construct 2 | live | confirm | Deck only. MAGE 2017 finalist. |
| FlappyRabbit | Hypercasual | Unity 2D, IAP, AdMob | confirm | confirm | Deck only. Still unconfirmed. |
| G-Escape | Action shooter, client work | Unity 2D, IAP | confirm | confirm | Deck only. Still unconfirmed. |
| Love Wars | Tabletop card game | Not digital | rulebook link | confirm | Deck only. Resume lists Chief of Tabletop Community. |

**Client work without a public build** (experience only, not in the inventory):

- Coding Collective: a 3D interactive web project and a 2D hot-pot game for B2B clients (2023)
- Falkana Studio: a 2D educational game for a learning-course client (2021 to 2022), unless it is one of the rows above (§14)
- Shireishi Production: fast prototypes for B2B services (2023 to 2024)
- UMA 2 character customization proof of concept (Upwork, dates TODO(owner))
- Scratch coding tutoring for elementary students (Edufic, 2025)

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

1. **Name spelling.** The resume header says "Dzaki Adani," the deck says "Muhammad Dzaki Adani," and the resume email is dzaky.adani@gmail.com. Which spelling goes on the site? The email stays as written.
2. **Contact and location.** Use dzaky.adani@gmail.com as the public email? Send the LinkedIn and Upwork URLs, since they aren't in the PDF text. Show "Surabaya, Indonesia" on the site?
3. **Hero line.** Option A, option B, or your own?
4. **Work missing from the resume.** The resume doesn't list PT Bersama Kreatif Teknologi, Petrokimia, GIZ, Senalapan, PT Kuark, or any VR or 360-tour work. Did that come from TicTech freelance work after the 2020 internship, or from another employer? Send dates and I'll add the entries. Until then they stay marked "deck only."
5. **Client names.** May the site name Kuark, Senalapan, GIZ, Petrokimia, Majamojo, Falkana, Coding Collective, Script Smelter, and TicTech? Which projects are restricted?
6. **Math-Adventure.** Is it the Falkana educational game, or is that Explore Math or Chem?
7. **Links.** Send the URLs for the "resume link" rows. Still missing: FlappyRabbit, G-Escape, and Love Wars. Confirm that the Memories and Far From Shore links still work.
8. **Recognition and dates.** Keep the deck-only certificates (Gameloft 2016, Kemenparekraf 2020) and the Agate trainer line? For FTIf 2017, use "finalist" or "top 20"? What dates did the Upwork freelance work run?
9. **Language.** English only, or add Bahasa Indonesia?