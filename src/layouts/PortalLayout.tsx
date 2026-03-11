import { Outlet, NavLink, useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { logout } from "@/features/auth/authSlice"

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
    <header className="sticky top-0 z-10 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center gap-4 justify-between">
        <div className="min-w-0 space-y-0.5">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{portalName}</p>
          <p className="truncate font-medium">
            {user?.name ?? "—"} <span className="text-muted-foreground">·</span>{" "}
            <span className="text-muted-foreground">{role ?? "—"}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              dispatch(logout())
              navigate("/user/login", { replace: true })
            }}
          >
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
    <aside className="w-full md:w-64 shrink-0">
      <Card className="bg-sidebar text-sidebar-foreground border-0 shadow-none">
        <CardContent className="p-3">
          <nav className="space-y-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "block rounded-md px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-1 focus-visible:ring-sidebar-ring",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                  ].join(" ")
                }
                end
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </CardContent>
      </Card>
    </aside>
  ) : null

  return (
    <div className="min-h-dvh">
      <TopBar portalName={portalName} />
      <main className="mx-auto w-full max-w-6xl p-6">
        <div
          className={[
            "flex flex-col gap-6",
            hasSidebar ? "md:flex-row" : "",
            sidebarPosition === "right" ? "md:flex-row-reverse" : "",
          ].join(" ")}
        >
          {sidebar}
          <section className="min-w-0 flex-1">
            <div className="rounded-xl border bg-card p-6">
              <Outlet />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

