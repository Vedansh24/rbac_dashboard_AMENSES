import UsersChart from "../../components/shared/UsersChart"
import { DashboardWidget } from "@/components/shared/DashboardWidget"
import { vendorPortalSeries } from "@/data/dashboard.data"
import { PageHeader } from "@/components/shared/PageHeader"
import { StatsCard } from "@/components/shared/StatsCard"
import { Package, ShoppingCart, TrendingUp } from "lucide-react"

function VendorDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Vendor dashboard" subtitle="Orders and performance" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard title="Orders" value="27" helperText="This week" icon={<ShoppingCart className="h-4 w-4" />} />
        <StatsCard title="Fulfillment" value="94%" helperText="On-time delivery" icon={<Package className="h-4 w-4" />} />
        <StatsCard title="Trend" value="+9%" helperText="Week over week" icon={<TrendingUp className="h-4 w-4" />} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DashboardWidget title="Orders" description="Orders per day">
          <UsersChart title="Orders" data={vendorPortalSeries} />
        </DashboardWidget>
      </div>
    </div>
  )
}

export default VendorDashboard