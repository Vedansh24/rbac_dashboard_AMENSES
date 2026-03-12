interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl md:text-3xl font-weight-semibold tracking-tight">{title}</h1>
      {subtitle ? <p className="font-size-sm text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}

