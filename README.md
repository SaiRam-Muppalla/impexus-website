# Impexus Technologies — Website

Official website for **Impexus Technologies**, a campus learning and development platform partnering with colleges across India to deliver industry-aligned skill development programs.

---

## Overview

Impexus Technologies empowers 5,000+ students across India through on-campus programs in Full Stack Development, AI/ML, Cloud Computing, Cybersecurity, Mobile App Development, and Placement Preparation. We partner with institutions, government skill bodies (MSME, AICTE, TASK), and global technology companies (Google, Microsoft, Anthropic) to bridge the gap between academic learning and industry requirements.

**Live site:** [https://impexus.co.in](https://impexus.co.in)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Toasts | [Sonner](https://sonner.emilkowal.ski/) |
| SEO | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| Testing | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
impexus-website/
├── public/                  # Static assets (favicon, OG image, logos, robots.txt, sitemap.xml)
│   └── logos/               # Partner & client logos
├── scripts/                 # Server-side scripts (Google Apps Script for contact form)
├── src/
│   ├── components/          # Page sections and shared components
│   │   └── ui/              # shadcn/ui primitive components
│   ├── data/                # Static data (topics, programs)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, analytics stub, monitoring stub
│   ├── pages/               # Route-level page components
│   └── test/                # Test setup and example tests
├── .env.example             # Environment variable template
├── index.html               # HTML entry point with SEO meta tags & JSON-LD
├── vercel.json              # Vercel deployment config (SPA rewrites, headers, caching)
├── vite.config.ts           # Vite build config
└── tailwind.config.ts       # Tailwind theme config
```

---

## Prerequisites

- **Node.js** v18+ ([install via nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** v9+

---

## Local Development Setup

```sh
# 1. Clone the repository
git clone https://github.com/SaiRam-Muppalla/impexus-website.git
cd impexus-website

# 2. Install dependencies
npm install

# 3. Copy environment variables template
cp .env.example .env.local

# 4. Fill in values in .env.local (see Environment Variables below)

# 5. Start the development server
npm run dev
```

The dev server will start at **http://localhost:8080**.

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Required |
|---|---|---|
| `VITE_SITE_URL` | Canonical base URL (e.g. `https://impexus.co.in`) | Yes |
| `VITE_FORM_ENDPOINT` | Google Apps Script `/exec` URL for the contact form | Yes (for form to work) |

> **Never commit `.env` or `.env.local`** — they are in `.gitignore`.

### Contact Form Setup (Google Apps Script)

1. Open `scripts/google-apps-script.gs` in the [Google Apps Script editor](https://script.google.com/).
2. Follow the deploy instructions at the top of the file.
3. Copy the deployed Web App URL into `.env.local`:
   ```
   VITE_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `http://localhost:8080` |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |

---

## Deployment on Vercel

### First-time deployment

1. Push this repository to GitHub (already done).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add environment variables in **Vercel Dashboard → Project → Settings → Environment Variables**:
   - `VITE_SITE_URL` = `https://impexus.co.in`
   - `VITE_FORM_ENDPOINT` = your Google Apps Script URL
5. Click **Deploy**.

### Subsequent deployments

Every push to `main` triggers an automatic deployment. Pull requests get preview deployments.

### Custom Domain

1. In Vercel Dashboard → Project → **Settings → Domains**, add `impexus.co.in`.
2. Follow the DNS instructions to point your domain to Vercel.

### Vercel Configuration (`vercel.json`)

The included `vercel.json` configures:
- **SPA rewrites** — all routes serve `index.html` (required for React Router)
- **Asset caching** — `Cache-Control: immutable` for hashed JS/CSS files
- **Security headers** — `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`

---

## Before Going Live Checklist

- [ ] Create `public/og-image.png` (1200×630 px, dark navy, Impexus logo + tagline)
- [ ] Set `VITE_FORM_ENDPOINT` in Vercel environment variables
- [ ] Deploy and test the contact form end-to-end
- [ ] Wire analytics (`src/lib/analytics.ts`) and monitoring (`src/lib/monitoring.ts`) stubs to your chosen vendor (PostHog, Sentry, etc.)
- [ ] Add `Content-Security-Policy` header to `vercel.json` once third-party origins are audited

---

## License

© 2025 Impexus Technologies. All rights reserved.
