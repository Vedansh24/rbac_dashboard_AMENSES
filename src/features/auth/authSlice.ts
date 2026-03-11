import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { AuthState } from "@/types/auth.types"
import type { Role } from "@/types/role.types"
import type { User } from "@/types/user.types"
import * as authService from "@/services/auth.service"

export interface LoginPayload {
  email: string
  password: string
}

export interface SignupPayload {
  name: string
  email: string
  password: string
  role: Role
}

export const hydrateAuth = createAsyncThunk("auth/hydrate", async () => {
  return authService.readSession()
})

export const login = createAsyncThunk<authService.AuthSession, LoginPayload>(
  "auth/login",
  async (payload) => {
    return authService.login(payload)
  }
)

export const signup = createAsyncThunk<authService.AuthSession, SignupPayload>(
  "auth/signup",
  async (payload) => {
    return authService.signup(payload)
  }
)

const initialState: AuthState = {
  user: null,
  token: null,
  role: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

function applySession(
  state: AuthState,
  session: authService.AuthSession | null
): void {
  if (!session) {
    state.user = null
    state.token = null
    state.role = null
    state.isAuthenticated = false
    return
  }

  state.user = session.user as User
  state.token = session.token
  state.role = session.role
  state.isAuthenticated = true
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      authService.clearSession()
      applySession(state, null)
    },
    clearAuthError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrateAuth.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        hydrateAuth.fulfilled,
        (state, action: PayloadAction<authService.AuthSession | null>) => {
          state.loading = false
          applySession(state, action.payload)
        }
      )
      .addCase(hydrateAuth.rejected, (state) => {
        state.loading = false
      })

    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        applySession(state, action.payload)
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? "Login failed"
      })

    builder
      .addCase(signup.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false
        applySession(state, action.payload)
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? "Signup failed"
      })
  },
})

export const { logout, clearAuthError } = authSlice.actions
export default authSlice.reducer

