import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";

export function SpinneyLoader() {
    return (
        <div className="grid aspect-square w-full place-content-center rounded-md bg-white shadow-inner">
            <AiOutlineLoading3Quarters className="h-12 w-12 animate-spin text-gray-500" />
        </div>
    );
}

export function SpinneyLoader2() {
    return (
        <div className="grid aspect-square w-full place-content-center rounded-md bg-white shadow-inner">
            <BiLoaderCircle className="h-12 w-12 animate-spin text-gray-500" />
        </div>
    );
}

export function CardSkeleton() {
    return (
        <div className="flex aspect-square w-full rounded-md bg-white p-6 shadow-inner">
            <div className="w-full animate-pulse rounded-md border border-gray-200  p-4 shadow">
                <div className="flex flex-col gap-2">
                    <div className="h-10 w-10 rounded-full bg-gray-500"></div>
                    <div className="space-y-3">
                        <div className="h-5 animate-pulse rounded bg-gray-500"></div>
                        <div className="h-5 animate-pulse rounded bg-gray-500"></div>
                        <div className="h-5 animate-pulse rounded bg-gray-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CustomBubbles() {
    return (
        <div className="grid aspect-square w-full place-content-center rounded-md bg-white shadow-inner">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export function FlyLoader() {
    return (
        <div className="relative aspect-square w-full rounded-md bg-white shadow-inner">
            <div className="absolute flex h-full w-full flex-col justify-center overflow-hidden">
                <div className="absolute left-8 h-4 w-4 animate-fly rounded-full bg-gray-500"></div>
                <div className="animate-delay-100 absolute left-8 h-4 w-4 animate-fly rounded-full bg-gray-500"></div>
                <div className="animate-delay-200 absolute left-8 h-4 w-4 animate-fly rounded-full bg-gray-500"></div>
            </div>
        </div>
    );
}

export function Pulser() {
    return (
        <div className="grid aspect-square w-full place-content-center rounded-md bg-white shadow-inner">
            <span className="relative grid h-8 w-8 place-content-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-gray-500 opacity-75"></span>
                <span className="h-5 w-5 rounded-full bg-gray-600"></span>
            </span>
        </div>
    );
}
