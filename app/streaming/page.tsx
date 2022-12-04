import "#/styles/mdx.css";
import { Suspense } from "react";
import Card from "./components/Card";
import Content, { ContentSkeleton } from "./components/Content";
import Photo, { PhotoSkeleton } from "./components/Photo";

export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <>
            <header className="mb-6">
                <h2 className="text-3xl font-bold sm:text-4xl">
                    What is Streaming?
                </h2>
            </header>
            <section className="mb-6 grid gap-6 md:grid-cols-[3fr_1fr]">
                <Card />
                <Suspense fallback={<PhotoSkeleton />}>
                    {/* @ts-expect-error Async Server Component */}
                    <Photo />
                </Suspense>
            </section>
            <section>
                <Suspense fallback={<ContentSkeleton />}>
                    {/* @ts-expect-error Async Server Component */}
                    <Content />
                </Suspense>
            </section>
        </>
    );
}
