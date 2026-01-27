"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function ThemingPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12 md:px-8 space-y-14">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Theming</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Learn how to customize colors, radius, and other design tokens.
        </p>
      </div>

      <section id="css-variables">
        <h2 className="text-2xl font-bold">CSS Variables</h2>
        <p className="mt-3 text-base text-muted-foreground my-2">
          We use CSS variables for colors, radius, and spacing. These variables
          are defined at the root level and consumed by Tailwind utility classes.
        </p>

        <CodeBlock
          id="css-vars"
          filename="globals.css"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;

  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;

  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;

  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}`}
        />
      </section>

      <section id="utility-classes">
        <h2 className="text-2xl font-bold">Utility classes</h2>
        <p className="mt-3 text-base text-muted-foreground my-2">
          CSS variables are mapped to Tailwind utilities using the Tailwind
          configuration file.
        </p>

        <CodeBlock
          id="tailwind-theme"
          filename="tailwind.config.ts"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`theme: {
  extend: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
}`}
        />
      </section>

      <section id="convention">
        <h2 className="text-2xl font-bold">Convention</h2>
        <p className="mt-3 text-base text-muted-foreground my-2">
          All colors are defined using HSL values. This makes it easier to
          generate consistent light and dark themes.
        </p>

        <CodeBlock
          id="hsl-example"
          filename="example"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;`}
        />
      </section>

      <section id="variables">
        <h2 className="text-2xl font-bold">List of variables</h2>
        <p className="mt-3 text-base text-muted-foreground my-2">
          Below is the full list of supported CSS variables.
        </p>

        <CodeBlock
          id="all-vars"
          filename="globals.css"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--ring`}
        />
      </section>

      <section id="adding-colors">
        <h2 className="text-2xl font-bold">Adding new colors</h2>
        <p className="mt-3 text-base text-muted-foreground my-2">
          You can add your own colors by defining new CSS variables and mapping
          them in the Tailwind configuration.
        </p>

        <CodeBlock
          id="custom-color"
          filename="globals.css"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`:root {
  --brand: 262 83% 58%;
  --brand-foreground: 210 40% 98%;
}`}
        />
        <div className="h-5"/>
        <CodeBlock
          id="custom-color-tailwind"
          filename="tailwind.config.ts"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`colors: {
  brand: {
    DEFAULT: "hsl(var(--brand))",
    foreground: "hsl(var(--brand-foreground))",
  },
}`}
        />
      </section>

      <section id="other-formats">
        <h2 className="text-2xl font-bold">Other color formats</h2>
        <p className="mt-3 text-base text-muted-foreground my-2">
          While HSL is recommended, you may use other color formats if needed.
        </p>

        <CodeBlock
          id="rgb-example"
          filename="example"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`--custom: 255 0 0;
color: rgb(var(--custom));`}
        />
      </section>

      <section id="base-colors">
        <h2 className="text-2xl font-bold">Base colors</h2>
        <p className="mt-3 text-base text-muted-foreground my-2">
          These are the base color palettes provided by default.
        </p>

        <CodeBlock
          id="neutral"
          filename="Neutral"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;`}
        />
        <div className="h-5"/>
        <CodeBlock
          id="zinc"
          filename="Zinc"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`--background: 0 0% 98%;
--foreground: 240 5% 10%;`}
        />
        <div className="h-5"/>
        <CodeBlock
          id="gray"
          filename="Gray"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`--background: 0 0% 97%;
--foreground: 224 71% 4%;`}
        />
        <div className="h-5"/>
        <CodeBlock
          id="slate"
          filename="Slate"
          copied={copiedId}
          onCopy={copyToClipboard}
          code={`--background: 210 40% 98%;
--foreground: 222.2 47.4% 11.2%;`}
        />
      </section>
    </div>
  )
}
