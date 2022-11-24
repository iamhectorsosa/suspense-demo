import "#/styles/globals.css";
import Footer from "#/components/Footer";
import Navbar from "#/components/Navbar";

import { navItems, footerItems } from "../lib/config";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <Navbar items={navItems} />
                <main className="container-width min-h-[35rem] px-6 py-12">
                    {children}
                </main>
                <Footer items={footerItems} />
            </body>
        </html>
    );
}
