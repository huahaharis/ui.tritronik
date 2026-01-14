"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function DocsSidebar() {
  const pathname = usePathname()

  const sections = [
    {
      title: "Sections",
      items: [
        { label: "Get Started", href: "/docs" },
        { label: "Components", href: "/docs/components" },
        { label: "Directory", href: "#" },
        { label: "MCP Server", href: "#" },
        { label: "Forms", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Get Started",
      items: [
        { label: "Installation", href: "/docs/installation" },
        { label: "components.json", href: "#" },
        { label: "Theming", href: "/docs/theming" },
        { label: "Dark Mode", href: "/docs/dark-mode" },
        { label: "CLI", href: "/docs/cli" },
        { label: "Monorepo", href: "/docs/monorepo" },
        { label: "Open in v0", href: "/docs/v0"},
        { label: "Javascript", href: "/docs/js" },
        { label: "Blocks", href: "/docs/blocks" },
        { label: "Figma", href: "/docs/figma" },
        { label: "Ilms.txt", href: "/docs/ilms" },
        { label: "Legacy Docs", href: "/docs/legacy" },
      ],
    },
    {
      title: "Components",
      items: [
        { label: "Accordion", href: "/docs/components/accordion" },
        { label: "Alert", href: "/docs/components/alert" },
        { label: "Alert Dialog", href: "/docs/components/alert-dialog" },
        { label: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
        { label: "Avatar", href: "/docs/components/avatar" },
        { label: "Badge", href: "/docs/components/badge" },
        { label: "Breadcrumb", href: "/docs/components/breadcrumb" },
        { label: "Button", href: "/docs/components/button" },
        { label: "Button Group", href: "/docs/components/button-group" },
        { label: "Calendar", href: "/docs/components/calendar" },
        { label: "Card", href: "/docs/components/card" },
        { label: "Carousel", href: "/docs/components/carousel" },
        { label: "Checkbox", href: "/docs/components/checkbox" },
        { label: "Collapsible", href: "/docs/components/collapsible" },
        { label: "Combobox", href: "/docs/components/combobox" },
        { label: "Command", href: "/docs/components/command" },
        { label: "Context Menu", href: "/docs/components/context-menu" },
        { label: "Data Table", href: "/docs/components/data-table" },
        { label: "Date Picker", href: "/docs/components/date-picker" },
        { label: "Dialog", href: "/docs/components/dialog" },
        { label: "Drawer", href: "/docs/components/drawer" },
        { label: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
        { label: "Empty", href: "/docs/components/empty" },
        { label: "Field", href: "/docs/components/field" },
        { label: "Form", href: "/docs/components/form" },
        { label: "Hover Card", href: "/docs/components/hover-card" },
        { label: "Input", href: "/docs/components/input" },
        { label: "Input Group", href: "/docs/components/input-group" },
        { label: "Input OTP", href: "/docs/components/input-otp" },
        { label: "Item", href: "/docs/components/item" },
        { label: "Kbd", href: "/docs/components/kbd" },
        { label: "Label", href: "/docs/components/label" },
        { label: "Menubar", href: "/docs/components/menubar" },
        { label: "Navigation Menu", href: "/docs/components/navigation-menu" },
        { label: "Pagination", href: "/docs/components/pagination" },
        { label: "Popover", href: "/docs/components/popover" },
        { label: "Progress", href: "/docs/components/progress" },
        { label: "Radio Group", href: "/docs/components/radio-group" },
        { label: "Scroll Area", href: "/docs/components/scroll-area" },
        { label: "Select", href: "/docs/components/select" },
        { label: "Separator", href: "/docs/components/separator" },
        { label: "Sheet", href: "/docs/components/sheet" },
        { label: "Sidebar", href: "/docs/components/sidebar" },
        { label: "Skeleton", href: "/docs/components/skeleton" },
        { label: "Slider", href: "/docs/components/slider" },
        { label: "Spinner", href: "/docs/components/spinner" },
        { label: "Switch", href: "/docs/components/switch" },
        { label: "Table", href: "/docs/components/table" },
        { label: "Tabs", href: "/docs/components/tabs" },
        { label: "Textarea", href: "/docs/components/textarea" },
        { label: "Toast", href: "/docs/components/toast" },
        { label: "Toggle", href: "/docs/components/toggle" },
        { label: "Toggle Group", href: "/docs/components/toggle-group" },
        { label: "Tooltip", href: "/docs/components/tooltip" },
      ],
    },
  ]

  return (
    <aside className="w-64 overflow-y-auto scrollbar-hide bg-background pl-12 py-8">
      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
