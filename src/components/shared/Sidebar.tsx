import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { 
  Settings, User, Store, Shield, BarChart3, Home, FileText, Database, 
  Bell, HelpCircle, LogOut, X, ChevronRight
} from "lucide-react"
import { useAppSelector } from "@/app/hooks"

interface SidebarOption {
  label: string
  icon: React.ComponentType<{ className?: string }>
  action: () => void
  color?: string
}

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate()
  const { role } = useAppSelector((state) => state.auth)

  const handleLogout = () => {
    // This will be handled by the DashboardHeader component
    navigate("/", { replace: true })
    onClose()
  }

  // Role-based sidebar options
  const getSidebarOptions = (): SidebarOption[] => {
    const baseOptions: SidebarOption[] = [
      {
        label: "Dashboard Home",
        icon: Home,
        action: () => {
          if (role === "USER") navigate("/user/home")
          else if (role === "VENDOR") navigate("/vendor/dashboard")
          else if (role === "ADMIN") navigate("/admin/dashboard")
          onClose()
        },
        color: "text-blue-500"
      }
    ]

    if (role === "USER") {
      baseOptions.push(
        {
          label: "My Profile",
          icon: User,
          action: () => {
            // Navigate to user profile (future implementation)
            console.log("Navigate to user profile")
            onClose()
          },
          color: "text-green-500"
        },
        {
          label: "Settings",
          icon: Settings,
          action: () => {
            // Navigate to user settings (future implementation)
            console.log("Navigate to user settings")
            onClose()
          },
          color: "text-gray-500"
        }
      )
    }

    if (role === "VENDOR") {
      baseOptions.push(
        {
          label: "Business Analytics",
          icon: BarChart3,
          action: () => {
            // Navigate to vendor analytics (future implementation)
            console.log("Navigate to vendor analytics")
            onClose()
          },
          color: "text-purple-500"
        },
        {
          label: "Orders",
          icon: FileText,
          action: () => {
            // Navigate to vendor orders (future implementation)
            console.log("Navigate to vendor orders")
            onClose()
          },
          color: "text-orange-500"
        },
        {
          label: "Settings",
          icon: Settings,
          action: () => {
            // Navigate to vendor settings (future implementation)
            console.log("Navigate to vendor settings")
            onClose()
          },
          color: "text-gray-500"
        }
      )
    }

    if (role === "ADMIN") {
      baseOptions.push(
        {
          label: "User Management",
          icon: User,
          action: () => {
            navigate("/admin/users")
            onClose()
          },
          color: "text-blue-500"
        },
        {
          label: "Vendor Management",
          icon: Store,
          action: () => {
            navigate("/admin/vendors")
            onClose()
          },
          color: "text-purple-500"
        },
        {
          label: "System Settings",
          icon: Settings,
          action: () => {
            // Navigate to admin settings (future implementation)
            console.log("Navigate to admin settings")
            onClose()
          },
          color: "text-gray-500"
        },
        {
          label: "Database Admin",
          icon: Database,
          action: () => {
            // Navigate to database admin (future implementation)
            console.log("Navigate to database admin")
            onClose()
          },
          color: "text-red-500"
        },
        {
          label: "Security Center",
          icon: Shield,
          action: () => {
            // Navigate to security center (future implementation)
            console.log("Navigate to security center")
            onClose()
          },
          color: "text-green-500"
        }
      )
    }

    // Common options for all roles
    baseOptions.push(
      {
        label: "Notifications",
        icon: Bell,
        action: () => {
          // Navigate to notifications (future implementation)
          console.log("Navigate to notifications")
          onClose()
        },
        color: "text-yellow-500"
      },
      {
        label: "Help & Support",
        icon: HelpCircle,
        action: () => {
          // Navigate to help (future implementation)
          console.log("Navigate to help")
          onClose()
        },
        color: "text-cyan-500"
      }
    )

    return baseOptions
  }

  const sidebarOptions = getSidebarOptions()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-screen min-h-screen w-96 bg-card border-l border-border shadow-2xl z-50 animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-card">
          <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Options */}
        <div className="flex-1 overflow-y-auto p-6 bg-card">
          <div className="space-y-2">
            {sidebarOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <button
                  key={index}
                  onClick={option.action}
                  className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors text-left group border border-transparent hover:border-border"
                >
                  <div className={`p-3 rounded-lg bg-muted/50 ${option.color} flex-shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 font-medium text-foreground">{option.label}</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-card">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full justify-start gap-3 p-3"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </>
  )
}
