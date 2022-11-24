import { nanoid } from "nanoid";
import { getAllPosts } from "#/lib/sanity-queries";
import { PostType } from "#/lib/types";
import Card from "./components/Card";
import delay from "#/lib/delay";

export default async function Blog() {
    const posts = (await delay(getAllPosts())) as Array<PostType>;

    return (
        <section>
            <header className="mb-6">
                <h2 className="text-3xl font-bold sm:text-4xl">All Posts</h2>
            </header>
            <ul className="space-y-3">
                {posts.map((post) => (
                    <Card key={nanoid()} post={post} />
                ))}
            </ul>
        </section>
    );
}
