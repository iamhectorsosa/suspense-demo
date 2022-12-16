import { CardSkeleton } from "../components/Card";

export default function Loading() {
    return (
        <section>
            <div className="space-y-4">
                <div className="skeleton h-7 w-1/2 rounded-md bg-gray-200 lg:h-8" />
                <div className="grid grid-cols-3 gap-3">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
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
