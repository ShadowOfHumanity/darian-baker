# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the old animated portfolio with a warm, centered, evidence-led backend developer portfolio using Darian's current portrait and verified professional content.

**Architecture:** Keep the homepage server-rendered and data-driven. A typed content module is the single factual source, focused section components render it, and global CSS owns the complete responsive visual system. BakeThere supplies only generated Badge/Separator primitives and theme infrastructure; it does not dictate page composition.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, BakeThere CLI 0.2.0, Vitest, jsdom, Testing Library.

**Spec:** `docs/superpowers/specs/2026-08-15-portfolio-redesign-design.md`

## Global Constraints

- Primary audience is engineering leaders hiring backend developers.
- Approved direction is the centered Warm Conversation concept: real portrait, `#F5F1E8` paper, `#FCFAF5` surface, `#2C2A27` ink, `#6C665E` muted ink, `#8B5D4D` clay, and `#D8D0C3` hairlines.
- Display font is Newsreader, body font is Manrope, and utility font is Geist Mono via `next/font/google`.
- No gradients, glassmorphism, glow, particle backgrounds, skill ratings, unsupported statistics, availability statement, age, tea copy, student-status copy, generic service cards, or contact form.
- Portfolio facts come only from `app/content/portfolio.ts`.
- Use the exact public links from the spec and keep `/file.pdf`.
- Multi-Codex must be attributed as a maintained OpenAI Codex fork with Darian's original subsystem work identified.
- ASP.NET Core is a supporting mention using the exact high-level wording in the spec; no PR link and no inflated test/protocol claims.
- The page must work without client state; navigation and content access require no JavaScript.
- WCAG AA text contrast, visible focus, semantic landmarks, 44px touch targets, 320px layout support, portrait alt text, and reduced-motion support are required.
- New behavior follows red-green-refactor. Generated BakeThere source, dependency/configuration wiring, CSS-only layout, and the binary portrait asset are process exceptions authorized by the user's request to use BakeThere and work autonomously; all user-visible React behavior still receives failing tests first.
- Do not edit, remove, or overwrite files outside the isolated worktree.

---

## File Structure

- `app/content/portfolio.ts` — immutable typed content and links.
- `app/components/SiteHeader.tsx` — header mark and anchor navigation.
- `app/components/Hero.tsx` — centered portrait, thesis, actions, and concise About copy.
- `app/components/SelectedWork.tsx` — Religa, Multi-Codex, and BakeThere evidence.
- `app/components/Experience.tsx` — Religa, GiG, and freelance history.
- `app/components/TechnicalPractice.tsx` — grouped technologies and supporting education/open-source notes.
- `app/components/ContactFooter.tsx` — direct links, CV, and footer.
- `app/page.tsx` — server-rendered composition only.
- `app/layout.tsx` — fonts, metadata, and BakeThere provider.
- `app/globals.css` — approved tokens, layout, responsive behavior, focus, and motion.
- `components/ui/*`, `styles/*`, `lib/utils.ts`, `bakethere.json` — generated BakeThere infrastructure and two primitives.
- `tests/*` — real component/content behavior tests.
- `vitest.config.ts`, `vitest.setup.ts` — test runner configuration.
- `public/darian-baker.jpg` — user-provided portrait copied byte-for-byte.

---

### Task 1: Test Foundation and Verified Content Model

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `tests/content/portfolio.test.ts`
- Create: `app/content/portfolio.ts`

**Interfaces:**
- Produces: `profile`, `navigation`, `selectedWork`, `experience`, `technicalPractice`, `supportingNotes`, and `contactLinks` exported from `app/content/portfolio.ts`.
- Produces types: `NavigationItem`, `WorkItem`, `ExperienceItem`, `TechnicalGroup`, and `ContactLink`.
- Later components consume these exports directly; they must not duplicate facts.

- [ ] **Step 1: Install and configure the test runner**

Run:

```powershell
npm install --save-dev vitest jsdom @vitejs/plugin-react @testing-library/react @testing-library/jest-dom
```

Add scripts to `package.json`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

Create `vitest.config.ts`:

```ts
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(projectRoot) } },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
```

Create `vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 2: Write the failing content contract tests**

Create `tests/content/portfolio.test.ts` with literal expectations that protect facts consumers rely on:

```ts
import { describe, expect, it } from "vitest";
import {
  contactLinks,
  experience,
  profile,
  selectedWork,
  supportingNotes,
} from "@/app/content/portfolio";

describe("portfolio content", () => {
  it("positions Darian as a backend developer with current Religa context", () => {
    expect(profile.role).toBe("Backend Software Developer");
    expect(profile.headline).toBe("Thoughtful systems. Dependable delivery.");
    expect(profile.location).toBe("Based in Malta");
    expect(experience[0]).toMatchObject({
      company: "Religa (Portomaso Group)",
      role: "Backend Software Developer",
      period: "May 2026 — Present",
    });
  });

  it("attributes Multi-Codex to upstream OpenAI Codex and Darian's original work", () => {
    const project = selectedWork.find((item) => item.title === "Multi-Codex");
    expect(project?.summary).toContain("OpenAI Codex fork");
    expect(project?.details.join(" ")).toContain("account-pooling proxy");
    expect(project?.href).toBe("https://github.com/DarianBaker/Multi-Codex");
  });

  it("keeps supporting claims narrow and accurate", () => {
    expect(supportingNotes.education).toBe(
      "Studied Software Development at the University of Malta.",
    );
    expect(supportingNotes.openSource).toBe(
      "Contributed to Microsoft's ASP.NET Core repository in the ResponseDrainingTests area, working within a large production-grade codebase and its review process.",
    );
  });

  it("publishes only the approved direct contact destinations", () => {
    expect(contactLinks.map(({ label, href }) => ({ label, href }))).toEqual([
      { label: "Email", href: "mailto:Darianbakerbray@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/darian-baker-1402b2327/" },
      { label: "GitHub", href: "https://github.com/DarianBaker" },
      { label: "CV", href: "/file.pdf" },
    ]);
  });
});
```

- [ ] **Step 3: Run the test and verify RED**

Run:

```powershell
npm test -- tests/content/portfolio.test.ts
```

Expected: FAIL because `app/content/portfolio.ts` does not exist.

- [ ] **Step 4: Implement the typed content module**

Create `app/content/portfolio.ts` with readonly exports. Use the spec's exact facts and these shapes:

```ts
export interface NavigationItem { label: string; href: `#${string}` }
export interface WorkItem {
  title: string;
  eyebrow: string;
  summary: string;
  details: readonly string[];
  technologies: readonly string[];
  href?: string;
  linkLabel?: string;
}
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  evidence: readonly string[];
  technologies: readonly string[];
}
export interface TechnicalGroup { label: string; items: readonly string[] }
export interface ContactLink {
  label: "Email" | "LinkedIn" | "GitHub" | "CV";
  href: string;
  external: boolean;
}

export const profile = {
  name: "Darian Baker",
  role: "Backend Software Developer",
  headline: "Thoughtful systems. Dependable delivery.",
  intro: "I build production services, internal platforms, and developer tools with clarity.",
  location: "Based in Malta",
  mobility: "Open to local, remote, and relocation opportunities.",
  about:
    "I'm Darian, a backend developer at Religa with a full-stack background from GiG. I care about systems that remain understandable as the codebase, architecture, and team grow.",
} as const;
```

Populate the remaining exports exactly from the spec, without proficiency labels or invented metrics.

- [ ] **Step 5: Run the focused and full tests to verify GREEN**

Run:

```powershell
npm test -- tests/content/portfolio.test.ts
npm test
```

Expected: all content tests pass.

- [ ] **Step 6: Commit**

```powershell
git add package.json package-lock.json vitest.config.ts vitest.setup.ts tests/content/portfolio.test.ts app/content/portfolio.ts
git commit -m "test: establish verified portfolio content model"
```

---

### Task 2: Warm Visual Shell, Header, and Hero

**Files:**
- Create: `bakethere.json`
- Create: `components/ui/BakeThereProvider.tsx`
- Create: `components/ui/Badge.tsx`
- Create: `components/ui/badge.types.ts`
- Create: `components/ui/Separator.tsx`
- Create: `components/ui/separator.types.ts`
- Create: `styles/bakethere-tokens.css`
- Create: `styles/bakethere-globals.css`
- Create: `lib/utils.ts`
- Create: `public/darian-baker.jpg`
- Create: `tests/components/hero.test.tsx`
- Create: `app/components/SiteHeader.tsx`
- Create: `app/components/Hero.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `profile`, `navigation`, and `contactLinks` from Task 1.
- Produces: `SiteHeader()` and `Hero()` server components.
- Produces CSS utility classes/tokens used by every later section: `.site-shell`, `.section`, `.section-label`, `.text-link`, `.button-link`, `.evidence-stitch`, and `.sr-only`.

- [ ] **Step 1: Generate BakeThere infrastructure and selected primitives**

Run exact pinned commands:

```powershell
npx bakethere@0.2.0 init --yes
npx bakethere@0.2.0 add badge separator --yes
```

Do not generate other components. Adjust generated imports only if TypeScript resolution requires it.

- [ ] **Step 2: Copy the user-provided portrait byte-for-byte**

Copy `C:\Users\daria.THE_FLASH\Downloads\1779886517147.jpg` to `public/darian-baker.jpg`. Do not crop, regenerate, filter, or overwrite the source file.

- [ ] **Step 3: Write the failing hero behavior test**

Create `tests/components/hero.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "@/app/components/Hero";
import SiteHeader from "@/app/components/SiteHeader";

describe("portfolio introduction", () => {
  it("renders semantic navigation to the page sections", () => {
    render(<SiteHeader />);
    const navigation = screen.getByRole("navigation", { name: "Primary" });
    expect(navigation).toHaveTextContent("Darian Baker");
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("introduces Darian with portrait, backend positioning, and selected-work action", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Thoughtful systems. Dependable delivery.",
    );
    expect(screen.getByRole("img", { name: "Darian Baker" })).toBeInTheDocument();
    expect(screen.getByText("Backend Software Developer")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View selected work" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByText(/backend developer at Religa/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 4: Run the test and verify RED**

Run `npm test -- tests/components/hero.test.tsx`.

Expected: FAIL because `Hero` and `SiteHeader` do not exist.

- [ ] **Step 5: Implement the header and hero**

Implement a semantic `<header>`, labeled `<nav>`, `<section id="about">`, `next/image` portrait, BakeThere `Badge`, and ordinary anchor CTAs. Keep both components free of `"use client"`.

The hero structure must follow this hierarchy:

```tsx
<section id="about" className="hero" aria-labelledby="hero-title">
  <Image
    src="/darian-baker.jpg"
    alt="Darian Baker"
    width={112}
    height={112}
    priority
    className="hero__portrait"
  />
  <Badge className="hero__role">Backend Software Developer</Badge>
  <h1 id="hero-title">Thoughtful systems. Dependable delivery.</h1>
  <p className="hero__intro">...</p>
  <div className="hero__actions">...</div>
  <p className="hero__about"><strong>About me —</strong> ...</p>
</section>
```

- [ ] **Step 6: Replace layout metadata/fonts and establish global styles**

Use `Newsreader`, `Manrope`, and `Geist_Mono`. Wrap children in `<BakeThereProvider defaultTheme="warm">`. Set metadata exactly from the spec.

At the top of `app/globals.css`:

```css
@import "tailwindcss";
@import "../styles/bakethere-tokens.css";
@import "../styles/bakethere-globals.css";

:root {
  --paper: #f5f1e8;
  --surface: #fcfaf5;
  --ink: #2c2a27;
  --muted-ink: #6c665e;
  --clay: #8b5d4d;
  --hairline: #d8d0c3;
  --content-width: 70rem;
  --reading-width: 45rem;
}
```

Override the generated warm BakeThere tokens to the same palette. Implement the centered 112px portrait, 44px action targets, visible clay focus, evidence-stitch rule, responsive type scale with `clamp()`, and reduced-motion media query.

For this task, `app/page.tsx` composes `<SiteHeader />` and `<Hero />` inside `<main>`; later tasks append sections.

- [ ] **Step 7: Verify GREEN and integration**

Run:

```powershell
npm test -- tests/components/hero.test.tsx
npm run build
```

Expected: hero tests pass and production build exits zero.

- [ ] **Step 8: Commit**

```powershell
git add bakethere.json components styles lib public/darian-baker.jpg app/layout.tsx app/page.tsx app/globals.css app/components/SiteHeader.tsx app/components/Hero.tsx tests/components/hero.test.tsx
git commit -m "feat: add warm portfolio shell and introduction"
```

---

### Task 3: Selected Work and Experience Evidence

**Files:**
- Create: `tests/components/evidence.test.tsx`
- Create: `app/components/SelectedWork.tsx`
- Create: `app/components/Experience.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `selectedWork` and `experience` from Task 1.
- Consumes: `.section`, `.section-label`, `.text-link`, and `.evidence-stitch` from Task 2.
- Produces: `<SelectedWork />` with `<section id="work">` and `<Experience />` with `<section id="experience">`.

- [ ] **Step 1: Write the failing evidence tests**

Create `tests/components/evidence.test.tsx`:

```tsx
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experience from "@/app/components/Experience";
import SelectedWork from "@/app/components/SelectedWork";

describe("professional evidence", () => {
  it("shows three selected work items with accurate public attribution", () => {
    render(<SelectedWork />);
    const section = screen.getByRole("region", { name: "Selected work" });
    expect(within(section).getByText("Religa — backend systems")).toBeInTheDocument();
    expect(within(section).getByText("Multi-Codex")).toBeInTheDocument();
    expect(within(section).getByText(/OpenAI Codex fork/i)).toBeInTheDocument();
    expect(within(section).getByRole("link", { name: "View Multi-Codex on GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/DarianBaker/Multi-Codex",
    );
    expect(within(section).getByText("BakeThere CLI")).toBeInTheDocument();
  });

  it("renders the factual Religa, GiG, and freelance history", () => {
    render(<Experience />);
    expect(screen.getByText("Religa (Portomaso Group)")).toBeInTheDocument();
    expect(screen.getByText("May 2026 — Present")).toBeInTheDocument();
    expect(screen.getByText("GiG (Gaming Innovation Group)")).toBeInTheDocument();
    expect(screen.getByText("May 2025 — May 2026")).toBeInTheDocument();
    expect(screen.getByText("Freelance Development")).toBeInTheDocument();
    expect(screen.queryByText(/spearheaded/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/25%/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test and verify RED**

Run `npm test -- tests/components/evidence.test.tsx`.

Expected: FAIL because both components are missing.

- [ ] **Step 3: Implement selected work**

Render a labeled section with a quiet three-column evidence list. Each article contains eyebrow, title, summary, bullet evidence, technology list, and optional external link. Links use `target="_blank" rel="noreferrer noopener"`.

Do not use modals, hover-only details, project icons, colored per-project cards, or invented descriptions.

- [ ] **Step 4: Implement experience**

Render three `<article>` entries with role/company, period/location metadata, summary, evidence bullets, and technology list. Use a two-column desktop layout where metadata occupies the narrow column and evidence occupies the wide column; collapse to document order on mobile.

- [ ] **Step 5: Compose and style the sections**

Append `<SelectedWork />` and `<Experience />` to `app/page.tsx`. Add CSS for `.work-grid`, `.work-item`, `.experience-list`, `.experience-item`, `.meta`, `.evidence-list`, and `.technology-list`. Use hairlines and whitespace; no gradients or elevated card shadows.

- [ ] **Step 6: Verify GREEN and integration**

Run:

```powershell
npm test -- tests/components/evidence.test.tsx
npm test
npm run build
```

Expected: all tests and build pass.

- [ ] **Step 7: Commit**

```powershell
git add app/components/SelectedWork.tsx app/components/Experience.tsx app/page.tsx app/globals.css tests/components/evidence.test.tsx
git commit -m "feat: present professional and project evidence"
```

---

### Task 4: Technical Practice, Supporting Notes, and Direct Contact

**Files:**
- Create: `tests/components/supporting.test.tsx`
- Create: `app/components/TechnicalPractice.tsx`
- Create: `app/components/ContactFooter.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `technicalPractice`, `supportingNotes`, `contactLinks`, and `profile` from Task 1.
- Produces: `<TechnicalPractice />` with `<section id="practice">` and `<ContactFooter />` with `<section id="contact">` plus `<footer>`.

- [ ] **Step 1: Write the failing supporting-content tests**

Create `tests/components/supporting.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactFooter from "@/app/components/ContactFooter";
import TechnicalPractice from "@/app/components/TechnicalPractice";

describe("supporting portfolio content", () => {
  it("groups demonstrated technologies without proficiency ratings", () => {
    render(<TechnicalPractice />);
    expect(screen.getByRole("heading", { name: "Backend" })).toBeInTheDocument();
    expect(screen.getByText("Kafka")).toBeInTheDocument();
    expect(screen.getByText("Grafana")).toBeInTheDocument();
    expect(screen.queryByText(/expert|advanced|intermediate/i)).not.toBeInTheDocument();
    expect(screen.getByText("Studied Software Development at the University of Malta.")).toBeInTheDocument();
    expect(screen.getByText(/ResponseDrainingTests area/)).toBeInTheDocument();
  });

  it("offers direct contact and CV links without a form or availability claim", () => {
    render(<ContactFooter />);
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:Darianbakerbray@gmail.com",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/darian-baker-1402b2327/",
    );
    expect(screen.getByRole("link", { name: "CV" })).toHaveAttribute("href", "/file.pdf");
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
    expect(screen.queryByText(/available for|actively looking/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test and verify RED**

Run `npm test -- tests/components/supporting.test.tsx`.

Expected: FAIL because `TechnicalPractice` and `ContactFooter` are missing.

- [ ] **Step 3: Implement technical practice and supporting notes**

Render four technology groups as plain lists. Follow with two concise supporting-note rows for education and open source plus one short game-development background sentence. No icons, proficiency bars, badges per technology, or certification cards.

- [ ] **Step 4: Implement direct contact and footer**

Render a short contact thesis and the four direct links. External HTTP links use a new tab and safe `rel`; Email and CV remain ordinary direct links. Include the current year and `Darian Baker` in the footer without `Built with`, hearts, tea, or framework marketing.

- [ ] **Step 5: Compose and style the sections**

Append `<TechnicalPractice />` and `<ContactFooter />` to the page. Add `.practice-grid`, `.practice-group`, `.supporting-notes`, `.contact-links`, and `.site-footer` styles. Maintain 44px link targets and visible focus.

- [ ] **Step 6: Verify GREEN and integration**

Run:

```powershell
npm test -- tests/components/supporting.test.tsx
npm test
npm run build
```

Expected: all tests and build pass.

- [ ] **Step 7: Commit**

```powershell
git add app/components/TechnicalPractice.tsx app/components/ContactFooter.tsx app/page.tsx app/globals.css tests/components/supporting.test.tsx
git commit -m "feat: add technical context and direct contact"
```

---

### Task 5: Legacy Removal, Responsive Polish, and Full-Page Regression Gate

**Files:**
- Create: `tests/page.test.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `README.md`
- Modify: `package.json`
- Modify: `package-lock.json`
- Delete: `app/api/contact.ts`
- Delete: `pages/api/contact.ts`
- Delete: `app/lib/Utility.ts`
- Delete: `app/components/AnimatedBox.tsx`
- Delete: `app/components/AnimatedButton.tsx`
- Delete: `app/components/AnimatedSection.tsx`
- Delete: `app/components/box.tsx`
- Delete: `app/components/ContactModal.tsx`
- Delete: `app/components/EducationSection.tsx`
- Delete: `app/components/ExperienceSection.tsx`
- Delete: `app/components/FloatingParticles.tsx`
- Delete: `app/components/InteractiveTag.tsx`
- Delete: `app/components/Navbar.tsx`
- Delete: `app/components/OpenSourceSection.tsx`
- Delete: `app/components/ProjectsSection.tsx`
- Delete: `app/components/ScrollIndicator.tsx`
- Delete: `app/components/ServiceCard.tsx`
- Delete: `app/components/SocialLinks.tsx`
- Delete: `app/components/tag.tsx`
- Delete: `app/components/TechStackSection.tsx`
- Delete: `app/components/TypewriterText.tsx`

**Interfaces:**
- Consumes all components from Tasks 2–4.
- Produces the final semantic single-page portfolio and the clean verification baseline.

- [ ] **Step 1: Write the failing full-page regression test**

Create `tests/page.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("portfolio homepage", () => {
  it("presents one coherent semantic portfolio", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#main-content",
    );
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Selected work" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Technical practice" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Contact" })).toBeInTheDocument();
  });

  it("does not expose the old junior or generic portfolio claims", () => {
    render(<Home />);
    expect(screen.queryByText(/years old/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/teas consumed|tea connoisseur/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/years of experience/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/projects completed|projects in production/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/let's build something amazing/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the regression test and verify RED**

Run `npm test -- tests/page.test.tsx` before cleanup.

Expected: FAIL because the final skip link/main-target behavior does not exist yet.

- [ ] **Step 3: Remove obsolete runtime and dependencies**

Delete the listed legacy files. Run:

```powershell
npm uninstall framer-motion lucide-react nodemailer @types/nodemailer
```

Confirm no source import references removed packages or files.

- [ ] **Step 4: Finalize the page and responsive CSS**

Ensure `app/page.tsx` is a server component that only composes:

```tsx
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Experience />
        <TechnicalPractice />
        <ContactFooter />
      </main>
    </>
  );
}
```

In CSS, verify:

```css
@media (max-width: 48rem) {
  .site-shell { padding-inline: 1.25rem; }
  .site-header__inner { align-items: flex-start; gap: 1rem; }
  .work-grid, .practice-grid { grid-template-columns: 1fr; }
  .experience-item { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Check the stylesheet for accidental horizontal overflow, hover-only content, gradients, and missing focus styles.

- [ ] **Step 5: Update README**

Replace duplicate starter content with concise project documentation: positioning, stack, BakeThere usage, local commands (`npm ci`, `npm run dev`, `npm test`, `npm run lint`, `npm run build`), and the note that contact is through direct public links.

- [ ] **Step 6: Verify GREEN with the full gate**

Run fresh:

```powershell
npm test
npm run lint
npm run build
git diff --check
```

Expected: all commands exit zero. Lint has no errors. Build produces the static homepage. `git diff --check` prints nothing.

- [ ] **Step 7: Inspect repository state**

Run:

```powershell
git status --short
git diff --stat HEAD
```

Confirm there are no `.next`, `out`, `.superpowers`, SDD artifacts, environment files, or secrets staged.

- [ ] **Step 8: Commit**

```powershell
git add -A
git commit -m "refactor: complete minimalist backend portfolio redesign"
```
