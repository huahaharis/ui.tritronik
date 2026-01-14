import { Copy, Check } from "lucide-react"

export type Pkg = "pnpm" | "npm" | "yarn" | "bun"

function Section({
    title,
    children,
    id
}: {
    title: string
    children: React.ReactNode
    id?: string
}) {
    return (
        <section id={id}>
            <h2 className="mb-3 text-2xl font-bold">{title}</h2>
            <div className="space-y-4">{children}</div>
        </section>
    )
}

function Note({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-lg border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
            {children}
        </div>
    )
}

function Command({
    pkg,
    setPkg,
    code,
    onCopy,
    copied,
    id,
}: {
    pkg: Pkg
    setPkg: (p: Pkg) => void
    code: Record<Pkg, string>
    onCopy: (t: string, id: string) => void
    copied: string | null
    id: string
}) {
    return (
        <div>
            <Tabs value={pkg} onChange={setPkg} />
            <CodeShell
                code={code[pkg]}
                onCopy={onCopy}
                copied={copied}
                id={id}
            />
        </div>
    )
}

function Tabs({
    value,
    onChange,
}: {
    value: Pkg
    onChange: (v: Pkg) => void
}) {
    const tabs: Pkg[] = ["pnpm", "npm", "yarn", "bun"]
    return (
        <div className="flex gap-2 rounded-t-lg border border-border bg-muted px-3 py-2 text-xs font-medium text-muted-foreground">
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
    )
}

function CodeShell({
    code,
    onCopy,
    copied,
    id,
}: {
    code: string
    onCopy: (t: string, id: string) => void
    copied: string | null
    id: string
}) {
    return (
        <div className="relative rounded-b-lg border border-border bg-card p-4 font-mono text-sm">
            <pre>{code}</pre>
            <button
                onClick={() => onCopy(code, id)}
                className="absolute right-3 top-3 rounded p-2 hover:bg-muted"
            >
                {copied === id ? (
                    <Check className="h-4 w-4 text-green-600" />
                ) : (
                    <Copy className="h-4 w-4" />
                )}
            </button>
        </div>
    )
}

function CodeBlock({
    filename,
    code,
    onCopy,
    copied,
    id,
}: {
    filename: string
    code: string
    onCopy: (t: string, id: string) => void
    copied: string | null
    id: string
}) {
    return (
        <div>
            <div className="rounded-t-lg border border-border bg-muted px-3 py-2 text-xs text-muted-foreground">
                {filename}
            </div>
            <CodeShell
                code={code}
                onCopy={onCopy}
                copied={copied}
                id={id}
            />
        </div>
    )
}

export {
    CodeBlock,
    CodeShell,
    Command,
    Tabs,
    Section,
    Note
}