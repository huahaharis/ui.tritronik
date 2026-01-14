"use client"

import { useState } from "react"
import { Copy, CopyX as Copy2 } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    return (
        <>
            <div className="mx-auto max-w-3xl px-6 py-12 md:px-8">

                <div className="mb-10 flex items-start justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-foreground">Introduction</h1>
                        <p className="mt-2 text-sm text-muted-foreground">
                            What shadcn/ui is and why it exists.
                        </p>
                    </div>

                    <div
                        onClick={() =>
                            copyToClipboard(window.location.href, "copy-page")
                        }
                        className="inline-flex items-center h-6 w-28 gap-2 rounded-md border border-border bg-card px-3 py-2 cursor-pointer text-xs font-medium hover:bg-muted"
                    >
                        <Copy className="h-4 w-4" />
                        Copy Page
                    </div>
                </div>

                <div className="space-y-10 text-foreground">
                    <section>
                        <p className="text-base leading-relaxed">
                            shadcn/ui is a set of beautifully-designed, accessible components and
                            a code distribution platform. Works with your favorite frameworks
                            and AI models. Open Source. Open Code.
                        </p>

                        <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
                            <p className="text-sm font-medium">
                                This is not a component library. It is how you build your component
                                library.
                            </p>
                        </div>
                    </section>

                    <section>
                        <p className="text-base leading-relaxed">
                            You know how most traditional component libraries work: you install
                            a package from NPM, import the components, and use them in your app.
                        </p>

                        <p className="mt-4 text-base leading-relaxed">
                            This approach works well until you need to customize a component to
                            fit your design system or require one that isn’t included in the
                            library. Often, you end up wrapping library components, writing
                            workarounds to override styles, or mixing components from different
                            libraries with incompatible APIs.
                        </p>

                        <p className="mt-4 text-base leading-relaxed">
                            This is what shadcn/ui aims to solve. It is built around the
                            following principles:
                        </p>
                    </section>

                    <section>
                        <ul className="space-y-3 text-base">
                            <li>
                                <strong>Open Code</strong> – The top layer of your component code is
                                open for modification.
                            </li>
                            <li>
                                <strong>Composition</strong> – Every component uses a common,
                                composable interface, making them predictable.
                            </li>
                            <li>
                                <strong>Distribution</strong> – A flat-file schema and
                                command-line tool make it easy to distribute components.
                            </li>
                            <li>
                                <strong>Beautiful Defaults</strong> – Carefully chosen default
                                styles, so you get great design out-of-the-box.
                            </li>
                            <li>
                                <strong>AI-Ready</strong> – Open code for LLMs to read, understand,
                                and improve.
                            </li>
                        </ul>
                    </section>

                    <section id="open-code" className="mt-12">
                        <h2 className="mb-3 text-2xl font-bold text-foreground">Open Code</h2>

                        <p className="text-base leading-relaxed">
                            shadcn/ui hands you the actual component code. You have full control
                            to customize and extend the components to your needs. This means:
                        </p>

                        <ul className="mt-4 space-y-3 text-base">
                            <li>
                                <strong>Full Transparency</strong> – You see exactly how each
                                component is built.
                            </li>
                            <li>
                                <strong>Easy Customization</strong> – Modify any part of a
                                component to fit your design and functionality requirements.
                            </li>
                            <li>
                                <strong>AI Integration</strong> – Access to the code makes it
                                straightforward for LLMs to read, understand, and even improve
                                your components.
                            </li>
                        </ul>

                        <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
                            <p className="text-sm text-muted-foreground">
                                In a typical library, if you need to change a button’s behavior,
                                you have to override styles or wrap the component. With shadcn/ui,
                                you simply edit the button code directly.
                            </p>
                        </div>
                    </section>

                    <section id="composition" className="mt-12">
                        <h2 className="mb-3 text-2xl font-bold text-foreground">
                            Composition
                        </h2>

                        <p className="text-base leading-relaxed">
                            Every component in shadcn/ui shares a common, composable interface.
                            If a component does not exist, we bring it in, make it composable,
                            and adjust its style to match and work with the rest of the design
                            system.
                        </p>

                        <p className="mt-4 text-base leading-relaxed">
                            A shared, composable interface means it’s predictable for both your
                            team and LLMs. You are not learning different APIs for every new
                            component — even for third-party ones.
                        </p>
                    </section>

                    <section id="distribution" className="mt-12">
                        <h2 className="mb-3 text-2xl font-bold text-foreground">
                            Distribution
                        </h2>

                        <p className="text-base leading-relaxed">
                            shadcn/ui is also a code distribution system. It defines a schema
                            for components and a CLI to distribute them.
                        </p>

                        <ul className="mt-4 space-y-3 text-base">
                            <li>
                                <strong>Schema</strong> – A flat-file structure that defines the
                                components, their dependencies, and properties.
                            </li>
                            <li>
                                <strong>CLI</strong> – A command-line tool to distribute and
                                install components across projects with cross-framework support.
                            </li>
                        </ul>

                        <p className="mt-4 text-base leading-relaxed">
                            You can use the schema to distribute your components to other
                            projects or have AI generate completely new components based on
                            existing schema.
                        </p>
                    </section>

                    <section id="beautiful-defaults" className="mt-12">
                        <h2 className="mb-3 text-2xl font-bold text-foreground">
                            Beautiful Defaults
                        </h2>

                        <p className="text-base leading-relaxed">
                            shadcn/ui comes with a large collection of components that have
                            carefully chosen default styles. They are designed to look good on
                            their own and to work well together as a consistent system.
                        </p>

                        <ul className="mt-4 space-y-3 text-base">
                            <li>
                                <strong>Good Out-of-the-Box</strong> – A clean and minimal look
                                without extra work.
                            </li>
                            <li>
                                <strong>Unified Design</strong> – Components naturally fit with
                                one another.
                            </li>
                            <li>
                                <strong>Easily Customizable</strong> – Defaults are simple to
                                override and extend.
                            </li>
                        </ul>
                    </section>

                    <section id="ai-ready" className="mt-12">
                        <h2 className="mb-3 text-2xl font-bold text-foreground">AI-Ready</h2>

                        <p className="text-base leading-relaxed">
                            The design of shadcn/ui makes it easy for AI tools to work with your
                            code. Its open code and consistent API allow AI models to read,
                            understand, and even generate new components.
                        </p>

                        <p className="mt-4 text-base leading-relaxed">
                            An AI model can learn how your components work and suggest
                            improvements or create new components that integrate with your
                            existing design.
                        </p>
                    </section>

                    <div className="flex justify-end pt-8">
                        <Link
                            href="/docs/installation"
                            className="text-sm font-semibold text-muted-foreground hover:text-foreground"
                        >
                            Installation →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
