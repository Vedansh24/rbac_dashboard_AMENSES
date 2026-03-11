import { useMemo } from "react"

import { useRole } from "./useRole"
import { hasPermissions } from "@/utils/permissions"
import type { Permission } from "@/types/permission.types"

export function usePermissions(required: readonly Permission[] | Permission) {
  const { role } = useRole()

  const requiredList: readonly Permission[] = Array.isArray(required)
    ? required
    : [required]

  const allowed = useMemo(
    () => (role ? hasPermissions(role, requiredList) : false),
    [role, requiredList]
  )

  return {
    role,
    allowed,
  }
}

