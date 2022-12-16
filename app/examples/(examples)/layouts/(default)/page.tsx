import Motion from "#/components/Motion";
import delay from "#/lib/delay";
import getMdx from "#/lib/getMdx";

async function fetchMdx(slug: string) {
    await delay(2000);
    return (await getMdx(slug)) as string;
}

export default async function LayoutsPage() {
    const source = await fetchMdx("layouts");
    return (
        <Motion>
            <section className="space-y-4">
                <h1 className="text-xl font-bold lg:text-2xl">
                    Organize routes without affecting your URL
                </h1>
                <article
                    className="prose:slate prose min-w-full text-justify dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: source }}
                />
            </section>
        </Motion>
    );
}
