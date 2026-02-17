# UI/UX Style Lab

A Next.js application for exploring practical UI/UX principles, Laws of UX, and reusable pattern guidance through interactive demos.

## Overview

This project combines:

- A style system playground (six visual styles you can apply to the page)
- A UI/UX pattern library (motion, color, typography, spacing, forms, and states)
- A Laws of UX reference with interactive examples

The app is built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn-style UI primitives.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Build for production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev`: Start local dev server
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run Next.js ESLint checks
- `npm run format`: Format repository with Prettier
- `npm run format:check`: Validate formatting

## Routes

- `/`: Overview page with principles, style gallery, and implementation checklist
- `/styles`: Extended style showcase and template previews
- `/patterns`: Pattern topic index
- `/patterns/motion`
- `/patterns/color`
- `/patterns/typography`
- `/patterns/spacing`
- `/patterns/forms`
- `/patterns/states`
- `/laws`: Laws of UX catalog with category filters (heuristic, gestalt, principle)

## Key Features

- Theme toggle (light/dark), persisted to `localStorage`
- Global design style switching, persisted to `localStorage`
- Interactive demos for principles, pattern topics, and UX laws
- Responsive card-based layouts with consistent tokens and reusable components

## Project Structure

```text
app/
  layout.tsx                 # Root layout, theme/style bootstrapping
  page.tsx                   # Home route
  styles/page.tsx            # Style showcase route
  patterns/page.tsx          # Pattern index route
  patterns/[category]/page.tsx
  laws/page.tsx
components/
  page-content.tsx           # Home page composition
  style-gallery.tsx
  patterns-page-content.tsx
  pattern-topic-page-content.tsx
  laws-page-content.tsx
  design-style-context.tsx   # Global style state + persistence
  patterns-data.ts           # Pattern topic metadata
  laws-of-ux-data.ts         # Laws metadata
  ui/                        # Reusable UI primitives
lib/
  utils.ts
```

## Notes

- This app is educational and reference-oriented: it demonstrates implementation patterns and tradeoffs rather than acting as a production SaaS product.
- Dynamic pattern pages are pre-generated with `generateStaticParams` for known categories.
