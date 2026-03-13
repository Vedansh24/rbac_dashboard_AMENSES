import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { logout } from "@/features/auth/authSlice"
import { LayoutDashboard, LogOut, Shield } from "lucide-react"

export type SidebarPosition = "left" | "right" | "none"

export interface PortalNavItem {
  label: string
  to: string
}

interface PortalLayoutProps {
  portalName: string
  sidebarPosition: SidebarPosition
  nav: PortalNavItem[]
}

function TopBar({ portalName }: { portalName: string }) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user, role } = useAppSelector((s) => s.auth)

  return (
    <header className="sticky top-0 z-20 border-b border-white/8 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* Gradient accent line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-6 py-3 gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <div className="min-w-0 space-y-0.5">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
              {portalName}
            </p>
            <p className="truncate text-sm font-semibold leading-none">
              {user?.name ?? "—"}
              <span className="mx-1.5 text-muted-foreground font-normal">·</span>
              <span className="text-muted-foreground font-normal">{role ?? "—"}</span>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="gap-1.5"
            onClick={() => navigate("/dashboard")}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            Dashboard
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="gap-1.5"
            onClick={() => {
              dispatch(logout())
              navigate("/user/login", { replace: true })
            }}
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}

export function PortalLayout({ portalName, sidebarPosition, nav }: PortalLayoutProps) {
  const hasSidebar = sidebarPosition !== "none" && nav.length > 0

  const sidebar = hasSidebar ? (
    <aside className="w-full md:w-56 shrink-0 animate-fade-slide-up">
      <div className="rounded-xl border border-border bg-sidebar/80 backdrop-blur-sm p-3 space-y-1">
        {/* Sidebar header */}
        <p className="px-3 pb-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold border-b border-border mb-2">
          Navigation
        </p>
        <nav className="space-y-0.5">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                ].join(" ")
              }
              end
            >
              {({ isActive }) => (
                <>
                  {/* Animated active indicator */}
                  <span
                    className={[
                      "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-r-full bg-gradient-to-b from-primary to-accent transition-all duration-300",
                      isActive ? "h-5 opacity-100" : "h-0 opacity-0",
                    ].join(" ")}
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  ) : null

  return (
    <div className="min-h-dvh">
      <TopBar portalName={portalName} />
      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <div
          className={[
            "flex flex-col gap-6",
            hasSidebar ? "md:flex-row" : "",
            sidebarPosition === "right" ? "md:flex-row-reverse" : "",
          ].join(" ")}
        >
          {sidebar}
          <section className="min-w-0 flex-1">
            <div className="rounded-xl border border-border bg-card glow-border px-6 py-6 animate-fade-slide-up delay-75">
              <Outlet />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
