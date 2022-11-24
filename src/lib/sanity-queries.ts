import sanity from "./sanity-client";
import { PostType } from "./types";

const postPreviewFields = `{
    _id,
    slug, 
    title, 
    description,
    readingTime,
    publishedAt,
}`;

const allPostsQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) ${postPreviewFields}`;

export async function getAllPosts() {
    return (await sanity.fetch(allPostsQuery)) as Array<PostType>;
}

const postFields = `{
    _id,
    slug, 
    title,
    description,
    readingTime,
    publishedAt, 
    body,
    "imageUrl": mainImage.asset->url
}`;

const postQueryBySlug = `*[_type == "post" && slug == $slug] | order(_updatedAt desc) ${postFields}[0]`;

export async function getPostQueryBySlug(slug: PostType["slug"]) {
    return (await sanity.fetch(postQueryBySlug, {
        slug,
    })) as PostType;
}
