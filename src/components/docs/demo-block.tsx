"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DemoBlock({
  children,
  code,
  isExpanded,
  onExpand,
}: {
  children: React.ReactNode
  code: string
  isExpanded?: boolean
  onExpand?: (expanded: boolean) => void
}) {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const expanded = isExpanded !== undefined ? isExpanded : internalExpanded
  const setExpanded = (value: boolean) => {
    if (onExpand) onExpand(value)
    setInternalExpanded(value)
  }

  const lines = code.replace(/\n$/, "").split("\n")

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex min-h-[350px] items-center justify-center p-10">
        <div className="w-full max-w-md">{children}</div>
      </div>

      <div className="border-t bg-muted/50">

        <div className={cn(
          "relative overflow-hidden font-mono text-sm transition-all duration-300",
          "relative overflow-hidden font-mono text-sm transition-all duration-300",
          !expanded ? "max-h-[120px]" : "max-h-full"
        )}>
          <div className="flex">
            <div className="select-none border-r border-border bg-muted/50 px-3 py-4 text-right text-muted-foreground">
              {lines.map((_, i) => (
                <div key={i} className="leading-relaxed">
                  {i + 1}
                </div>
              ))}
            </div>
            <pre className="w-full overflow-x-auto px-4 py-4 leading-relaxed">
              <code className="font-mono">{code}</code>
            </pre>
          </div>

          {!expanded && (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-background via-background/80 to-transparent">
              <Button onClick={() => setExpanded(true)}>View Code</Button>
            </div>
          )}

          <button
            onClick={copy}
            className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground hover:bg-muted z-10"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
