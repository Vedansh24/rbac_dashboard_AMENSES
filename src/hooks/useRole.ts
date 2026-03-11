import { useMemo } from "react"

import { useAppSelector } from "@/app/hooks"
import type { Role } from "@/types/role.types"

export function useRole() {
  const role = useAppSelector((state) => state.auth.role)

  const flags = useMemo(
    () => ({
      isUser: role === "USER",
      isVendor: role === "VENDOR",
      isAdmin: role === "ADMIN",
    }),
    [role]
  )

  return {
    role: role as Role | null,
    ...flags,
  }
}

