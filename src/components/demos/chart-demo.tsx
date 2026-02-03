"use client";

import * as React from "react";
import {
  BarChart3,
  LineChart,
  PieChart,
  AreaChart as AreaChartIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  UnifiedChart,
  ChartType,
  ChartConfig,
} from "@/components/ui/unified-chart";

const barData = [
  { month: "January", visitors: 186, fill: "var(--color-january)" },
  { month: "February", visitors: 305, fill: "var(--color-february)" },
  { month: "March", visitors: 237, fill: "var(--color-march)" },
  { month: "April", visitors: 73, fill: "var(--color-april)" },
  { month: "May", visitors: 209, fill: "var(--color-may)" },
  { month: "June", visitors: 214, fill: "var(--color-june)" },
];

const pieData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
  chrome: { label: "Chrome", color: "#E91E63" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
  january: { label: "January", color: "var(--chart-1)" },
  february: { label: "February", color: "var(--chart-2)" },
  march: { label: "March", color: "var(--chart-3)" },
  april: { label: "April", color: "var(--chart-4)" },
  may: { label: "May", color: "var(--chart-5)" },
  june: { label: "June", color: "var(--chart-1)" },
} satisfies ChartConfig;

export function ChartDemo() {
  return <ChartBarDemo />;
}

export function ChartBarDemo() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
      <UnifiedChart
        type="bar"
        data={barData}
        dataKey="visitors"
        xAxisKey="month"
        config={chartConfig}
        title="Bar Chart"
        description="Jan - June 2024"
      />
    </div>
  );
}

export function ChartLineDemo() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
      <UnifiedChart
        type="line"
        data={barData}
        dataKey="visitors"
        xAxisKey="month"
        config={chartConfig}
        title="Line Chart"
        description="Jan - June 2024"
        footer={
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <LineChart className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export function ChartAreaDemo() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
      <UnifiedChart
        type="area"
        data={barData}
        dataKey="visitors"
        xAxisKey="month"
        config={chartConfig}
        title="Area Chart"
        description="Jan - June 2024"
      />
    </div>
  );
}

export function ChartPieDemo() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
      <UnifiedChart
        type="pie"
        data={pieData}
        dataKey="visitors"
        xAxisKey="browser"
        config={chartConfig}
        title="Pie Chart"
        description="Browser Usage"
      />
    </div>
  );
}
