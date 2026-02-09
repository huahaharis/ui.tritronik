"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CodeShell } from "@/components/docs/code-block";

export function DemoBlock({
  children,
  code,
  isExpanded,
  onExpand,
}: {
  children: React.ReactNode;
  code: string;
  isExpanded?: boolean;
  onExpand?: (expanded: boolean) => void;
}) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const expanded = isExpanded !== undefined ? isExpanded : internalExpanded;
  const setExpanded = (value: boolean) => {
    if (onExpand) onExpand(value);
    setInternalExpanded(value);
  };

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex min-h-[350px] items-center justify-center p-10">
        <div className="w-full max-w-md">{children}</div>
      </div>

      <div className="border-t bg-muted/50">
        <div
          className={cn(
            "relative overflow-hidden font-mono text-sm transition-all duration-300",
            !expanded ? "max-h-[120px]" : "max-h-full",
          )}
        >
          <CodeShell
            code={code}
            language="tsx"
            className="rounded-none border-0"
          />

          {!expanded && (
            <div className="absolute inset-x-0 bottom-0 z-20 flex h-24 items-end justify-center bg-linear-to-t from-zinc-950/90 to-transparent pb-4">
              <Button
                onClick={() => setExpanded(true)}
                variant="secondary"
                size="sm"
              >
                View Code
              </Button>
            </div>
          )}

          <button
            onClick={() => copy(code)}
            className="absolute right-3 top-3 z-10 rounded-md p-2 text-muted-foreground hover:bg-zinc-800 hover:text-foreground"
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
  );
}
