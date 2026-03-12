import { Link, useNavigate } from "react-router-dom"
import { useMemo, useState } from "react"
import type { FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { clearAuthError, login, signup } from "@/features/auth/authSlice"
import type { AuthMode, Portal } from "../auth.types"
import { portalRoleMap } from "../auth.types"

interface AuthCardProps {
  portal: Portal
  mode: AuthMode
}

const portalLabel: Record<Portal, string> = {
  user: "User",
  vendor: "Vendor",
  admin: "Admin",
}

function getCrossAuthLink(portal: Portal, mode: AuthMode): { to: string; text: string } | null {
  if (portal === "admin") return null

  const otherPortal: Portal = portal === "user" ? "vendor" : "user"
  const to = `/${otherPortal}/${mode}`
  const text =
    portal === "user"
      ? `Do you want to ${mode === "login" ? "sign in" : "sign up"} as a Vendor?`
      : `Do you want to ${mode === "login" ? "sign in" : "sign up"} as a User?`

  return { to, text }
}

function getModeSwitchLink(portal: Portal, mode: AuthMode): { to: string; text: string; cta: string } {
  if (mode === "login") {
    return {
      to: `/${portal}/signup`,
      text: "Don't have an account?",
      cta: "Sign up",
    }
  }

  return {
    to: `/${portal}/login`,
    text: "Already have an account?",
    cta: "Login",
  }
}

export function AuthCard({ portal, mode }: AuthCardProps) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { loading, error } = useAppSelector((s) => s.auth)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const title = `${portalLabel[portal]} ${mode === "login" ? "Login" : "Signup"}`
  const submitLabel = mode === "login" ? "Login" : "Create account"
  const cross = useMemo(() => getCrossAuthLink(portal, mode), [portal, mode])
  const modeSwitch = useMemo(() => getModeSwitchLink(portal, mode), [portal, mode])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    dispatch(clearAuthError())

    if (mode === "login") {
      const result = await dispatch(login({ email, password }))
      if (login.fulfilled.match(result)) {
        navigate("/dashboard", { replace: true })
      }
      return
    }

    const role = portalRoleMap[portal]
    const result = await dispatch(signup({ name, email, password, role }))
    if (signup.fulfilled.match(result)) {
      navigate("/dashboard", { replace: true })
    }
  }

  return (
    <div className="min-h-dvh flex flex-col neutral-bg">
      <header className="border-b neutral-bg/80 backdrop-blur">
        {/* Constrain header to same width as auth card so logo + title align with form */}
        <div className="grid grid-cols-3 items-center spacing-x-lg spacing-y-md">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full primary-bg primary-text font-size-lg font-weight-semibold">
              V
            </div>
            <span className="font-size-sm font-weight-semibold tracking-wide neutral-text">
              VEDANSH
            </span>
          </div>
          <h1 className="flex-1 text-center font-size-lg md:font-size-xl font-weight-semibold tracking-wide text-muted-foreground">
            VEDANSH&apos;S DASHBOARD
          </h1>
          <div className="h-10 w-10" aria-hidden="true" />
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center spacing-lg">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-size-xl">{title}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {mode === "signup" ? (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>
            ) : null}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                required
              />
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <p className="font-size-sm text-muted-foreground">
              {modeSwitch.text}{" "}
              <Link className="text-primary underline underline-offset-4" to={modeSwitch.to}>
                {modeSwitch.cta} →
              </Link>
            </p>

            {cross ? (
              <p className="font-size-sm text-muted-foreground">
                {cross.text}{" "}
                <Link className="text-primary underline underline-offset-4" to={cross.to}>
                  Click →
                </Link>
              </p>
            ) : null}
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Please wait..." : submitLabel}
            </Button>

            {portal !== "admin" && mode === "login" ? (
              <p className="w-full text-center font-size-xs text-muted-foreground">
                Are you an admin?{" "}
                <Link className="text-primary underline underline-offset-4" to="/admin/signup">
                  Sign up as Admin →
                </Link>
              </p>
            ) : null}
          </CardFooter>
        </form>
      </Card>
      </div>

      <footer className="border-t neutral-bg spacing-y-sm">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-size-sm text-muted-foreground md:flex-row spacing-x-lg">
    
    <p>© 2026 Vedansh. All rights reserved. #AMENSES_INNVOTATION
    </p>

    <div className="flex gap-4">
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Terms</a>
      <a href="#" className="hover:underline">Support</a>
    </div>

  </div>
</footer>
    </div>

    
  )
}

