import { notFound } from "next/navigation"
import { getComponentData } from "@/lib/component-data"
import ComponentDocClient from "./client"

export default async function ComponentDocPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const component = getComponentData(slug)

  if (!component) {
    notFound()
  }

  return <ComponentDocClient component={component} slug={slug} />
}
