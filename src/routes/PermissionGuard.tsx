import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

import type { Permission } from "@/types/permission.types"
import type { Role } from "@/types/role.types"
import { hasPermissions } from "@/utils/permissions"

interface PermissionGuardProps {
  role: Role | null
  requiredPermissions: readonly Permission[]
  children: ReactNode
}

export default function PermissionGuard({
  role,
  requiredPermissions,
  children,
}: PermissionGuardProps) {
  if (!role) return <Navigate to="/unauthorized" replace />
  if (!hasPermissions(role, requiredPermissions)) return <Navigate to="/unauthorized" replace />
  return children
}

