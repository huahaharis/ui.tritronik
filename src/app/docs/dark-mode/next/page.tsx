"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { CodeBlock, Command, Section, Pkg, Note } from "@/components/docs/code-block"
import Link from "next/link"
import { DemoBlock } from "@/components/docs/demo-block"
import { ModeToggle } from "@/components/demos/dark-mode-demo"

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
                        Adding dark mode to your next app.
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
                <Section title="Install next-themes" id="install-next-themes">
                    <p className="mt-2 text-base text-muted-foreground">
                        Start by installing{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                            next-themes
                        </code>{" "}
                        :
                    </p>

                    <Command
                        pkg={pkg}
                        setPkg={setPkg}
                        code={{
                            pnpm: "pnpm add next-themes",
                            npm: "npm install next-themes",
                            yarn: "yarn add next-themes",
                            bun: "bunx add next-themes",
                        }}
                        onCopy={copy}
                        copied={copied}
                        id="install-next-themes"
                    />

                </Section>

                <Section title="Create a theme provider" id="create-theme-provider">
                    <p className="mt-2 text-base text-muted-foreground">
                        You can now start adding components to your project.
                    </p>

                    <CodeBlock
                        filename="components/theme-provider.tsx"
                        code={`"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme={false} {...props}>
      {children}
    </NextThemesProvider>
  )
}`}
                        onCopy={copy}
                        copied={copied}
                        id="create"
                    />
                </Section>

                <Section title="Wrap your root layout" id="wrap-root-layout">
                    <p className="mt-2 text-base text-muted-foreground">
                        Add the{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                            ThemeProvider
                        </code>{" "}
                        to your layout and add the{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                            suppressHydrationWarning
                        </code>{" "}
                        prop to the{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                            html
                        </code>{" "}
                        tag.
                    </p>

                    <CodeBlock
                        filename="app/layout.tsx"
                        code={`import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider disableTransitionOnChange >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}`}
                        onCopy={copy}
                        copied={copied}
                        id="create"
                    />
                </Section>

                <Section title="Add a mode toggle" id="Add-toggle">
                    <DemoBlock 
                    code={`"use client"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
            {theme === "dark" ? "☀️" : "🌙"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}>
                        <ModeToggle />
                    </DemoBlock>
                </Section>
            </div>
        </div>
    )
}
