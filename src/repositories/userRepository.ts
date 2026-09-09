import type { UserState } from '../types'

const STORAGE_KEY = 'seasonal-recipe-app:user-state:v1'

const emptyState: UserState = {
  favorites: [],
  staples: [],
  logs: [],
  revisions: {}
}

export const userRepository = {
  load(): UserState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? { ...emptyState, ...JSON.parse(raw) } : structuredClone(emptyState)
    } catch {
      return structuredClone(emptyState)
    }
  },
  save(state: UserState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  },
  export(state: UserState) {
    return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), state }, null, 2)
  },
  import(raw: string): UserState {
    const parsed = JSON.parse(raw)
    const state = parsed?.state ?? parsed
    if (!state || !Array.isArray(state.favorites) || !Array.isArray(state.logs)) throw new Error('invalid backup')
    return { ...emptyState, ...state }
  }
}
