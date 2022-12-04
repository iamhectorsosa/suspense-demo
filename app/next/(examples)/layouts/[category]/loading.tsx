import { CardSkeleton } from "./components/Card";

export default function Loading() {
    return (
        <section>
            <div className="space-y-4">
                <div className="h-7 w-1/2 animate-pulse rounded-md bg-gray-200 lg:h-8" />
                <div className="grid grid-cols-3 gap-3">
                    <CardSkeleton />
                    <CardSkeleton delay={100} />
                    <CardSkeleton delay={200} />
                    <CardSkeleton delay={300} />
                    <CardSkeleton delay={400} />
                    <CardSkeleton delay={500} />
                    <CardSkeleton delay={600} />
                    <CardSkeleton delay={700} />
                    <CardSkeleton delay={800} />
                </div>
            </div>
        </section>
    );
}
