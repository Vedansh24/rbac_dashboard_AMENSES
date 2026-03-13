import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface SimpleBarChartProps {
  data: Array<{ label: string; value: number }>
  color?: string
  height?: number
}

export function SimpleBarChart({ data, color = "#8884d8", height = 300 }: SimpleBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
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
        <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
