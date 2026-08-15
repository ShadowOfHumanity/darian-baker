# Darian Baker: Backend Portfolio

This is Darian Baker's portfolio. It focuses on his backend work, past full-stack experience, and personal developer tools. Contact uses public links instead of a form.

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Vitest and Testing Library
- BakeThere design tokens and global primitives

## BakeThere usage

The site uses the BakeThere token and global styles from `styles/bakethere-tokens.css` and `styles/bakethere-globals.css`. The portfolio-specific styling lives in `app/globals.css`.

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
