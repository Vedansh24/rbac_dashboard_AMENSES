import UsersChart from "../../components/shared/UsersChart"
import { DashboardWidget } from "@/components/shared/DashboardWidget"
import { userPortalSeries } from "@/data/dashboard.data"
import { PageHeader } from "@/components/shared/PageHeader"
import { StatsCard } from "@/components/shared/StatsCard"
import { Users, TrendingUp } from "lucide-react"

function UserDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="User dashboard" subtitle="Overview of your activity" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard title="New users" value="120" helperText="Last 30 days" icon={<Users className="h-4 w-4" />} />
        <StatsCard title="Growth" value="+18%" helperText="Compared to previous period" icon={<TrendingUp className="h-4 w-4" />} />
        <StatsCard title="Status" value="Active" helperText="Account health" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DashboardWidget title="User Growth" description="Monthly new users">
          <UsersChart title="Users" data={userPortalSeries} />
        </DashboardWidget>
      </div>
    </div>
  )
}

export default UserDashboard