import Motion from "#/components/Motion";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
    return (
        <Motion>
            <section className="space-y-8 py-12 text-center leading-relaxed">
                <header className="space-y-3">
                    <h2 className="text-4xl font-bold sm:text-6xl">
                        Understanding Suspense with Next 13
                    </h2>
                    <p className="sm:text-xl">
                        How to control loading states for your application using{" "}
                        <Anchor href="https://reactjs.org/blog/2022/03/29/react-v18.html">
                            React 18
                        </Anchor>{" "}
                        and{" "}
                        <Anchor href="https://beta.nextjs.org/docs/getting-started">
                            Next 13
                        </Anchor>
                        .
                    </p>
                </header>
                <div>
                    <p className="py-2 text-xl font-semibold">
                        Today&apos;s menu:
                    </p>
                    <ul className="space-y-2 text-center sm:text-lg">
                        <li>
                            <Link href="/suspense">Suspense and React 18</Link>
                        </li>
                        <li>
                            <Link href="/examples">
                                Design Patterns for Loading UI in Next 13
                            </Link>
                        </li>
                        <li>
                            <Link href="/tailwind">
                                Using TailwindCSS for loading states
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </Motion>
    );
}

function Anchor({ children, href }: { children: ReactNode; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
        >
            {children}
        </a>
    );
}
