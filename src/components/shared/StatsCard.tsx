import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  helperText?: string
  icon?: ReactNode
  /** Stagger index for entrance animation delay (0–3) */
  index?: number
}

const delayClass = ["", "delay-75", "delay-150", "delay-225"] as const

export function StatsCard({
  title,
  value,
  helperText,
  icon,
  index = 0,
}: StatsCardProps) {
  const delay = delayClass[Math.min(index, 3)]

  return (
    <Card
      className={`group relative overflow-hidden glow-border animate-fade-slide-up ${delay} transition-all duration-300`}
    >
      {/* Subtle shimmer highlight on hover */}
      <div className="pointer-events-none absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 ease-in-out" />

      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </CardTitle>
        {icon ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:ring-primary/40">
            {icon}
          </div>
        ) : null}
      </CardHeader>

      <CardContent className="space-y-1">
        <div className="gradient-text text-2xl font-bold tracking-tight">
          {value}
        </div>
        {helperText ? (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        ) : null}
      </CardContent>
    </Card>
  )
}
