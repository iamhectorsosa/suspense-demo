import Motion from "#/components/Motion";
import { Suspense } from "react";
import Card from "./components/Card";
import Content, { ContentSkeleton } from "./components/Content";
import Photo, { PhotoSkeleton } from "./components/Photo";

export default function StreamingPage() {
    return (
        <Motion>
            <section className="space-y-4">
                <h1 className="text-2xl font-bold lg:text-3xl">
                    What is Streaming?
                </h1>
                <div className="mb-6 grid gap-6 md:grid-cols-[3fr_1fr]">
                    <Card />
                    <Suspense fallback={<PhotoSkeleton />}>
                        {/* @ts-expect-error Async Server Component */}
                        <Photo />
                    </Suspense>
                </div>
                <div>
                    <Suspense fallback={<ContentSkeleton />}>
                        {/* @ts-expect-error Async Server Component */}
                        <Content />
                    </Suspense>
                </div>
            </section>
        </Motion>
    );
}
