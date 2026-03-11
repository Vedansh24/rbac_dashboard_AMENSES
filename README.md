<<<<<<< HEAD
# RBAC Dashboard (React + Vite + TypeScript)

Role-Based Access Control (RBAC) demo app with **three portals**:

- **User Portal**: `/user/*`
- **Vendor Portal**: `/vendor/*`
- **Admin Portal**: `/admin/*`

Built with:

- React + Vite + TypeScript (strict)
- Redux Toolkit (auth + session persistence)
- shadcn/ui + Tailwind (theme via CSS variables)
- Recharts (dashboard widgets)

## RBAC Rules

- **USER**: can access User + Vendor portals
- **VENDOR**: can access User + Vendor portals
- **ADMIN**: can access User + Vendor + Admin portals (full access)

## Quick start

1) Install dependencies

```bash
npm install
```

2) Configure environment

- Copy `.env.example` to `.env`
- Update values as needed

3) Run locally

```bash
npm run dev
```

## Auth pages

- User: `/user/login`, `/user/signup`
- Vendor: `/vendor/login`, `/vendor/signup`
- Admin: `/admin/login`, `/admin/signup`

User/Vendor auth pages include the required cross-links between portals.

## Project structure (high level)

- `src/app/`: store + typed hooks
- `src/features/auth/`: auth slice + auth UI
- `src/routes/`: router + guards (ProtectedRoute / RoleGuard / PermissionGuard)
- `src/layouts/`: portal layouts (topbar + optional sidebar)
- `src/components/`: shadcn ui + shared widgets
- `src/data/`: dashboard data (no static data inside UI components)
- `src/theme/`: design tokens (colors/spacing/typography/radius)
- `src/services/`: persistence/services (localStorage auth service)
- `src/types/`: global type definitions

## Scripts

- `npm run dev`: start dev server
- `npm run build`: typecheck + production build
- `npm run lint`: eslint
- `npm run preview`: preview production build

## Deployment

This is a static Vite app. Deploy to any static host (e.g. Vercel / Netlify):

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: use an LTS version supported by your host
=======
# rbac_dashboard_AMENSES
>>>>>>> e3d6678f96150cd2838807365da8e6c23cfa18d7
