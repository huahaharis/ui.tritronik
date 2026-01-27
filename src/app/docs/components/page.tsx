"use client"

import { useState, useEffect, useRef } from "react"
import { getComponentsList } from "@/lib/component-data"
import Link from "next/link"

export default function ComponentsPage() {
  const components = getComponentsList()

  return (
    <>
      <div className="mx-auto max-w-2xl px-6 py-12 md:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground">Components</h1>
          <p className="mt-2 text-base text-muted-foreground">
            A collection of beautifully designed, accessible components built with Radix UI and Tailwind CSS.
          </p>
        </div>

        <div className="space-y-8 text-foreground">
          <section id="all-components">
            <h2 className="mb-6 text-2xl font-bold">All Components</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {components.map((component) => (
                <Link
                  key={component.slug}
                  href={`/docs/components/${component.slug}`}
                  className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary hover:bg-muted"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {component.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{component.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
