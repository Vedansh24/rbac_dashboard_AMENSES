import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

import type { Role } from "@/types/role.types"
import { rolePermissionCheck } from "@/utils/rolePermissionCheck"

interface RoleGuardProps {
  role: Role | null
  allowedRoles: readonly Role[]
  children: ReactNode
}

export default function RoleGuard({ role, allowedRoles, children }: RoleGuardProps) {
  if (!role) return <Navigate to="/unauthorized" replace />
  if (!rolePermissionCheck(role, [...allowedRoles])) return <Navigate to="/unauthorized" replace />
  return children
}

