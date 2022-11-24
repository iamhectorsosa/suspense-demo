import { nanoid } from "nanoid";

export default function Loading() {
    const posts = Array.from({ length: 6 });

    return (
        <section className="text-transparent">
            <header className="mb-6">
                <h2 className="w-fit animate-pulse rounded-md bg-slate-300 text-3xl font-bold dark:bg-slate-800 sm:text-4xl">
                    All Posts
                </h2>
            </header>
            <ul className="space-y-3">
                {posts.map(() => (
                    <li key={nanoid()}>
                        <div className="flex flex-col-reverse justify-between gap-1 md:flex-row md:items-center">
                            <span className="w-fit animate-pulse rounded-md bg-slate-300 text-lg font-semibold dark:bg-slate-800">
                                This title is in a loading state for this page
                            </span>
                            <span className="w-fit animate-pulse rounded-md bg-slate-300 text-sm font-light dark:bg-slate-800">
                                00 Jan 00
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
