"use client"

import { Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { CodeBlock, Command, Section, Pkg, Note } from "@/components/docs/code-block"


export default function ViteInstallationPage() {
    const [pkg, setPkg] = useState<Pkg>("yarn")
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
                    <h1 className="text-4xl font-bold text-foreground">Vite</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Install and configure shadcn/ui for Vite.
                    </p>
                </div>

                <div className="flex justify-center place-items-center mt-3">
                    <div
                        onClick={() => copy(window.location.href, "page")}
                        className="inline-flex items-center h-6 w-28 gap-2 cursor-pointer rounded-md border border-border bg-card px-3 py-2 text-xs font-medium hover:bg-muted"
                    >
                        <Copy className="h-4 w-4" />
                        Copy Page
                    </div>
                    <div className="flex">
                        <Link
                          href="/docs/installation/next"
                            className="flex justify-center place-items-center text-xs font-semibold rounded-md h-6 w-6 border border-border bg-card px-3 py-2 mx-2 text-muted-foreground hover:text-foreground"
                        >←
                        </Link>
                        <Link
                            href="/docs/installation"
                            className="flex justify-center place-items-center text-xs font-semibold rounded-md h-6 w-6 border border-border bg-card px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            →
                        </Link>
                    </div>
                </div>
            </div>

            <div className="space-y-12">

                <Section title="Create Project" id="create-project">

                    <p className="text-base">
                        Start by creating a new React project using{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                            vite
                        </code>
                        . Select the React + TypeScript template:
                    </p>

                    <Command
                        pkg={pkg}
                        setPkg={setPkg}
                        code={{
                            pnpm: "pnpm create vite@latest",
                            npm: "npm create vite@latest",
                            yarn: "yarn create vite",
                            bun: "bun create vite",
                        }}
                        onCopy={copy}
                        copied={copied}
                        id="create-project"
                    />
                </Section>

                <Section title="Add Tailwind CSS" id="add-tailwind">
                    <Command
                        pkg={pkg}
                        setPkg={setPkg}
                        code={{
                            pnpm: "pnpm add -D tailwindcss @tailwindcss/vite",
                            npm: "npm install -D tailwindcss @tailwindcss/vite",
                            yarn: "yarn add -D tailwindcss @tailwindcss/vite",
                            bun: "bun add -D tailwindcss @tailwindcss/vite",
                        }}
                        onCopy={copy}
                        copied={copied}
                        id="tailwind-install"
                    />

                    <p className="mt-4 text-base">
                        Replace everything in{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                            src/index.css
                        </code>{" "}
                        with the following:
                    </p>

                    <CodeBlock
                        filename="src/index.css"
                        code={`@import "tailwindcss";`}
                        onCopy={copy}
                        copied={copied}
                        id="index-css"
                    />

                </Section>

                <Section title="Edit tsconfig.json file" id="edit-tsconfig">

                    <p className="text-base text-muted-foreground">
                        Add <code>baseUrl</code> and <code>paths</code> to enable absolute
                        imports.
                    </p>

                    <CodeBlock
                        filename="tsconfig.json"
                        code={`{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
                        onCopy={copy}
                        copied={copied}
                        id="tsconfig"
                    />
                </Section>

                <Section title="Edit tsconfig.app.json file" id="edit-tsconfig.app">
                    <p className="text-base text-muted-foreground">
                        Add the following to resolve paths for your IDE:
                    </p>

                    <CodeBlock
                        filename="tsconfig.app.json"
                        code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
                        onCopy={copy}
                        copied={copied}
                        id="tsconfig-app"
                    />
                </Section>

                <Section title="Update vite.config.ts" id="update-vite">
                    <Command
                        pkg={pkg}
                        setPkg={setPkg}
                        code={{
                            pnpm: "pnpm add -D @types/node",
                            npm: "npm install -D @types/node",
                            yarn: "yarn add -D @types/node",
                            bun: "bun add -D @types/node",
                        }}
                        onCopy={copy}
                        copied={copied}
                        id="types-node"
                    />

                    <CodeBlock
                        filename="vite.config.ts"
                        code={`import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`}
                        onCopy={copy}
                        copied={copied}
                        id="vite-config"
                    />
                </Section>

                <Section title="Run the CLI" id="run-cli">
                    <Command
                        pkg={pkg}
                        setPkg={setPkg}
                        code={{
                            pnpm: "pnpm dlx shadcn@latest init",
                            npm: "npx shadcn@latest init",
                            yarn: "yarn shadcn@latest init",
                            bun: "bunx shadcn@latest init",
                        }}
                        onCopy={copy}
                        copied={copied}
                        id="cli"
                    />

                    <Note>
                        You will be asked a few questions to configure{" "}
                        <code>components.json</code>.
                    </Note>
                </Section>

                <Section title="Add Components" id="add-component">
                    <Command
                        pkg={pkg}
                        setPkg={setPkg}
                        code={{
                            pnpm: "pnpm dlx shadcn@latest add @tritronik/button",
                            npm: "npx shadcn@latest add @tritronik/button",
                            yarn: "yarn shadcn@latest add @tritronik/button",
                            bun: "bunx shadcn@latest add @tritronik/button",
                        }}
                        onCopy={copy}
                        copied={copied}
                        id="add-button"
                    />

                    <CodeBlock
                        filename="src/App.tsx"
                        code={`import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}`}
                        onCopy={copy}
                        copied={copied}
                        id="app-tsx"
                    />
                </Section>
            </div>
        </div>
    )
}
