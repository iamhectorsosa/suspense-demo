import "#/styles/post.css";
import { getAllPosts, getPostQueryBySlug } from "#/lib/sanity-queries";
import marked from "#/lib/marked";
import dayjs from "dayjs";
import { PostType } from "#/lib/types";
import delay from "#/lib/delay";

export const dynamic = "auto",
    dynamicParams = true,
    revalidate = 60;

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const post = (await delay(getPostQueryBySlug(slug))) as PostType;
    const source = (await marked(post.body)) as string;

    return (
        <section>
            <header className="mb-6 space-y-2">
                <h2 className="text-3xl font-bold sm:text-4xl">{post.title}</h2>
                <div className="text-sm text-slate-500">
                    <span>
                        {dayjs(post.publishedAt).format("dddd DD MMMM YYYY")}
                    </span>
                    {" · "}
                    <span> {post.readingTime} min read</span>
                </div>
            </header>
            <article
                className="prose:slate prose min-w-full prose-p:text-justify dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: source }}
            />
        </section>
    );
}
