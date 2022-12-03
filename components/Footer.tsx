import Link from "next/link";
import { nanoid } from "nanoid";
import { NavLink } from "#/lib/types";

export default function Footer({ items }: { items: Array<NavLink> }) {
    return (
        <footer className="border-t border-slate-500 pb-16">
            <div className="container-width flex h-full flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <h2 aria-label="Copyright" className="text-lg font-semibold">
                    © 2022 Hector Sosa
                </h2>
                <ul className="flex flex-col gap-3 font-light lg:flex-row lg:gap-6">
                    {items.map(({ label, icon, href }) => (
                        <li className="w-fit" key={nanoid()}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2"
                            >
                                {icon}
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
