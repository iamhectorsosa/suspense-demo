import createArr from "#/lib/array";
import { nanoid } from "nanoid";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoadingSkeleton />;
}

function LoadingSkeleton() {
    return (
        <section className="space-y-4">
            <div className="h-8 w-1/2 rounded-md bg-gray-200 sm:h-9" />
            <article className="space-y-6">
                <div className="animate-pulse space-y-3">
                    {createArr(4).map(() => (
                        <div
                            key={nanoid()}
                            className="h-5 w-full rounded-md bg-gray-200"
                        ></div>
                    ))}
                </div>
                <div className="animate-pulse space-y-3">
                    {createArr(4).map(() => (
                        <div
                            key={nanoid()}
                            className="h-5 w-full rounded-md bg-gray-200"
                        ></div>
                    ))}
                </div>
                <div className="animate-pulse space-y-3">
                    {createArr(2).map(() => (
                        <div
                            key={nanoid()}
                            className="h-5 w-full rounded-md bg-gray-200"
                        ></div>
                    ))}
                </div>
                <div className="animate-pulse space-y-3">
                    {createArr(5).map(() => (
                        <div
                            key={nanoid()}
                            className="h-5 w-full rounded-md bg-gray-200"
                        ></div>
                    ))}
                </div>
            </article>
        </section>
    );
}
