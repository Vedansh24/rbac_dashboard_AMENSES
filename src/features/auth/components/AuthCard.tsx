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
import { Users, BarChart3, Lock, ArrowRight, Sparkles, Shield } from "lucide-react"

interface AuthCardProps {
  portal: Portal
  mode: AuthMode
}

const portalLabel: Record<Portal, string> = {
  user: "User",
  vendor: "Vendor",
  admin: "Admin",
}

const portalConfig: Record<Portal, {
  icon: any
  gradient: string
  description: string
  features: string[]
}> = {
  user: {
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    description: "Access your personal dashboard and analytics",
    features: ["Personal Analytics", "Performance Metrics", "Real-time Data"]
  },
  vendor: {
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
    description: "Manage your business and track performance",
    features: ["Business Analytics", "Revenue Tracking", "Customer Insights"]
  },
  admin: {
    icon: Lock,
    gradient: "from-red-500 to-orange-500",
    description: "Complete system administration and control",
    features: ["System Control", "User Management", "Security Monitoring"]
  }
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

  const config = portalConfig[portal]
  const Icon = config.icon

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">RBAC Dashboard</p>
                <p className="text-xs text-muted-foreground">Role-Based Access Control</p>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/user/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                User
              </Button>
            </Link>
            <Link to="/vendor/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Vendor
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Portal Info */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${config.gradient}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-primary">{portalLabel[portal]} Portal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {mode === "login" ? "Welcome Back" : "Join Us Today"}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {config.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What you'll get:</h3>
              <div className="grid gap-3">
                {config.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Sparkles className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Auth Card */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <Card className="relative border-0 shadow-2xl bg-background/80 backdrop-blur-xl">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-50 blur-sm" />
              
              <div className="relative">
                <CardHeader className="space-y-2 pb-6">
                  <CardTitle className="text-2xl font-bold text-center">
                    {portalLabel[portal]} {mode === "login" ? "Login" : "Signup"}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground text-center">
                    {mode === "login" 
                      ? "Enter your credentials to access your account" 
                      : "Create your account to get started"
                    }
                  </p>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-5">
                    {mode === "signup" ? (
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          autoComplete="name"
                          className="h-11"
                          required
                        />
                      </div>
                    ) : null}

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        autoComplete={mode === "login" ? "current-password" : "new-password"}
                        className="h-11"
                        required
                      />
                    </div>

                    {error ? (
                      <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                        <p className="text-sm text-destructive">{error}</p>
                      </div>
                    ) : null}
                  </CardContent>

                  <CardFooter className="flex flex-col gap-4 pt-6">
                    <Button 
                      type="submit" 
                      disabled={loading} 
                      className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium shadow-lg"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Please wait...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          {mode === "login" ? "Sign In" : "Create Account"}
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      )}
                    </Button>

                    <div className="space-y-3 text-center">
                      <p className="text-sm text-muted-foreground">
                        {modeSwitch.text}{" "}
                        <Link 
                          className="text-primary hover:underline font-medium underline-offset-4" 
                          to={modeSwitch.to}
                        >
                          {modeSwitch.cta}
                        </Link>
                      </p>

                      {cross ? (
                        <p className="text-sm text-muted-foreground">
                          {cross.text}{" "}
                          <Link 
                            className="text-primary hover:underline font-medium underline-offset-4" 
                            to={cross.to}
                          >
                            Click here →
                          </Link>
                        </p>
                      ) : null}
                    </div>
                  </CardFooter>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Vedansh. All rights reserved. #AMENSES_INNVOTATION
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

