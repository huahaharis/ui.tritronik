"use client"

import { useState } from "react"
import { DemoBlock } from "@/components/docs/demo-block"
import { demoRegistry } from "@/components/demos"
import { Copy, Check } from "lucide-react"
import type { ComponentData } from "@/lib/component-data"

export default function ComponentDocClient({
    component,
    slug
}: {
    slug?: string
    component: ComponentData
}) {
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const [installationTab, setInstallationTab] = useState("CLI")

    const Demo = component.demo ? demoRegistry[component.demo] : null

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    return (
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 space-y-12">

            <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold">{component.title}</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {component.description}
                    </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted">
                    <Copy className="h-4 w-4" />
                    Copy Page
                </button>
            </div>

            <div className="space-y-12">

                {Demo && component.examples && (
                    <section id="demo">
                        <h2 className="mb-6 text-2xl font-bold">Demo</h2>

                        <DemoBlock code={component.examples}>
                            <Demo />
                        </DemoBlock>
                    </section>
                )}

                {component.installation && (
                    <section id="installation">
                        <h2 className="mb-6 text-2xl font-bold">Installation</h2>

                        <div className="mb-4 flex gap-2 border-b">
                            {component.installation.tabs.map((tab) => (
                                <button
                                    key={tab.label}
                                    onClick={() => setInstallationTab(tab.label)}
                                    className={`border-b-2 px-3 py-2 text-sm ${installationTab === tab.label
                                        ? "border-primary"
                                        : "border-transparent text-muted-foreground"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {installationTab === "CLI" && (
                            <CodeBlock
                                code={component.installation.cli}
                                id="cli-code"
                                copiedId={copiedId}
                                onCopy={copyToClipboard}
                                label="pnpm npm yarn bun"
                            />
                        )}

                        {installationTab === "Manual" && (
                            <p className="text-muted-foreground">
                                {component.installation.manual}
                            </p>
                        )}
                    </section>
                )}

                {component.usage && component.content && (
                    <section id="usage">
                        <h2 className="mb-6 text-2xl font-bold">Usage</h2>
                        <CodeBlock
                            code={component.usage}
                            id="usage-code"
                            copiedId={copiedId}
                            onCopy={copyToClipboard}
                            label="TypeScript"
                        />
                        <div className="h-5" />
                        <CodeBlock
                            code={component.content}
                            id="usage-code"
                            copiedId={copiedId}
                            onCopy={copyToClipboard}
                            label="TypeScript"
                        />
                    </section>
                )}

                <div className="border-t pt-8">
                    <a
                        href="/docs/components"
                        className="text-sm font-semibold text-muted-foreground hover:text-foreground"
                    >
                        ← Components
                    </a>
                </div>
            </div>
        </div>
    )
}

function CodeBlock({
    code,
    id,
    label,
    copiedId,
    onCopy,
}: {
    code: string
    id: string
    label: string
    copiedId: string | null
    onCopy: (text: string, id: string) => void
}) {
    return (
        <div>
            <div className="flex items-center gap-2 rounded-t-lg border border-b-0 bg-muted px-4 py-2">
                <span className="text-xs font-medium text-muted-foreground">
                    {label}
                </span>
            </div>

            <div className="relative rounded-b-lg border bg-card p-4 font-mono text-sm">
                <pre>
                    <code>{code}</code>
                </pre>

                <button
                    onClick={() => onCopy(code, id)}
                    className="absolute right-4 top-4 rounded p-2 hover:bg-muted"
                >
                    {copiedId === id ? (
                        <Check className="h-4 w-4 text-green-600" />
                    ) : (
                        <Copy className="h-4 w-4" />
                    )}
                </button>
            </div>
        </div>
    )
}
