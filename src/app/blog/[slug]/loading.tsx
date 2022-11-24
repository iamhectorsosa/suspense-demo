import { nanoid } from "nanoid";

export default function Loading() {
    const loadingParagraphs = Array.from({ length: 3 });
    const loadingLines = Array.from({ length: 4 });

    return (
        <section className="text-transparent">
            <header className="mb-6 space-y-2">
                <h2 className="w-full animate-pulse rounded-md bg-slate-300 text-3xl font-bold dark:bg-slate-800 sm:text-4xl">
                    Title
                </h2>
                <div className="text-sm">
                    <span className="w-fit animate-pulse rounded-md bg-slate-300 dark:bg-slate-800">
                        Weekday 00 Month 2000
                    </span>
                    {" · "}
                    <span className="w-fit animate-pulse rounded-md bg-slate-300 dark:bg-slate-800">
                        {" "}
                        00 min read
                    </span>
                </div>
            </header>
            <article className="space-y-4">
                {loadingParagraphs.map(() => (
                    <div key={nanoid()} className="space-y-2">
                        {loadingLines.map(() => (
                            <div
                                key={nanoid()}
                                className="h-6 w-full animate-pulse rounded-md bg-slate-300 dark:bg-slate-800"
                            />
                        ))}
                    </div>
                ))}
            </article>
        </section>
    );
}
