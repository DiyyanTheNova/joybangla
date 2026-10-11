"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const projectData = [
  { year: "2020", projects: 12 },
  { year: "2021", projects: 25 },
  { year: "2022", projects: 45 },
  { year: "2023", projects: 80 },
  { year: "2024", projects: 120 },
  { year: "2025", projects: 150 },
];

const revenueData = [
  { year: "2020", revenue: 10 },
  { year: "2021", revenue: 25 },
  { year: "2022", revenue: 45 },
  { year: "2023", revenue: 80 },
  { year: "2024", revenue: 140 },
  { year: "2025", revenue: 200 },
];

function ChartCard({ title, data, dataKey, color }: { title: string, data: any[], dataKey: string, color: string }) {
  return (
    <div className="w-full h-87.5 bg-bh-black border border-bh-white/10 p-6 rounded-sm">
      <h3 className="font-heading text-sm uppercase tracking-wider text-bh-ivory/80 mb-6">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`color-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF10" vertical={false} />
          <XAxis dataKey="year" stroke="#F2EDE380" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#F2EDE380" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: "#111111", border: "1px solid #FFFFFF20", borderRadius: "4px" }}
            itemStyle={{ color: "#F2EDE3" }}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            fillOpacity={1}
            fill={`url(#color-${dataKey})`}
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function PerformanceChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <ChartCard title="Projects Delivered" data={projectData} dataKey="projects" color="#C1121F" />
      <ChartCard title="Revenue Growth (K)" data={revenueData} dataKey="revenue" color="#D4AF37" />
    </div>
  );
}