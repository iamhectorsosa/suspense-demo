"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { categories } from "#/lib/config";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function Tabs() {
    let segment = useSelectedLayoutSegment() as string;
    segment = segment === null ? "/" : segment;

    return (
        <ul className="flex flex-wrap items-center gap-3 py-4">
            {categories.map(({ label, href }) => (
                <li key={nanoid()}>
                    <Link
                        className={`underline underline-offset-4 ${
                            segment === href ? "decoration-transparent" : ""
                        }`}
                        href={`/next/layouts/${href}`}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
