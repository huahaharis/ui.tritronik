import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/main/theme-toggle"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-8">
          <a href="/" className="text-lg font-semibold text-foreground">Design System</a>
          <nav className="hidden gap-6 md:flex">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/docs/components" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Components
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blocks
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Charts
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Directory
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Create
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="search"
            placeholder="Search documentation..."
            className="hidden w-64 rounded-md border border-input bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground md:block"
          />
          <ThemeToggle />
          <Button variant="default">+ New Project</Button>
        </div>
      </div>
    </header>
  )
}
