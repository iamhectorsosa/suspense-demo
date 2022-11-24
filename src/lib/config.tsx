import { FiGithub, FiTwitter, FiInbox } from "react-icons/fi";

export const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Blog",
        href: "blog",
    },
    {
        label: "Guestbook",
        href: "guestbook",
    },
];

export const footerItems = [
    {
        label: "@ekqt",
        icon: <FiGithub size={24} />,
        href: "/github",
    },
    {
        label: "@_ekqt",
        icon: <FiTwitter size={24} />,
        href: "/twitter",
    },
    {
        label: "hello@hectorsosa.me",
        icon: <FiInbox size={24} />,
        href: "/email",
    },
];
