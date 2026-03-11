# TypeScript Cheat Sheet (RBAC Project)

## Interfaces

Interfaces define the structure of objects.

```ts
interface User {
  id: number
  name: string
  email: string
}

// An interface defines the structure of an object.
// In this example, the User interface ensures that every user object must contain an id, name, and email with specific data types.
// TypeScript checks this during development to prevent incorrect data.

--------------------------------------------
Union Types

Used for defining RBAC roles.

type Role = "USER" | "VENDOR" | "ADMIN"

// A union type restricts a variable to a specific set of values.
// In this RBAC system, a user can only have one of three roles: USER, VENDOR, or ADMIN.

------------------------
Generics

Used for reusable API response types.

interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}
Optional Properties
interface AuthState {
  user?: User
  token?: string
}
Function Types
const login = (email: string, password: string): boolean => {
  return true
}
Component Props Typing
interface ButtonProps {
  label: string
  onClick: () => void
}