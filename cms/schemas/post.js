export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            options: {
                timeStep: 60,
            },
        },
        {
            name: "readingTime",
            title: "Reading Time",
            type: "number",
            initialValue: 0,
            readOnly: true,
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        },
        {
            name: "body",
            title: "Body",
            type: "markdown",
        },
    ],

    preview: {
        select: {
            title: "title",
            date: "_updatedAt",
            media: "mainImage",
        },
        prepare(selection) {
            const { title, date, media } = selection;
            return {
                title: title,
                subtitle:
                    date &&
                    new Intl.DateTimeFormat("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    }).format(new Date(date)),
                media: media,
            };
        },
    },
};
