"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { CodeBlock, Command, Section, Pkg, Note } from "@/components/docs/code-block"
import Link from "next/link"

export default function NextJsInstallationPage() {
    const [pkg, setPkg] = useState<Pkg>("pnpm")
    const [copied, setCopied] = useState<string | null>(null)

    function copy(text: string, id: string) {
        navigator.clipboard.writeText(text)
        setCopied(id)
        setTimeout(() => setCopied(null), 1500)
    }
    return (
        <div className="mx-auto max-w-2xl px-6 py-12 md:px-8">

            <div className="mb-10 flex items-start justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-foreground">Next.js</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Install and configure shadcn/ui for Next.js.
                    </p>
                </div>

                <div className="flex justify-center place-items-center mt-3">
                    <div
                        onClick={() => copy(window.location.href, "page")}
                        className="inline-flex items-center h-6 w-28 gap-2 rounded-md cursor-pointer border border-border bg-card px-3 py-2 text-xs font-medium hover:bg-muted"
                    >
                        <Copy className="h-4 w-4" />
                        Copy Page
                    </div>
                    <div className="flex">
                        <Link
                            href="/docs/installation"
                            className="flex justify-center place-items-center text-xs font-semibold rounded-md h-6 w-6 border border-border bg-card px-3 py-2 mx-2 text-muted-foreground hover:text-foreground"
                        >←
                        </Link>
                        <Link
                            href="/docs/installation/vite"
                            className="flex justify-center place-items-center text-xs font-semibold rounded-md h-6 w-6 border border-border bg-card px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            →
                        </Link>
                    </div>
                </div>
            </div>

            <div className="space-y-12">
                <Section title="Create project" id="create-project">
                    <p className="mt-2 text-base text-muted-foreground">
                        Run the{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                            init
                        </code>{" "}
                        command to create a new Next.js project or to set up an existing one:
                    </p>

                    <Command
                        pkg={pkg}
                        setPkg={setPkg}
                        code={{
                            pnpm: "pnpm dlx shadcn@latest init",
                            npm: "npx shadcn@latest init",
                            yarn: "yarn shadcn@latest init",
                            bun: "bunx --bun shadcn@latest init",
                        }}
                        onCopy={copy}
                        copied={copied}
                        id="create-project"
                    />

                    <p className="mt-3 text-sm text-muted-foreground">
                        Add URL tritronik for install components to registry on components.json.
                    </p>

                    <CodeBlock
                        filename="components.json"
                        code={`.....

"registries": {
    "@tritronik": "https://ui-tritronik.vercel.app/r/{name}.json"
}`}
                        onCopy={copy}
                        copied={copied}
                        id="add"
                    />

                    <p className="mt-3 text-sm text-muted-foreground">
                        The setup finished, now you can try it.
                    </p>
                </Section>

                <Section title="Add Components" id="add-components">
                    <p className="mt-2 text-base text-muted-foreground">
                        You can start adding components to your project.
                    </p>

                    <Command
                        pkg={pkg}
                        setPkg={setPkg}
                        code={{
                            pnpm: "pnpm dlx shadcn@latest add @tritronik/button",
                            npm: "npx shadcn@latest add @tritronik/button",
                            yarn: "yarn shadcn@latest add @tritronik/button",
                            bun: "bunx --bun shadcn@latest add @tritronik/button",
                        }}
                        onCopy={copy}
                        copied={copied}
                        id="add-component"
                    />

                    <p className="mt-4 text-base text-muted-foreground">
                        The command above will add the{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                            Button
                        </code>{" "}
                        component to your project. You can then import it like this:
                    </p>
                    <CodeBlock
                        filename="app/page.tsx"
                        code={`{
import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}
                        onCopy={copy}
                        copied={copied}
                        id="add"
                    />
                </Section>
            </div>
        </div>
    )
}
