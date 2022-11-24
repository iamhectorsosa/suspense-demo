/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/ekqt",
                permanent: true,
            },
            {
                source: "/twitter",
                destination: "https://twitter.com/_ekqt",
                permanent: true,
            },
            {
                source: "/email",
                destination: "mailto:hello@hectorsosa.me",
                permanent: true,
            },
        ];
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
