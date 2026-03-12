import type { ReactNode } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ChartWidgetProps {
  title: string
  description?: string
  children: ReactNode
}

/**
 * ChartWidget — a shared wrapper card for chart content.
 * Use this whenever you need a labelled card around a chart.
 * For a more generic widget (non-chart), see DashboardWidget.
 */
export function ChartWidget({ title, description, children }: ChartWidgetProps) {
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
