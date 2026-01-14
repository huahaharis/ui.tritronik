"use client"

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents({
  headings,
  activeSection,
}: {
  headings: Heading[]
  activeSection: string
}) {
  if (!headings.length) {
    return null
  }

  return (
    <aside className="hidden xl:block w-72 shrink-0 mr-10">
      <div className="sticky top-20 space-y-6 px-4 py-8 overflow-y-auto max-h-[calc(100vh-6rem)]">
        <h3 className="text-sm font-semibold text-foreground">
          On This Page
        </h3>

        <nav className="space-y-2">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={[
                "block text-sm transition-colors",
                heading.level === 3 && "pl-4",
                activeSection === heading.id
                  ? "font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {heading.text}
            </a>
          ))}
        </nav>

        <div className="rounded-xl border bg-muted/40 p-4 text-sm">
          <h4 className="mb-1 font-semibold">
            Deploy your shadcn/ui app on Vercel
          </h4>
          <p className="mb-3 text-xs text-muted-foreground">
            Trusted by OpenAI, Sonos, Adobe, and more.
          </p>
          <button className="w-full rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
            Deploy Now
          </button>
        </div>
      </div>
    </aside>
  )
}
