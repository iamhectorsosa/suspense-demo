import { ReactNode } from "react";
import Tabs from "./components/Tabs";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header>
                <h2 className="text-3xl font-bold sm:text-4xl">
                    Nested Layouts
                </h2>
            </header>
            <nav>
                <Tabs />
            </nav>
            {children}
        </>
    );
}
