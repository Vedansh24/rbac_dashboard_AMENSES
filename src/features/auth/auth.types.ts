import type { Role } from "@/types/role.types"

export type Portal = "user" | "vendor" | "admin"
export type AuthMode = "login" | "signup"

export const portalRoleMap: Record<Portal, Role> = {
  user: "USER",
  vendor: "VENDOR",
  admin: "ADMIN",
} as const

