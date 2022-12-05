import { ReactNode } from "react";
import Tabs from "../components/Tabs";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-[38rem] rounded-md border border-dashed border-pink-500 p-4">
            <header>
                <h1 className="text-2xl font-bold lg:text-3xl">Route Groups</h1>
            </header>
            <Tabs />
            {children}
        </div>
    );
}
