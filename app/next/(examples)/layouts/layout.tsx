import { ReactNode } from "react";
import Tabs from "./components/Tabs";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-[38rem]">
            <header>
                <h1 className="text-2xl font-bold lg:text-3xl">
                    Nested Layouts
                </h1>
            </header>
            <Tabs />
            {children}
        </div>
    );
}
