import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

import { useAppSelector } from "@/app/hooks"
import type { Role } from "@/types/role.types"
import type { Permission } from "@/types/permission.types"
import PermissionGuard from "./PermissionGuard"
import RoleGuard from "./RoleGuard"

interface ProtectedRouteProps {
  children: ReactNode
  allowedRoles: Role[]
  requiredPermissions?: Permission[]
}

function ProtectedRoute({ children, allowedRoles, requiredPermissions }: ProtectedRouteProps) {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth)

  // Not logged in → redirect to home
  if (!isAuthenticated) {
    return <Navigate to="/user/login" replace />
  }

  const withRole = (
    <RoleGuard role={role} allowedRoles={allowedRoles}>
      {children}
    </RoleGuard>
  )

  if (!requiredPermissions || requiredPermissions.length === 0) return withRole

  return (
    <PermissionGuard role={role} requiredPermissions={requiredPermissions}>
      {withRole}
    </PermissionGuard>
  )
}

export default ProtectedRoute