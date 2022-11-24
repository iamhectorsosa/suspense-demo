import { useDocumentOperation } from "@sanity/react-hooks";
import { EyeOpenIcon, EyeClosedIcon } from "@sanity/icons";

import { nanoid } from "nanoid";
import readingTime from "reading-time";

function getSlug(input) {
    if (input.slug) {
        return input.slug;
    } else {
        const slug = `${input.title
            .toLowerCase()
            .replaceAll(" ", "-")}-${nanoid(5)}`;
        return slug;
    }
}

function getReadingTime(input) {
    const { minutes } = readingTime(input);
    return Math.round(minutes);
}

export function GetPostMeta({ id, type, draft }) {
    const { patch, publish } = useDocumentOperation(id, type);

    if (type !== "post") {
        return;
    }

    return {
        label: publish.disabled ? "No changes" : "Generate Meta",
        disabled: publish.disabled,
        icon: publish.disabled ? EyeClosedIcon : EyeOpenIcon,
        onHandle: () => {
            patch.execute([
                {
                    set: {
                        publishedAt:
                            draft.publishedAt ?? new Date().toISOString(),
                        slug: getSlug(draft),
                        readingTime: getReadingTime(draft.body),
                    },
                },
            ]);
        },
    };
}
