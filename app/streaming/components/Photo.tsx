import { timeout } from "#/lib/delay";

export default async function Photo() {
    await timeout(4000);
    return <div className="h-40 rounded-md bg-gray-500 shadow"></div>;
}

export function PhotoSkeleton() {
    return (
        <div className="h-40 animate-pulse rounded-md bg-gray-200 shadow"></div>
    );
}
