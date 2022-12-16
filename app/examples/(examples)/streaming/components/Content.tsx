import createArr from "#/lib/array";
import delay from "#/lib/delay";
import getMdx from "#/lib/getMdx";
import { nanoid } from "nanoid";

async function fetchMdx(slug: string) {
    await delay(3000);
    return (await getMdx(slug)) as string;
}

export default async function Content() {
    const source = await fetchMdx("streaming");
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
            <div className="space-y-2">
                {createArr(3).map(() => (
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
                {createArr(8).map(() => (
                    <div
                        key={nanoid()}
                        className="skeleton h-6 w-full rounded-md"
                    ></div>
                ))}
            </div>
        </div>
    );
}
