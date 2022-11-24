import { ReactNode } from "react";

export default function Home() {
    return (
        <section>
            <div className="space-y-3 text-justify leading-relaxed">
                <h1 className="text-2xl font-bold lg:text-3xl">Welcome!</h1>
                <p>
                    Thanks for stopping by, my name is Hector and I&apos;m a
                    Software Engineer based in Prague originally from Honduras.
                    I&apos;m passionate about crafting user interfaces and
                    making technology accessible for everyone.
                </p>
                <p>
                    Currently working as a React/TypeScript Developer at{" "}
                    <Anchor href="https://webscope.io">Webscope</Anchor>.
                </p>
                <p>
                    This project was mainly built to test{" "}
                    <Anchor href="https://beta.nextjs.org/docs/getting-started">
                        Next.js 13
                    </Anchor>
                    . The code is open-sourced and available at{" "}
                    <Anchor href="https:hectorsosa.me/github">GitHub</Anchor>.
                </p>
                <p>
                    Other technologies being used are:{" "}
                    <Anchor href="https://tailwindcss.com/">
                        TailwindCSS v3
                    </Anchor>{" "}
                    for styling,{" "}
                    <Anchor href="https://tanstack.com/query/v4">
                        TanStack Query v4
                    </Anchor>{" "}
                    for state management and data fetching,{" "}
                    <Anchor href="https://www.sanity.io/">Sanity</Anchor>{" "}
                    headless content management system, and{" "}
                    <Anchor href="https://supabase.com/">Supabase</Anchor> for
                    authentication and database.
                </p>
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
