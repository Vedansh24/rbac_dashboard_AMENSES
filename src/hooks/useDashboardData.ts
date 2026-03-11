import {
  adminPortalSeries,
  userPortalSeries,
  vendorPortalSeries,
  type TimeSeriesPoint,
} from "@/data/dashboard.data"

export type PortalKey = "user" | "vendor" | "admin"

interface PortalDashboardData {
  series: TimeSeriesPoint[]
}

const dashboards: Record<PortalKey, PortalDashboardData> = {
  user: { series: userPortalSeries },
  vendor: { series: vendorPortalSeries },
  admin: { series: adminPortalSeries },
}

export function useDashboardData(portal: PortalKey): PortalDashboardData {
  return dashboards[portal]
}

