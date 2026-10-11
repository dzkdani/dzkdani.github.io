# DESIGN.md: Muhammad Dzaki Adani portfolio

Status: draft v0.3, dark theme.
Read this before writing any UI. Treat the tokens and rules here as fixed until the owner changes them.

Changes from v0.2 (dark theme):

- §2 and §3: the page background is pitch black and the palette is re-derived around it. The plum band, pink, and magenta carry over. Dividers are light on dark.
- Frames keep each image's native aspect ratio; the 9:16-only rule is retired.
- §9: focus ring is pink on all dark surfaces.
- §13: the near-black avoid note is reworded.

Everything else is unchanged from v0.2.

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

- **Freelance Web Game Developer, Edufic.** Sept 2025 to Aug 2026, Surabaya. Developing Little Muslim Heroes, a gamified web platform about the journey of the Prophet Muhammad. Part-time coding tutor for elementary students using Scratch.
- **Freelance Game Developer, Upwork and others.** Dates: ongoing. Far From Shore, from proof of concept to demo. Mining mini-game for the idle game Goddess Summoner: Katsi Idle. Proof of concept for 3D character customization with UMA 2.
- **Unity Programmer, Script Smelter Studio.** Apr 2025 to Sept 2025, remote. Petal Pals, a desktop companion monster-collection game, the studio's own IP. Feature updates and bug fixes during playtests. Helped design features such as gacha and evolution.
- **Game Programmer, Shireishi Production.** Nov 2023 to Apr 2024, Malang. Fast prototypes for the studio's B2B services. Several game genres in Unity. Worked with game designers and artists.
- **Game Programmer, Agate International.** June 2022 to Nov 2023, Bandung. Researched Photon Fusion and wrote internal documentation. Reworked and maintained Memories: My Story My Choices with Majamojo, including the UI rework with the UI/UX designer and bug fixes from QC reports. Built a multiplayer 3D game for Zepeto in Unity using TypeScript.
- **Game Developer (freelance), Coding Collective.** Sept 2023 to Oct 2023, remote. A 3D interactive web project and a 2D interactive hot-pot game for B2B clients.
- **Game Developer, Falkana Studio.** Aug 2021 to July 2022, Surabaya. Math-Adventure, a 2D interactive educational game for learning-course clients. Designed mechanics, game flow, and UI/UX. Integrated REST APIs into Unity.
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
- FTIf GameDeff 2017: top 20 (confirmed)
- Penerima Pendanaan Program Kewirausahaan Mahasiswa Vokasi (PKMV) 2020, for Sepay Games (resume and certificate)
- Deck only, not on the resume: Masterclass for Game Developers: Game Design, Ministry of Tourism and Creative Economy (Aug 2020); Gameloft Indonesia workshop on producership and project management (Oct 2016); trainer at Agate Academy (§14)

---

## 2. Concept

**The site should look like the deck he already uses.** The plum band, the black page, and the magenta tab carry over, so his Upwork profile, his deck, and his site read as one person. Nothing else from the deck template comes along: no glow, no slide chrome.

**A black page.** The page is pitch black; the plum band, the paper text, and the pink-magenta accents carry the light. Most of his work is portrait, so the work is shown in frames, and each frame keeps its image's own aspect ratio.

**One bold move.** The hero band has a shallow curved bottom edge, the same arc as the deck's title band. Everything else stays quiet. Spend the boldness there and nowhere else.

---

## 3. Color

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--black` | #000000 | Page background | Base for light text |
| `--night` | #1C1229 | Hero band, footer | Base for light text |
| `--paper` | #F4F2F7 | Text and light elements on dark | About 17:1 on black |
| `--ink` | #15101C | Raised fills: frames, thumbnails | Paper text sits on it |
| `--muted` | #9A93A5 | Captions, metadata on dark | About 7:1 on black |
| `--pink` | #E8457F | Links, active nav tab, focus ring on dark | 5.6:1 on black |
| `--magenta` | #B3175E | Button fills, bars, underlines on dark | 3.2:1 on black; paper on magenta is 5.9:1 |

Rules:

- No gradients. The deck's radial glow is a slide-template effect and stays in the deck.
- Pink is the text accent on dark surfaces. Magenta is never body text: it works as fills, bars, and underlines only, with paper text on a magenta fill.
- Dividers are 1px. On every dark surface: `rgba(244, 242, 247, 0.16)`.

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
| Dzaki Adani                        About   Work   Experience |
|                                                              |
|  I build educational games, AR and VR apps,                  |
|  and WebGL builds for studios and freelance clients.         |
|                                                              |
|  Shipped apps, client builds,                                |
|  and game jam projects.                                      |
|                                                              |
|  [See the work]   [Email me]                                 |
+--------------------------------------------------------------+
   Bottom edge of the plum band is a shallow curve.
```

**Work index, desktop**

```
Work     All   EdTech   AR   VR   WebGL   Games
--------------------------------------------------------
+------------+  +------------+  +------------+
|  16:10     |  |  16:10     |  |  16:10     |
|  cover     |  |  cover     |  |  cover     |
+------------+  +------------+  +------------+
AR Magazine     Math-Adventure  Far From Shore
AR      Live    EdTech  Live    WebGL   Demo
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

**Nav.** Wordmark "Dzaki Adani" on the left. Links: About, Work, Experience. The active section is marked by a 3px × 18px magenta bar to the left of its link. This is the deck's tab, reused as a location marker. The three links fit on one row on mobile, so there is no hamburger.

**Hero.** Full width on `--night`. Bottom edge curved, about 40px deep at the center. Draw it with an SVG or `clip-path`, not an image. Name as the h1 at `--text-hero`, two lines at most. One line of support text. Two actions: "See the work" (pink fill, night text) and "Email me" (outlined). Text only: no media in the hero.

**Work index.** Filters are plain buttons in one row, with `aria-pressed`. The active filter gets a 2px magenta underline. Results are cards in a fluid grid: one column on phones, two from 640px, three or more from 960px. Each card is one link: a 16:10 cover with the screenshot cropped to fill it, the title as h3, then area and status as plain text. Filter state lives in the URL (`/work?area=ar`) so links can be shared.

**Project page.** Route `/work/[slug]`. Left column: title, one-sentence summary, client name only if the client allows it, "My role" (3 to 5 short bullets), tech list, and links. Right column: frames in a two-up grid on desktop and one column on mobile, each at its image's native aspect ratio. Show a cover image and a "Play demo" button, and load the iframe only after the click. Restricted projects keep the same layout with role text and a plain note: "Client project. The build can't be shown under the client's agreement. Details on request."

**About.** One serif intro paragraph. Then a "What I take on" list, the recognition list in reverse date order, and the certificate gallery. An optional 1:1 portrait, about 320px, sits beside the intro. No photo grid.

**Experience.** Route `/experience`. A plain timeline: roles grouped under band headings by start year ("Ongoing" for continuing freelance work), each entry with role and company, years and location, and short bullets. Education closes the page as the last band. A 1px divider tops each band.

**Contact.** No form in v1. Email as a `mailto:` link, plus the Upwork profile and LinkedIn, all as icon links in the footer.

**Footer.** `--night` background. Name and year on the left; icon links on the right: email (mailto), LinkedIn, and Upwork. Nothing else.

---

## 7. Motion

Motion appears in three places only.

1. **Load moment (once).** The hero band fades in over 600ms. The name rises 16px and fades in over 420ms, starting at 120ms. Use `--ease-out` and CSS keyframes with `animation-fill-mode: both`. Svelte's `in:` transitions do not run on first render by default, so keyframes are simpler here.
2. **User-triggered UI (Svelte transitions).** Filter results fade over 180ms. The demo player opens with a height and opacity transition over 420ms. Nothing else animates on click.
3. **Hover, work cards.** The title gets a magenta underline that draws left to right over 180ms. Cover images stay still.

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

- **Thumbnails:** 540px wide at the source image's ratio, WebP or AVIF, under 120KB each.
- **Detail frames:** 1080px wide at most, under 300KB each.
- **AR and gameplay clips:** muted, looping, `playsinline`. H.264 MP4 plus WebM, under 2MB each, with a poster image.
- **WebGL:** iframe with `loading="lazy"`, created only on click. Keep the native aspect ratio.
- **Alt text** names the project and what is on screen, for example: "AR Magazine: a comic page with an animated carbon cycle explanation overlaid on a table."
- **Client-restricted projects** get a neutral placeholder frame with the project name and area. No client UI screenshots.

---

## 9. Quality floor

- Text meets WCAG AA: 4.5:1 for normal text, 3:1 for large text.
- Focus ring: 2px outline, 3px offset, pink on dark surfaces.
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

**Hero line (owner, from the resume and deck):** "I build educational games, AR and VR apps, and WebGL builds for studios and freelance clients."

**Support line:** "Shipped apps, client builds, and game jam projects. Each one links to a build or a preview where the client allows it."

**About intro (draft v0.2):** "I'm a Unity developer, and I've been building games since 2020. Most of my work is educational games, browser builds, and multiplayer, for studios, clients, and my own projects. On client projects I write the gameplay and scenario code, and I design mechanics and game flow when a brief needs it."

**What I take on:**

- Educational games in Unity 2D, Construct, and Phaser, including browser builds
- WebGL builds with Unity WebGL optimization, playable in a browser
- Multiplayer games with Photon Fusion
- Casual and hypercasual mobile games with AdMob, Unity Ads, and in-app purchases
- Mechanics, game flow, and UI/UX design, plus the gameplay code
- REST API integration into Unity
- AR apps with Unity AR Foundation, ARCore, and Vuforia
- VR training builds in Unity

---

## 11. Content

**Status values:**

- `live`: released; a build or listing may not still be public
- `demo`: playable in browser, may be partial
- `preview`: preview link only
- `restricted`: client work, no build shown
- `wip`: in progress
- `tba`: in development, nothing public yet

**Featured on home:** Math-Adventure (EdTech), Petal Pals (Games), and AR Magazine (AR).

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
| Math-Adventure | EdTech | Unity 2D, Addressables, IAP | live | confirm | Deck: client project; the Falkana Studio educational game. |
| Explore Math | EdTech | Unity 2D, drag and drop | live | confirm | Deck: freelance. |
| Chem | EdTech | Unity 2D | live | confirm | Deck: freelance. |
| Simple Mini Quiz Game | EdTech, quiz | Construct 2, JSON | live | confirm | Deck only. |
| Guess Color Quiz | EdTech, trivia | Unity 2D, AdMob | live | confirm | Deck only. |
| Wonder Word | EdTech, word game | Unity 2D, AdMob | live | confirm | Deck only. |
| Forestdom | Trivia | Unity 2D, AdMob | live | confirm | Deck only. |
| Memories: My Story My Choices | Visual novel | Unity 2D, API integration | live | resume link | Resume: Agate International, 2022 to 2023. Reworked UI with the UI/UX designer and maintained the game for Majamojo. Status set to live based on maintenance; verify. |
| Far From Shore | Narrative survival | Unity, WebGL | demo | resume link | Resume: freelance, from proof of concept to demo. |
| Little Muslim Heroes, Edufic | Islamic EdTech | Unity WebGL | wip | resume link | Resume: Edufic, Sept 2025 to Aug 2026, web platform. Status changed from tba. |
| Purring Post & Delivery | Management, narrative | Unity 2D | wip | resume link | GameJam+ Best Pitch nominee (2023). Deck: in progress. |
| Petal Pals | Desktop companion, monster collection | Unity 2D | wip | resume link | Resume: Script Smelter Studio's IP, not freelance. In playtests. Deck said TBA. |
| Goddess Summoner: Katsi Idle, mining mini-game | Idle game mini-game | Unity | live | resume link | Resume: designed and built the mini-game, Upwork freelance. Added from resume. |
| Zepeto multiplayer 3D game | Multiplayer | Unity, TypeScript | live | resume link | Resume: Agate International, 2022 to 2023. Cover from the demo video thumbnail. Added from resume. |
| Juggler (Endless 3D) | Casual 3D | Unity 3D | live | confirm | Deck only. |
| Buto Beat | Music shooter | Unity 2D | live | confirm | Deck only. |
| Paradixe City | Local co-op shooter | Construct 2 | live | confirm | Deck only. MAGE 2017 finalist. |
| FlappyRabbit | Hypercasual | Unity 2D, IAP, AdMob | live | confirm | Deck only. Released; the Google Play listing is gone. |
| G-Escape | Action shooter, client work | Unity 2D, IAP | live | confirm | Deck only. Released; the Google Play listing is gone. |
| Love Wars | Tabletop card game | Not digital | wip | rulebook link | Deck only. Resume lists Chief of Tabletop Community. |

**Client work without a public build** (experience only, not in the inventory):

- Coding Collective: a 3D interactive web project and a 2D hot-pot game for B2B clients (2023)
- Falkana Studio: Math-Adventure, a 2D educational game for a learning-course client (2021 to 2022)
- Shireishi Production: fast prototypes for B2B services (2023 to 2024)
- UMA 2 character customization proof of concept (Upwork, ongoing)
- Scratch coding tutoring for elementary students (Edufic, 2025)

---

## 12. Svelte notes

- SvelteKit with `adapter-static`. Prerender every route.
- Use the repo `username.github.io` so the site sits at the root. If it's a project repo, set `paths.base`.
- Routes: `/`, `/work`, `/work/[slug]`, `/experience`, `/about`. Contact lives in the footer on every page.
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
};
```

---

## 13. What I deliberately avoided

- Cream background with a serif display face and terracotta accent. A common AI-design look.
- Near-black with cold neon accents (acid green, electric cyan). The black here stays plum and pink.
- A stats row with big numbers and small labels. Nothing here is a number-first story.
- Soft shadows and hover lifts on cards. The work grid uses the site's flat frames and type instead of generic card chrome.
- Numbered markers (01, 02, 03). Nothing on the site is a sequence.
- Tracked all-caps eyebrows above headings.
- Gradient blobs and glow.
- Arrows on buttons and links.
- Monospace labels. The deck uses them; the site doesn't need them.

---

## 14. Open questions for the owner

1. **Name spelling.** Resolved: Dzaki Adani everywhere on the site. The email stays dzaky.adani@gmail.com.
2. **Contact and location.** Resolved: dzaky.adani@gmail.com is public (the footer and the home "Email me" button). The location stays off the site. (LinkedIn and Upwork are wired.)
3. **Hero line.** Resolved: replaced with the owner's line, summarized from the resume and deck: "I build educational games, AR and VR apps, and WebGL builds for studios and freelance clients."
4. **Work missing from the resume.** Resolved: the deck-only projects are freelance work, not another employer. Their lines sit under the ongoing freelance entry on About; no dates were given, so none are shown. The deck's PT Solusi Inovasi Mandiri internship (Jan 2018, one month) is added to the Experience page.
5. **Client names.** Resolved: no projects are restricted. The About freelance entry names PT Kuark International, PT Senalapan Perkasa, PT Bersama Kreatif Teknologi, and GIZ.
6. **Math-Adventure.** Resolved: Math-Adventure is the Falkana Studio game.
7. **Links.** The deck supplied the missing URLs. The Google Play listings for FlappyRabbit, WonderWord, Guess Color Quiz, Explore Math, Juggler, G-Escape, and Memories return Not Found (checked October 2026), so their link buttons are stripped, and no recovery links exist, so they stay stripped. Goddess Summoner's developer-page button stays as the only link for that mini-game. Re-add any listing link once it is live again.
8. **Recognition and dates.** Resolved: the Gameloft 2016, Kemenparekraf 2020, and Trainer at Agate Academy lines are confirmed and shown on About. FTIf 2017 is "top 20"; the Upwork freelance work is ongoing.
9. **Language.** Resolved: English only.