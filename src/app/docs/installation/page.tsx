import Link from "next/link"

const frameworks = [
    {
        name: "Next.js",
        href: "/docs/installation/next",
        icon: NextIcon,
    },
    {
        name: "Vite",
        href: "/docs/installation/vite",
        icon: ViteIcon,
    },
    // {
    //     name: "Laravel",
    //     href: "/docs/installation/laravel",
    //     icon: LaravelIcon,
    // },
    // {
    //     name: "React Router",
    //     href: "/docs/installation/react-router",
    //     icon: ReactRouterIcon,
    // },
    // {
    //     name: "Astro",
    //     href: "/docs/installation/astro",
    //     icon: AstroIcon,
    // },
    // {
    //     name: "TanStack Start",
    //     href: "/docs/installation/tanstack-start",
    //     icon: TanStackIcon,
    // },
    // {
    //     name: "TanStack Router",
    //     href: "/docs/installation/tanstack-router",
    //     icon: TanStackIcon,
    // },
    // {
    //     name: "Manual",
    //     href: "/docs/installation/manual",
    //     icon: ManualIcon,
    // },
]

export default function InstallationPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground">Installation</h1>
                <p className="text-sm text-muted-foreground mt-4">
                    How to install dependencies and structure your app.
                </p>
            </div>
            <section id="pick-your-framework">
                <h2 className="mt-2 text-3xl font-bold text-foreground">
                    Pick Your Framework
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                    Start by selecting your framework of choice. Then follow the
                    instructions to install the dependencies and structure your app.
                    shadcn/ui is built to work with all React frameworks.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-10">
                    {frameworks.map((fw) => (
                        <Link
                            key={fw.name}
                            href={fw.href}
                            className="group flex h-30 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:bg-muted"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <fw.icon className="h-8 w-8 text-foreground" />
                                <span className="text-sm font-medium text-foreground">
                                    {fw.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

function NextIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <circle cx="12" cy="12" r="12" />
            <path
                d="M7 7h3l5 7V7h2v10h-3l-5-7v7H7z"
                fill="white"
            />
        </svg>
    )
}

function ViteIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2l9 4-9 16L3 6z" />
        </svg>
    )
}

function LaravelIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3 7l5-3 5 3v6l-5 3-5-3zM13 13l5-3 5 3v6l-5 3-5-3z" />
        </svg>
    )
}

function ReactRouterIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <circle cx="6" cy="12" r="2" />
            <circle cx="12" cy="6" r="2" />
            <circle cx="18" cy="12" r="2" />
            <circle cx="12" cy="18" r="2" />
        </svg>
    )
}

function AstroIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2l4 10-4 10-4-10z" />
        </svg>
    )
}

function TanStackIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function ManualIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M4 4h16v16H4z" />
            <path d="M8 8h8v2H8zM8 12h8v2H8z" fill="white" />
        </svg>
    )
}
