import type { ReactNode } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardWidgetProps {
  title: string
  description?: string
  children: ReactNode
}

export function DashboardWidget({ title, description, children }: DashboardWidgetProps) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-base">{title}</CardTitle>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

