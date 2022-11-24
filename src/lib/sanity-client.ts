import sanityClient from "@sanity/client";

const sanity = sanityClient({
    projectId: "nlorcasg",
    dataset: "development",
    apiVersion: "2022-09-10",
    token: `${process.env.SANITY_WEBSITE_EDITOR_TOKEN}`,
    useCdn: false,
});

export default sanity;
