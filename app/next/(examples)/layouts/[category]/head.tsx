import Meta from "#/components/Meta";
import { categories } from "#/lib/config";

export default function Head({
    params: { category },
}: {
    params: { category: string };
}) {
    const { label: name } = categories.filter((c) => c.href === category)[0];
    return (
        <>
            <Meta
                title={name}
                description="Layouts and Suspense"
                path={`/layouts/${category}`}
            />
        </>
    );
}
