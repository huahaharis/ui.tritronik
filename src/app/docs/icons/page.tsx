"use client";

import { IconsDemo } from "@/components/demos/icons-demo";

export default function IconsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12 md:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Icons</h1>
        <p className="mt-2 text-base text-muted-foreground">
          A searchable gallery of Lucide icons included in the project.
        </p>
      </div>

      <section id="icons-list">
        <h2 className="mb-6 text-2xl font-bold">Gallery</h2>
        <IconsDemo />
      </section>
    </div>
  );
}
