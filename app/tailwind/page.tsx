import delay from "#/lib/delay";
import getMdx from "#/lib/getMdx";

import {
    FlyLoader,
    SpinneyLoader,
    Pulser,
    SpinneyLoader2,
    CustomBubbles,
    CardSkeleton,
} from "./components/Loaders";

async function fetchMdx(slug: string) {
    await delay(0);
    return (await getMdx(slug)) as string;
}

export default async function TailwindPage() {
    const source = await fetchMdx("tailwind");
    return (
        <section className="space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">TailwindCSS</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <FlyLoader />
                <SpinneyLoader />
                <Pulser />
                <SpinneyLoader2 />
                <CustomBubbles />
                <CardSkeleton />
            </div>
            <article
                className="prose:slate prose min-w-full text-justify dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: source }}
            />
        </section>
    );
}
