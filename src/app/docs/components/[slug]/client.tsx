"use client"

import { useState } from "react"
import { DemoBlock } from "@/components/docs/demo-block"
import { demoRegistry } from "@/components/demos"
import { Copy, ArrowUpRight } from "lucide-react"
import type { ComponentData } from "@/lib/component-data"
import Link from "next/link"
import { getComponentsList } from "@/lib/component-data"
import { CodeBlock, Command, Pkg } from "@/components/docs/code-block"

export default function ComponentDocClient({
    component,
    slug
}: {
    slug?: string
    component: ComponentData
}) {
    const [pkg, setPkg] = useState<Pkg>("yarn")
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const [installationTab, setInstallationTab] = useState("CLI")
    const components = getComponentsList()
    const Demo = component.demo ? demoRegistry[component.demo] : null

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    function getPrevNext(
        slug: string | undefined,
        items: { slug: string }[]
    ) {
        if (!slug) {
            return { prev: null, next: null }
        }

        const index = items.findIndex((i) => i.slug === slug)

        if (index === -1) {
            return { prev: null, next: null }
        }

        return {
            prev: index > 0 ? items[index - 1].slug : null,
            next:
                index < items.length - 1
                    ? items[index + 1].slug
                    : null,
        }
    }

    const { prev, next } = getPrevNext(slug, components)

    return (
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 space-y-12">

            <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold">{component.title}</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {component.description}
                    </p>
                    <div className="flex flex-row mt-2">
                        {component.docs && (
                            <Link href={`${component.urlDocs}`} className="flex flex-row justify-center place-items-center items-center rounded-xl text-xs bg-muted h-6 w-14">
                                Docs <ArrowUpRight size={12} />
                            </Link>
                        )}
                        {component.apiReference && (
                            <Link href={`${component.urlReference}`} className="flex flex-row justify-center place-items-center items-center rounded-xl text-xs bg-muted h-6 w-28 ml-2">
                                API Reference <ArrowUpRight size={12} />
                            </Link>
                        )}
                    </div>
                </div>
                <div className="flex justify-center place-items-center mt-3">
                    <div
                        onClick={() => copyToClipboard(window.location.href, "page")}
                        className="inline-flex items-center h-6 w-28 gap-2 rounded-md cursor-pointer border border-border bg-card px-3 py-2 text-xs font-medium hover:bg-muted"
                    >
                        <Copy className="h-4 w-4" />
                        Copy Page
                    </div>
                    <div className="flex">
                        {prev ? (
                            <Link
                                href={`/docs/components/${prev}`}
                                className="flex h-6 w-6 mx-2 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground"
                                title="Previous component"
                            >
                                ←
                            </Link>
                        ) : (
                            <Link
                                href="/docs/components"
                                className="flex h-6 w-6 mx-2 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground"
                                title="Back to components"
                            >
                                ←
                            </Link>
                        )}
                        {next ? (
                            <Link
                                href={`/docs/components/${next}`}
                                className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground"
                                title="Next component"
                            >
                                →
                            </Link>
                        ) : (
                            <Link
                                href="/docs/components"
                                className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground"
                                title="Back to components"
                            >
                                →
                            </Link>
                        )}
                    </div>
                </div>
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

                            <Command
                                pkg={pkg}
                                setPkg={setPkg}
                                code={{
                                    pnpm: `pnpm dlx shadcn@latest add @tritronik/${component.title.toLocaleLowerCase()}`,
                                    npm: `npm shadcn@latest add @tritronik/${component.title.toLocaleLowerCase()}`,
                                    yarn: `yarn shadcn@latest add @tritronik/${component.title.toLocaleLowerCase()}`,
                                    bun: `bunx --bun shadcn@latest add @tritronik/${component.title.toLocaleLowerCase()}`,
                                }}
                                onCopy={copyToClipboard}
                                copied={copiedId}
                                id="add-component"
                            />
                        )}

                        {installationTab === "Manual" && (
                            <>
                                {component.installation.manual !== "" ? (
                                    <Command
                                        pkg={pkg}
                                        setPkg={setPkg}
                                        code={{
                                            pnpm: `pnpm add ${component.installation.manual}`,
                                            npm: `npm install ${component.installation.manual}`,
                                            yarn: `yarn add ${component.installation.manual}`,
                                            bun: `bunx add ${component.installation.manual}`,
                                        }}
                                        onCopy={copyToClipboard}
                                        copied={copiedId}
                                        id="add-component"
                                    />
                                ) : (
                                    <p className="text-muted-foreground">
                                        {component.installation.manual}
                                    </p>
                                )}
                            </>
                        )}
                    </section>
                )}

                {component.usage && component.content && (
                    <section id="usage">
                        <h2 className="mb-6 text-2xl font-bold">Usage</h2>
                        <CodeBlock
                            code={component.usage}
                            id="usage-code"
                            copied={copiedId}
                            onCopy={copyToClipboard}
                            filename="TypeScript"
                        />
                        <div className="h-5" />
                        <CodeBlock
                            code={component.content}
                            id="usage-code"
                            copied={copiedId}
                            onCopy={copyToClipboard}
                            filename="TypeScript"
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