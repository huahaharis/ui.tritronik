"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function DemoBlock({
  children,
  code,
  language = "tsx",
}: {
  children: React.ReactNode
  code: string
  language?: string
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const lines = code.replace(/\n$/, "").split("\n")
  
  return (
    <div className="overflow-hidden rounded-xl border bg-card">

      <div className="flex min-h-50 items-center justify-center p-10">
        <div className="w-full max-w-xl">{children}</div>
      </div>

      <div className="relative rounded-b-lg border border-border bg-card font-mono text-sm">
        <div className="flex">
          <div className="select-none border-r border-border bg-muted/50 px-3 py-4 text-right text-muted-foreground">
            {lines.map((_, i) => (
              <div key={i} className="leading-relaxed">
                {i + 1}
              </div>
            ))}
          </div>
          <pre className="px-4 py-4 leading-relaxed overflow-x-auto">
            <code className="font-mono">{code}</code>
          </pre>
        </div>

        <button
          onClick={copy}
          className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground hover:bg-muted"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}
