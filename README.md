# Aura

Aura is a premium coming-soon landing page for an AI-powered content operation. It presents a system where four focused agents — Researcher, Writer, Editor, and Publisher — move one idea through a repeatable, human-approved production pipeline.

This repository contains the product showcase, not the future Aura application itself.

## What’s included

- Editorial dark-mode landing-page design, responsive from mobile through desktop
- Animated “idea → agents → published output” hero pipeline
- Interactive content-pipeline preview and approval states
- Research, writing, editing, publishing, and shared-memory product sections
- Client-side waitlist form with email validation, loading, error, and success states
- Metadata, JSON-LD software-application schema, `robots.txt`, and sitemap routes
- Reduced-motion styles and keyboard-accessible controls

## Tech stack

- Next.js 16 with the App Router
- React 19
- Tailwind CSS 4
- Plain React state and CSS animations for the current interactive surface

The project also includes Motion, Lucide, React Hook Form, Zod, and Sonner as installed dependencies for future product work.

## Getting started

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve an existing production build. |

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the deployed canonical URL. It is used for the canonical metadata, sitemap, and robots routes.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If unset, Aura uses `https://aura.example.com` as a safe placeholder.

## Waitlist integration

The current waitlist form intentionally does not persist email addresses or call a remote service. It validates the address in the browser and presents a polished success state. Replace the mock success transition in `app/page.js` with a server action or API call when an email provider is selected.

## Project structure

```text
app/
  globals.css      # Design tokens, layouts, responsive behavior, and motion
  layout.js        # Global metadata and SoftwareApplication JSON-LD
  page.js          # Landing-page sections and client-side interactions
  robots.js        # Robots metadata route
  sitemap.js       # Sitemap metadata route
```

## Notes

- Privacy and Terms links are visual placeholders until those routes are added.
- The visual pipeline is illustrative; it does not represent a live content-processing backend.
