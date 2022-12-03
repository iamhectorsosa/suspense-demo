"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { nanoid } from "nanoid";
import { NavLink } from "#/lib/types";

export default function Navbar({
    items,
}: {
    items: Array<Omit<NavLink, "icon">>;
}) {
    let segment = useSelectedLayoutSegment() as string;
    segment = segment === null ? "/" : segment;
    return (
        <nav className="border-b border-slate-500 pt-16">
            <header className="container-width grid gap-3">
                <Link href="/" className="w-fit text-xl font-bold md:text-2xl">
                    <h2>
                        {segment === "/"
                            ? "Suspense"
                            : items.find((i) => i.href === segment)?.label}
                    </h2>
                </Link>
                <ul className="flex items-center justify-end gap-3">
                    {items.map(({ label, href }) => (
                        <li
                            key={nanoid()}
                            className={`underline underline-offset-4 ${
                                segment === href ? "decoration-transparent" : ""
                            }`}
                        >
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </header>
        </nav>
    );
}
