import type { Permission } from "@/types/permission.types"
import type { Role } from "@/types/role.types"

const rolePermissions: Record<Role, readonly Permission[]> = {
  USER: ["portal:user:read"],
  VENDOR: ["portal:vendor:read"],
  ADMIN: [
    "portal:user:read",
    "portal:vendor:read",
    "portal:admin:read",
    "admin:manage:users",
    "admin:manage:vendors",
  ],
} as const

export function hasPermissions(role: Role, required: readonly Permission[]): boolean {
  const granted = rolePermissions[role]
  return required.every((p) => granted.includes(p))
}

