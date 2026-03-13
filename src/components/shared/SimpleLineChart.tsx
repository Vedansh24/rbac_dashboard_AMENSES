import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface SimpleLineChartProps {
  data: Array<{ label: string; value: number }>
  color?: string
  height?: number
}

export function SimpleLineChart({ data, color = "#8884d8", height = 300 }: SimpleLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          dataKey="label" 
          tick={{ fontSize: 12 }}
          tickLine={{ stroke: "currentColor", opacity: 0.2 }}
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          tickLine={{ stroke: "currentColor", opacity: 0.2 }}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke={color} 
          strokeWidth={2}
          dot={{ fill: color, r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
