"use client"

import * as React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
  ChartOptions,
  TooltipItem
} from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2"

import { cn } from "@/lib/utils"

const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export type ChartType = "bar" | "line" | "pie" | "area"

interface UnifiedChartProps {
  type: ChartType
  data: any[]
  config: ChartConfig
  dataKey: string
  xAxisKey: string
  title?: string
  description?: string
  className?: string
  footer?: React.ReactNode
}

const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}, 70%, 50%)`;
};

const resolveColor = (color: string | undefined) => {
    if (!color) return color;
    if (typeof window === 'undefined') return color;
    
    if (color.includes('var(') || color.includes('hsl') || color.includes('rgb') || color.includes('oklch')) {
        const div = document.createElement('div');
        div.style.color = color;
        div.style.display = 'none'; 
        document.body.appendChild(div);
        const computedColor = window.getComputedStyle(div).color;
        document.body.removeChild(div);
        return computedColor || color;
    }
    return color;
}

export function UnifiedChart({
  type,
  data,
  config,
  dataKey,
  xAxisKey,
  title,
  description,
  className,
  footer,
}: UnifiedChartProps) {
  
  const chartData = React.useMemo<ChartData<any>>(() => {
    const labels = data.map((item) => item[xAxisKey])
    
    const backgroundColors = data.map((item) => {
        const key = item[xAxisKey]?.toString().toLowerCase()
        const itemColor = config[key]?.color
        const seriesColor = config[dataKey]?.color
        if (type === 'pie') {
            return resolveColor(itemColor) || getRandomColor()
        }
        return resolveColor(itemColor || seriesColor) || resolveColor("hsl(var(--primary))") || getRandomColor() 
    })

    const borderColors = backgroundColors

    const dataset = {
      label: config[dataKey]?.label || title || "Data",
      data: data.map((item) => item[dataKey]),
      backgroundColor: type === "line" || type === "area" ? config[dataKey]?.color || "hsl(var(--primary))" : backgroundColors,
      borderColor: type === "line" || type === "area" ? config[dataKey]?.color || "hsl(var(--primary))" : borderColors,
      borderWidth: 1,
      fill: type === "area", 
      tension: 0.4, 
    }

    return {
      labels,
      datasets: [dataset],
    }
  }, [data, xAxisKey, dataKey, config, type, title])

  const options = React.useMemo<ChartOptions<any>>(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: type === "pie", 
          position: 'bottom' as const,
        },
        tooltip: {
            callbacks: {
                label: (context: TooltipItem<any>) => {
                    let label = (type === 'pie' ? context.label : context.dataset.label) || '';
                    
                    if (label) {
                        label += ': ';
                    }
                    if (context.formattedValue !== undefined) {
                        label += context.formattedValue;
                    }
                    return label;
                }
            }
        },
        title: {
            display: false, 
        }
      },
      scales: type === "pie" ? {
        x: { display: false },
        y: { display: false }
      } : {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            color: "rgba(0,0,0,0.1)", 
            borderDash: [3, 3],
          },
          border: {
             display: false
          }
        },
      },
    }
  }, [type])

  const ChartComponent = React.useMemo(() => {
    switch (type) {
      case "bar":
        return Bar
      case "line":
        return Line
      case "area":
        return Line 
      case "pie":
        return Pie
      default:
        return Bar
    }
  }, [type])

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {(title || description) && (
        <div className="flex flex-col gap-1">
          {title && <h3 className="text-lg font-semibold leading-none tracking-tight">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <div className="min-h-[200px] w-full h-[300px] relative">
         <ChartComponent data={chartData} options={options} />
      </div>
      
      {footer && <div className="text-sm text-muted-foreground pt-4 border-t">{footer}</div>}
    </div>
  )
}
