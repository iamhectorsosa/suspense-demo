const defaultMeta = {
    title: "Hector Sosa",
    keywords: "Next.js 13, TailwindCSS, TanStack Query, Sanity, Supabase.",
    description:
        "Software Engineer working as a React/TypeScript Developer at Webscope",
    path: "/",
    baseUrl: process.env.VERCEL_URL ?? "https://hectorsosa.me",
    imageUrl: "/home.png",
};

export default function Meta({
    title = defaultMeta.title,
    description = defaultMeta.description,
    baseUrl = defaultMeta.baseUrl,
    path = defaultMeta.path,
    imageUrl = defaultMeta.imageUrl,
}: {
    title?: string;
    description?: string;
    baseUrl?: string;
    path?: string;
    imageUrl?: string;
}) {
    const ogImage = `${baseUrl}/api/og?title=${title}&path=${path}`;
    return (
        <>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />

            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.svg" />

            {/* Open Graph - Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${baseUrl + path}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter*/}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${baseUrl + path}`} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
        </>
    );
}
