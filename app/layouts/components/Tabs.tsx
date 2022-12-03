"use client";

import { useSelectedLayoutSegment, useRouter } from "next/navigation";
import { categories } from "#/lib/config";
import { nanoid } from "nanoid";
import { useTransition } from "react";
import Link from "next/link";

export default function Tabs() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    let segment = useSelectedLayoutSegment() as string;
    segment = segment === null ? "/" : segment;

    function handleTransition(href: string) {
        startTransition(() => router.push(`/layouts/${href}`));
    }

    return (
        <ul
            className={`flex items-center gap-3 py-4 ${
                isPending ? "opacity-50" : ""
            }`}
        >
            {categories.map(({ label, href }) => (
                <li key={nanoid()}>
                    {/* <button
                        className={`underline underline-offset-4 ${
                            segment === href ? "decoration-transparent" : ""
                        }`}
                        onClick={() => handleTransition(href)}
                    >
                        {label}
                    </button> */}
                    <Link
                        className={`underline underline-offset-4 ${
                            segment === href ? "decoration-transparent" : ""
                        }`}
                        href={`/layouts/${href}`}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
