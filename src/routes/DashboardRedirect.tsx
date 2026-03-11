import { Navigate } from "react-router-dom"

import { useAppSelector } from "@/app/hooks"

export default function DashboardRedirect() {
  const { isAuthenticated, role } = useAppSelector((s) => s.auth)

  if (!isAuthenticated) return <Navigate to="/user/login" replace />

  if (role === "ADMIN") return <Navigate to="/admin/dashboard" replace />
  if (role === "VENDOR") return <Navigate to="/vendor/dashboard" replace />
  return <Navigate to="/user/home" replace />
}

