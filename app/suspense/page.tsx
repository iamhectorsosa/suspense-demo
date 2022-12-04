import delay from "#/lib/delay";
import getMdx from "#/lib/getMdx";

async function fetchMdx(slug: string) {
    await delay(2000);
    return (await getMdx(slug)) as string;
}

export default async function SuspensePage() {
    const source = await fetchMdx("suspense");
    return (
        <section className="space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
                How Suspense improved React
            </h2>
            <article
                className="prose:slate prose min-w-full text-justify dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: source }}
            />
        </section>
    );
}
