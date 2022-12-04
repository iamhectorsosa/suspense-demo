export default function NextPage() {
    return (
        <section>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold lg:text-3xl">Home</h1>
                <p className="prose:slate dark:prose-inver prose min-w-full space-y-2 text-justify">
                    Next 13 introduced a new file convention named
                    &quot;loading&quot; (among several others) to help us create
                    meaningful Loading UI with <b>React Suspense</b>.
                </p>
                <ul className="prose:slate dark:prose-inver prose min-w-full list-disc space-y-2 pl-4 text-justify">
                    <li>
                        Create instant loading state by adding a{" "}
                        <code>loading</code> file instead a folder.
                    </li>
                    <li>
                        You can mix and match loading UI using manually-defined{" "}
                        <code>Suspense</code> boundaries
                    </li>
                    <li>
                        Shared layouts remain interactive while nested layouts
                        or pages load.
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
