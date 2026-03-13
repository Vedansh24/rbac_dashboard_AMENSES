interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="animate-fade-slide-up space-y-2 pb-2">
      <h1 className="gradient-text text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h1>
      {/* Animated accent underline */}
      <div
        className="h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
        style={{
          width: "3rem",
          animation: "underlineExpand 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both",
        }}
      />
      {subtitle ? (
        <p className="text-sm text-muted-foreground animate-fade-in delay-150">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
