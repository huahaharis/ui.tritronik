"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { Highlight, themes, type Language } from "prism-react-renderer";
import { cn } from "@/lib/utils";

export type Pkg = "pnpm" | "npm" | "yarn" | "bun";

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id}>
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
      {children}
    </div>
  );
}

function Command({
  pkg,
  setPkg,
  code,
  onCopy,
  copied,
  id,
}: {
  pkg: Pkg;
  setPkg: (p: Pkg) => void;
  code: Record<Pkg, string>;
  onCopy: (t: string, id: string) => void;
  copied: string | null;
  id: string;
}) {
  return (
    <div>
      <Tabs
        value={pkg}
        onChange={setPkg}
        code={code[pkg]}
        onCopy={onCopy}
        copied={copied}
        id={id}
      />
      <CodeShell
        code={code[pkg]}
        language="bash"
        onCopy={onCopy}
        copied={copied}
        id={id}
      />
    </div>
  );
}

function Tabs({
  value,
  onChange,
  onCopy,
  copied,
  id,
  code,
}: {
  value: Pkg;
  onChange: (v: Pkg) => void;
  onCopy: (t: string, id: string) => void;
  copied: string | null;
  id: string;
  code: string;
}) {
  const tabs: Pkg[] = ["pnpm", "npm", "yarn", "bun"];
  return (
    <div className="flex px-3 justify-between rounded-t-lg border border-border bg-muted">
      <div className="flex gap-2 py-2 text-xs font-medium text-muted-foreground">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={value === t ? "text-foreground" : ""}
          >
            {t}
          </button>
        ))}
      </div>
      <button
        onClick={() => onCopy(code, id)}
        className="rounded p-2 hover:bg-muted"
      >
        {copied === id ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

function CodeShell({
  code,
  language = "tsx",
  onCopy,
  copied,
  id,
  className,
}: {
  code: string;
  language?: string;
  onCopy?: (t: string, id: string) => void;
  copied?: string | null;
  id?: string;
  className?: string;
}) {
  return (
    <Highlight
      theme={themes.vsDark}
      code={code.trim()}
      language={language as Language}
    >
      {({
        className: _className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <div
          className={cn(
            "relative rounded-b-lg border border-border bg-zinc-950 font-mono text-sm dark:bg-zinc-900",
            className,
          )}
        >
          <div className="flex overflow-x-auto">
            <div className="select-none border-r border-zinc-800 bg-zinc-900/50 px-3 py-4 text-right text-muted-foreground sticky left-0 z-10 w-14 shrink-0">
              {tokens.map((_, i) => (
                <div key={i} className="leading-relaxed text-zinc-600">
                  {i + 1}
                </div>
              ))}
            </div>

            <pre
              className={cn(
                _className,
                "px-4 py-4 leading-relaxed min-w-0 flex-1",
              )}
              style={{ ...style, backgroundColor: "transparent" }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        </div>
      )}
    </Highlight>
  );
}

function CodeBlock({
  filename,
  code,
  language = "tsx",
  onCopy,
  copied,
  id,
  className,
}: {
  filename?: string;
  code: string;
  language?: string;
  onCopy?: (t: string, id: string) => void;
  copied?: string | null;
  id?: string;
  className?: string;
}) {
  // Basic copy handler if none provided
  const handleCopy =
    onCopy ||
    ((t: string, id: string) => {
      navigator.clipboard.writeText(t);
    });

  // Basic copied state if none provided handled by parent, or local could be implemented
  // but here we simplify to assuming parent handles state or just fires event.
  // For full compatibility with existing CodeBlock usage, we'll use provided props.

  return (
    <div className={className}>
      {filename && (
        <div className="flex justify-between items-center rounded-t-lg border border-border bg-muted px-3 text-xs text-muted-foreground">
          <div>{filename}</div>

          {onCopy && id && (
            <button
              onClick={() => onCopy(code, id)}
              className="rounded p-2 hover:bg-muted"
            >
              {copied === id ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      )}
      <CodeShell
        code={code}
        language={language}
        onCopy={onCopy}
        copied={copied}
        id={id}
        className={filename ? "rounded-t-none!" : "rounded-lg"}
      />
    </div>
  );
}

export { CodeBlock, CodeShell, Command, Tabs, Section, Note };

export default CodeShell;
