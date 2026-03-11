import type { Role } from "../types/role.types";

export const rolePermissionCheck = (
  userRole: Role,
  allowedRoles: Role[]
): boolean => {
  return allowedRoles.includes(userRole);
};