import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { logout } from "@/features/auth/authSlice"
import { Shield, LogOut, Sun } from "lucide-react"

export function DashboardHeader() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user, role } = useAppSelector((s) => s.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/", { replace: true })
  }

  const handleLogoClick = () => {
    navigate("/", { replace: true })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* Gradient accent line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-6 py-3 gap-4">
        {/* Brand */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-3 min-w-0 hover:opacity-80 transition-opacity cursor-pointer border-0 bg-transparent p-0"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <div className="min-w-0 space-y-0.5">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
              RBAC DASHBOARD
            </p>
            <p className="truncate text-sm font-semibold leading-none">
              {user?.name ?? "—"}
              <span className="mx-1.5 text-muted-foreground font-normal">·</span>
              <span className="text-muted-foreground font-normal">{role ?? "—"}</span>
            </p>
          </div>
        </button>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle - Placeholder for future implementation */}
          <Button variant="ghost" size="sm" className="w-9 px-0">
            <Sun className="h-4 w-4" />
          </Button>
          
          {/* Logout Button */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
