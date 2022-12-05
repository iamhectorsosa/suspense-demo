export default function Card({
    color = "bg-gray-400 dark:bg-gray-700",
}: {
    color?: string;
}) {
    return (
        <div className="w-full rounded-md border border-gray-200 p-4 shadow">
            <div className="flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className={`h-7 w-3/4 rounded ${color}`}></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                className={`col-span-1 h-5 rounded ${color}`}
                            ></div>
                            <div
                                className={`col-span-1 h-5 rounded ${color}`}
                            ></div>
                        </div>
                        <div className={`h-5 rounded ${color}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CardSkeleton({ delay }: { delay?: number }) {
    return (
        <div className="w-full rounded-md border border-gray-200 p-4 shadow">
            <div className="flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div
                        style={{
                            animationFillMode: "backwards",
                            animationDelay: `${delay}ms`,
                        }}
                        className="h-7 w-3/4 animate-pulse rounded bg-gray-200"
                    ></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                style={{
                                    animationFillMode: "backwards",
                                    animationDelay: `${delay}ms`,
                                }}
                                className="col-span-1 h-5 animate-pulse rounded bg-gray-200"
                            ></div>
                            <div
                                style={{
                                    animationFillMode: "backwards",
                                    animationDelay: `${delay}ms`,
                                }}
                                className="col-span-1 h-5 animate-pulse rounded bg-gray-200"
                            ></div>
                        </div>
                        <div
                            style={{
                                animationFillMode: "backwards",
                                animationDelay: `${delay}ms`,
                            }}
                            className="h-5 animate-pulse rounded bg-gray-200"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
