import { ReactNode } from "react";

export default function Home() {
    return (
        <section>
            <div className="space-y-3 leading-relaxed">
                <header className="mb-6">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        How does Suspense work?
                    </h2>
                </header>
                <article className="space-y-2 text-justify leading-loose">
                    <p>
                        If a component suspends, the closest Suspense component
                        above the suspending component &quot;catches&quot; it,
                        no matter how many components are in between them. This
                        lets you safely add and remove Suspense boundaries
                        according to the granularity of your visual UI design
                        and without worrying which components exactly might
                        depend on asynchronous code and data.
                    </p>
                    <p>
                        This project was mainly built to test{" "}
                        <Anchor href="https://beta.nextjs.org/docs/getting-started">
                            Next.js 13
                        </Anchor>
                        . The code is open-sourced and available at{" "}
                        <Anchor href="https://hectorsosa.me/github">
                            GitHub
                        </Anchor>
                        .
                    </p>
                </article>
            </div>
        </section>
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
