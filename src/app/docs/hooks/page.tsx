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
        {/* Installation section moved to /docs/installation/vite */}

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

        <section id="use-crud" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useCRUD</h2>
            <p className="text-muted-foreground">
              A suite of simplified hooks including <code>useOne</code>,{" "}
              <code>useCreate</code>, <code>useUpdate</code>, and{" "}
              <code>useDelete</code>. These hooks belong to the{" "}
              <code>useCRUD</code> family and are designed to standardize and
              simplify common Data Provider operations.
            </p>
          </div>

          <div className="space-y-12">
            {/* useOne */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">useOne</h3>
                <p className="text-sm text-muted-foreground">
                  Fetch a single record by its ID.
                </p>
                <CodeBlock
                  language="tsx"
                  code={`const { data, isLoading } = useOne({
  resource: "products",
  id: 123
});`}
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  API Reference (useOne)
                </h3>
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
                        <td className="p-3">Resource path.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">id</td>
                        <td className="p-3 text-xs text-muted-foreground">
                          any
                        </td>
                        <td className="p-3">Record ID.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* useCreate */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">useCreate</h3>
                <p className="text-sm text-muted-foreground">
                  Create a new record.
                </p>
                <CodeBlock
                  language="tsx"
                  code={`const { mutate } = useCreate();

mutate({
  resource: "products",
  variables: { 
    name: "New Product",
    price: 100 
  }
});`}
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  API Reference (useCreate)
                </h3>
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
                        <td className="p-3">
                          Resource path (optional if provided in hook).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">variables</td>
                        <td className="p-3 text-xs text-muted-foreground">
                          object
                        </td>
                        <td className="p-3">The payload to create.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* useUpdate */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">useUpdate</h3>
                <p className="text-sm text-muted-foreground">
                  Update an existing record.
                </p>
                <CodeBlock
                  language="tsx"
                  code={`const { mutate } = useUpdate();

mutate({
  resource: "products",
  id: 123,
  variables: { price: 150 }
});`}
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  API Reference (useUpdate)
                </h3>
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
                        <td className="p-3">Resource path.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">id</td>
                        <td className="p-3 text-xs text-muted-foreground">
                          any
                        </td>
                        <td className="p-3">Record ID to update.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">variables</td>
                        <td className="p-3 text-xs text-muted-foreground">
                          object
                        </td>
                        <td className="p-3">Fields to update.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* useDelete */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">useDelete</h3>
                <p className="text-sm text-muted-foreground">
                  Delete a record by ID.
                </p>
                <CodeBlock
                  language="tsx"
                  code={`const { mutate } = useDelete();

mutate({
  resource: "products",
  id: 123
});`}
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  API Reference (useDelete)
                </h3>
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
                        <td className="p-3">Resource path.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">id</td>
                        <td className="p-3 text-xs text-muted-foreground">
                          any
                        </td>
                        <td className="p-3">Record ID to delete.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        <section id="use-form" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">useForm</h2>
            <p className="text-muted-foreground">
              Integrates <code>react-hook-form</code> with <code>useCRUD</code>{" "}
              operations. It handles form state, validation (via Zod), data
              fetching for edit mode, default value population, and submission.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Usage</h3>
              <CodeBlock
                language="tsx"
                code={`import { useForm } from "@/hooks/useForm";
import { z } from "zod";

// 1. Define your schema
const formSchema = z.object({
  title: z.string().min(2, "Title is too short"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().optional(),
});

// 2. Use the hook
const { 
  onFinish, 
  formLoading, 
  saveButtonProps,
  ...form 
} = useForm({
  resource: "posts",
  action: "create", 
  schema: formSchema,
  redirect: "/posts"
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
                      <td className="p-3 font-mono text-xs">resource</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3">API Resource path.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">action</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        "create" | "edit"
                      </td>
                      <td className="p-3">
                        Action type. "edit" fetches data by ID.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">schema</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        ZodSchema
                      </td>
                      <td className="p-3">Zod validation schema.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">id</td>
                      <td className="p-3 text-xs text-muted-foreground">any</td>
                      <td className="p-3">
                        Record ID (required if action="edit").
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">redirect</td>
                      <td className="p-3 text-xs text-muted-foreground">
                        bool | string
                      </td>
                      <td className="p-3">
                        Path to redirect after success. Defaults to `/{"{"}
                        resource{"}"}`.
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

          <div className="mt-12 space-y-12">
            <h3 className="text-scroll-m-20 text-xl font-semibold tracking-tight">
              Detailed API Reference
            </h3>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">useLogin</h4>
              <p className="text-sm text-muted-foreground">
                Returns a <code>mutate</code> function that calls{" "}
                <code>authProvider.login</code>.
              </p>
              <div className="rounded-lg border bg-card text-sm">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 font-medium">Function</th>
                      <th className="p-3 font-medium">Params</th>
                      <th className="p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">mutate(params)</td>
                      <td className="p-3 font-mono text-xs">any</td>
                      <td className="p-3">
                        Passed directly to <code>login</code> in provider.
                        Typically <code>{"{ email, password }"}</code>.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">useLogout</h4>
              <p className="text-sm text-muted-foreground">
                Returns a <code>mutate</code> function that calls{" "}
                <code>authProvider.logout</code>.
              </p>
              <div className="rounded-lg border bg-card text-sm">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 font-medium">Function</th>
                      <th className="p-3 font-medium">Params</th>
                      <th className="p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">mutate(params)</td>
                      <td className="p-3 font-mono text-xs">any</td>
                      <td className="p-3">
                        Passed directly to <code>logout</code> in provider. Uses
                        redirect path if provided.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">useRegister</h4>
              <p className="text-sm text-muted-foreground">
                Returns a <code>mutate</code> function that triggers{" "}
                <code>authProvider.register</code>.
              </p>
              <div className="rounded-lg border bg-card text-sm">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 font-medium">Function</th>
                      <th className="p-3 font-medium">Params</th>
                      <th className="p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">mutate(params)</td>
                      <td className="p-3 font-mono text-xs">any</td>
                      <td className="p-3">
                        Passed directly to <code>register</code> in provider.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">
                useIsAuthenticated
              </h4>
              <p className="text-sm text-muted-foreground">
                Returns a <code>check</code> function that verifies if the user
                is authenticated by calling <code>authProvider.check</code>.
              </p>
              <div className="rounded-lg border bg-card text-sm">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 font-medium">Function</th>
                      <th className="p-3 font-medium">Returns</th>
                      <th className="p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">check(params?)</td>
                      <td className="p-3 font-mono text-xs">
                        Promise&lt;boolean&gt;
                      </td>
                      <td className="p-3">
                        Resolves <code>true</code> if authenticated,{" "}
                        <code>false</code> otherwise.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">useGetIdentity</h4>
              <p className="text-sm text-muted-foreground">
                Returns a <code>getIdentity</code> function to retrieve current
                user details via <code>authProvider.getIdentity</code>.
              </p>
              <div className="rounded-lg border bg-card text-sm">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 font-medium">Function</th>
                      <th className="p-3 font-medium">Returns</th>
                      <th className="p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">getIdentity()</td>
                      <td className="p-3 font-mono text-xs">
                        Promise&lt;User&gt;
                      </td>
                      <td className="p-3">
                        Returns user object (e.g.{" "}
                        <code>{"{ id, name, avatar }"}</code>).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">usePermissions</h4>
              <p className="text-sm text-muted-foreground">
                Returns a <code>getPermissions</code> function to retrieve user
                roles/permissions via <code>authProvider.getPermissions</code>.
              </p>
              <div className="rounded-lg border bg-card text-sm">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 font-medium">Function</th>
                      <th className="p-3 font-medium">Returns</th>
                      <th className="p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">
                        getPermissions()
                      </td>
                      <td className="p-3 font-mono text-xs">
                        Promise&lt;any&gt;
                      </td>
                      <td className="p-3">
                        Typically returns an array of strings (e.g.{" "}
                        <code>["admin", "editor"]</code>).
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
