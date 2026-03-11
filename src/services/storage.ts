const APP_STORAGE_PREFIX = "rbac-dashboard:"

export function getStorageKey(key: string): string {
  return `${APP_STORAGE_PREFIX}${key}`
}

export function readJson<T>(key: string): T | null {
  const raw = localStorage.getItem(getStorageKey(key))
  if (!raw) return null

  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export function writeJson<T>(key: string, value: T): void {
  localStorage.setItem(getStorageKey(key), JSON.stringify(value))
}

export function remove(key: string): void {
  localStorage.removeItem(getStorageKey(key))
}

