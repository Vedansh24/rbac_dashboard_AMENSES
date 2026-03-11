export interface TimeSeriesPoint {
  label: string
  value: number
}

export const userPortalSeries: TimeSeriesPoint[] = [
  { label: "Jan", value: 40 },
  { label: "Feb", value: 60 },
  { label: "Mar", value: 90 },
  { label: "Apr", value: 120 },
] as const

export const vendorPortalSeries: TimeSeriesPoint[] = [
  { label: "Mon", value: 12 },
  { label: "Tue", value: 18 },
  { label: "Wed", value: 22 },
  { label: "Thu", value: 16 },
  { label: "Fri", value: 27 },
] as const

export const adminPortalSeries: TimeSeriesPoint[] = [
  { label: "Q1", value: 120 },
  { label: "Q2", value: 180 },
  { label: "Q3", value: 240 },
  { label: "Q4", value: 310 },
] as const

