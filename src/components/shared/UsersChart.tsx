import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import type { TimeSeriesPoint } from "@/data/dashboard.data"

interface UsersChartProps {
  title?: string
  data: TimeSeriesPoint[]
}

function UsersChart({ title = "Trend", data }: UsersChartProps) {
  return (
    <div className="w-full h-72">
      <h3 className="text-sm font-medium mb-2">{title}</h3>

      <ResponsiveContainer>
        <LineChart data={data.map((d) => ({ label: d.label, value: d.value }))}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="var(--chart-1)" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default UsersChart;