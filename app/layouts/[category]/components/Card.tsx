export default function Card() {
    return (
        <div className="w-full rounded-md border border-gray-200 p-4 shadow">
            <div className="flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-7 w-3/4 rounded bg-gray-500"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1 h-5 rounded bg-gray-500"></div>
                            <div className="col-span-1 h-5 rounded bg-gray-500"></div>
                        </div>
                        <div className="h-5 rounded bg-gray-500"></div>
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
                    <div className="h-7 w-3/4 animate-pulse rounded bg-gray-500"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1 h-5 animate-pulse rounded bg-gray-500"></div>
                            <div className="col-span-1 h-5 animate-pulse rounded bg-gray-500"></div>
                        </div>
                        <div className="h-5 animate-pulse rounded bg-gray-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
