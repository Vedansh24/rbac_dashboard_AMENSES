export function DashboardFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 RBAC Dashboard
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
