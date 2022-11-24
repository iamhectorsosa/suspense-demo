import { getPostQueryBySlug } from "#/lib/sanity-queries";

export default async function Head({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const {
        title,
        description,
        imageUrl,
        slug: path,
    } = await getPostQueryBySlug(slug);
    const baseUrl = "https://hectorsosa.me/blog/";

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
            <meta property="og:image" content={imageUrl} />

            {/* Twitter*/}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${baseUrl + path}`} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageUrl} />
        </>
    );
}
