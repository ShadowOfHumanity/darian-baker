# Darian Baker — Backend Portfolio

A warm, evidence-led single-page portfolio positioning Darian Baker as a backend software developer. The site presents selected production work, professional experience, technical practice, and direct public contact links without a contact API or form.

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Vitest and Testing Library
- BakeThere design tokens and global primitives

## BakeThere usage

The portfolio imports the vendored BakeThere token and global styles from `styles/bakethere-tokens.css` and `styles/bakethere-globals.css`. Those foundations support the site-specific warm minimalist layer in `app/globals.css` and the evidence label used in the hero.

## Local development

Install the locked dependency tree and start the development server:

```bash
npm ci
npm run dev
```

Run the verification commands before shipping changes:

```bash
npm test
npm run lint
npm run build
```

Contact is handled through the public Email, LinkedIn, GitHub, and CV links on the page. No contact-service environment variables are required.
