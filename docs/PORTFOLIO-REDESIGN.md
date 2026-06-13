# Portfolio Redesign — Design & Architecture Document

> **Author:** Yasir Rahman  
> **Status:** Planning  
> **Last updated:** June 2025  
> **Scope:** Complete redesign of [my-portfolio](https://github.com/ChyYasir/my-portfolio) — new visual system, new structure, new navigation, rebuilt from the ground up

---

## 0. Primary Purpose

This is not a reskin. Every page, component, color, type choice, and nav pattern is being **redesigned entirely** so that:

1. **Visitors are hooked immediately** — the first screen communicates who Yasir is, why he matters, and invites exploration.
2. **Every piece of information is easy to find** — no hunting through expandable cards, hidden tabs, or decorative noise.
3. **The site feels minimal and elegant** — premium craft (typography, spacing, motion) creates the “wow,” not gimmicks.

If a design choice does not serve **hook**, **findability**, or **clarity**, it does not ship.

---

## 1. Vision

Transform the portfolio from a **hacker / matrix terminal aesthetic** into a **minimal, editorial experience** that feels calm, confident, and memorable. Visitors should leave with a clear picture of who Yasir is — **software & data engineer, adjunct lecturer, published researcher**, and competitive programmer — and a subtle “wow” from craft: typography, motion, and information hierarchy — not noise.

### Design north star

| Principle | Meaning |
|-----------|---------|
| **Minimal** | Every element earns its place. No decorative clutter. |
| **Elegant** | Refined typography, restrained color, generous whitespace. |
| **Informative** | Career story is scannable in 30 seconds, deep-diveable in 5 minutes. |
| **Findable** | Any visitor can reach the information they need in ≤2 clicks, with zero guesswork. |
| **Hooked** | The first 5 seconds and first scroll create curiosity and confidence — visitors *want* to keep reading. |
| **Memorable** | One or two signature moments per page (not animation overload). |
| **Authentic** | Reflects a serious engineer who teaches and publishes — credible, not flashy. |

### What we are moving away from

- Matrix rain, network graphs, glitch text, terminal chrome
- Monospace-as-default typography
- Green-on-black cyberpunk palette
- “PROJECT LOGS” / hacker copy tone
- Dense expandable cards with competing accent colors (green, purple, cyan, yellow)

### What we are moving toward

- **Editorial minimalism** — think high-end personal site, not dev tool UI
- **Warm neutrals + one accent** — depth without rainbow borders
- **Triple narrative** — engineering, teaching, and research as equal pillars
- **Instant identity** — all three roles visible above the fold on the home page
- **Frictionless navigation** — persistent nav, clear labels, ≤2 clicks to any major content
- **Visitor hook** — hero + pillar cards + snapshot create immediate impact on landing
- **Living portfolio** — an Updates section that shows momentum

---

## 2. Color Palette

A palette built for readability, contrast, and a quiet premium feel. Designed for **dark-first** with an optional light mode — dark feels more “wow” for a technical portfolio; light supports accessibility and print.

### 2.1 Core tokens

#### Dark mode (primary)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-base` | `#0C0C0E` | Page background — near-black with a cool undertone |
| `--bg-elevated` | `#141416` | Cards, nav, modals |
| `--bg-subtle` | `#1C1C1F` | Hover states, inset areas |
| `--border-default` | `#2A2A2E` | Dividers, card borders |
| `--border-muted` | `#1F1F23` | Hairline separators |
| `--text-primary` | `#F4F4F5` | Headlines, body |
| `--text-secondary` | `#A1A1AA` | Meta, captions, dates |
| `--text-tertiary` | `#71717A` | Placeholders, disabled |
| `--accent` | `#C9A962` | Links, focus rings, key highlights — warm champagne gold |
| `--accent-muted` | `#C9A96233` | Accent backgrounds at 20% opacity |
| `--accent-hover` | `#D4B872` | Interactive accent states |
| `--success` | `#6EE7B7` | Optional — achievements, positive metrics |
| `--surface-teaching` | `#1A1814` | Subtle warm tint for teaching section (optional) |
| `--surface-research` | `#121418` | Subtle cool tint for research section (optional) |

#### Light mode (secondary)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-base` | `#FAFAF9` | Warm off-white |
| `--bg-elevated` | `#FFFFFF` | Cards |
| `--bg-subtle` | `#F5F5F4` | Hover |
| `--border-default` | `#E7E5E4` | Borders |
| `--text-primary` | `#1C1917` | Body text |
| `--text-secondary` | `#57534E` | Meta |
| `--accent` | `#92700C` | Darker gold for contrast on light bg |

### 2.2 Semantic mapping

```
Background hierarchy:  base → elevated → subtle
Text hierarchy:        primary → secondary → tertiary
Interactive:           accent → accent-hover
Section accents:       engineering (neutral) | teaching (warm surface) | research (cool surface) | updates (accent dot)
```

### 2.3 Rules

1. **Accent budget:** Use gold on at most ~5% of any viewport — CTAs, active nav, timeline dots, pull quotes.
2. **No gradient borders** on cards; use 1px `--border-default` and elevation via background shift.
3. **Photography & achievement images** sit in frames with `--border-default`; no purple/green glow.
4. **Selection highlight:** `accent-muted` background, `--text-primary` text.

---

## 3. Typography

Typography carries most of the “elegant” feeling. Pair a **distinctive serif display** with a **clean sans body**.

### 3.1 Font stack

| Role | Font | Fallback | Weights | Source |
|------|------|----------|---------|--------|
| **Display** | Instrument Serif | Georgia, serif | 400, 400 italic | Google Fonts |
| **Body** | Geist Sans *(or Inter)* | system-ui, sans-serif | 400, 500, 600 | Google Fonts / Vercel |
| **Mono** *(code, tags only)* | Geist Mono *(or JetBrains Mono)* | monospace | 400, 500 | Google Fonts |

> **Why Instrument Serif:** Editorial, confident, memorable without being decorative. Used sparingly for name and section titles.

### 3.2 Type scale (mobile → desktop)

| Token | Mobile | Desktop | Line height | Use |
|-------|--------|---------|-------------|-----|
| `display-xl` | 40px | 72px | 1.05 | Hero name |
| `display-lg` | 32px | 48px | 1.1 | Page titles |
| `heading-lg` | 24px | 32px | 1.2 | Section headings |
| `heading-md` | 20px | 24px | 1.3 | Card titles, job roles |
| `body-lg` | 18px | 20px | 1.6 | Lead paragraphs |
| `body-md` | 16px | 17px | 1.65 | Default body |
| `body-sm` | 14px | 14px | 1.5 | Meta, dates, tags |
| `label` | 12px | 12px | 1.4 | Overlines, nav labels (uppercase, +0.08em tracking) |

### 3.3 Typography rules

- **Hero name:** Instrument Serif, `display-xl`, `--text-primary`
- **Section overlines:** sans, `label`, `--text-tertiary`, e.g. `ENGINEERING`
- **Body:** sans, max width **65ch** for readability
- **Mono:** only for tech tags, code snippets, and optional “status” badges — never for paragraphs
- **No all-caps shouting** except small overlines (12px tracked labels)

---

## 4. Design System

### 4.1 Spacing (8px grid)

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-24` | 96px |
| `space-32` | 128px |

**Section vertical rhythm:** `space-24` between major sections on desktop, `space-16` on mobile.

**Content max-width:**

| Context | Max width |
|---------|-----------|
| Reading column | 720px |
| Standard content | 960px |
| Wide (projects grid) | 1200px |
| Full bleed | 1440px (with horizontal padding) |

### 4.2 Border radius

| Token | Value | Use |
|-------|-------|-----|
| `radius-sm` | 6px | Tags, small buttons |
| `radius-md` | 12px | Cards, inputs |
| `radius-lg` | 16px | Feature cards, images |
| `radius-full` | 9999px | Pills, avatars |

### 4.3 Elevation & surfaces

No drop shadows in dark mode by default. Depth via:

```css
/* Card default */
background: var(--bg-elevated);
border: 1px solid var(--border-default);

/* Card hover */
background: var(--bg-subtle);
border-color: var(--border-default); /* slightly brighter via opacity if needed */
```

Optional **very subtle** shadow on light mode only: `0 1px 3px rgba(0,0,0,0.06)`.

### 4.4 Component library

| Component | Behavior |
|-----------|----------|
| **Button / Primary** | Gold fill, dark text, `radius-sm`, no glow |
| **Button / Ghost** | Transparent, `--text-secondary`, underline on hover |
| **Tag** | Mono, `body-sm`, `--bg-subtle` bg, `--border-default` border |
| **Nav link** | Sans medium; active = `--accent` underline 2px offset |
| **Mobile nav overlay** | Full-screen, large links, Experience sub-links indented, min 44px tap targets |
| **Footer sitemap** | Repeat all primary nav links + socials on every page |
| **Timeline node** | 8px gold dot + 1px vertical line `--border-default` |
| **Update card** | Date left (mono sm), title + excerpt right; hover lifts bg |
| **Section header** | Overline + serif title + optional one-line description |
| **Image frame** | `radius-lg`, `object-cover`, lazy load, subtle border |
| **Divider** | 1px `--border-muted`, full or inset |
| **Link** | `--accent`, underline offset 3px, no color change on visited |
| **Publication card** | Serif title, author list (self highlighted), journal + year, status badge, optional Q1 pill |
| **Role card** | Overline + role + org + duration; equal width in home pillar grid |
| **Q1 badge** | Small pill: `--accent-muted` bg, `--accent` text, label `Q1 Journal` |
| **Status badge** | `Accepted` / `Published` / `Under review` — mono, `body-sm`, neutral border |

### 4.5 Motion

Restrained, purposeful motion via Framer Motion (already in stack).

| Pattern | Duration | Easing | Use |
|---------|----------|--------|-----|
| Fade up | 400ms | `[0.22, 1, 0.36, 1]` | Section enter on scroll |
| Stagger children | 60ms delay | same | Lists, timeline items |
| Hover lift | 200ms | ease-out | Cards: `translateY(-2px)` |
| Page transition | 300ms | ease | Crossfade between routes |
| Hero text reveal | 600ms | stagger 80ms | Name + tagline on load |

**Avoid:** matrix rain, continuous loops, parallax on every section, glitch effects.

**Signature “wow” moment (home):** Hero name fades in with a soft radial gradient behind the portrait (single static gradient, not animated mesh).

### 4.6 Iconography

- **Lucide React** (already installed) — 1.5px stroke, 20px default, `--text-secondary`
- Accent icons only for external links and key CTAs

---

## 5. Information Architecture

### 5.0 UX goals — hook & findability

Every page must pass two tests before it ships:

| Test | Question | Pass criteria |
|------|----------|---------------|
| **Hook test** | Does this screen make someone want to stay? | Identity, credibility, or visual craft visible within 5 seconds |
| **Findability test** | Can a stranger locate what they need? | Target content reachable in ≤2 clicks from any page |

#### The visitor hook (first 30 seconds)

Hook is not animation overload. It is **clarity + craft + curiosity** in sequence:

| Moment | Timing | What the visitor feels |
|--------|--------|------------------------|
| **Arrival** | 0–3 sec | “I know exactly who this is” — name, two current roles, portrait |
| **Credibility** | 3–10 sec | “This person is legit” — three pillar cards (Engineering · Teaching · Research) |
| **Curiosity** | 10–20 sec | “I want to know more” — snapshot stats, featured project, latest update |
| **Action** | 20–30 sec | Clear next step — View experience, read a project, or check publication |

**Hook devices (use sparingly — one per viewport max):**

- Hero typography reveal (name + roles stagger in)
- Soft radial glow behind portrait (static, not animated)
- Pillar cards fade up on scroll with 60ms stagger
- Gold accent on the single primary CTA per section

**Anti-patterns that kill the hook:**

- Blank or generic hero with no roles listed
- Forcing visitors to expand cards to learn basic facts
- Matrix/cyber noise competing with content
- More than one competing CTA above the fold

#### Findability rules (non-negotiable)

1. **≤2 clicks** from any page to: engineering history, teaching history, publications, projects, achievements, updates, contact/socials.
2. **Persistent top nav** on every page — sticky, always visible, current page clearly indicated.
3. **Obvious labels** — nav items say what they mean (`Experience`, not `About`; `Projects`, not `Work`).
4. **No hidden primary content** — engineering, teaching, and research tabs are visible immediately on `/experience`; no content behind undiscoverable interactions.
5. **Footer sitemap** — repeat all nav links + social/contact links for users who scroll to the bottom.
6. **Page titles** — every page opens with a serif H1 (`Experience`, `Projects`, etc.) so visitors always know where they are.
7. **Deep links work** — `/experience#research`, `/projects#project-slug` must land on the correct section.

#### Visitor intent map

*“I’m visiting because…” → where they go:*

| Visitor intent | Primary destination | Clicks from home |
|----------------|---------------------|------------------|
| Who is Yasir? | Home hero + pillar cards | 0 |
| Can he code / what has he built? | `/projects` or Experience → Engineering | 1 |
| Where does he work? | Home hero or Experience → Engineering | 0–1 |
| Does he teach? | Home pillar card or Experience → Teaching | 0–1 |
| Does he publish research? | Home Research pillar or Experience → Research | 0–1 |
| What’s he done lately? | `/updates` or home latest-update teaser | 0–1 |
| ICPC / competitive programming? | `/achievements` | 1 |
| How do I contact him? | Footer or home contact strip | 0–1 |
| Resume-style career overview? | `/experience` (all three tabs) | 1 |

---

### 5.1 Navigation system

#### Primary nav (desktop)

```
[ YR ]     Home   Experience   Updates   Projects   Achievements     [socials] [theme]
```

| Item | Destination | Why this label |
|------|-------------|----------------|
| **Home** | `/` | Entry point; full identity snapshot |
| **Experience** | `/experience` | Career hub — engineering, teaching, research (tabs inside) |
| **Updates** | `/updates` | Recent milestones; shows the site is alive |
| **Projects** | `/projects` | Built work; what recruiters often want first |
| **Achievements** | `/achievements` | ICPC & contests; separate from research publications |

**Nav behavior:**

- Sticky on scroll with `--bg-elevated/80` backdrop blur
- Active page: gold underline + `--text-primary` (inactive: `--text-secondary`)
- Logo `[YR]` always links home
- Social icons (GitHub, LinkedIn) in nav right cluster — always reachable
- Max **5 nav items** — resist adding more; depth lives inside Experience tabs

#### Experience sub-nav (inside `/experience`)

Visible **immediately** below the page title — not buried:

```
[ Engineering ]    [ Teaching ]    [ Research ]
```

- Sticky on scroll within the page
- Active tab: gold bottom border
- URL hash updates on tab switch (`#engineering`, `#teaching`, `#research`) for shareable links
- Mobile: horizontally scrollable pill row, never a hidden dropdown

#### Mobile nav

- Hamburger opens **full-screen overlay** — not a tiny dropdown
- Large type (24px+), one link per row, generous tap targets (min 44px height)
- Experience sub-sections listed as indented items under Experience:
  - Engineering
  - Teaching
  - Research
- Social links at bottom of overlay
- Close button top-right; tap outside closes

#### Footer (secondary navigation)

Every page footer repeats:

```
Home · Experience · Updates · Projects · Achievements
GitHub · LinkedIn · Email · Google Scholar
© 2025 Yasir Rahman
```

Footer catches visitors who scroll past content and gives a second path to any section.

#### Nav naming decision *(resolved)*

| Option | Verdict |
|--------|---------|
| Separate top-level items: Engineering · Teaching · Research | **No** — clutters nav (7+ items), splits one career story |
| Single **Experience** with in-page tabs | **Yes** — clean nav, deep content inside one hub |
| Work · Teach · Research as nav items | **No** — “Work” is vague; feels fragmented |

Deep links from home role cards: `/experience#engineering`, `/experience#teaching`, `/experience#research`.

---

### 5.2 Site map

```
/                     Home — identity, role pillars, snapshot, featured work, latest update
/experience           Experience hub (in-page tabs)
  ├─ #engineering     Software & data engineering roles & impact
  ├─ #teaching        Adjunct lectureship, mentoring, workshops
  └─ #research        Publications, research interests
/updates              Career updates feed (chronological)
/projects             Project showcase
/achievements         Competitive programming & awards
```

**Navigation (desktop):** Home · Experience · Updates · Projects · Achievements  
**Navigation (mobile):** Full-screen overlay with large links + Experience sub-links  
**Footer:** Full sitemap + social/contact on every page

---

### 5.3 Instant triple-identity pattern *(home page)*

Visitors must understand **engineer + lecturer + researcher** within the first 5 seconds — without clicking anything.

#### Layer 1 — Hero (above the fold)

```
Yasir Rahman

Software Engineer · Bevy Commerce
Adjunct Lecturer · International Islamic University Chittagong (IIUC)

I build data systems in production, teach in the classroom,
and publish research in peer-reviewed journals.
```

Optional identity pills directly under the name:

```
[ Engineer ]  [ Lecturer ]  [ Researcher ]
```

Three subtle gold-outline pills — scannable at a glance.

**Hero copy rules:**

- Both **current roles** (engineering + IIUC) appear as explicit lines, not buried in prose
- Research identity appears in the lead paragraph or as the third pill
- Avoid a single vague tagline like “problem solver” without role context

#### Layer 2 — Role pillar cards (below hero)

Three **equal-width cards** side by side on desktop; stacked on mobile. All visible at once — not tabs.

```
┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│ ENGINEERING         │ │ TEACHING            │ │ RESEARCH            │
│                     │ │                     │ │                     │
│ Software Engineer   │ │ Adjunct Lecturer    │ │ Q1 Journal          │
│ Bevy Commerce       │ │ IIUC Chittagong     │ │ [Paper title…]      │
│ Remote · 2024–Now   │ │ [dates] · Present   │ │ Accepted · [Year]   │
│                     │ │                     │ │                     │
│ Data migration,     │ │ [Subject / dept]    │ │ [Journal name]      │
│ APIs, Shopify stack │ │                     │ │                     │
│                     │ │                     │ │                     │
│ [View engineering →]│ │ [View teaching →]   │ │ [View research →]   │
└─────────────────────┘ └─────────────────────┘ └─────────────────────┘
```

**Research card** leads with the strongest credential: **Q1 journal, accepted**. Full citation lives on the Research tab; the card is a teaser.

#### Layer 3 — Snapshot stats (below pillar cards)

| Stat | Example copy |
|------|----------------|
| Engineering | `2+ yrs` building production systems |
| Data | Data migration & pipeline work at scale |
| Teaching | `Adjunct Lecturer` at IIUC Chittagong |
| Research | `Q1` journal publication accepted |
| Competitive | `3× ICPC` regionalist |

#### Layer 4 — Experience page (on click)

Full timelines and publication detail. Home sells the identity; Experience proves it.

---

### 5.4 Home page sections (full order)

1. **Hero** — Name, dual current roles (Bevy + IIUC), research-aware lead line, portrait, CTAs
2. **Role pillar cards** — Engineering · Teaching · Research (three equal cards)
3. **Snapshot** — 4–5 stat chips reinforcing all three pillars + ICPC
4. **Featured projects** — 2 highlighted cards, link to `/projects`
5. **Latest update** — Teaser of most recent `/updates` entry
6. **Contact strip** — Email, GitHub, LinkedIn, Google Scholar *(if applicable)* — minimal icon row

---

### 5.5 Experience page — triple track

The experience page is the **core narrative**. Open with a unifying intro:

> *I build software and data systems at Bevy Commerce, teach as an Adjunct Lecturer at International Islamic University Chittagong, and contribute to peer-reviewed research — including a publication accepted in a Q1 journal.*

**Tab switcher:**

```
[ Engineering ]    [ Teaching ]    [ Research ]
────────────────────────────────────────────────
```

Sticky sub-nav on scroll (mobile: horizontal scroll pills).

---

#### Engineering

Software & data engineering roles with a **vertical timeline**:

```
[2024 — Present]  Bevy Commerce · Software Engineer · Remote
                  └─ Impact bullets (3–5 max per role)
                  └─ Emphasize data migration, APIs, pipeline work
                  └─ Optional: expandable “Deep dive” for 1–2 flagship projects

[2023 — 2024]     [Previous role]
                  └─ ...
```

**Title framing:** Use actual job title on the card. If the work is data-heavy, add a subtitle:

> Software Engineer · *Data & platform focus*

Do not rename the role to “Data Engineer” unless that is your official title.

**Card fields:** Company, role, location, duration, 3–5 impact bullets, tech tags (mono pills), optional “Read more” for project detail.

---

#### Teaching

Parallel timeline; **IIUC Adjunct Lecturer is the first entry** (current, most credentialed).

```
[Present]  International Islamic University Chittagong (IIUC)
           Adjunct Lecturer
           · Department / subject (e.g. CSE, Algorithms)
           · Start date — Present
           · 2–3 bullets: courses taught, student outcomes, curriculum

[Earlier]  CUET — Peer Mentor, DSA & ICPC prep
           · ...
```

**Fields per entry:**

- Institution (spell out IIUC on first mention; abbreviate after)
- Role (Adjunct Lecturer, TA, Mentor, Workshop facilitator)
- Subject / topic
- Duration or semester
- Audience size (optional)
- 2–3 outcome bullets

**Visual distinction:** Slightly warmer `--surface-teaching` background band or `TEACHING` overline.

---

#### Research

Dedicated tab for academic work — **not mixed into engineering or teaching timelines**.

**Layout:** Publication list (newest first). One **featured publication** expanded by default if it is the Q1 accepted paper.

**Publication card structure:**

```
┌──────────────────────────────────────────────────────────────┐
│  [Accepted]  [Q1 Journal]                                    │
│                                                              │
│  Paper Title in Instrument Serif                             │
│  Yasir Rahman, Co-author Name, …                             │
│  Journal Name · Vol/Issue · Year                             │
│                                                              │
│  One-line contribution summary (your role in the research)   │
│                                                              │
│  [DOI ↗]  [PDF ↗]  [Google Scholar ↗]   ← only if available│
└──────────────────────────────────────────────────────────────┘
```

**Fields per publication:**

| Field | Required | Notes |
|-------|----------|-------|
| `title` | Yes | Serif, sentence case |
| `authors` | Yes | Highlight your name with `--accent` or bold |
| `journal` | Yes | Full journal name |
| `year` | Yes | Expected or published year |
| `status` | Yes | `accepted` · `published` · `under_review` · `preprint` |
| `quartile` | If Q1 | Show `Q1 Journal` pill — do not overstate; only if verified (Scimago/JCR) |
| `doi` | If available | External link |
| `pdfUrl` | Optional | Link to PDF or preprint |
| `abstract` | Optional | Collapsed by default; expand on “Read abstract” |
| `contribution` | Recommended | 1–2 sentences: what you did (implementation, experiments, writing) |
| `keywords` | Optional | Mono tags |

**Q1 badge rules:**

- Use only when the journal is confirmed Q1 in Scimago (or equivalent) for the relevant category
- Label: `Q1 Journal` — not “Top 1%” or hype language
- Pair with status badge: `Accepted` reads stronger than Q1 alone for in-press work

**Optional Research tab sections (below publications):**

- **Research interests** — 3–5 topic tags (e.g. machine learning, distributed systems)
- **Affiliations** — IIUC, CUET, or lab names if relevant
- **In progress** — only if you want to list under-review work (clearly labeled)

**Visual distinction:** Slightly cooler `--surface-research` background band or `RESEARCH` overline.

---

### 5.6 Updates section

A **chronological feed** of career milestones — lighter weight than full blog posts.

**Purpose:** Show momentum; give repeat visitors a reason to return.

**Entry types:**

| Type | Example |
|------|---------|
| Role change | “Joined Bevy Commerce as Software Engineer” |
| Project ship | “Shipped data migration tool to production” |
| Teaching | “Started as Adjunct Lecturer at IIUC Chittagong” |
| Research | “Paper accepted in [Journal Name] (Q1)” |
| Achievement | “ICPC Dhaka Regional 2023 — 42nd” |
| Learning | “Completed AWS Solutions Architect study path” |
| Speaking | “Guest lecture on system design at …” |

**Entry schema:**

```yaml
id: string
date: ISO date (display as "Mar 2025")
type: role | project | teaching | research | achievement | learning | speaking
title: string
summary: string (1–2 sentences, max 160 chars on card)
link: optional url  # e.g. /experience#research or DOI
tags: optional string[]
featured: boolean  # pin to home teaser
```

**Layout:**

- `/updates` — reverse chronological list; filter pills: All · Engineering · Teaching · Research · …
- Home — single “Latest” card linking to full feed
- Seed at least one **research** and one **teaching** update at launch

**Content source (implementation options):**

1. **Markdown files** in `content/updates/*.md` — simple, git-based, no CMS
2. **JSON** in `src/data/updates.json` — fastest for v1
3. Headless CMS — only if update frequency is high

---

### 5.7 Projects page

- Grid or stacked **case-study cards** — image, title, one-line outcome, tags
- Detail: problem → approach → outcome → stack (not challenge/solution walls of text unless flagship)
- Remove matrix header; use same section header pattern as rest of site
- Cross-link research-backed projects to `/experience#research` where relevant

### 5.8 Achievements page

- Keep ICPC / contest photography — it’s strong social proof
- Present as **gallery + timeline** hybrid
- Contest name, placement, team, year — serif title, sans meta
- Reduce decorative corner animations; let photos breathe
- Distinct from **Research** — achievements = contests/awards; research = peer-reviewed publications

---

## 6. Layout & Page Wireframes (ASCII)

### Global navigation (desktop)

```
┌─────────────────────────────────────────────────────────────┐
│  <YR/>    Home  Experience  Updates  Projects  Achievements │
│                                              [gh] [in] [☀]  │
└─────────────────────────────────────────────────────────────┘
  ↑ logo    ↑ 5 items max — always visible, sticky on scroll
            ↑ active page gets gold underline
```

### Global navigation (mobile — open state)

```
┌─────────────────────────────────────────────────────────────┐
│                                                        [✕]  │
│                                                             │
│  Home                                                       │
│  Experience                                                 │
│    Engineering                                              │
│    Teaching                                                 │
│    Research                                                 │
│  Updates                                                    │
│  Projects                                                   │
│  Achievements                                               │
│                                                             │
│  ─────────────────                                          │
│  GitHub · LinkedIn · Email                                  │
└─────────────────────────────────────────────────────────────┘
```

### Home — Hero + role pillars

```
┌─────────────────────────────────────────────────────────────┐
│  [YR]          Home  Experience  Updates  Projects  …  [☀] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│     [Portrait]          Yasir Rahman                        │
│     rounded-lg          ─────────────                       │
│                         Software Engineer · Bevy Commerce   │
│                         Adjunct Lecturer · IIUC Chittagong  │
│                                                             │
│                         [ Engineer ] [ Lecturer ] [ Researcher ] │
│                                                             │
│                         I build data systems, teach at      │
│                         IIUC, and publish in Q1 journals.   │
│                                                             │
│                         [View experience]  [Latest update →]│
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ ENGINEERING  │  │ TEACHING     │  │ RESEARCH     │      │
│  │ Bevy Commerce│  │ IIUC         │  │ Q1 · Accepted│      │
│  │ SW Engineer  │  │ Adj. Lecturer│  │ [Paper title]│      │
│  │ [View →]     │  │ [View →]     │  │ [View →]     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
├─────────────────────────────────────────────────────────────┤
│   2+ yrs eng.     Adjunct @ IIUC      Q1 publication        │
│   3× ICPC regionalist                                       │
├─────────────────────────────────────────────────────────────┤
│   Featured work                              [All projects →]│
│   ┌──────────────┐  ┌──────────────┐                        │
│   │ Project A    │  │ Project B    │                        │
│   └──────────────┘  └──────────────┘                        │
├─────────────────────────────────────────────────────────────┤
│   Latest · Mar 2025                                         │
│   Paper accepted in [Journal Name] (Q1)                     │
└─────────────────────────────────────────────────────────────┘
```

### Experience — Triple tabbed

```
┌─────────────────────────────────────────────────────────────┐
│  Experience                                                 │
│  Engineer at Bevy Commerce. Lecturer at IIUC. Published   │
│  researcher.                                                │
│                                                             │
│  [ Engineering ]   [ Teaching ]   [ Research ]              │
│  ─────────────                                              │
│                                                             │
│  ● ─── 2024 — Present                                       │
│  │      Bevy Commerce · Software Engineer                   │
│  │      Remote · Data migration & Shopify ecosystem         │
│  │      • Built data migration pipeline …                   │
│  │                                                          │
│  ● ─── 2023 — 2024                                          │
│  │      …                                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  [ Teaching tab active ]                                      │
│                                                             │
│  ● ─── Present                                              │
│  │      IIUC Chittagong · Adjunct Lecturer                  │
│  │      [Department] · [Subject]                            │
│  │      • …                                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  [ Research tab active ]                                      │
│                                                             │
│  [Accepted]  [Q1 Journal]                                   │
│  Paper Title Here                                           │
│  Y. Rahman, Co-author, …                                    │
│  Journal Name · 2025                                        │
│  Contribution: …                                            │
│  [DOI ↗]  [PDF ↗]                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Content Checklist

Before implementation, gather or draft:

### Engineering (exists — refine)

- [ ] Bevy Commerce — tighten bullets to impact metrics where possible
- [ ] Emphasize data migration / pipeline work if framing as software & data engineering
- [ ] Previous role(s) — same structure
- [ ] Flagship project deep-dives (max 2) — optional expand

### Teaching *(new — you provide)*

- [ ] **IIUC Adjunct Lecturer** — department, subject(s), start date, courses taught
- [ ] 2–3 teaching outcome bullets (student results, materials built, etc.)
- [ ] Earlier roles: CUET peer mentoring, workshops, etc.
- [ ] Any testimonials or links (optional)

### Research *(new — you provide)*

- [ ] **Q1 journal paper** — full title, complete author list, journal name, year
- [ ] Status: accepted (with expected publication date if known)
- [ ] Q1 verification source (Scimago category / JCR quartile)
- [ ] DOI or preprint URL (when available)
- [ ] 1–2 sentence personal contribution summary
- [ ] Optional: abstract text, keywords, research interests list
- [ ] Google Scholar profile URL (optional, for footer/contact strip)

### Updates *(new — seed 5–8 entries)*

- [ ] “Started as Adjunct Lecturer at IIUC Chittagong” (teaching)
- [ ] “Paper accepted in [Journal] (Q1)” (research)
- [ ] Recent engineering milestones (Bevy, project ships)
- [ ] Decide update cadence (e.g. monthly)

### Global

- [ ] Professional portrait (high-res, neutral background)
- [ ] Refined hero copy (engineer + lecturer + researcher)
- [ ] Meta / SEO titles per page

---

## 8. Technical Implementation Plan

### Phase 0 — Foundation (Week 1)

1. Add design tokens to `src/app/global.css` (CSS variables for palette)
2. Extend `tailwind.config.js` with semantic colors, fonts, spacing
3. Load fonts in `src/app/layout.js` via `next/font`
4. Create `src/components/ui/` primitives: `Button`, `Tag`, `SectionHeader`, `Container`
5. Remove global `NetworkBackground` from layout; replace with `--bg-base` only

### Phase 1 — Shell (Week 1–2)

1. Rebuild `NavBar` — sticky, blur backdrop, active states, ≤5 items, social cluster
2. Build **mobile full-screen nav** — large links, Experience sub-links (Engineering · Teaching · Research)
3. Rebuild `Footer` — full sitemap, socials, contact, copyright on every page
4. Add theme toggle (dark/light) using existing `useThemeSwitcher` or `next-themes`
5. Shared `PageLayout` wrapper — consistent padding, max-width, serif H1 on every page
6. Experience page **sticky tab sub-nav** with hash deep linking

### Phase 2 — Core pages (Week 2–3)

1. **Home** — dual-role hero, three pillar cards, snapshot, featured projects, latest update teaser
2. **Experience** — Engineering + Teaching + Research tabs with anchor deep links
3. **Updates** — data file + list page + home teaser component (include research & teaching types)
4. **Projects** — restyle cards, reduce expand/collapse noise
5. **Achievements** — gallery restyle (keep separate from Research publications)

### Phase 3 — Polish (Week 3–4)

1. Scroll-triggered animations (respect `prefers-reduced-motion`)
2. Open Graph images and metadata
3. Lighthouse pass (performance, a11y)
4. Mobile QA on real devices
5. Delete unused components: `MatrixRain`, `MatrixBackground`, `NetworkBackground`, glitch utilities

### File structure (target)

```
src/
├── app/
│   ├── layout.js
│   ├── global.css          # design tokens
│   ├── page.js             # home
│   ├── experience/page.js
│   ├── updates/page.js     # NEW
│   ├── projects/page.js
│   └── achievements/page.js
├── components/
│   ├── layout/
│   │   ├── NavBar.js
│   │   ├── Footer.js
│   │   └── Container.js
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── RolePillars.js        # Engineering · Teaching · Research cards
│   │   ├── Snapshot.js
│   │   ├── ExperienceTimeline.js
│   │   ├── TeachingTimeline.js
│   │   ├── ResearchPublications.js
│   │   ├── UpdatesFeed.js
│   │   └── FeaturedProjects.js
│   └── ui/
│       ├── Button.jsx
│       ├── Tag.jsx
│       ├── SectionHeader.jsx
│       ├── PublicationCard.jsx
│       └── RoleCard.jsx
├── data/
│   ├── experience.engineering.json
│   ├── experience.teaching.json
│   ├── research.publications.json
│   ├── updates.json
│   └── projects.json
└── lib/
    └── motion.js           # shared animation variants
```

---

## 9. Accessibility & Performance

| Requirement | Target |
|-------------|--------|
| Color contrast (body) | WCAG AA — 4.5:1 minimum |
| Color contrast (large text) | 3:1 minimum |
| Focus states | Visible 2px `--accent` ring |
| Motion | Honor `prefers-reduced-motion: reduce` |
| Images | `next/image`, WebP, explicit dimensions |
| Fonts | `display: swap`, subset weights actually used |
| LCP | Hero portrait + name < 2.5s on 4G |

---

## 10. Success Metrics

Every launch review must pass **hook**, **findability**, and **craft** checklists.

### Hook

- [ ] First-time visitor understands **engineer + lecturer + researcher** within 5 seconds (hero)
- [ ] Both current roles (Bevy Commerce + IIUC) visible above the fold on home
- [ ] Q1 accepted publication visible on home Research pillar card
- [ ] Pillar cards create a “I want to read more” moment — not information overload
- [ ] Someone says “this looks really clean” — that’s the wow

### Findability

- [ ] Any major content reachable in **≤2 clicks** from home (see §5.0 visitor intent map)
- [ ] Persistent nav visible on every page; active page clearly highlighted
- [ ] Experience tabs (Engineering · Teaching · Research) visible without scrolling on `/experience`
- [ ] Footer sitemap present on every page with all nav links + socials
- [ ] Deep links work: `/experience#research`, `/experience#teaching`, project anchors
- [ ] Mobile nav lists Experience sub-sections — not hidden behind generic “Experience” only
- [ ] No primary content locked behind undiscoverable expand/collapse (summary visible by default)

### Craft & completeness

- [ ] No visual reference to matrix/hacker theme remains
- [ ] Experience page clearly separates Engineering, Teaching, and Research
- [ ] Research tab distinct from Achievements (publications vs contest awards)
- [ ] At least one update visible on home; full feed on `/updates`
- [ ] Site feels cohesive on mobile — no horizontal scroll, readable type, 44px+ tap targets

---

## 11. Inspiration References (direction, not copy)

Study these for **spacing, type, and restraint** — not for cloning:

- [rauno.me](https://rauno.me) — craft and motion discipline
- [leerob.io](https://leerob.io) — developer portfolio clarity
- [brittanychiang.com](https://brittanychiang.com) — narrative timeline (adapt to our palette)
- Editorial sites using Instrument Serif — warm minimal luxury

---

## 12. Open Decisions

| Question | Options | Recommendation |
|----------|---------|----------------|
| Complete rebuild vs incremental reskin | Incremental / full rebuild | **Full rebuild** — new tokens, nav, pages, components; delete old theme |
| Nav: Engineering + Teaching + Research as separate items? | Yes / No | **No** — use single **Experience** nav; tabs inside page |
| Single-page home vs multi-page | One long scroll / separate pages | **Multi-page** — clearer nav, better SEO, easier findability |
| Home pillar layout | 2 cards (eng + teach) + research banner / 3 equal cards | **3 equal cards** — research Q1 credential deserves equal weight |
| Research placement | Own `/research` page vs tab on Experience | **Tab on Experience** — keeps nav lean; deep link via `#research` |
| Research vs Achievements | Merge / separate | **Separate** — Achievements = ICPC/contests; Research = peer-reviewed pubs |
| Engineering title framing | Software Engineer / Data Engineer / hybrid subtitle | **Actual title** + optional “Data & platform focus” subtitle |
| Teaching data | Hardcoded JSON vs MDX | **JSON v1**, MDX if entries grow |
| Research data | JSON vs BibTeX import | **JSON v1** with BibTeX-friendly fields; import later if library grows |
| Updates | Static JSON vs git-based MD | **MD files** in `content/updates/` for easy authoring |
| Light mode at launch | Yes / dark only | **Yes** — low effort if tokens are done right |
| Portrait style | B&W vs color | **Color, muted** — fits warm gold accent |
| Google Scholar link | Footer only / also on Research tab | **Both** — footer + prominent link on Research tab |

---

## Appendix A — Tailwind token sketch

```js
// tailwind.config.js (extend.theme)
colors: {
  base: 'var(--bg-base)',
  elevated: 'var(--bg-elevated)',
  subtle: 'var(--bg-subtle)',
  border: 'var(--border-default)',
  foreground: 'var(--text-primary)',
  muted: 'var(--text-secondary)',
  accent: {
    DEFAULT: 'var(--accent)',
    hover: 'var(--accent-hover)',
    muted: 'var(--accent-muted)',
  },
},
fontFamily: {
  display: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
  sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-geist-mono)', 'monospace'],
},
```

## Appendix B — Sample update entries

```json
{
  "id": "paper-q1-accepted",
  "date": "2025-02-01",
  "type": "research",
  "title": "Paper accepted in [Journal Name] (Q1)",
  "summary": "Our work on [topic] was accepted for publication in a Q1-ranked journal.",
  "link": "/experience#research",
  "tags": ["Publication", "Q1"],
  "featured": true
}
```

```json
{
  "id": "iiuc-adjunct",
  "date": "2024-09-01",
  "type": "teaching",
  "title": "Started as Adjunct Lecturer at IIUC Chittagong",
  "summary": "Teaching [subject] at the International Islamic University Chittagong.",
  "link": "/experience#teaching",
  "tags": ["IIUC", "Teaching"],
  "featured": false
}
```

```json
{
  "id": "bevy-migration-v2",
  "date": "2025-03-15",
  "type": "project",
  "title": "Shipped Magento → Shopify migration tool v2",
  "summary": "Reduced sync failures by 40% with improved rate limiting and retry logic.",
  "link": "/projects#bevy-migration",
  "tags": ["Node.js", "Shopify", "GraphQL"],
  "featured": false
}
```

## Appendix C — Sample teaching entry (IIUC)

```json
{
  "id": "iiuc-adjunct-lecturer",
  "institution": "International Islamic University Chittagong (IIUC)",
  "role": "Adjunct Lecturer",
  "subject": "[Department / Subject — e.g. CSE, Algorithms]",
  "duration": "[Start date] — Present",
  "location": "Chittagong, Bangladesh",
  "highlights": [
    "Deliver lectures and labs for [course name(s)]",
    "Develop course materials and assessments aligned with departmental curriculum",
    "[Optional: student outcome or scope metric]"
  ]
}
```

## Appendix D — Sample publication entry (Q1 accepted)

```json
{
  "id": "q1-paper-2025",
  "title": "Full Paper Title in Sentence Case",
  "authors": [
    { "name": "Yasir Rahman", "highlight": true },
    { "name": "Co-author Name", "highlight": false }
  ],
  "journal": "Journal Name",
  "year": 2025,
  "status": "accepted",
  "quartile": "Q1",
  "quartileSource": "Scimago — [category name]",
  "volume": null,
  "issue": null,
  "pages": null,
  "doi": null,
  "pdfUrl": null,
  "scholarUrl": null,
  "contribution": "Brief description of your role — e.g. system design, experiments, manuscript writing.",
  "abstract": "Optional full abstract; collapse by default in UI.",
  "keywords": ["keyword-one", "keyword-two"],
  "featured": true
}
```

**Display notes for accepted (not yet published) papers:**

- Show status badge **Accepted** prominently; year can be “2025 (in press)”
- Omit DOI until assigned; add when available without changing card layout
- Q1 pill stays visible — it validates journal quality independent of print date

---

*This document is the single source of truth for the redesign. Implementation PRs should reference section numbers when making visual or structural changes.*
