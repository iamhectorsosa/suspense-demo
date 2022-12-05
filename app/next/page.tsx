export default function NextPage() {
    return (
        <section className="space-y-4">
            <h1 className="text-2xl font-bold lg:text-3xl">What&apos;s new?</h1>
            <p className="prose:slate dark:prose-inver prose min-w-full space-y-2 text-justify">
                Next 13 introduced new file conventions to help us create
                meaningful Loading UI with <b>React Suspense</b>. Here is what
                you need to know:
            </p>
            <ul className="prose:slate dark:prose-inver prose min-w-full list-disc space-y-2 pl-4 text-justify">
                <li>
                    The special file <code>loading.tsx</code> enables us to show
                    an instant loading state from the server for an entire route
                    segment while its content loads.
                </li>
                <li>
                    You can mix and match your app&apos;s architecture using
                    manually-defined <code>{`<Suspense />`}</code> boundaries
                    for more granular loading UI.
                </li>
                <li>
                    Navigation is interruptible, shared layouts remain
                    interactive while nested layouts or pages load.
                </li>
            </ul>
        </section>
    );
}
