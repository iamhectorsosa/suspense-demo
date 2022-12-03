import createArr from "#/lib/array";
import delay from "#/lib/delay";
import getMdx from "#/lib/getMdx";
import { nanoid } from "nanoid";

export default async function Content() {
    const source = (await delay(
        getMdx("content", "streaming"),
        2000
    )) as string;
    return (
        <>
            <article
                className="prose:slate prose min-w-full text-justify dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: source }}
            />
        </>
    );
}

export function ContentSkeleton() {
    return (
        <div className="space-y-6">
            <div className="animate-pulse space-y-3">
                {createArr(3).map(() => (
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
                {createArr(8).map(() => (
                    <div
                        key={nanoid()}
                        className="h-5 w-full rounded-md bg-gray-200"
                    ></div>
                ))}
            </div>
        </div>
    );
}
