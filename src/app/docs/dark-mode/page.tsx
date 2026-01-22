import Link from "next/link"

const frameworks = [
    {
        name: "Next.js",
        href: "/docs/dark-mode/next",
        icon: NextIcon,
    },
    {
        name: "Vite",
        href: "/docs/dark-mode/vite",
        icon: ViteIcon,
    },
]

export default function DarkModePage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground">Dark Mode</h1>
                <p className="text-sm text-muted-foreground mt-4">
                    Adding dark mode to your site.
                </p>
            </div>
            <section id="pick-your-framework">
                <h2 className="mt-2 text-3xl font-bold text-foreground">
                    Pick Your Framework
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                    Start by selecting your framework of choice. Then follow the
                    instructions to install the dependencies and structure your app.
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