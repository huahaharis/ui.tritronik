"use client"

import * as React from "react"
import { BarChart3, LineChart, PieChart, AreaChart as AreaChartIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { UnifiedChart, ChartType, ChartConfig } from "@/components/ui/unified-chart"

const chartData = [
  { month: "January", visitors: 186, fill: "var(--color-january)" },
  { month: "February", visitors: 305, fill: "var(--color-february)" },
  { month: "March", visitors: 237, fill: "var(--color-march)" },
  { month: "April", visitors: 73, fill: "var(--color-april)" },
  { month: "May", visitors: 209, fill: "var(--color-may)" },
  { month: "June", visitors: 214, fill: "var(--color-june)" },
]

const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

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
} satisfies ChartConfig

export function ChartDemo() {
  const [type, setType] = React.useState<ChartType>("bar")

  return (
    <div className="flex w-full flex-col gap-6 p-4">
      <div className="flex items-center gap-2">
        <Button 
            variant={type === "bar" ? "default" : "outline"} 
            size="sm"
            onClick={() => setType("bar")}
        >
            <BarChart3 className="mr-2 h-4 w-4" /> Bar
        </Button>
        <Button 
            variant={type === "line" ? "default" : "outline"}
            size="sm" 
            onClick={() => setType("line")}
        >
            <LineChart className="mr-2 h-4 w-4" /> Line
        </Button>
         <Button 
            variant={type === "area" ? "default" : "outline"} 
            size="sm"
            onClick={() => setType("area")}
        >
            <AreaChartIcon className="mr-2 h-4 w-4" /> Area
        </Button>
        <Button 
            variant={type === "pie" ? "default" : "outline"} 
            size="sm"
            onClick={() => setType("pie")}
        >
            <PieChart className="mr-2 h-4 w-4" /> Pie
        </Button>
      </div>

      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-6 pt-0 mt-6">
            <UnifiedChart
                type={type}
                data={type === "pie" ? pieChartData : chartData}
                dataKey="visitors"
                xAxisKey={type === "pie" ? "browser" : "month"}
                config={chartConfig}
                title="Website Visitors"
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
      </div>
    </div>
  )
}
