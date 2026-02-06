"use client";

import Link from "next/link";

export default function RouterDocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
      <div className="mb-12 border-b pb-10">
        <h1 className="text-4xl font-bold text-foreground">
          Router Integration
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Advanced routing hooks for navigation, URL syncing, and state
          management, powered by{" "}
          <a
            href="https://tanstack.com/router/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            TanStack Router
          </a>
          .
        </p>
      </div>

      <div className="space-y-16 text-foreground">
        {/* --- Installation --- */}
        <section id="installation" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Installation & Setup
          </h2>
          <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 p-4 text-sm text-amber-500 mb-6 font-medium">
            Requirement: Your application must be wrapped in a TanStack{" "}
            <code>RouterProvider</code> for these hooks to function.
          </div>

          <code className="text-sm font-bold text-foreground">
            src/app/providers.tsx
          </code>
          <div className="mt-2 relative rounded-lg border bg-zinc-950 p-4 font-mono text-sm text-zinc-50 overflow-x-auto dark:bg-zinc-900">
            <pre>
              <code className="language-tsx">
                {`import { RouterProvider, createRouter } from '@tanstack/react-router'

// 1. Create a router instance
const router = createRouter({ routeTree })

export function Providers({ children }) {
  return (
     <RouterProvider router={router} />
  )
}`}
              </code>
            </pre>
          </div>
        </section>

        <hr className="border-border" />

        <section id="use-go" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useGo</h2>
            <p className="text-muted-foreground">
              A detailed navigation hook that simplifies moving between pages
              and updating query parameters (like filters or sorting) without
              wiping existing state.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Usage</h3>
              <div className="rounded-lg border bg-zinc-950 p-4 font-mono text-sm text-zinc-50 overflow-x-auto dark:bg-zinc-900">
                <pre>
                  <code className="language-tsx">
                    {`const go = useGo();

// 1. Navigate to a path
go({ to: "/posts" });

// 2. Update query params (e.g. filters)
go({ 
  query: { 
    status: "published", 
    sort: "createdAt" 
  },
  type: "replace" // Don't add to history
});

// 3. Navigate with params
go({ 
  to: "/posts/edit/1", 
  query: { tab: "details" } 
});`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">API Reference</h3>
              <div className="rounded-lg border bg-card text-sm">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 font-medium">Prop</th>
                      <th className="p-3 font-medium">Type</th>
                      <th className="p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">to</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3">
                        Target path (e.g. <code>/users</code>).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">query</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        object
                      </td>
                      <td className="p-3">
                        Object of query parameters to merge.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">type</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        enum
                      </td>
                      <td className="p-3">
                        <code>"push"</code> (default) or <code>"replace"</code>.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        <section id="use-parsed" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useParsed</h2>
            <p className="text-muted-foreground">
              Parses the current URL to infer the <code>resource</code>,{" "}
              <code>action</code>, <code>id</code>, and raw <code>params</code>.
              Useful for building generic layouts or breadcrumbs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Example Output</h3>
              <div className="rounded-lg border bg-zinc-950 p-4 font-mono text-sm text-zinc-50 overflow-x-auto dark:bg-zinc-900">
                <pre>
                  <code className="language-json">
                    {`// URL: /products/edit/123?tab=price

{
  "resource": "products",
  "action": "edit",
  "id": "123",
  "pathname": "/products/edit/123",
  "params": {
    "tab": "price"
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Usage</h3>
              <div className="rounded-lg border bg-zinc-950 p-4 font-mono text-sm text-zinc-50 overflow-x-auto dark:bg-zinc-900">
                <pre>
                  <code className="language-tsx">
                    {`const { 
  id, 
  resource, 
  params 
} = useParsed();

if (resource === "products") {
   // ...
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
