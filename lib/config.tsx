import { FiGithub, FiTwitter, FiInbox } from "react-icons/fi";

export const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Suspense",
        href: "suspense",
    },
    {
        label: "Next 13",
        href: "next",
    },
    {
        label: "TailwindCSS",
        href: "tailwind",
    },
];

export const nextCategories = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Loading",
        href: "loading",
    },
    {
        label: "Streaming",
        href: "streaming",
    },
    {
        label: "Layouts",
        href: "layouts",
    },
];

export const categories = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Catalog",
        href: "catalog",
    },
    {
        label: "Checkout",
        href: "checkout",
    },
];

export const footerItems = [
    {
        label: "@ekqt",
        icon: <FiGithub size={24} />,
        href: "https://hectorsosa.me/github",
    },
    {
        label: "@_ekqt",
        icon: <FiTwitter size={24} />,
        href: "https://hectorsosa.me/twitter",
    },
    {
        label: "hello@hectorsosa.me",
        icon: <FiInbox size={24} />,
        href: "https://hectorsosa.me/email",
    },
];
