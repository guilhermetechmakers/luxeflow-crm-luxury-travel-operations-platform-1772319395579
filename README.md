# LuxeFlow CRM — Luxury Travel Operations Platform

Enterprise CRM for luxury travel agencies. Centralizes client management, booking lifecycle, operations, Resort Bible, and AI-assisted drafting.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** + **React Router 6**
- **Tailwind CSS v3** with design system
- **Radix UI** primitives
- **TanStack React Query**
- **React Hook Form** + **Zod**
- **Recharts** for data visualization
- **Sonner** for toasts

## Getting Started

```bash
npm install
npm run build
```

## Project Structure

- `src/pages/` — Page components (Landing, Dashboard, Clients, Bookings, etc.)
- `src/components/` — UI components and layout (sidebar, cards, buttons)
- `src/lib/` — Utilities (api, utils, supabase)
- `src/contexts/` — React contexts (sidebar state)

## Key Pages

- **Landing** — Hero, features, CTAs
- **Auth** — Login, signup, forgot password
- **Dashboard** — Command Center, KPIs, quick actions
- **Clients** — List, detail, create
- **Bookings** — List, detail, create wizard
- **Resort Bible** — Directory with faceted search
- **Tasks** — Kanban and list views
- **Calendar** — Week view
- **Team Chat** — Channels and messages
- **AI Assistant** — Context-aware recommendations
- **Admin** — Org settings, users, integrations

## Design System

- **Primary:** White (#FFFFFF)
- **Accent:** Olive green (#8A9A5B)
- **Supporting:** Gold (#C6AB62)
- **Typography:** Playfair Display (headings), Lato (body)

## Environment

Create `.env` with:

- `VITE_API_URL` — API base URL (optional)
- `VITE_SUPABASE_URL` — Supabase project URL (when using Supabase)
- `VITE_SUPABASE_ANON_KEY` — Supabase anon key (when using Supabase)
