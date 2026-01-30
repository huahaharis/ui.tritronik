"use client";

import { useState, Fragment, type ElementType } from "react";
import { DemoBlock } from "@/components/docs/demo-block";
import { demoRegistry } from "@/components/demos";
import { Copy } from "lucide-react";
import type { ComponentData } from "@/lib/component-data";
import Link from "next/link";
import { getComponentsList } from "@/lib/component-data";
import { CodeBlock, Command, Pkg } from "@/components/docs/code-block";

export default function ComponentDocClient({
  component,
  slug,
}: {
  slug?: string;
  component: ComponentData;
}) {
  const [pkg, setPkg] = useState<Pkg>("pnpm");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [installationTab, setInstallationTab] = useState("CLI");
  const [demoTab, setDemoTab] = useState("Radix UI");
  const [isExpanded, setIsExpanded] = useState(false);
  const components = getComponentsList();
  const Demo = component.demo
    ? (demoRegistry[component.demo] as ElementType)
    : undefined;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  function getPrevNext(slug: string | undefined, items: { slug: string }[]) {
    if (!slug) {
      return { prev: null, next: null };
    }

    const index = items.findIndex((i) => i.slug === slug);

    if (index === -1) {
      return { prev: null, next: null };
    }

    return {
      prev: index > 0 ? items[index - 1].slug : null,
      next: index < items.length - 1 ? items[index + 1].slug : null,
    };
  }

  const { prev, next } = getPrevNext(slug, components);

  return (
    <div className="mx-auto max-w-2xl px-6 py-12 md:px-8 space-y-12">
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold">{component.title}</h1>
          <p className="mt-2 text-base text-muted-foreground">
            {component.description}
          </p>
        </div>
        <div className="flex justify-center place-items-center mt-3">
          <div
            onClick={() => copyToClipboard(window.location.href, "page")}
            className="inline-flex items-center h-6 w-28 gap-2 rounded-md cursor-pointer border border-border bg-card px-3 py-2 text-xs font-medium hover:bg-muted"
          >
            <Copy className="h-4 w-4" />
            Copy Page
          </div>
          <div className="flex">
            {prev ? (
              <Link
                href={`/docs/components/${prev}`}
                className="flex h-6 w-6 mx-2 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground"
                title="Previous component"
              >
                ←
              </Link>
            ) : (
              <Link
                href="/docs/components"
                className="flex h-6 w-6 mx-2 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground"
                title="Back to components"
              >
                ←
              </Link>
            )}
            {next ? (
              <Link
                href={`/docs/components/${next}`}
                className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground"
                title="Next component"
              >
                →
              </Link>
            ) : (
              <Link
                href="/docs/components"
                className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-foreground"
                title="Back to components"
              >
                →
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {Demo && component.content && (
          <section id="demo">
            <div className="flex mb-4">
              <div
                onClick={() => [setDemoTab("Radix UI"), setIsExpanded(false)]}
                className={`px-4 py-2 transition-all duration-300 cursor-pointer ${demoTab === "Radix UI" ? "border-b-2 border-primary" : ""}`}
              >
                Radix UI
              </div>
              <div
                onClick={() => [setDemoTab("Base UI"), setIsExpanded(false)]}
                className={`px-4 py-2 transition-all duration-300 cursor-pointer ${demoTab === "Base UI" ? "border-b-2 border-primary" : ""}`}
              >
                Base UI
              </div>
            </div>

            <DemoBlock
              code={
                demoTab === "Radix UI"
                  ? component.content
                  : typeof component.examples === "string"
                    ? component.examples
                    : component.content
              }
              isExpanded={isExpanded}
              onExpand={setIsExpanded}
            >
              <Demo />
            </DemoBlock>
          </section>
        )}

        {component.installation && (
          <section id="installation">
            <h2 className="mb-6 text-2xl font-bold">Installation</h2>

            <div className="mb-4 flex gap-2 border-b">
              {component.installation.tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setInstallationTab(tab.label)}
                  className={`border-b-2 px-3 py-2 text-sm ${
                    installationTab === tab.label
                      ? "border-primary"
                      : "border-transparent text-muted-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {installationTab === "CLI" && (
              <Command
                pkg={pkg}
                setPkg={setPkg}
                code={{
                  pnpm: `pnpm dlx shadcn@latest add @tritronik/${component.title.toLocaleLowerCase().split(" ").join("-")}`,
                  npm: `npm shadcn@latest add @tritronik/${component.title.toLocaleLowerCase().split(" ").join("-")}`,
                  yarn: `yarn shadcn@latest add @tritronik/${component.title.toLocaleLowerCase().split(" ").join("-")}`,
                  bun: `bunx --bun shadcn@latest add @tritronik/${component.title.toLocaleLowerCase().split(" ").join("-")}`,
                }}
                onCopy={copyToClipboard}
                copied={copiedId}
                id="add-component"
              />
            )}

            {installationTab === "Manual" && (
              <>
                {component.installation.manual !== "" ? (
                  <Command
                    pkg={pkg}
                    setPkg={setPkg}
                    code={{
                      pnpm: `pnpm add ${component.installation.manual}`,
                      npm: `npm install ${component.installation.manual}`,
                      yarn: `yarn add ${component.installation.manual}`,
                      bun: `bunx add ${component.installation.manual}`,
                    }}
                    onCopy={copyToClipboard}
                    copied={copiedId}
                    id="add-component"
                  />
                ) : (
                  <p className="text-muted-foreground">
                    {component.installation.manual}
                  </p>
                )}
              </>
            )}
          </section>
        )}

        {component.usage && (
          <section id="usage">
            <h2 className="mb-6 text-2xl font-bold">Usage</h2>
            {component.usage.map((arr: string, index: number) => (
              <Fragment key={index}>
                <CodeBlock
                  code={arr}
                  id="usage-code"
                  copied={copiedId}
                  onCopy={copyToClipboard}
                  filename="TypeScript"
                />
                <div className="h-5" />
              </Fragment>
            ))}
          </section>
        )}

        {component.examples && (
          <section id="examples">
            <h2 className="mb-6 text-2xl font-bold">Examples</h2>
            {Array.isArray(component.examples) &&
              component.examples.map((example, index) => {
                const Example = example.demo
                  ? (demoRegistry[example.demo] as ElementType)
                  : undefined;
                return (
                  <Fragment key={index}>
                    <p className="mb-4 text-xl font-semibold">
                      {example.title}
                    </p>
                    <div className="mb-6 text-muted-foreground">
                      {example.description}
                    </div>
                    <DemoBlock code={example.code}>
                      {Example && <Example />}
                    </DemoBlock>
                    <div className="h-5" />
                  </Fragment>
                );
              })}
          </section>
        )}

        <section id="api-reference">
          <h2 className="mb-6 text-2xl font-bold">API Reference</h2>
          {component.links?.find((l) => l.label === "API Reference") ? (
            <p className="text-muted-foreground">
              See the full API reference for {component.title} on the{" "}
              <Link
                href={`${component.links?.find((l) => l.label === "API Reference")?.href ?? component.links?.[0]?.href}`}
                target="_blank"
                className="text-primary"
              >
                Radix UI
              </Link>
              .
            </p>
          ) : Array.isArray(component.args) ? (
            <div className="space-y-8">
              {component.args.map((section, title_index) => (
                <div key={title_index} className="space-y-4">
                  <h3 className="text-xl font-bold">{section.name}</h3>
                  <p className="text-muted-foreground">{section.description}</p>
                  <div className="rounded-xl border w-full overflow-hidden">
                    <div className="flex flex-row border-b p-4 font-medium">
                      <div className="w-1/4">Prop</div>
                      <div className="w-1/2">Type</div>
                      <div className="w-1/4">Default</div>
                    </div>
                    <div className="divide-y">
                      {section.props.map((prop, index) => (
                        <div
                          key={index}
                          className="flex flex-row gap-4 p-4 text-sm items-center"
                        >
                          <div className="w-1/4">
                            <code className="rounded-md bg-muted px-2 py-1 font-mono text-sm">
                              {prop.prop}
                            </code>
                          </div>
                          <div className="w-1/2">
                            <code className="rounded-md bg-muted px-2 py-1 font-mono text-muted-foreground">
                              {prop.type.replace(/^"|"$/g, "")}
                            </code>
                          </div>
                          <div className="w-1/4">
                            {prop.default && (
                              <code className="font-mono text-muted-foreground">
                                {prop.default.replace(/^"|"$/g, "")}
                              </code>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No API reference available for this component.
            </p>
          )}
        </section>

        <div className="border-t pt-8">
          <Link
            href="/docs/components"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            ← Components
          </Link>
        </div>
      </div>
    </div>
  );
}
