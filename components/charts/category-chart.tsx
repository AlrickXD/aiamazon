"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import type { PieLabelRenderProps } from "recharts"; // 👈 important

interface CategoryChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export function CategoryChart({ data }: CategoryChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props: PieLabelRenderProps) => {
            const { name, percent } = props;
            const pct = ((percent ?? 0) * 100).toFixed(0);
            return `${name ?? ""} ${pct}%`;
          }}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
