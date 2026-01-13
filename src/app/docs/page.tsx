"use client"

import { useState, useEffect, useRef } from "react"
import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { TableOfContents } from "@/components/docs/table-of-contents"
import { Header } from "@/components/layout/header"
import { Copy, CopyX as Copy2 } from "lucide-react"

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState<string>("")
    const [tocHeadings, setTocHeadings] = useState<{ id: string; text: string; level: number }[]>([])
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const mainContentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = mainContentRef.current
        if (!container) return

        const elements = Array.from(
            container.querySelectorAll<HTMLElement>(
                "section[id] > h2, section[id] > h3"
            )
        )

        const items = elements.map((el) => {
            const section = el.closest("section")
            return {
                id: section?.id ?? "",
                text: el.textContent ?? "",
                level: Number(el.tagName[1]),
            }
        }).filter(item => item.id)

        setTocHeadings(items)
    }, [])

    useEffect(() => {
        const container = mainContentRef.current
        if (!container || tocHeadings.length === 0) return

        const sections = tocHeadings
            .map((h) => container.querySelector<HTMLElement>(`#${h.id}`))
            .filter(Boolean) as HTMLElement[]

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: container,
                rootMargin: "0px 0px -70% 0px",
                threshold: 0,
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [tocHeadings])



    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    return (
        <>
            <div className="mx-auto max-w-3xl px-6 py-12 md:px-8">
                <div className="mb-8 flex items-start justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-foreground">components.json</h1>
                        <p className="mt-2 text-sm text-muted-foreground">Configuration for your project.</p>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                        <Copy className="h-4 w-4" />
                        Copy Page
                    </button>
                </div>

                <div className="space-y-8 text-foreground">

                    <section id="overview">
                        <p className="text-base leading-relaxed">
                            The <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">components.json</code> file
                            holds configuration for your project.
                        </p>
                    </section>

                    <section id="purpose">
                        <p className="text-base leading-relaxed">
                            We use it to understand how your project is set up and how to generate components customized for your
                            project.
                        </p>
                    </section>

                    <section id="note" className="rounded-lg border border-border bg-muted/50 p-4">
                        <div className="flex gap-3">
                            <span className="text-sm font-semibold text-foreground">Note:</span>
                            <p className="text-sm text-muted-foreground">
                                The <code className="rounded bg-background px-1 py-0.5 font-mono text-xs">components.json</code>{" "}
                                file is optional. It is only required if you're using the CLI to add components to your project. If
                                you're using the copy and paste method, you don't need this file.
                            </p>
                        </div>
                    </section>

                    <section id="create-file">
                        <h2 className="text-2xl font-bold text-foreground">Creating components.json</h2>
                        <p className="mt-3 text-base leading-relaxed">
                            You can create a{" "}
                            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">components.json</code> file in your
                            project by running the following command:
                        </p>

                        <div className="mt-4">
                            <div className="flex items-center gap-2 rounded-t-lg border border-border border-b-0 bg-muted px-4 py-3">
                                <span className="text-xs font-medium text-muted-foreground">pnpm npm yarn bun</span>
                            </div>
                            <div className="relative rounded-b-lg border border-border bg-card p-4 font-mono text-sm text-foreground overflow-x-auto">
                                <pre>
                                    <code>{`pnpm npm yarn bun bunx --bun shadcn@latest init`}</code>
                                </pre>
                                <button
                                    onClick={() =>
                                        copyToClipboard(`pnpm npm yarn bun\nbunx --bun shadcn@latest init`, "create-file-code")
                                    }
                                    className="absolute right-4 top-4 rounded p-2 hover:bg-muted transition-colors"
                                    title="Copy code"
                                >
                                    {copiedId === "create-file-code" ? <Copy2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </section>

                    <section id="learn-more">
                        <p className="mt-4 text-base leading-relaxed">
                            See the{" "}
                            <a href="#" className="font-semibold text-primary underline hover:text-primary/80">
                                CLI section
                            </a>{" "}
                            for more information.
                        </p>
                    </section>

                    <section id="schema" className="mt-12">
                        <h2 className="mb-3 text-2xl font-bold text-foreground">$schema</h2>
                        <p className="text-base text-muted-foreground">
                            You can see the JSON Schema for{" "}
                            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">components.json</code>{" "}
                            <a href="#" className="underline">
                                here
                            </a>
                            .
                        </p>

                        <div className="mt-4">
                            <div className="flex items-center gap-2 rounded-t-lg border border-border border-b-0 bg-muted px-4 py-2">
                                <span className="text-xs font-medium text-muted-foreground">components.json</span>
                            </div>
                            <div className="relative rounded-b-lg border border-border bg-card p-4 font-mono text-sm text-foreground overflow-x-auto">
                                <pre>
                                    <code>{`{ "$schema": "https://ui.shadcn.com/schema.json" }`}</code>
                                </pre>
                                <button
                                    onClick={() =>
                                        copyToClipboard(`{\n  "$schema": "https://ui.shadcn.com/schema.json"\n}`, "schema-code")
                                    }
                                    className="absolute right-4 top-4 rounded p-2 hover:bg-muted transition-colors"
                                    title="Copy code"
                                >
                                    {copiedId === "schema-code" ? <Copy2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </section>

                    <section id="style" className="mt-12">
                        <h2 className="mb-3 text-2xl font-bold text-foreground">style</h2>
                        <p className="text-base text-muted-foreground">
                            The style for your components. This cannot be changed after initialization.
                        </p>

                        <div className="mt-4">
                            <div className="flex items-center gap-2 rounded-t-lg border border-border border-b-0 bg-muted px-4 py-2">
                                <span className="text-xs font-medium text-muted-foreground">components.json</span>
                            </div>
                            <div className="relative rounded-b-lg border border-border bg-card p-4 font-mono text-sm text-foreground overflow-x-auto">
                                <pre>
                                    <code>{`{ "style": "default" }`}</code>
                                </pre>
                                <button
                                    onClick={() => copyToClipboard(`{\n  "style": "default"\n}`, "style-code")}
                                    className="absolute right-4 top-4 rounded p-2 hover:bg-muted transition-colors"
                                    title="Copy code"
                                >
                                    {copiedId === "style-code" ? <Copy2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </section>

                    {[
                        { id: "tailwind", title: "tailwind", desc: "Tailwind CSS configuration options." },
                        { id: "tailwind-config", title: "tailwind.config", desc: "Path to your tailwind.config.ts file." },
                        { id: "tailwind-css", title: "tailwind.css", desc: "Path to your global CSS file." },
                        {
                            id: "tailwind-base-color",
                            title: "tailwind.baseColor",
                            desc: "The base color for the generated components.",
                        },
                        {
                            id: "tailwind-css-variables",
                            title: "tailwind.cssVariables",
                            desc: "Enable or disable CSS variables in generated components.",
                        },
                        { id: "tailwind-prefix", title: "tailwind.prefix", desc: "Optional prefix for Tailwind CSS classes." },
                        { id: "rsc", title: "rsc", desc: "Enable React Server Components support." },
                    ].map((section) => (
                        <section key={section.id} id={section.id} className="mt-12">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">{section.title}</h2>
                            <p className="text-base text-muted-foreground">{section.desc}</p>
                        </section>
                    ))}
                </div>
            </div>
        </>
    )
}
