/**
 * adminData.ts
 * Static data for the Admin portal dashboard.
 * Do NOT place static data inside UI components — keep it here.
 */

export interface StatsItem {
  title: string
  value: string
  helperText?: string
}

/** KPI cards shown on the Admin dashboard */
export const adminStats: StatsItem[] = [
  { title: "Security", value: "OK", helperText: "No alerts" },
  { title: "Users", value: "1,240", helperText: "Total registered" },
  { title: "Vendors", value: "86", helperText: "Active vendors" },
]

/** Quarterly activity chart data */
export const adminChartData = [
  { label: "Q1", value: 120 },
  { label: "Q2", value: 180 },
  { label: "Q3", value: 240 },
  { label: "Q4", value: 310 },
]
