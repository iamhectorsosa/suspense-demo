import "#/styles/mdx.css";
import delay from "#/lib/delay";
import getMdx from "#/lib/getMdx";

export const dynamic = "force-dynamic",
    dynamicParams = true,
    revalidate = 0,
    fetchCache = "auto",
    runtime = "nodejs",
    preferredRegion = "auto";

export default async function Loading() {
    const source = (await delay(getMdx("content", "loading"), 4000)) as string;
    return (
        <>
            <header className="mb-6">
                <h2 className="text-3xl font-bold sm:text-4xl">Loading UI</h2>
            </header>

            <section>
                <article
                    className="prose:slate prose min-w-full text-justify dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: source }}
                />
            </section>
        </>
    );
}
