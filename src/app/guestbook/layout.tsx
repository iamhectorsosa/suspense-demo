"use client";

import QueryProvider from "#/providers/QueryProvider";
import { Toaster } from "react-hot-toast";

export default function GuestbookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <QueryProvider>
            <div>
                <Toaster position="bottom-center" reverseOrder={false} />
            </div>
            <section>{children}</section>
        </QueryProvider>
    );
}
