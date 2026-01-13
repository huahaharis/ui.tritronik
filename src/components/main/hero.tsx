import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
          ✨ New shadow create +
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">The Foundation for your Design System</h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          A set of beautifully designed components that you can customize, extend, and build on. Start here then make it
          your own. Open Source. Open Code.
        </p>
        <div className="flex flex-col gap-3 justify-center sm:flex-row">
          <Button size="lg" variant="default">
            New Project
          </Button>
          <Button size="lg" variant="outline">
            View Components
          </Button>
        </div>
      </div>
    </section>
  )
}
