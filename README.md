# AI-Pass Frontend

Mini AI-Pass web app built with Angular as a dashboard-style AI workspace and marketplace experience.

## Live Demo
https://willowy-dolphin-791016.netlify.app/


## Repository
`https://github.com/SuraviFedev/ai-pass-frontend`

## Overview
This project implements a frontend-first AI workspace product experience for the **AI-Pass – AI Workspace & Marketplace** task.

The app focuses on:
- clean enterprise UI
- modular Angular architecture
- responsive dashboard layout
- integration-ready screens using mocked services and data
- a realistic product flow rather than a landing page

## Implemented Screens
- **Workspace** dashboard with welcome area, quick actions, recent activity, and shortcuts
- **Automations** page
- **AI Agents / Skills** page
- **AI Apps Marketplace** with app cards, search, category filter, and status filter
- **Analysis Studio** with a working AI App Analysis flow
- **Invoice AI** screen with extracted invoice fields and decision state
- **Usage** page with plan details, credits, metrics, billing history, and upgrade modal

## Main Functional Feature
### AI App Analysis
Users can enter a tool name such as `ChatGPT`, `Midjourney`, or one of the marketplace apps and generate a structured analysis.

The output includes:
- Summary
- Use Cases
- Strengths
- Limitations
- Recommendation

This behavior is currently **mocked through frontend services and JSON-like mock data**, but the UX is structured so it can be replaced by a real API later with minimal UI changes.

## Tech Stack
- Angular 21
- TypeScript
- SCSS
- Angular Router
- Standalone components
- Mock data/services for product simulation

## Architecture
The codebase is organized by product areas and shared UI building blocks.

```text
src/
  app/
    core/
      constants/
      mock-data/
      models/
      services/
    features/
      agents/
      analysis-studio/
      automations/
      invoice-ai/
      marketplace/
      usage/
      workspace/
    layout/
      dashboard-layout/
      header/
      sidebar/
    shared/
      components/
    app.component.*
    app.config.ts
    app.routes.ts
  styles/
  styles.scss
```

### Architecture Notes
- **core/** contains app-wide models, services, and mocked business data
- **features/** groups route-level product screens by domain
- **layout/** contains persistent dashboard shell pieces like header and sidebar
- **shared/components/** contains reusable UI primitives such as cards, titles, progress bars, and toasts
- **standalone Angular components** keep each screen modular and easy to scale

## Routing
Current app routes:
- `/` → Workspace
- `/automations`
- `/agents`
- `/apps`
- `/analysis`
- `/invoice-ai`
- `/usage`

## Design Decisions
- Used a **dashboard layout** instead of a landing page to match the product brief
- Kept the visual language **clean, enterprise, and structured**
- Built **reusable card-based components** to keep spacing and hierarchy consistent
- Used **mock services instead of hardcoded template logic** so the frontend remains integration-ready
- Added **marketplace filters/search** to make the marketplace feel more like a real product directory
- Kept the **analysis flow intentionally structured** so it can later call an external AI API without major refactoring

## What Is Mocked
The following are mocked on the frontend:
- marketplace app catalog
- AI analysis results
- quick actions and recent activity
- invoice extraction result
- usage metrics and billing history
- automation and agent data
- toast feedback and loading simulation

## Local Development
Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm start
```

Production build:

```bash
npm run build
```

## Netlify Deployment
This repo already includes a `netlify.toml` file.

### Recommended deploy settings
- **Build command:** `npm run build`
- **Publish directory:** `dist/ai-pass-frontend/browser`

### Deploy steps
1. Push the repository to GitHub.
2. Log in to Netlify.
3. Click **Add new site** → **Import an existing project**.
4. Select the GitHub repository.
5. Confirm these settings:
   - Build command: `npm run build`
   - Publish directory: `dist/ai-pass-frontend/browser`
6. Deploy the site.
7. After the first deploy, optionally rename the site to a cleaner public URL.

### SPA routing support
`netlify.toml` already includes a redirect rule to route all paths to `index.html`, which is required for Angular client-side routing.


## Future Improvements
- connect Analysis Studio to a real backend/API
- add auth and protected routes
- add state management if the app grows further
- add unit tests for services and key components
- add dark/light theme switching
- add marketplace detail pages
- add drag-and-drop upload interactions for Invoice AI
- persist filters and recent activity
- add loading skeletons and richer micro-interactions

## Notes
This project is intentionally frontend-focused. The goal is to demonstrate strong product thinking, component structure, and a polished UX while keeping data mocked and integration-ready.
