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
    onCopy,
    copied,
    id,
    code
}: {
    value: Pkg
    onChange: (v: Pkg) => void
    onCopy: (t: string, id: string) => void
    copied: string | null
    id: string
    code: string
}) {
    const tabs: Pkg[] = ["pnpm", "npm", "yarn", "bun"]
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
    const lines = code.replace(/\n$/, "").split("\n")

    return (
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
                    <code>
                        {lines.map((line, i) => (
                            <div key={i}>{line || " "}</div>
                        ))}
                    </code>
                </pre>
            </div>

        </div>
    )
}

export default CodeShell


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
            <div className="flex justify-between items-center rounded-t-lg border border-border bg-muted px-3 text-xs text-muted-foreground">
                <div>
                    {filename}
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