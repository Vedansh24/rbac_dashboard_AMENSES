import type { Role } from "./role.types";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
}