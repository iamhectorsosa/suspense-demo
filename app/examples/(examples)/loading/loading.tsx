import createArr from "#/lib/array";
import { nanoid } from "nanoid";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoadingSkeleton />;
}

function LoadingSkeleton() {
    return (
        <section className="space-y-4">
            <div className="skeleton h-8 w-1/2 rounded-md sm:h-9" />
            <article className="space-y-6">
                <div className="space-y-2">
                    {createArr(2).map(() => (
                        <div
                            key={nanoid()}
                            className="skeleton h-6 w-full rounded-md"
                        ></div>
                    ))}
                </div>
                <div className="space-y-2">
                    {createArr(8).map(() => (
                        <div
                            key={nanoid()}
                            className="skeleton h-6 w-full rounded-md"
                        ></div>
                    ))}
                </div>
                <div className="space-y-2">
                    {createArr(4).map(() => (
                        <div
                            key={nanoid()}
                            className="skeleton h-6 w-full rounded-md"
                        ></div>
                    ))}
                </div>
                <div className="space-y-2">
                    {createArr(4).map(() => (
                        <div
                            key={nanoid()}
                            className="skeleton h-6 w-full rounded-md"
                        ></div>
                    ))}
                </div>
            </article>
        </section>
    );
}
