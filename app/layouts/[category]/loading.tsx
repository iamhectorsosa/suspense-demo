import { CardSkeleton } from "./components/Card";

export default function Loading() {
    return (
        <section>
            <div className="space-y-4">
                <div className="h-8 w-1/2 animate-pulse rounded-md bg-gray-200 lg:h-9" />
                <div className="grid grid-cols-3 gap-3">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            </div>
        </section>
    );
}
