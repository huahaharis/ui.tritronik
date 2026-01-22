"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

type CommandItem = {
  title: string
  href: string
  keywords?: string[]
}

const pages: CommandItem[] = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/docs/components" },
  { title: "Blocks", href: "/blocks" },
  { title: "Charts", href: "/charts" },
  { title: "Directory", href: "/directory" },
  { title: "Create", href: "/create" },
]

const getStarted: CommandItem[] = [
  { title: "Introduction", href: "/docs/introduction" },
]

export function SearchCommand() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  function runCommand(cb: () => void) {
    setOpen(false)
    cb()
  }

  return (
    <>

      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <Search className="h-4 w-4" />
        Search documentation…
        <kbd className="ml-2 rounded border bg-muted px-1.5 py-0.5 text-xs">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-24">
          <Command
            className={cn(
              "w-full max-w-lg overflow-hidden rounded-xl border border-border bg-background shadow-xl"
            )}
          >
            <div className="flex items-center gap-2 border-b px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Command.Input
                placeholder="Search documentation..."
                className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>

            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-4 py-6 text-sm text-muted-foreground">
                No results found.
              </Command.Empty>

              <Command.Group heading="Pages">
                {pages.map((item) => (
                  <Command.Item
                    key={item.href}
                    value={item.title}
                    onSelect={() =>
                      runCommand(() => router.push(item.href))
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 text-sm aria-selected:bg-muted"
                  >
                    <span className="text-muted-foreground">→</span>
                    {item.title}
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Separator className="my-2 h-px bg-border" />

              <Command.Group heading="Get Started">
                {getStarted.map((item) => (
                  <Command.Item
                    key={item.href}
                    value={item.title}
                    onSelect={() =>
                      runCommand(() => router.push(item.href))
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 text-sm aria-selected:bg-muted"
                  >
                    <span className="text-muted-foreground">→</span>
                    {item.title}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>

            <div className="border-t px-4 py-2 text-xs text-muted-foreground">
              ↵ Go to Page
            </div>
          </Command>
        </div>
      )}
    </>
  )
}
