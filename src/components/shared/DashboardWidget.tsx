import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardWidgetProps {
  title: string
  description?: string
  children: ReactNode
}

export function DashboardWidget({ title, description, children }: DashboardWidgetProps) {
  return (
    <Card className="h-full glow-border animate-fade-slide-up delay-150 transition-all duration-300">
      <CardHeader className="space-y-1 pb-3">
        <div className="flex items-center gap-2">
          {/* Gradient accent dot */}
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-accent" />
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
        </div>
        {description ? (
          <p className="text-sm text-muted-foreground pl-4">{description}</p>
        ) : null}
        {/* Separator line with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-primary/30 via-accent/20 to-transparent mt-1" />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
