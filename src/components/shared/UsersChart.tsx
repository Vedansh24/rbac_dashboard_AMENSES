import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import type { TimeSeriesPoint } from "@/data/dashboard.data"

interface UsersChartProps {
  title?: string
  data: TimeSeriesPoint[]
}

/** Custom tooltip with a glassmorphism-style card */
function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { value: number }[]
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-white/10 bg-card/80 px-3 py-2 text-xs shadow-lg backdrop-blur-md">
      <p className="font-medium text-foreground">{label}</p>
      <p className="gradient-text font-bold text-sm">{payload[0].value}</p>
    </div>
  )
}

function UsersChart({ title = "Trend", data }: UsersChartProps) {
  const chartData = data.map((d) => ({ label: d.label, value: d.value }))

  return (
    <div className="w-full h-72">
      {title && (
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          {title}
        </h3>
      )}

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="var(--chart-1)" stopOpacity={0.35} />
              <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0}    />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="currentColor"
            className="text-border"
            opacity={0.4}
          />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "var(--primary)", strokeWidth: 1, opacity: 0.5 }} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--chart-1)"
            strokeWidth={2}
            fill="url(#colorValue)"
            dot={{ r: 3, fill: "var(--chart-1)", strokeWidth: 0 }}
            activeDot={{ r: 5, fill: "var(--chart-1)", stroke: "var(--background)", strokeWidth: 2 }}
            animationDuration={800}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UsersChart