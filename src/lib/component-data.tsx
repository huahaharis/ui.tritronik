import type React from "react"
export interface ComponentData {
    title: string
    description: string
    links?: Array<{ label: string; href: string }>
    demo?: string
    installation?: {
        tabs: Array<{ label: string; active: boolean }>
        cli: string
        manual: string
    }
    usage?: string
    content?: string
    examples?: string
}

const components: Record<string, ComponentData> = {
    accordion: {
        title: "Accordion",
        description: "A vertically stacked set of interactive headings that each reveal a section of content.",
        links: [
            { label: "Docs", href: "https://www.radix-ui.com/docs/primitives/components/accordion" },
            { label: "API Reference", href: "https://www.radix-ui.com/docs/primitives/components/accordion#api-reference" },
        ],
        demo: "accordion",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add accordion",
            manual: "Copy the accordion component from the components library.",
        },
        usage: `
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
`,
        content: `
<Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
    </AccordionItem>
</Accordion>

`,
        examples: `
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                Yes. It comes with default styles you can customize.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
        `,
    },

    alert: {
        title: "Alert",
        description: "Displays a callout for user attention.",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add alert",
            manual: "Copy the alert component from the components library.",
        },
        demo: "alert",
        usage: `
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
`,
        content: `
<Alert>
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
    You can add components and dependencies to your app using the CLI.
    </AlertDescription>
</Alert>
        `,
        examples: `
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the CLI.
      </AlertDescription>
    </Alert>
  )
}
        `,
    },

    "alert-dialog": {
        title: "Alert Dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add alert-dialog",
            manual: "Copy the alert-dialog component from the components library.",
        },
        demo: 'alertDialog',
        usage: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
`,
        content:`
<AlertDialog>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
      </AlertDialogHeader>
          <AlertDialogAction>Continue</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
    </AlertDialogContent>
</AlertDialog>
`,
        examples: `
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

`,
    },

    button: {
        title: "Button",
        description: "A clickable element that triggers an action or event.",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add button",
            manual: "Copy the button component from the components library.",
        },
        usage: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,
    },

    badge: {
        title: "Badge",
        description: "Displays a small, compact label or indicator.",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add badge",
            manual: "Copy the badge component from the components library.",
        },
        usage: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`,
    },

    card: {
        title: "Card",
        description: "A container component that groups related content.",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add card",
            manual: "Copy the card component from the components library.",
        },
        usage: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        Content goes here
      </CardContent>
    </Card>
  )
}`,
    },

    dialog: {
        title: "Dialog",
        description: "A window overlaid on either the primary window or another dialog window.",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add dialog",
            manual: "Copy the dialog component from the components library.",
        },
        usage: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog description goes here.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`,
    },

    input: {
        title: "Input",
        description: "Displays a form input field.",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add input",
            manual: "Copy the input component from the components library.",
        },
        usage: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}`,
    },

    tabs: {
        title: "Tabs",
        description: "A set of layered sections of content that display one at a time.",
        installation: {
            tabs: [
                { label: "CLI", active: true },
                { label: "Manual", active: false },
            ],
            cli: "npx shadcn@latest add tabs",
            manual: "Copy the tabs component from the components library.",
        },
        usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  )
}`,
    },
}

export function getComponentData(slug: string): ComponentData | null {
    return components[slug] || null
}

export function getAllComponents(): string[] {
    return Object.keys(components)
}

export function getComponentsList(): Array<{ slug: string; title: string; description: string }> {
    return Object.entries(components).map(([slug, data]) => ({
        slug,
        title: data.title,
        description: data.description,
    }))
}
