import createArr from "#/lib/array";
import { nanoid } from "nanoid";

export default function Loading() {
    return (
        <section className="space-y-4">
            <div className="skeleton h-8 w-1/2 rounded-md lg:h-9" />
            <div className="space-y-6">
                <div className="space-y-2">
                    {createArr(3).map(() => (
                        <div
                            key={nanoid()}
                            className="skeleton h-6 w-full rounded-md "
                        ></div>
                    ))}
                </div>
                <div className="space-y-2">
                    {createArr(5).map(() => (
                        <div
                            key={nanoid()}
                            className="skeleton h-6 w-full rounded-md "
                        ></div>
                    ))}
                </div>
                <div className="space-y-2">
                    {createArr(5).map(() => (
                        <div
                            key={nanoid()}
                            className="skeleton h-6 w-full rounded-md "
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
