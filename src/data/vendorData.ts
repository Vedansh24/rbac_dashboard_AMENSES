/**
 * vendorData.ts
 * Static data for the Vendor portal dashboard.
 * Do NOT place static data inside UI components — keep it here.
 */

export interface StatsItem {
  title: string
  value: string
  helperText?: string
}

/** KPI cards shown on the Vendor dashboard */
export const vendorStats: StatsItem[] = [
  { title: "Orders", value: "27", helperText: "This week" },
  { title: "Fulfillment", value: "94%", helperText: "On-time delivery" },
  { title: "Trend", value: "+9%", helperText: "Week over week" },
]

/** Daily orders chart data */
export const vendorChartData = [
  { label: "Mon", value: 12 },
  { label: "Tue", value: 18 },
  { label: "Wed", value: 22 },
  { label: "Thu", value: 16 },
  { label: "Fri", value: 27 },
]
