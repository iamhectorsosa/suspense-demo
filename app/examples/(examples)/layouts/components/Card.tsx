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

export function CardSkeleton() {
    return (
        <div className="w-full rounded-md border border-gray-200 p-4 shadow">
            <div className="flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="skeleton h-7 w-3/4 rounded" />
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="skeleton col-span-1 h-5 w-full rounded"></div>
                            <div className="skeleton col-span-1 h-5 w-full rounded"></div>
                        </div>
                        <div className="skeleton h-5 w-full rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
