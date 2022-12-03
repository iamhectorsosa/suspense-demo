import { timeout } from "#/lib/delay";

export default async function Layouts() {
    await timeout(5000);
    return (
        <section>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold lg:text-3xl">Home</h1>
                <ul className="prose:slate dark:prose-inver prose min-w-full list-disc space-y-2 pl-4 text-justify">
                    <li>
                        This example has an artificial delay when
                        &quot;fetching&quot; data for each category page.
                        `loading.js` is used to show a loading skeleton
                        immediately while data for category page loads before
                        being streamed in.
                    </li>
                    <li>
                        Shared layouts remain interactive while nested layouts
                        or pages load. Try clicking the counter while the
                        children load.
                    </li>
                    <li>
                        Navigation is interruptible. Try navigating to one
                        category, then clicking a second category before the
                        first one has loaded.
                    </li>
                </ul>
            </div>
        </section>
    );
}
