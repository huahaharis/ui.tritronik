"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/layout/header"
import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { TableOfContents } from "@/components/docs/table-of-contents"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const mainRef = useRef<HTMLDivElement>(null)
  const [tocHeadings, setTocHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([])
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const container = mainRef.current
    if (!container) return

    const elements = Array.from(
      container.querySelectorAll<HTMLElement>(
        "section[id] > h2, section[id] > h3"
      )
    )

    setTocHeadings(
      elements
        .map((el) => {
          const section = el.closest("section")
          return {
            id: section?.id ?? "",
            text: el.textContent ?? "",
            level: Number(el.tagName[1]),
          }
        })
        .filter((i) => i.id)
    )
  }, [pathname])

  useEffect(() => {
    const container = mainRef.current
    if (!container || tocHeadings.length === 0) return

    const sections = tocHeadings
      .map((h) => container.querySelector<HTMLElement>(`#${h.id}`))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: container,
        rootMargin: "0px 0px -70% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [tocHeadings])

  return (
    <>
      <Header />

      <div className="flex h-[calc(100vh-3.5rem)]">
        <DocsSidebar />

        <main ref={mainRef} className="flex-1 overflow-y-auto">
          {children}
        </main>

        <TableOfContents
          headings={tocHeadings}
          activeSection={activeSection}
        />
      </div>
    </>
  )
}
