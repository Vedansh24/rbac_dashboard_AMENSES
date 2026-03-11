import type { Role } from "@/types/role.types"
import type { User } from "@/types/user.types"
import { readJson, remove, writeJson } from "./storage"

export interface AuthSession {
  user: User
  token: string
  role: Role
}

interface StoredUser extends User {
  password: string
  role: Role
}

const USERS_KEY = "users"
const SESSION_KEY = "session"

function generateToken(): string {
  return crypto.randomUUID()
}

function readUsers(): StoredUser[] {
  return readJson<StoredUser[]>(USERS_KEY) ?? []
}

function writeUsers(users: StoredUser[]): void {
  writeJson(USERS_KEY, users)
}

export function readSession(): AuthSession | null {
  return readJson<AuthSession>(SESSION_KEY)
}

export function clearSession(): void {
  remove(SESSION_KEY)
}

function writeSession(session: AuthSession): void {
  writeJson(SESSION_KEY, session)
}

export interface SignupInput {
  name: string
  email: string
  password: string
  role: Role
}

export interface LoginInput {
  email: string
  password: string
}

export async function signup(input: SignupInput): Promise<AuthSession> {
  const users = readUsers()
  const email = input.email.trim().toLowerCase()
  const exists = users.some((u) => u.email.toLowerCase() === email)
  if (exists) throw new Error("Email already exists")

  const stored: StoredUser = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    email,
    password: input.password,
    role: input.role,
  }
  writeUsers([...users, stored])

  const session: AuthSession = {
    user: { id: stored.id, name: stored.name, email: stored.email, role: stored.role },
    role: stored.role,
    token: generateToken(),
  }
  writeSession(session)
  return session
}

export async function login(input: LoginInput): Promise<AuthSession> {
  const users = readUsers()
  const email = input.email.trim().toLowerCase()
  const user = users.find((u) => u.email.toLowerCase() === email)
  if (!user || user.password !== input.password) {
    throw new Error("Invalid email or password")
  }

  const session: AuthSession = {
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    role: user.role,
    token: generateToken(),
  }
  writeSession(session)
  return session
}

