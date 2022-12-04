"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { nextCategories as categories } from "#/lib/config";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function Tabs() {
    let segment = useSelectedLayoutSegments()[1] as string;
    segment = segment === undefined ? "/" : segment;

    return (
        <ul className="flex flex-wrap items-center gap-3 py-4">
            {categories.map(({ label, href }) => (
                <li key={nanoid()}>
                    <Link
                        className={`underline underline-offset-4 ${
                            segment === href ? "decoration-transparent" : ""
                        }`}
                        href={`/next/${href}`}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
