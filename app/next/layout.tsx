import Motion from "#/components/Motion";
import { ReactNode } from "react";
import Tabs from "./components/Tabs";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Motion>
            <header>
                <h2 className="text-3xl font-bold sm:text-4xl">
                    Loading Design Patterns with Next 13
                </h2>
            </header>
            <Tabs />
            {children}
        </Motion>
    );
}
