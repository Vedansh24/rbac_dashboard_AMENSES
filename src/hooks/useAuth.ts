import { useCallback } from "react"

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { login, logout, signup } from "@/features/auth/authSlice"
import type { LoginPayload, SignupPayload } from "@/features/auth/authSlice"

export function useAuth() {
  const dispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)

  const loginUser = useCallback(
    (payload: LoginPayload) => dispatch(login(payload)),
    [dispatch]
  )

  const signupUser = useCallback(
    (payload: SignupPayload) => dispatch(signup(payload)),
    [dispatch]
  )

  const logoutUser = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return {
    ...auth,
    login: loginUser,
    signup: signupUser,
    logout: logoutUser,
  }
}

