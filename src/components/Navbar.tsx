"use client";

import {
    useSelectedLayoutSegment,
    useSelectedLayoutSegments,
    useRouter,
} from "next/navigation";
import Link from "next/link";
import { nanoid } from "nanoid";
import { NavLink } from "#/lib/types";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Navbar({
    items,
}: {
    items: Array<Omit<NavLink, "icon">>;
}) {
    let segment = useSelectedLayoutSegment() as string;
    const segments = useSelectedLayoutSegments();
    const router = useRouter();
    segment = segment === null ? "/" : segment;
    return (
        <nav className="border-b border-slate-500 pt-16">
            <header className="container-width grid gap-3">
                <Link href="/" className="w-fit text-xl font-bold md:text-2xl">
                    <h2>
                        {segment === "/"
                            ? "Hector Sosa"
                            : items.find((i) => i.href === segment)?.label}
                    </h2>
                </Link>
                <ul className="flex items-center justify-end gap-3">
                    <li className={segments.length > 1 ? "inline" : "hidden"}>
                        <button
                            className="group flex items-center gap-2"
                            onClick={() => router.push(segment)}
                        >
                            <AiOutlineArrowLeft
                                size={20}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                            Back
                        </button>
                    </li>
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
