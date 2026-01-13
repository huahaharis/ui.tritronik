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

  return (
    <div className="overflow-hidden rounded-xl border bg-card">

      <div className="flex min-h-50 items-center justify-center p-10">
        <div className="w-full max-w-xl">{children}</div>
      </div>

      <div className="relative border-t bg-muted/50">
        <pre className="max-h-100 overflow-x-auto p-4 text-sm">
          <code className="font-mono">{code}</code>
        </pre>

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
