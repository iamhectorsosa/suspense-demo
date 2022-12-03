import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

export default async function getMdx(dirPath: string, slug: string) {
    const source = fs.readFileSync(path.join(dirPath, slug + ".mdx"), "utf8");

    const { value } = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {
            behavior: "wrap",
            properties: {
                className: ["anchor"],
            },
        })
        .use(rehypePrism)
        .process(source);
    return value;
}
