export interface ComponentData {
  title: string
  description: string
  docs?: boolean
  apiReference?: boolean
  urlDocs?: string | undefined
  urlReference?: string
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
      manual: "@radix-ui/react-accordion",
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
      manual: "",
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
      manual: "@radix-ui/react-alert-dialog",
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
    content: `
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
      manual: "@radix-ui/react-slot",
    },
    demo: "button",
    usage: `import { Button } from "@/components/ui/button"`,
    content: `<Button>Click me</Button>`,
    examples: `
import { ArrowUpIcon } from "lucide-react"
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
}
        `,
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
    usage: `import { Badge } from "@/components/ui/badge"`,
    content: `<Badge>Badge</Badge>`,
    examples: `
import { BadgeCheckIcon } from "lucide-react"
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
}
`,
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
    usage: `
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
`,
    content: `
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>`,
    examples: `
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
}`
  },

  calendar: {
    title: "Calendar",
    description: "A date field component that allows users to enter and edit date.",
    docs: true,
    urlDocs: "https://daypicker.dev/",
    apiReference: false,
    urlReference: "",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "calendar",
    usage: `import { Calendar } from "@/components/ui/calendar"`,
    content: `const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
)`,
    examples: `"use client"

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
}`
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
    demo: "dialog",
    usage: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
`,
    content: `<Dialog>
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
    examples: `import { Button } from "@/components/ui/button"
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
}`
  },

  "dropdown-menu": {
    title: "Dropdown Menu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    docs: true,
    urlDocs: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
    apiReference: true,
    urlReference: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu#api-reference",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "dropdownMenu",
    usage: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"`,
    content: `<DropdownMenu>
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
    examples: `import { Button } from "@/components/ui/button"
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
}`
  },

  input: {
    title: "Input",
    description: "Displays a form input field.",
    docs: false,
    apiReference: false,
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "input",
    usage: `import { Input } from "@/components/ui/input"`,
    content: `<Input type="email" placeholder="Email" />`,
    examples: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}`
  },

  label: {
    title: "Label",
    description: "Renders an accessible label associated with controls.",
    docs: true,
    urlDocs: "https://www.radix-ui.com/primitives/docs/components/label",
    apiReference: true,
    urlReference: "https://www.radix-ui.com/primitives/docs/components/label#api-reference",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "label",
    usage: `import { Label } from "@/components/ui/label"`,
    content: `<Label htmlFor="email">Your email address</Label>`,
    examples: `import { Checkbox } from "@/components/ui/checkbox"
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
}
`
  },

  popover: {
    title: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    docs: true,
    urlDocs: "https://www.radix-ui.com/primitives/docs/components/popover",
    apiReference: true,
    urlReference: "https://www.radix-ui.com/primitives/docs/components/popover#api-reference",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "popover",
    usage: `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"`,
    content: `<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`,
    examples: `import { Button } from "@/components/ui/button"
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
}`
  },

  progress: {
    title: "Progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    docs: true,
    urlDocs: "https://www.radix-ui.com/primitives/docs/components/progress",
    apiReference: true,
    urlReference: "https://www.radix-ui.com/primitives/docs/components/progress#api-reference",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "progress",
    usage: `import { Progress } from "@/components/ui/progress"`,
    content: `<Progress value={33} />`,
    examples: `"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}`
  },

  select: {
    title: "Select",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
    docs: true,
    urlDocs: "https://www.radix-ui.com/primitives/docs/components/select",
    apiReference: true,
    urlReference: "https://www.radix-ui.com/primitives/docs/components/select#api-reference",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "select",
    usage: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`,
    content: `<Select>
  <SelectTrigger className="w-45">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`,
    examples: `import * as React from "react"

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
}`
  },

  slider: {
    title: "Slider",
    description: "An input where the user selects a value from within a given range.",
    docs: true,
    urlDocs: "https://www.radix-ui.com/primitives/docs/components/slider",
    apiReference: true,
    urlReference: "https://www.radix-ui.com/primitives/docs/components/slider#api-reference",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "slider",
    usage: `import { Slider } from "@/components/ui/slider"`,
    content: `<Slider defaultValue={[33]} max={100} step={1} />`,
    examples: `import { cn } from "@/lib/utils"
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
}`
  },

  sheet: {
    title: "Sheet",
    description: "Extends the Dialog component to display content that complements the main content of the screen.",
    docs: false,
    urlDocs: "",
    apiReference: false,
    urlReference: "",
    installation: {
      tabs: [
        { label: "CLI", active: true },
        { label: "Manual", active: false },
      ],
      cli: "npx shadcn@latest add input",
      manual: "Copy the input component from the components library.",
    },
    demo: "sheet",
    usage: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"`,
    content: `<Sheet>
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
    examples: `import { Button } from "@/components/ui/button"
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
}`
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
    demo: "tabs",
    usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`,
    content: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
`,
    examples: `import { AppWindowIcon, CodeIcon } from "lucide-react"

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
