"use client";

import { CodeBlock } from "@/components/docs/code-block";

export default function HooksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
      <div className="mb-12 border-b pb-10">
        <h1 className="text-4xl font-bold text-foreground">
          Hooks & Data Fetching
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A robust, type-safe data fetching layer built on top of{" "}
          <a
            href="https://tanstack.com/query/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            TanStack Query
          </a>
          . Designed to be compatible with RESTful standards and easily
          extensible.
        </p>
      </div>

      <div className="space-y-16 text-foreground">
        {/* <section id="installation" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Installation & Setup
          </h2>
          <p className="mb-4 text-muted-foreground">
            To use the hooks, you must wrap your application (or the relevant
            subtree) with the
            <code>DataProviderProvider</code>. We provide a default REST
            implementation that works out of the box.
          </p>

          <div className="relative rounded-lg border bg-zinc-950 p-4 font-mono text-sm text-zinc-50 overflow-x-auto dark:bg-zinc-900">
            <pre>
              <code className="language-tsx">
                {`// src/app/layout.tsx
import { DataProviderProvider, defaultDataProvider } from "@/hooks";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Implement your router...
const router = createRouter({ routeTree });

export default function RootLayout({ children }) {
  return (
    <DataProviderProvider value={defaultDataProvider}>
      <RouterProvider router={router} />
    </DataProviderProvider>
  );
}`}
              </code>
            </pre>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <strong>Note:</strong> You can create your own{" "}
            <code>DataProvider</code> object to connect to GraphQL, Firebase, or
            any other backend.
          </p>
        </section> */}

        {/* <hr className="border-border" /> */}

        <section id="use-infinite-list" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useInfiniteList</h2>
            <p className="text-muted-foreground">
              Fetch paginated data with support for infinite scrolling (load
              more). It automatically handles cursor management and merges
              pages.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Usage</h3>
              <CodeBlock
                language="tsx"
                code={`const { 
  data, 
  isLoading, 
  fetchNextPage, 
  hasNextPage 
} = useInfiniteList({
  resource: "posts",
  pagination: { pageSize: 10 },
  sorters: [
    { field: "createdAt", order: "desc" }
  ],
  filters: [
    { field: "status", operator: "eq", value: "published" }
  ]
});

// Accessing data
const allPosts = data?.pages.flatMap(p => p.data) ?? [];`}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">API Reference</h3>
              <div className="rounded-lg border bg-card text-sm overflow-x-auto">
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
                      <td className="p-3 font-mono text-xs">resource</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3">
                        API endpoint resource path (e.g., "posts").
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">pagination</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        object
                      </td>
                      <td className="p-3">
                        <code>{"{ pageSize: number }"}</code> config.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">sorters</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        array
                      </td>
                      <td className="p-3">
                        Array of sort objects <code>{"{ field, order }"}</code>.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">filters</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        array
                      </td>
                      <td className="p-3">
                        Array of filter objects{" "}
                        <code>{"{ field, operator, value }"}</code>.<br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-lg border bg-card p-4 text-sm">
                <p className="font-semibold mb-2 text-foreground">
                  Supported Filter Operators
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  <div className="flex justify-between border-b pb-1">
                    <code className="font-mono bg-muted px-1 rounded">eq</code>
                    <span className="text-muted-foreground">
                      Equals (default)
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <code className="font-mono bg-muted px-1 rounded">ne</code>
                    <span className="text-muted-foreground">Not equal</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <code className="font-mono bg-muted px-1 rounded">lt</code>
                    <span className="text-muted-foreground">Less than</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <code className="font-mono bg-muted px-1 rounded">gt</code>
                    <span className="text-muted-foreground">Greater than</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <code className="font-mono bg-muted px-1 rounded">lte</code>
                    <span className="text-muted-foreground">Less/Equal</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <code className="font-mono bg-muted px-1 rounded">gte</code>
                    <span className="text-muted-foreground">Greater/Equal</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <code className="font-mono bg-muted px-1 rounded">
                      contains
                    </code>
                    <span className="text-muted-foreground">
                      Like / Contains
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        <section id="use-many" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useMany</h2>
            <p className="text-muted-foreground">
              Efficiently fetch multiple records by their IDs. Useful for
              resolving relationships (e.g., fetching tags for a list of posts).
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Usage</h3>
              <CodeBlock
                language="tsx"
                code={`const { data, isLoading } = useMany({
  resource: "tags",
  ids: [1, 5, 8],
  queryOptions: {
    enabled: !!ids.length
  }
});

// Accessing data
const tags = data?.data ?? [];`}
              />
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
                      <td className="p-3 font-mono text-xs">resource</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3">API endpoint resource path.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">ids</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        array
                      </td>
                      <td className="p-3">List of IDs to fetch.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">queryOptions</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        object
                      </td>
                      <td className="p-3">
                        TanStack Query options (e.g., <code>enabled</code>,{" "}
                        <code>staleTime</code>).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        <section id="use-custom" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useCustom</h2>
            <p className="text-muted-foreground">
              Make arbitrary API requests to any endpoint. Supports all HTTP
              methods and custom configurations.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Usage</h3>
              <CodeBlock
                language="tsx"
                code={`const { data } = useCustom({
  url: "https://api.external.com/stats",
  method: "get",
  config: {
    headers: { "Authorization": "Bearer ..." },
    query: { period: "30d" }
  }
});`}
              />
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
                      <td className="p-3 font-mono text-xs">url</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3">Full or relative URL.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">method</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        enums
                      </td>
                      <td className="p-3">
                        "get" | "post" | "put" | "patch" | "delete"
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">config</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        object
                      </td>
                      <td className="p-3">
                        Payload, headers, and query parameters.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-border" />

        <section id="use-table" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useTable</h2>
            <p className="text-muted-foreground">
              Combines data fetching (<code>useInfiniteList</code>) with URL
              state synchronization. The list's page <code>current</code> and{" "}
              <code>pageSize</code> are automatically read from and written to
              the URL query string.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Usage</h3>
              <CodeBlock
                language="tsx"
                code={`const { 
  data, 
  tableState: { current, pageSize }, 
  setPagination 
} = useTable({
  resource: "users"
});

// URL becomes: /users?current=2&pageSize=20
<button onClick={() => setPagination(2, 20)}>
  Go to Page 2
</button>`}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Return Value</h3>
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
                      <td className="p-3 font-mono text-xs">tableState</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        object
                      </td>
                      <td className="p-3">
                        Current <code>{"{ current, pageSize }"}</code> from URL.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">setPagination</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        func
                      </td>
                      <td className="p-3">
                        Helper to update page state in URL.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">...listQuery</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        object
                      </td>
                      <td className="p-3">
                        All props from <code>useInfiniteList</code> (data,
                        isLoading...).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        <section id="use-auth" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useAuth</h2>
            <p className="text-muted-foreground">
              Handle authentication, permissions, and identity. Designed to
              mimic{" "}
              <a
                href="https://refine.dev/docs/api-reference/core/providers/auth-provider/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Refine.dev's AuthProvider
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Usage</h3>
              <CodeBlock
                language="tsx"
                code={`// 1. Wrap your app with AuthProvider
import { 
  AuthProviderProvider, 
  createAuthProvider,
  createDataProvider,
  DataProviderProvider
} from "@/hooks";

const authProvider = createAuthProvider("https://monitor.tritronik.com/auth");
const dataProvider = createDataProvider("https://monitor.tritronik.com/api");

<AuthProviderProvider value={authProvider}>
  <DataProviderProvider value={dataProvider}>
    <App />
  </DataProviderProvider>
</AuthProviderProvider>

// 2. Use hooks in components
import { useLogin, useIsAuthenticated, useLogout } from "@/hooks";

const { mutate: login } = useLogin();
const { mutate: logout } = useLogout();
const { check } = useIsAuthenticated();

// Login
login({ email: "user@example.com", password: "123" });`}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Available Hooks</h3>
              <div className="rounded-lg border bg-card text-sm">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 font-medium">Hook</th>
                      <th className="p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">useLogin</td>
                      <td className="p-3">
                        Calls <code>login</code> method.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">useLogout</td>
                      <td className="p-3">
                        Calls <code>logout</code> method.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">
                        useIsAuthenticated
                      </td>
                      <td className="p-3">
                        Calls <code>check</code> method.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">usePermissions</td>
                      <td className="p-3">
                        Calls <code>getPermissions</code> method.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">useGetIdentity</td>
                      <td className="p-3">
                        Calls <code>getIdentity</code> method.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
