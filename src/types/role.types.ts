export type Role = "USER" | "VENDOR" | "ADMIN";

export const Roles = {
  USER: "USER",
  VENDOR: "VENDOR",
  ADMIN: "ADMIN",
} as const;