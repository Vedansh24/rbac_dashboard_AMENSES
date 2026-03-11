import UsersChart from "../../components/shared/UsersChart"
import { DashboardWidget } from "@/components/shared/DashboardWidget"
import { adminPortalSeries } from "@/data/dashboard.data"
import { PageHeader } from "@/components/shared/PageHeader"
import { StatsCard } from "@/components/shared/StatsCard"
import { Shield, Users, Store } from "lucide-react"

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admin dashboard" subtitle="System overview and controls" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard title="Security" value="OK" helperText="No alerts" icon={<Shield className="h-4 w-4" />} />
        <StatsCard title="Users" value="1,240" helperText="Total registered" icon={<Users className="h-4 w-4" />} />
        <StatsCard title="Vendors" value="86" helperText="Active vendors" icon={<Store className="h-4 w-4" />} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DashboardWidget title="System Activity" description="Quarterly activity">
          <UsersChart title="Activity" data={adminPortalSeries} />
        </DashboardWidget>
      </div>
    </div>
  )
}

export default AdminDashboard