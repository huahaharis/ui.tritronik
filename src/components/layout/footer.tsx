export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8 text-center text-xs text-muted-foreground">
        <p>
          Built by{" "}
          <a href="#" className="hover:text-foreground">
            Vercel
          </a>
          . The source code is available on{" "}
          <a href="#" className="hover:text-foreground">
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
