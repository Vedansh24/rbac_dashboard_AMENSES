function requireEnv(key: string): string {
  const value = import.meta.env[key] as string | undefined
  if (!value) throw new Error(`Missing required env var: ${key}`)
  return value
}

export const env = {
  apiUrl: requireEnv("VITE_API_URL"),
  appEnv: requireEnv("VITE_APP_ENV"),
} as const

