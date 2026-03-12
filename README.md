# RBAC Dashboard — React + Vite + TypeScript

A **Role-Based Access Control (RBAC)** demo application with three separate portals:

| Portal | Route Prefix | Roles Allowed |
|--------|-------------|---------------|
| User Portal | `/user/*` | USER, VENDOR, ADMIN |
| Vendor Portal | `/vendor/*` | VENDOR, ADMIN |
| Admin Portal | `/admin/*` | ADMIN only |

---

## Tech Stack

- **React 18** + **Vite** + **TypeScript** (strict mode)
- **Redux Toolkit** — auth slice, session persistence via `localStorage`
- **shadcn/ui** + **Tailwind CSS** — theme via CSS variables
- **Recharts** — interactive dashboard widgets
- **React Router v6** — file-based routing with role guards

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd rbac-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` as needed:

```env
VITE_APP_ENV=development
VITE_API_URL=http://localhost:5000
```

### 4. Run the development server

```bash
npm run dev
```

App runs at `http://localhost:5173` by default.

---

## Login Credentials (Demo)

Since there is no real backend, use any of the pre-configured test accounts:

| Email | Password | Role |
|-------|----------|------|
| `user@example.com` | `password` | USER |
| `vendor@example.com` | `password` | VENDOR |
| `admin@example.com` | `password` | ADMIN |

---

## RBAC Permission Rules

- **USER** — access User Portal only
- **VENDOR** — access User + Vendor portals
- **ADMIN** — full access to all portals (User + Vendor + Admin)

---

## Project Structure

```
src/
├── app/            # Redux store setup + typed hooks
├── components/
│   ├── ui/         # shadcn/ui base components
│   └── shared/     # Reusable widgets: StatsCard, DashboardWidget, ChartWidget
├── data/           # Static data files (NO static data inside UI components)
│   ├── dashboard.data.ts
│   ├── adminData.ts
│   └── vendorData.ts
├── features/
│   └── auth/       # Auth slice, login/signup components
├── hooks/          # Reusable custom hooks
│   ├── useAuth.ts
│   ├── useRole.ts
│   ├── usePermissions.ts
│   └── useDashboardData.ts
├── layouts/        # Portal layouts (topbar + sidebar)
├── pages/
│   ├── admin/      # AdminDashboard
│   ├── user/       # UserDashboard
│   └── vendor/     # VendorDashboard
├── routes/         # Router + guards (ProtectedRoute, RoleGuard, PermissionGuard)
├── services/       # localStorage auth persistence
├── theme/          # Design tokens (colors, spacing, typography, radius)
├── types/          # Global TypeScript type definitions
└── utils/          # Permission helpers and utilities
```

---

## Auth Pages

- `/user/login` — `/user/signup`
- `/vendor/login` — `/vendor/signup`
- `/admin/login` — `/admin/signup`

User and Vendor auth pages include cross-portal links.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | TypeScript check + production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

---

## Deployment

This is a fully static Vite app — deploy to any static host:

- **Vercel / Netlify**: Build command `npm run build`, output directory `dist`
- **GitHub Pages**: use the `gh-pages` package or a GitHub Actions workflow
- **Node version**: Use a current LTS version (18+)
