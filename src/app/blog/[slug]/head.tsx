import Meta from "#/components/Meta";
import { getPostQueryBySlug } from "#/lib/sanity-queries";

export default async function Head({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const { title, description, slug: path } = await getPostQueryBySlug(slug);

    return (
        <>
            <Meta
                title={title}
                description={description}
                path={`/blog/${path}`}
            />
        </>
    );
}
