import createArr from "#/lib/array";
import { nanoid } from "nanoid";

export default function Loading() {
    return (
        <section className="space-y-4">
            <div className="h-8 w-1/2 animate-pulse rounded-md bg-gray-200 lg:h-9" />
            <div className="space-y-6">
                <div className="animate-pulse space-y-3">
                    {createArr(4).map(() => (
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
                <div className="animate-pulse space-y-3">
                    {createArr(5).map(() => (
                        <div
                            key={nanoid()}
                            className="h-5 w-full rounded-md bg-gray-200"
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
