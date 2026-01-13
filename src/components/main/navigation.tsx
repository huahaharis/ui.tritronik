export function Navigation() {
  const tabs = ["Examples", "Dashboard", "Tasks", "Playground", "Authentication"]

  return (
    <nav className="container mx-auto flex gap-6 border-b border-border px-4 text-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="border-b-2 border-transparent py-4 text-muted-foreground hover:text-foreground data-[active=true]:border-foreground data-[active=true]:text-foreground"
          data-active={tab === "Examples"}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}
