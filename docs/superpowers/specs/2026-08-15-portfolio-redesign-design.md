# Portfolio Redesign Design

## Objective

Replace the existing animated dark portfolio with a mature, evidence-led portfolio for engineering leaders hiring a backend developer. The site must position Darian Baker as a mid-level Backend Software Developer with prior full-stack delivery experience, show credible professional and open-source work, and make direct contact easy.

The approved visual direction is the centered **Warm Conversation** concept: Darian's current portrait, calm light surfaces, restrained serif/sans typography, generous whitespace, and direct first-person writing. The page should feel as considered and calm as a modern conversational software product without copying another company's interface, components, or branding.

## Audience and Job

- Primary audience: engineering leaders hiring backend developers.
- Secondary audience: technical peers reviewing Darian's public work.
- Single page job: establish backend credibility quickly, provide evidence for it, and route the reader to GitHub, LinkedIn, email, or the current CV.
- The page does not state that Darian is actively looking or available.
- Location language: `Based in Malta · Open to local, remote, and relocation opportunities.` This appears only as profile context, not an availability badge.

## Content Principles

1. Evidence replaces self-rating. No skill levels, percentages, unsupported metrics, service menus, or generic claims.
2. Backend is the destination; full-stack experience provides context.
3. Public work is attributed precisely. Multi-Codex is described as a maintained OpenAI Codex fork with original subsystems authored by Darian, not as an original Codex implementation.
4. The ASP.NET Core contribution is a supporting mention only: `Contributed to Microsoft's ASP.NET Core repository in the ResponseDrainingTests area, working within a large production-grade codebase and its review process.` It does not link the PR or claim test/protocol work.
5. Education is secondary: `Studied Software Development at the University of Malta.` No completion or current-enrollment implication and no sixth-form content.
6. Direct contact replaces the form: email, LinkedIn, GitHub, and current CV link.

## Information Architecture

```text
+------------------------------------------------------------------+
| Darian Baker                     Work  Experience  About  Contact |
+------------------------------------------------------------------+
|                         [ portrait ]                             |
|                  BACKEND SOFTWARE DEVELOPER                      |
|            Thoughtful systems. Dependable delivery.              |
|  Production services, internal platforms, and developer tools.   |
|              [View selected work]  [LinkedIn]                    |
|       About me — concise first-person professional summary        |
+------------------------------------------------------------------+
| Selected evidence                                                 |
| Religa system work       Multi-Codex        BakeThere CLI         |
+------------------------------------------------------------------+
| Experience                                                        |
| Religa            GiG                 Freelance                   |
+------------------------------------------------------------------+
| Technical practice                                                |
| Backend | Messaging & data | Delivery | Full-stack context       |
+------------------------------------------------------------------+
| Education + open-source supporting notes                          |
+------------------------------------------------------------------+
| Email  LinkedIn  GitHub  CV                         Malta / 2026   |
+------------------------------------------------------------------+
```

The mobile order is identical. The header becomes a compact wrapped or horizontally scrollable link row; it does not introduce a JavaScript hamburger menu.

## Visual System

### Palette

- `Paper` — `#F5F1E8`: primary page background.
- `Surface` — `#FCFAF5`: elevated/interactive surface.
- `Ink` — `#2C2A27`: primary text and filled action.
- `Muted ink` — `#6C665E`: secondary copy and metadata.
- `Clay` — `#8B5D4D`: restrained accent for labels, focus, and the evidence rule.
- `Hairline` — `#D8D0C3`: borders and section separators.

No gradients, glassmorphism, glow, particle backgrounds, or decorative noise.

### Type

- Display: `Newsreader` from `next/font/google`, used only for the hero thesis and section titles.
- Body: `Manrope` from `next/font/google`, used for reading copy and controls.
- Utility: `Geist Mono`, used sparingly for short metadata such as technologies and dates.
- The hero thesis is the dominant moment; subsequent headings are substantially smaller.

### Layout

- Maximum reading width: 1120px, with a narrower 720px centered hero.
- Desktop section spacing: 112px; mobile: 72px.
- The portrait is centered, circular, approximately 112px desktop and 96px mobile.
- Sections rely on whitespace and hairlines instead of card grids. Selected work may use three bordered columns on desktop that collapse to a single list on mobile.
- Border radii are modest: full circle for the portrait and pill actions; 12px maximum for other surfaces.

### Signature

The single memorable device is an **evidence stitch**: a thin clay rule connecting the compact role label, the About introduction, and the section labels. It behaves like editorial punctuation, not a timeline or architecture diagram. Everything else remains quiet.

### Motion

- One orchestrated page-load sequence: portrait, label, thesis, body, then actions fade/translate in with short staggered CSS animations.
- Section content uses no scroll-trigger library.
- Hover changes are limited to color, border, and a two-pixel translation.
- `prefers-reduced-motion: reduce` removes all nonessential motion.

### Uniqueness Review

The chosen warm paper, serif headline, and clay accent can become a generic AI-generated default. To make the direction specific to Darian, the redesign removes decorative editorial tropes and anchors the page in his real portrait, exact backend work, concise architecture evidence, and the evidence-stitch rule. Copy, system labels, and project attribution carry the identity; the palette does not carry it alone.

## Page Content

### Header

- Text mark: `Darian Baker`.
- Links: `Work`, `Experience`, `About`, `Contact`.
- No sticky blur, theme switcher, availability indicator, or animated mobile menu.

### Hero and About

- Portrait asset: `public/darian-baker.jpg`, sourced from `C:\Users\daria.THE_FLASH\Downloads\1779886517147.jpg`.
- Label: `Backend Software Developer`.
- Thesis: `Thoughtful systems. Dependable delivery.`
- Supporting copy: `I build production services, internal platforms, and developer tools with clarity.`
- Actions: `View selected work` and `LinkedIn`.
- About summary must mention current backend work at Religa, a full-stack background at GiG, Malta, and the preference for understandable systems. It must not mention age, tea, student status, availability, or unsupported years of experience.

### Selected Work

1. **Religa — backend systems**
   - Current role: Mid-level Backend Software Developer, May 2026–present.
   - Built a production microservice for high-value win alerting.
   - Documents and helps align a 30+ microservice estate, reducing fragmentation across seven implementation languages.
   - Technologies may include C#, .NET, PHP, Laravel, TypeScript, Next.js, MySQL, SQL Server, Kafka, EMQX/MQTT, Protocol Buffers, Redis, Grafana, Docker, and AWS. Present them as demonstrated context, not proficiency ratings.

2. **Multi-Codex — account pooling for Codex**
   - Attribute upstream Codex to OpenAI.
   - Describe Darian's original work: Rust account-pooling proxy, routing/failover, authentication and setup flows, Windows installer, self-check tooling, documentation, and real-run verification.
   - Link: `https://github.com/DarianBaker/Multi-Codex`.

3. **BakeThere CLI — component delivery tooling**
   - Original TypeScript CLI for copying React/Tailwind components into an application and exporting standalone HTML/CSS.
   - Mention component registry, three themes, tests, and 31 components.
   - Link: `https://github.com/DarianBaker/bakethere-cli`.

### Experience

- **Religa (Portomaso Group)** — Backend Software Developer, May 2026–present, Malta. Present the microservice, documentation, and architecture-alignment work without confidential implementation detail.
- **GiG (Gaming Innovation Group)** — Full Stack Developer, May 2025–May 2026, Malta. Darian delivered both frontend and backend for an internal platform used by multiple teams for integrations, account management, configuration, and operations; strongest contribution was backend architecture. Deployment remained with DevOps and integrations with TIM/TAM teams. Stack: C#, .NET, SQL Server, Redis, Docker, React.
- **Freelance Development** — Full Stack Developer, January 2023–May 2025. Compact mention of Next.js web work, Node/Express/MongoDB backends, Bertus Gym, BargainToolShop.com, and game-development engagements. Do not claim project counts or invented percentage improvements.

### Technical Practice

Group technologies without proficiency labels:

- Backend: C#, .NET, PHP, Laravel, Node.js, Express.
- Messaging and data: Kafka, EMQX/MQTT, Protocol Buffers, Redis, MySQL, SQL Server, MongoDB.
- Delivery and observability: Docker, AWS, Grafana, Git.
- Full-stack context: TypeScript, Next.js, React.

### Supporting Notes

- Education line exactly as specified above.
- ASP.NET Core contribution wording exactly as specified above.
- Game development appears only as a short background note.

### Contact and Footer

- Email: `mailto:Darianbakerbray@gmail.com`.
- LinkedIn: `https://www.linkedin.com/in/darian-baker-1402b2327/`.
- GitHub: `https://github.com/DarianBaker`.
- CV: `/file.pdf`; keep the current file even though it requires a later content update.
- External links open in a new tab with safe `rel` attributes; mail links stay in the same context.

## Component and Data Architecture

- `app/content/portfolio.ts`: typed, immutable content and external-link data. This is the only source of portfolio facts used by the UI.
- `app/components/SiteHeader.tsx`: text mark and anchor navigation.
- `app/components/Hero.tsx`: portrait, thesis, actions, and initial About paragraph.
- `app/components/SelectedWork.tsx`: three evidence-led work items.
- `app/components/Experience.tsx`: professional history.
- `app/components/TechnicalPractice.tsx`: grouped technology list and supporting notes.
- `app/components/ContactFooter.tsx`: direct contact, CV, and footer metadata.
- `app/page.tsx`: server component that composes sections only.
- `app/globals.css`: tokens, layout, typography, responsive rules, focus, and reduced-motion behavior.
- `components/ui/*` and `styles/bakethere-*`: generated through BakeThere CLI. Use the provider and Button primitive selectively; customize tokens to the approved palette. Do not turn the portfolio into a component showcase.

No runtime fetching, client state, modal, contact API, particle system, count-up effect, typewriter, or scroll observer is required. Page data flows one way from the content module to server-rendered components.

## Removal Scope

- Remove obsolete animated components and sections from `app/components`.
- Remove both contact API implementations and Nodemailer configuration/dependency.
- Remove Framer Motion if no longer used.
- Remove junior/generic content: age, calculated experience, tea statistic, production-project counts, service cards, availability badge, tech proficiency levels, self-certifications, current-student language, sixth-form content, and generic CTAs.
- Preserve `public/file.pdf` until the CV is updated separately.

## Accessibility and Resilience

- Semantic landmarks and heading order: one `h1`; section `h2`s.
- The first focusable element is a `Skip to content` link targeting the page's main landmark.
- Portrait has specific alt text; decorative rules are hidden from assistive technology.
- All interactive elements have visible keyboard focus with at least 3:1 contrast.
- Minimum touch target height: 44px.
- Body text contrast meets WCAG AA.
- Layout is usable at 320px width without horizontal overflow.
- With CSS unavailable, the document order remains logical.
- No JavaScript is required for navigation or content access.
- If the portrait fails, its alt text and surrounding identity remain meaningful.

## Metadata

- Title: `Darian Baker — Backend Software Developer`.
- Description: `Backend Software Developer in Malta building production services, internal platforms, and developer tools with C# and .NET.`
- Open Graph title and description match the positioning.
- Remove `Available for exciting opportunities` and generic keyword stuffing.

## Testing and Acceptance

- Introduce Vitest, jsdom, and Testing Library for user-visible component tests.
- Tests render real components and verify landmark structure, profile/experience facts, selected-work attribution, direct contact destinations, portrait alt text, and the absence of stale claims.
- Each new behavior follows red-green-refactor; tests must be observed failing before implementation.
- `npm test` passes.
- `npm run lint` exits zero with no errors.
- `npm run build` exits zero.
- Manual inspection covers desktop and 320px mobile layout, visible focus, hover restraint, and reduced motion.
- The final Git diff contains no secrets, generated build output, or companion/SDD scratch files.
