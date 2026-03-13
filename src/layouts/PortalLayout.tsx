import { Outlet, NavLink } from "react-router-dom"
import { Users, Store, Shield } from "lucide-react"
import { DashboardHeader } from "@/components/shared/DashboardHeader"
import { DashboardFooter } from "@/components/shared/DashboardFooter"

export type SidebarPosition = "left" | "right" | "none"

export interface PortalNavItem {
  label: string
  to: string
  icon?: React.ComponentType<{ className?: string }>
}

interface PortalLayoutProps {
  portalName: string
  sidebarPosition: SidebarPosition
  nav: PortalNavItem[]
}

function AdminSidebar() {
  const adminNavItems: PortalNavItem[] = [
    {
      label: "Admin Dashboard",
      to: "/admin/dashboard",
      icon: Shield,
    },
    {
      label: "Users Management", 
      to: "/admin/users",
      icon: Users,
    },
    {
      label: "Vendors Management",
      to: "/admin/vendors", 
      icon: Store,
    },
    {
      label: "Vendor Dashboard", 
      to: "/vendor/dashboard",
      icon: Store,
    },
    {
      label: "User Dashboard",
      to: "/user/home", 
      icon: Users,
    },
  ]

  return (
    <aside className="w-64 shrink-0 animate-fade-slide-up">
      <div className="rounded-xl border border-border bg-sidebar/80 backdrop-blur-sm p-4 space-y-6">
        {/* Sidebar header */}
        <div>
          <p className="px-3 pb-3 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold border-b border-border">
            Admin Navigation
          </p>
        </div>
        
        <nav className="space-y-1">
          {adminNavItems.map((item) => {
            const Icon = item.icon
            
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                  ].join(" ")
                }
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
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

function RegularSidebar({ nav }: { nav: PortalNavItem[] }) {
  return (
    <aside className="w-64 shrink-0 animate-fade-slide-up">
      <div className="rounded-xl border border-border bg-sidebar/80 backdrop-blur-sm p-4 space-y-6">
        {/* Sidebar header */}
        <div>
          <p className="px-3 pb-3 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold border-b border-border">
            Navigation
          </p>
        </div>
        
        <nav className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon
            
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
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
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export function PortalLayout({ portalName, sidebarPosition, nav }: PortalLayoutProps) {
  const hasSidebar = sidebarPosition !== "none" && nav.length > 0
  const isAdminPortal = portalName === "Admin Portal"

  const sidebar = hasSidebar ? (
    isAdminPortal ? (
      <AdminSidebar />
    ) : (
      <RegularSidebar nav={nav} />
    )
  ) : null

  return (
    <div className="min-h-dvh flex flex-col">
      <DashboardHeader />
      
      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-6 py-8">
          <div
            className={[
              "flex gap-6",
              hasSidebar ? "" : "",
              sidebarPosition === "right" ? "flex-row-reverse" : "",
            ].join(" ")}
          >
            {sidebar}
            <section className="min-w-0 flex-1">
              <div className="rounded-xl border border-border bg-card glow-border px-6 py-6 animate-fade-slide-up delay-75">
                <Outlet />
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <DashboardFooter />
    </div>
  )
}
