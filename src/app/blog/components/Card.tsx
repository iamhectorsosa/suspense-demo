import { PostType } from "#/lib/types";
import dayjs from "dayjs";
import Link from "next/link";

export default function Card({ post }: { post: PostType }) {
    const { slug, title, publishedAt } = post;
    return (
        <li>
            <Link
                className="flex flex-col-reverse justify-between gap-1 md:flex-row md:items-center"
                href={`/blog/${slug}`}
            >
                <span className="text-lg font-semibold">{title}</span>
                <span className="text-sm font-light">
                    {dayjs(publishedAt).format("D MMM 'YY")}
                </span>
            </Link>
        </li>
    );
}
