import { CodeBlock } from "@/components/docs/code-block";

const LAYOUT_USAGE = `import { Layout, Header, Content, Footer, Sider } from "@/components/ui/layout"

export default function RootLayout() {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}`;

const SIDEBAR_CUSTOMIZATION = `// src/components/layout/app-sidebar.tsx
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  // ... add more items
]
`;

export default function LayoutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="space-y-2 mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Layout</h1>
        <p className="text-lg text-muted-foreground">
          A responsive layout with header, footer, sidebar, and content areas.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <p className="text-muted-foreground mb-4">
          The layout components are located in{" "}
          <code>src/components/ui/layout.tsx</code>. You can compose them to
          build complex layouts.
        </p>
        <CodeBlock code={LAYOUT_USAGE} language="tsx" />
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Components</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Layout</h3>
            <p className="text-muted-foreground">
              The main wrapper. Renders as a flex container. Detects if a Sider
              is present to switch to row layout.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Header</h3>
            <p className="text-muted-foreground">Top navigation area.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Sider</h3>
            <p className="text-muted-foreground">
              Sidebar for navigation. Can be collapsed.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Content</h3>
            <p className="text-muted-foreground">The main content area.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Footer</h3>
            <p className="text-muted-foreground">Bottom footer area.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
