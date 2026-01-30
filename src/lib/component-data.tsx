export interface ComponentData {
  title: string;
  description: string;
  links?: Array<{ label: string; href: string }>;
  demo?: string;
  installation?: {
    tabs: Array<{ label: string; active: boolean }>;
    cli: string;
    manual?: string;
  };
  usage?: string[];
  content?: string;
  examples?:
    | string
    | {
        title: string;
        description: string;
        code: string;
        demo: string;
      }[];
  args?: {
    name: string;
    description: string;
    props: {
      prop: string;
      type: string;
      default: string;
    }[];
  }[];
}

const components: Record<string, ComponentData> = {
  accordion: {
    title: "Accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    links: [
      {
        label: "Docs",
        href: "https://www.radix-ui.com/docs/primitives/components/accordion",
      },
      {
        label: "API Reference",
        href: "https://www.radix-ui.com/docs/primitives/components/accordion#api-reference",
      },
    ],
    demo: "accordion",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        // { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add accordion",
      // manual: "@radix-ui/react-accordion",
    },
    usage: [
      `import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
`,
      `<Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
    </AccordionItem>
</Accordion>
`,
    ],
    content: `import {
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

    examples: [
      {
        title: "Basic",
        description:
          "A basic accordion that shows one item at a time. The first item is open by default.",
        demo: "accordion",
        code: `import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full">
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
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
`,
      },
      {
        title: "Multiple",
        description:
          'Use type="multiple" to allow multiple items to be open at the same time.',
        demo: "accordionMultiple",
        code: `import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="multiple" className="w-full">
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
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
`,
      },
      {
        title: "Disabled",
        description:
          "Use the disabled prop on AccordionItem to disable individual items",
        demo: "accordionDisabled",
        code: `import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" disabled>
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles you can customize.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
`,
      },
      {
        title: "Borders",
        description:
          "Add border to the Accordion and border-b last:border-b-0 to the AccordionItem to add borders to the items.",
        demo: "accordionBorders",
        code: `import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All data is encrypted at rest and in transit using industry-standard protocols.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.",
  },
]

export function AccordionBorders() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-lg rounded-lg border"
      defaultValue="billing"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
`,
      },
    ],
  },

  alert: {
    title: "Alert",
    description: "Displays a callout for user attention.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        // { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add alert",
      // manual: "",
    },
    demo: "alert",
    args: [
      {
        name: "Alert",
        description:
          "The Alert component displays a callout for user attention.",
        props: [
          {
            prop: "variant",
            type: '"default" | "destructive"',
            default: '"default"',
          },
        ],
      },
      {
        name: "AlertTitle",
        description:
          "The AlertTitle component displays the title of the alert.",
        props: [
          {
            prop: "className",
            type: "string",
            default: "-",
          },
        ],
      },
      {
        name: "AlertDescription",
        description:
          "The AlertDescription component displays the description or content of the alert.",
        props: [
          {
            prop: "className",
            type: "string",
            default: "-",
          },
        ],
      },
      {
        name: "AlertAction",
        description:
          "The AlertAction component displays an action element (like a button) positioned absolutely in the top-right corner of the alert.",
        props: [
          {
            prop: "className",
            type: "string",
            default: "-",
          },
        ],
      },
    ],
    usage: [
      `
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
`,
      `
<Alert>
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
    You can add components and dependencies to your app using the CLI.
    </AlertDescription>
</Alert>
        `,
    ],
    content: `
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
}`,
    examples: ``,
  },

  "alert-dialog": {
    title: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        // { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add alert-dialog",
      // manual: "@radix-ui/react-alert-dialog",
    },
    demo: "alertDialog",
    usage: [
      `import {
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
      `
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
    ],
    content: `
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
}`,
    examples: [
      {
        title: "Basic",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        demo: "alertDialog",
        code: `
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
}`,
      },
      {
        title: "Small",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        demo: "alertDialogSmall",
        code: `import {
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

export function AlertDialogSmall() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
          <AlertDialogAction>Allow</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
      },
      {
        title: "Media",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        demo: "alertDialogWithMedia",
        code: `import {
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

export function AlertDialogWithMedia() {
  return (
  <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Share Project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <CircleFadingPlusIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Share this project?</AlertDialogTitle>
          <AlertDialogDescription>
            Anyone with the link will be able to view and edit this project.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Share</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
      },
      {
        title: "Small with media",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        demo: "alertDialogSmallWithMedia",
        code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { BluetoothIcon } from "lucide-react"

export function AlertDialogSmallWithMedia() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>

      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <BluetoothIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
          <AlertDialogAction>Allow</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
      },
      {
        title: "Destructive",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        demo: "alertDialogDestructive",
        code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2Icon } from "lucide-react"

export function AlertDialogDestructive() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Chat</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete chat?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this chat conversation. View{" "}
            <a href="#">Settings</a> delete any memories saved during this chat.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
      },
    ],

    args: [
      {
        name: "Size",
        description:
          "Use the size props on the AlertDialogContent component to control the size of the alert dialog. It accepts the following values:",
        props: [
          {
            prop: "size",
            type: '"default" | "sm"',
            default: '"default"',
          },
        ],
      },
    ],
  },

  button: {
    title: "Button",
    description: "A clickable element that triggers an action or event.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        // { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add button",
      // manual: "@radix-ui/react-slot",
    },
    demo: "button",
    usage: [
      `import { Button } from "@/components/ui/button"`,
      `<Button>Click me</Button>`,
    ],
    content: `import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}`,
    examples: [
      {
        title: "Button",
        description: "A clickable element that triggers an action or event.",
        demo: "button",
        code: `import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}`,
      },
    ],

    args: [
      {
        name: "Button",
        description:
          "The Button component is a wrapper around the button element that adds a variety of styles and functionality.",
        props: [
          {
            prop: "variant",
            type: '"default" | "outline" | "secondary" | "ghost" | "link" | "destructive"',
            default: '"default"',
          },
          {
            prop: "size",
            type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
            default: '"default"',
          },
          {
            prop: "asChild",
            type: "boolean",
            default: "false",
          },
        ],
      },
    ],
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
    demo: "badge",
    usage: [
      `import { Badge } from "@/components/ui/badge"`,
      `<Badge>Badge</Badge>`,
    ],
    content: `import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex h-40 items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            <BadgeCheckIcon className="mr-1 h-3 w-3" />
            Verified
          </Badge>

          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            8
          </Badge>

          <Badge
            variant="destructive"
            className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          >
            99
          </Badge>

          <Badge
            variant="outline"
            className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          >
            20+
          </Badge>
        </div>
      </div>
    </div>
  )
}`,
    examples: ``,
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
    demo: "card",
    usage: [
      `
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
`,
      `
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>`,
    ],
    content: `
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardDemo() {
  return (
    <div className="flex h-fit items-center justify-center bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}`,
    examples: ``,
  },

  calendar: {
    title: "Calendar",
    description:
      "A date field component that allows users to enter and edit date.",
    demo: "calendar",
    links: [{ label: "Docs", href: "https://daypicker.dev/" }],
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },

    usage: [
      `import { Calendar } from "@/components/ui/calendar"`,
      `const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
)`,
    ],
    content: `"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  )
}`,
    examples: ``,
  },

  dialog: {
    title: "Dialog",
    description:
      "A window overlaid on either the primary window or another dialog window.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add dialog",
      manual: "Copy the dialog component from the components library.",
    },
    demo: "dialog",
    usage: [
      `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
`,
      `<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description goes here.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
    ],
    content: `import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}`,
    examples: ``,
  },

  "dropdown-menu": {
    title: "Dropdown Menu",
    description:
      "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    demo: "dropdownMenu",
    links: [
      {
        label: "Docs",
        href: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
      },
      {
        label: "API Reference",
        href: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu#api-reference",
      },
    ],
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add dropdown-menu",
      manual: "@radix-ui/react-dropdown-menu",
    },
    usage: [
      `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"`,
      `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    ],
    content: `import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
    examples: ``,
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
    demo: "input",
    usage: [
      `import { Input } from "@/components/ui/input"`,
      `<Input type="email" placeholder="Email" />`,
    ],
    content: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}`,
    examples: ``,
  },

  "input-group": {
    title: "Input Group",
    description:
      "Extends Input to allow for prepended and appended text, icons, or buttons.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input-group",
      manual: "Copy the input-group component from the components library.",
    },
    demo: "input-group",
    usage: [
      `import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "@/components/ui/input-group"`,
      `<InputGroup>
  <InputGroupAddon>
    <InputGroupText>@</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Username" />
</InputGroup>`,
    ],
    content: `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'
import { Search, Copy } from 'lucide-react'

export function InputGroupDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="google.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <Search className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </div>
  )
}`,
    examples: [],
  },

  label: {
    title: "Label",
    description: "Renders an accessible label associated with controls.",
    links: [
      {
        label: "Docs",
        href: "https://www.radix-ui.com/primitives/docs/components/label",
      },
      {
        label: "API Reference",
        href: "https://www.radix-ui.com/primitives/docs/components/label#api-reference",
      },
    ],
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "label",
    usage: [
      `import { Label } from "@/components/ui/label"`,
      `<Label htmlFor="email">Your email address</Label>`,
    ],
    content: `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}`,
    examples: ``,
  },

  popover: {
    title: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    links: [
      {
        label: "Docs",
        href: "https://www.radix-ui.com/primitives/docs/components/popover",
      },
      {
        label: "API Reference",
        href: "https://www.radix-ui.com/primitives/docs/components/popover#api-reference",
      },
    ],
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "popover",
    usage: [
      `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"`,
      `<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`,
    ],
    content: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
    examples: ``,
  },

  progress: {
    title: "Progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    links: [
      {
        label: "Docs",
        href: "https://www.radix-ui.com/primitives/docs/components/progress",
      },
      {
        label: "API Reference",
        href: "https://www.radix-ui.com/primitives/docs/components/progress#api-reference",
      },
    ],
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "progress",
    usage: [
      `import { Progress } from "@/components/ui/progress"`,
      `<Progress value={33} />`,
    ],
    content: `"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}`,
    examples: ``,
  },

  select: {
    title: "Select",
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
    links: [
      {
        label: "Docs",
        href: "https://www.radix-ui.com/primitives/docs/components/select",
      },
      {
        label: "API Reference",
        href: "https://www.radix-ui.com/primitives/docs/components/select#api-reference",
      },
    ],
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "select",
    usage: [
      `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`,
      `<Select>
  <SelectTrigger className="w-45">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`,
    ],
    content: `import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`,
    examples: ``,
  },

  "color-picker": {
    title: "Color Picker",
    description:
      "A color picker component that allows users to select a color.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add color-picker",
      manual: "Copy the color-picker component from the components library.",
    },
    demo: "color-picker",
    usage: [
      `import { ColorPicker } from "@/components/ui/color-picker"`,
      `<ColorPicker value="#000000" onChange={setColor} />`,
    ],
    content: `import * as React from 'react';
import { ColorPicker } from '@/components/ui/color-picker';

export function ColorPickerDemo() {
  const [color, setColor] = React.useState('#000000');

  return (
    <ColorPicker value={color} onChange={setColor} />
  );
}`,
    examples: ``,
  },

  slider: {
    title: "Slider",
    description:
      "An input where the user selects a value from within a given range.",
    links: [
      {
        label: "Docs",
        href: "https://www.radix-ui.com/primitives/docs/components/slider",
      },
      {
        label: "API Reference",
        href: "https://www.radix-ui.com/primitives/docs/components/slider#api-reference",
      },
    ],
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "slider",
    usage: [
      `import { Slider } from "@/components/ui/slider"`,
      `<Slider defaultValue={[33]} max={100} step={1} />`,
    ],
    content: `import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}`,
    examples: ``,
  },

  sheet: {
    title: "Sheet",
    description:
      "Extends the Dialog component to display content that complements the main content of the screen.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "sheet",
    usage: [
      `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"`,
      `<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
    ],
    content: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
    examples: ``,
  },

  tabs: {
    title: "Tabs",
    description:
      "A set of layered sections of content that display one at a time.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add tabs",
      manual: "Copy the tabs component from the components library.",
    },
    demo: "tabs",
    usage: [
      `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`,
      `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`,
    ],
    content: `import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}`,
    examples: ``,
  },

  kanban: {
    title: "Kanban",
    description: "A drag and drop kanban board component.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        // { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add kanban",
      // manual: "",
    },
    demo: "kanban",
    usage: [
      `
import { 
  KanbanBoard, 
  KanbanList, 
  KanbanColumn, 
  KanbanCard 
} from "@/components/ui/kanban"
`,
      `
<KanbanBoard onDragEnd={handleDragEnd}>
  <KanbanList>
    <KanbanColumn id="todo">
       <KanbanCard id="task-1">Task 1</KanbanCard>
    </KanbanColumn>
  </KanbanList>
</KanbanBoard>
`,
    ],
    content: `"use client"

import { useMemo } from "react"
import {
  KanbanBoard,
  KanbanCard,
  KanbanColumn,
  KanbanList,
  useKanban,
  KanbanDragOverlay
} from "@/components/ui/kanban"
import { Badge } from "@/components/ui/badge"

type Task = {
  id: string
  title: string
  tag: string
}

type Column = {
  id: string
  title: string
  tasks: Task[]
}

const initialData: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "t1", title: "Research dnd-kit", tag: "Research" },
      { id: "t2", title: "Install dependencies", tag: "Tech" },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      { id: "t3", title: "Implement KanbanBoard", tag: "Dev" },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      { id: "t4", title: "Create Plan", tag: "Planning" },
    ],
  },
]

export function KanbanDemo() {
  const {
      columns,
      activeTask,
      activeColumn,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
      sensors
  } = useKanban<Task, Column>(initialData)

  return (
    <KanbanBoard 
    onDragStart={handleDragStart} 
    onDragOver={handleDragOver} 
    onDragEnd={handleDragEnd} 
    sensors={sensors}
    className="h-[500px]"
    >
        <KanbanList items={columns.map(c => c.id)} className="w-full">
            {columns.map((col) => (
                <KanbanColumn key={col.id} id={col.id} className="w-[300px]">
                    <div className="flex items-center justify-between font-semibold mb-4 text-sm uppercase text-muted-foreground">
                        {col.title}
                        <Badge variant="outline">{col.tasks.length}</Badge>
                    </div>
                    
                    <KanbanList items={useMemo(() => col.tasks.map(t => t.id), [col.tasks])} className="flex-col gap-2 min-h-[100px]">
                        {col.tasks.map((task) => (
                            <KanbanCard key={task.id} id={task.id} className="p-3 bg-card border rounded-md shadow-sm hover:shadow-md transition-all">
                                <div className="flex flex-col gap-2">
                                    <span className="font-medium text-sm">{task.title}</span>
                                    <div className="flex pb-1">
                                        <Badge variant="secondary" className="text-[10px] px-1 py-0 h-5">{task.tag}</Badge>
                                    </div>
                                </div>
                            </KanbanCard>
                        ))}
                    </KanbanList>
                </KanbanColumn>
            ))}
        </KanbanList>

        <KanbanDragOverlay>
            {activeColumn ? (
                <div className="w-[300px] bg-muted/50 p-4 rounded-md opacity-80 border-2 border-primary">
                    {activeColumn.title}
                </div>
            ) : activeTask ? (
                <div className="p-3 bg-card border rounded-md shadow-md w-[280px] cursor-grabbing">
                    <div className="flex flex-col gap-2">
                            <span className="font-medium text-sm">{activeTask.title}</span>
                            <div className="flex pb-1">
                            <Badge variant="secondary" className="text-[10px] px-1 py-0 h-5">{activeTask.tag}</Badge>
                            </div>
                    </div>
                </div>
            ) : null}
        </KanbanDragOverlay>
    </KanbanBoard>
  )
}`,
    examples: [
      {
        title: "Basic",
        description: "A basic drag and drop list.",
        demo: "dragAndDropList",
        code: `"use client"

import { useMemo } from "react"
import {
    KanbanBoard,
    KanbanColumn,
    KanbanList,
    KanbanCard,
    useKanban,
    KanbanDragOverlay
} from "@/components/ui/kanban"
import { Badge } from "@/components/ui/badge"

type Task = {
  id: string
  title: string
  tag: string
}

type Column = {
  id: string
  title: string
  tasks: Task[]
}

export function DragAndDropList() {
  const initialSimpleData: Column[] = [
    {
      id: "list",
      title: "Vertical List",
      tasks: [
        { id: "item-1", title: "Item 1", tag: "A" },
        { id: "item-2", title: "Item 2", tag: "B" },
        { id: "item-3", title: "Item 3", tag: "C" },
        { id: "item-4", title: "Item 4", tag: "D" },
        { id: "item-5", title: "Item 5", tag: "E" },
      ],
    },
  ]

  const {
      columns,
      activeTask,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
      sensors
  } = useKanban<Task, Column>(initialSimpleData)

  const col = columns[0];

  return (
    <KanbanBoard 
      onDragStart={handleDragStart} 
      onDragOver={handleDragOver} 
      onDragEnd={handleDragEnd} 
      sensors={sensors}
      className="flex-col h-auto"
    >
        <div className="w-full max-w-md mx-auto p-4 border rounded-lg bg-background">
            <h3 className="font-semibold mb-4 text-sm uppercase text-muted-foreground">Reorder Items</h3>
            <KanbanList 
                items={useMemo(() => col.tasks.map(t => t.id), [col.tasks])} 
                className="flex-col gap-2"
                strategy={verticalListSortingStrategy}
            >
                {col.tasks.map((task) => (
                    <KanbanCard key={task.id} id={task.id} className="group flex items-center justify-between p-3 bg-card border rounded-md shadow-sm hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-3">
                             <div className="text-muted-foreground/50 group-hover:text-foreground cursor-grab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                             </div>
                             <span>{task.title}</span>
                        </div>
                        <Badge variant="outline">{task.tag}</Badge>
                    </KanbanCard>
                ))}
            </KanbanList>
        </div>

        <KanbanDragOverlay>
             {activeTask ? (
                <div className="flex items-center justify-between p-3 bg-card border rounded-md shadow-xl w-[400px] cursor-grabbing active:scale-105 transition-transform">
                     <div className="flex items-center gap-3">
                         <div className="text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                         </div>
                         <span>{activeTask.title}</span>
                    </div>
                    <Badge variant="outline">{activeTask.tag}</Badge>
                </div>
            ) : null}
        </KanbanDragOverlay>
    </KanbanBoard>
  )
}`,
      },
      {
        title: "Drag and drop grid",
        description: "A drag and drop grid.",
        demo: "dragAndDropGrid",
        code: `"use client"

import { useMemo } from "react"
import {
  KanbanBoard,
  KanbanCard,
  KanbanColumn,
  KanbanList,
  useKanban,
  KanbanDragOverlay,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from "@/components/ui/kanban"
import { Badge } from "@/components/ui/badge"

type Task = {
  id: string
  title: string
  tag: string
}

type Column = {
  id: string
  title: string
  tasks: Task[]
}

export function DragAndDropGrid() {
  const initialGridData: Column[] = [
    {
      id: "grid",
      title: "Grid Layout",
      tasks: [
        { id: "img-1", title: "Image 1", tag: "JPG" },
        { id: "img-2", title: "Image 2", tag: "PNG" },
        { id: "img-3", title: "Image 3", tag: "SVG" },
        { id: "img-4", title: "Image 4", tag: "GIF" },
        { id: "img-5", title: "Image 5", tag: "WEBP" },
        { id: "img-6", title: "Image 6", tag: "BMP" },
      ],
    },
  ]

  const {
      columns,
      activeTask,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
      sensors
  } = useKanban<Task, Column>(initialGridData)

  const col = columns[0];

  return (
    <KanbanBoard 
      onDragStart={handleDragStart} 
      onDragOver={handleDragOver} 
      onDragEnd={handleDragEnd} 
      sensors={sensors}
      className="flex-col h-auto"
    >
        <div className="w-full max-w-2xl mx-auto p-4 border rounded-lg bg-background">
            <h3 className="font-semibold mb-4 text-sm uppercase text-muted-foreground">Grid Layout</h3>
            <KanbanList 
                items={useMemo(() => col.tasks.map(t => t.id), [col.tasks])} 
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                strategy={rectSortingStrategy}
            >
                {col.tasks.map((task) => (
                    <KanbanCard key={task.id} id={task.id} className="aspect-square flex flex-col items-center justify-center p-4 bg-muted/30 border-2 border-dashed rounded-xl hover:border-primary/50 hover:bg-muted/50 transition-all cursor-grab group">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                             <span className="font-bold text-primary">{task.tag}</span>
                        </div>
                        <span className="font-medium">{task.title}</span>
                    </KanbanCard>
                ))}
            </KanbanList>
        </div>

        <KanbanDragOverlay>
             {activeTask ? (
                <div className="aspect-square flex flex-col items-center justify-center p-4 bg-background border-2 border-primary rounded-xl shadow-2xl cursor-grabbing w-[150px] opacity-90 scale-105">
                     <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                             <span className="font-bold text-primary">{activeTask.tag}</span>
                        </div>
                        <span className="font-medium">{activeTask.title}</span>
                </div>
            ) : null}
        </KanbanDragOverlay>
    </KanbanBoard>
  )
}`,
      },
    ],
  },

  stepper: {
    title: "Stepper",
    description:
      "A component to indicate progress through a multi-step process.",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        // { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add stepper",
      // manual: "",
    },
    demo: "stepper",
    usage: [
      `
import { 
  Stepper, 
  StepperItem, 
  StepperTrigger, 
  StepperContent 
} from "@/components/ui/stepper"
`,
      `
<Stepper defaultValue={1}>
  <StepperItem step={1}>
    <StepperTrigger>Step 1</StepperTrigger>
    <StepperContent>Content 1</StepperContent>
  </StepperItem>
  <StepperItem step={2}>
    <StepperTrigger>Step 2</StepperTrigger>
    <StepperContent>Content 2</StepperContent>
  </StepperItem>
</Stepper>
`,
    ],
    content: `"use client"

import * as React from "react"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from "@/components/ui/stepper"

export function StepperDemo() {
  const [activeStep, setActiveStep] = React.useState(1)

  return (
    <div className="flex w-full flex-col gap-8 p-4">
      <Stepper value={activeStep} onValueChange={setActiveStep}>
        
        <StepperItem step={1} className="flex-1">
            <StepperTrigger onClick={() => setActiveStep(1)} className="w-full flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                    <StepperIndicator className={activeStep >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}>
                        {activeStep > 1 ? <CheckIcon className="h-4 w-4" /> : 1}
                    </StepperIndicator>
                    <div className="flex flex-col items-start">
                        <StepperTitle>Account</StepperTitle>
                        <StepperDescription>Enter details</StepperDescription>
                    </div>
                </div>
            </StepperTrigger>
            <StepperSeparator className="mt-4" />
        </StepperItem>

        <StepperItem step={2} className="flex-1">
             <StepperTrigger onClick={() => setActiveStep(2)} className="w-full flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                    <StepperIndicator className={activeStep >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}>
                         {activeStep > 2 ? <CheckIcon className="h-4 w-4" /> : 2}
                    </StepperIndicator>
                    <div className="flex flex-col items-start">
                        <StepperTitle>Address</StepperTitle>
                        <StepperDescription>Shipping info</StepperDescription>
                    </div>
                </div>
            </StepperTrigger>
             <StepperSeparator className="mt-4" />
        </StepperItem>

        <StepperItem step={3} className="flex-1">
            <StepperTrigger onClick={() => setActiveStep(3)} className="w-full flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                     <StepperIndicator className={activeStep >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}>
                         {activeStep > 3 ? <CheckIcon className="h-4 w-4" /> : 3}
                    </StepperIndicator>
                    <div className="flex flex-col items-start">
                        <StepperTitle>Confirm</StepperTitle>
                        <StepperDescription>Review order</StepperDescription>
                    </div>
                </div>
            </StepperTrigger>
        </StepperItem>

      </Stepper>

      <div className="flex w-full flex-col gap-4 rounded-lg border p-6">
        <div className="text-xl font-semibold">
           {activeStep === 1 && "Step 1: Account Details"}
           {activeStep === 2 && "Step 2: Shipping Address"}
           {activeStep === 3 && "Step 3: Confirmation"}
        </div>
        <div className="text-muted-foreground">
           {activeStep === 1 && "Please enter your account information below."}
           {activeStep === 2 && "Where should we send your package?"}
           {activeStep === 3 && "Please review your order before paying."}
        </div>
        
        <div className="flex justify-end gap-2 mt-4">
            <Button 
                variant="outline" 
                onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                disabled={activeStep === 1}
            >
                Back
            </Button>
            <Button 
                onClick={() => setActiveStep(prev => Math.min(3, prev + 1))}
                disabled={activeStep === 3}
            >
                Next
            </Button>
        </div>
      </div>
    </div>
  )
}
`,
    examples: [],
  },
  carousel: {
    title: "Carousel",
    description: "A motion-carousel component built with Embla Carousel.",
    links: [
      {
        label: "Docs",
        href: "https://ui.shadcn.com/docs/components/carousel",
      },
      {
        label: "API Reference",
        href: "https://www.embla-carousel.com/api/",
      },
    ],
    installation: {
      tabs: [{ label: "CLI", active: true }],
      cli: "npx shadcn@latest add carousel",
    },
    demo: "carousel",
    usage: [
      `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"`,
      `<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    ],
    content: `import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
`,
  },

  chart: {
    title: "Chart",
    description:
      "A unified chart component that supports Bar, Line, Area, and Pie charts.",
    installation: {
      tabs: [{ label: "CLI", active: true }],
      cli: "npx shadcn@latest add chart",
    },
    demo: "chart",
    usage: [
      `
import { UnifiedChart } from "@/components/ui/unified-chart"

const data = [
  { month: "Jan", sales: 100 },
  { month: "Feb", sales: 150 },
]
`,
      `
<UnifiedChart 
  type="bar" 
  data={data} 
  dataKey="sales" 
  xAxisKey="month" 
  config={chartConfig}
/>
`,
    ],
    content: `"use client"

import * as React from "react"
import { BarChart3, LineChart, PieChart, AreaChart as AreaChartIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { UnifiedChart, ChartType, ChartConfig } from "@/components/ui/unified-chart"

const chartData = [
  { month: "January", visitors: 186, fill: "var(--color-january)" },
  { month: "February", visitors: 305, fill: "var(--color-february)" },
  { month: "March", visitors: 237, fill: "var(--color-march)" },
  { month: "April", visitors: 73, fill: "var(--color-april)" },
  { month: "May", visitors: 209, fill: "var(--color-may)" },
  { month: "June", visitors: 214, fill: "var(--color-june)" },
]

const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
  chrome: { label: "Chrome", color: "#E91E63" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
  january: { label: "January", color: "var(--chart-1)" },
  february: { label: "February", color: "var(--chart-2)" },
  march: { label: "March", color: "var(--chart-3)" },
  april: { label: "April", color: "var(--chart-4)" },
  may: { label: "May", color: "var(--chart-5)" },
  june: { label: "June", color: "var(--chart-1)" },
} satisfies ChartConfig

export function ChartDemo() {
  const [type, setType] = React.useState<ChartType>("bar")

  return (
    <div className="flex w-full flex-col gap-6 p-4">
      <div className="flex items-center gap-2">
        <Button 
            variant={type === "bar" ? "default" : "outline"} 
            size="sm"
            onClick={() => setType("bar")}
        >
            <BarChart3 className="mr-2 h-4 w-4" /> Bar
        </Button>
        <Button 
            variant={type === "line" ? "default" : "outline"}
            size="sm" 
            onClick={() => setType("line")}
        >
            <LineChart className="mr-2 h-4 w-4" /> Line
        </Button>
         <Button 
            variant={type === "area" ? "default" : "outline"} 
            size="sm"
            onClick={() => setType("area")}
        >
            <AreaChartIcon className="mr-2 h-4 w-4" /> Area
        </Button>
        <Button 
            variant={type === "pie" ? "default" : "outline"} 
            size="sm"
            onClick={() => setType("pie")}
        >
            <PieChart className="mr-2 h-4 w-4" /> Pie
        </Button>
      </div>

      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-6 pt-0 mt-6">
            <UnifiedChart
                type={type}
                data={type === "pie" ? pieChartData : chartData}
                dataKey="visitors"
                xAxisKey={type === "pie" ? "browser" : "month"}
                config={chartConfig}
                title="Website Visitors"
                description="Jan - June 2024"
                footer={
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <LineChart className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                        </div>
                    </div>
                }
            />
        </div>
      </div>
    </div>
  )
}`,
    examples: [],
    args: [
      {
        name: "Type of Chart",
        description: "Type of chart to display.",
        props: [
          {
            prop: "type",
            type: "bar | line | area | pie",
            default: "bar",
          },
        ],
      },
    ],
  },

  "data-table": {
    title: "Data Table",
    description: "Powerful table built using TanStack Table v8.",
    installation: {
      tabs: [{ label: "CLI", active: true }],
      cli: "npx shadcn@latest add table",
    },
    demo: "table",
    usage: [
      `
import { DataTable } from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
]
`,
      `
<DataTable 
  columns={columns} 
  data={data} 
  paginationStyle="numbered" 
/>
`,
    ],
    content: `"use client"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/ui/data-table"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
    customer_name: "Ken",
    date: "2024-01-01",
  },
  {
    id: "3u1reoj4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    customer_name: "Abe",
    date: "2024-01-02",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    customer_name: "Monserrat",
    date: "2024-01-03",
  }
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  customer_name: string
  date: string
}

const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value: any) => <div className="capitalize">{value}</div>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (value: any) => <div className="lowercase">{value}</div>
  },
  {
    title: 'Customer',
    dataIndex: 'customer_name',
    key: 'customer_name',
    render: (value: any) => <div className="capitalize">{value}</div>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (value: any) => {
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value)
      return <div className="text-right font-medium">{formatted}</div>
    }
  },
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
    render: (_: any, payment: Payment) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
];

export function TableDemo() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} paginationStyle="numbered" enableSelection={false} />
    </div>
  )
}`,
    examples: [],
    args: [
      {
        name: "enableSelection",
        description: "Enable row selection.",
        props: [
          {
            prop: "enableSelection",
            type: "boolean",
            default: "false",
          },
        ],
      },
      {
        name: "data",
        description: "The data to display in the table.",
        props: [
          {
            prop: "data",
            type: "any[]",
            default: "[]",
          },
        ],
      },
      {
        name: "paginationStyle",
        description: "The pagination style to use.",
        props: [
          {
            prop: "paginationStyle",
            type: `numbered | simple`,
            default: `simple`,
          },
        ],
      },
    ],
  },

  masonry: {
    title: "Masonry",
    description:
      "A responsive masonry layout component that distributes items across columns.",
    installation: {
      tabs: [{ label: "Manual", active: true }],
      cli: "",
      manual: "Copy the code from src/components/ui/masonry.tsx",
    },
    demo: "masonry",
    usage: [
      `import { Masonry } from "@/components/ui/masonry"`,
      `<Masonry columns={{ 640: 1, 768: 2, 1024: 3 }} gap={4}>
  {items.map((item) => (
    <Card key={item.id}>...</Card>
  ))}
</Masonry>`,
    ],
    content: `import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface MasonryProps {
  children: React.ReactNode;
  columns?: number | { [key: number]: number }; // Number of columns or responsive object { breakPoint: cols }
  gap?: number;
  className?: string;
  columnClassName?: string;
}

export function Masonry({
  children,
  columns = 3,
  gap = 4,
  className,
  columnClassName,
}: MasonryProps) {
    const [columnCount, setColumnCount] = useState<number>(3);

    useEffect(() => {
        const updateColumns = () => {
            if (typeof columns === 'number') {
                setColumnCount(columns);
            } else {
                 // Sort breakpoints descending
                const breakpoints = Object.keys(columns).map(Number).sort((a, b) => b - a);
                const width = window.innerWidth;
                let count = columns[breakpoints[breakpoints.length - 1]]; // Default to smallest

                for (const point of breakpoints) {
                    if (width >= point) {
                        count = columns[point];
                        break;
                    }
                }
                setColumnCount(count || 3);
            }
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, [columns]);

  const childrenArray = React.Children.toArray(children);
  const columnItems: React.ReactNode[][] = Array.from({ length: columnCount }, () => []);

  childrenArray.forEach((child, index) => {
    columnItems[index % columnCount].push(child);
  });

  return (
    <div
      className={cn("flex w-full", className)}
      style={{ gap: \`\${gap * 0.25}rem\` }}
    >
      {columnItems.map((col, index) => (
        <div
          key={index}
          className={cn("flex flex-col flex-1", columnClassName)}
           style={{ gap: \`\${gap * 0.25}rem\` }}
        >
          {col}
        </div>
      ))}
    </div>
  );
}
`,
    args: [
      {
        name: "Props",
        description: "Props for the Masonry component.",
        props: [
          {
            prop: "columns",
            type: "number | { [key: number]: number }",
            default: "3",
          },
          {
            prop: "gap",
            type: "number",
            default: "4",
          },
        ],
      },
    ],
  },

  "radio-group": {
    title: "Radio Group",
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    installation: {
      tabs: [{ label: "CLI", active: true }],
      cli: "npx shadcn@latest add radio-group",
    },
    demo: "radio-group",
    usage: [
      `import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <div className="w-full">
      <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
        {/* ... options ... */}
        <div>
          <RadioGroupItem
            value="card"
            id="card"
            className="peer sr-only"
          />
          <Label
            htmlFor="card"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mb-3 h-6 w-6"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
            Card
          </Label>
        </div>
        {/* ... more options ... */}
      </RadioGroup>
    </div>
  )
}`,
    ],
    content: `"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <div className="w-full">
      <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
        <div>
          <RadioGroupItem value="card" id="card" className="peer sr-only" />
          <Label
            htmlFor="card"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mb-3 h-6 w-6"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
            Card
          </Label>
        </div>
        <div>
          <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
          <Label
            htmlFor="paypal"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mb-3 h-6 w-6"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
            Paypal
          </Label>
        </div>
        <div>
          <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
          <Label
            htmlFor="apple"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mb-3 h-6 w-6"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-8s-3-2.66-3-5.5C19 5.38 21 3.5 21 3.5c-1.92.42-3.48 1.5-4.5 2.05-1.02-.56-2.58-1.63-4.5-2.05L12 3.5C21 3.5 12 20.94 12 20.94z" />
            </svg>
            Apple
          </Label>
        </div>
      </RadioGroup>
      <div className="mt-6 space-y-4">
        <h4 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Select a plan
        </h4>
        <RadioGroup defaultValue="starter" className="grid gap-2">
          <div className="flex items-center justify-between space-x-2 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="starter" id="r1" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="r1" className="font-semibold cursor-pointer">
                  Starter
                </Label>
                <p className="text-sm text-muted-foreground">
                  Perfect for small teams and individuals.
                </p>
              </div>
            </div>
            <div className="text-sm font-medium">$0</div>
          </div>
          <div className="flex items-center justify-between space-x-2 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pro" id="r2" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="r2" className="font-semibold cursor-pointer">
                  Pro
                </Label>
                <p className="text-sm text-muted-foreground">
                  Unlock mostly used features for growing business.
                </p>
              </div>
            </div>
            <div className="text-sm font-medium">$29</div>
          </div>
          <div className="flex items-center justify-between space-x-2 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enterprise" id="r3" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="r3" className="font-semibold cursor-pointer">
                  Enterprise
                </Label>
                <p className="text-sm text-muted-foreground">
                  For large scale organizations and enterprise needs.
                </p>
              </div>
            </div>
            <div className="text-sm font-medium">Custom</div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}`,
    examples: [
      {
        title: "Disabled",
        description: "A radio group with disabled items.",
        demo: "radio-group-disabled",
        code: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioGroupDisabledDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r_disabled_1" disabled />
        <Label htmlFor="r_disabled_1">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r_disabled_2" disabled />
        <Label htmlFor="r_disabled_2">Option Two</Label>
      </div>
    </RadioGroup>
  )
}`,
      },
    ],
  },

  notification: {
    title: "Notification",
    description: "Display a notification message globally.",
    installation: {
      tabs: [{ label: "CLI", active: true }],
      cli: "npx shadcn@latest add sonner",
    },
    demo: "notification",
    usage: [
      `import { notification } from "@/components/ui/notification"

notification.success({
  message: "Event has been created",
  description: "Sunday, December 03, 2023 at 9:00 AM",
  duration: 5000,
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})
// Available positions: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
`,
    ],
    content: `
"use client";

import { Button } from "@/components/ui/button";
import { notification } from "@/components/ui/notification";

export function NotificationDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() =>
          notification.open({
            message: "Notification Title",
            description:
              "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
          })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.success({
            message: "Success Notification",
            position: "top-left",
            description: "The action was completed successfully.",
          })
        }
      >
        Success on top-left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.info({
            message: "Info Notification",
            description: "Here is some useful information for you.",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.warning({
            message: "Warning Notification",
            description: "Please be careful with this action.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.error({
            message: "Error Notification",
            position: "bottom-left",
            description: "Something went wrong. Please try again.",
          })
        }
      >
        Error on bottom-left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.success({
            message: "Quick Notification",
            description: "This will disappear in 1s.",
            duration: 1000,
          })
        }
      >
        Duration (1s)
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.open({
            message: "Action Required",
            description: "Please confirm your email address.",
            action: {
              label: "Confirm",
              onClick: () => console.log("Confirmed"),
            },
          })
        }
      >
        With Action
      </Button>
    </div>
  );
}`,
    examples: [],
  },
};

export function getComponentData(slug: string): ComponentData | null {
  return components[slug] || null;
}

export function getAllComponents(): string[] {
  return Object.keys(components);
}

export function getComponentsList(): Array<{
  slug: string;
  title: string;
  description: string;
}> {
  return Object.entries(components).map(([slug, data]) => ({
    slug,
    title: data.title,
    description: data.description,
  }));
}
