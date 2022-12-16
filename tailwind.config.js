/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                shimmer: "shimmer 1.5s infinite",
                fly: "fly 3s cubic-bezier(0.25, 0.75, 0.75, 0.25) infinite",
            },
            keyframes: {
                pulse: {
                    "0%, 100%": {
                        opacity: 0.2,
                    },
                    "50%": {
                        opacity: 1,
                    },
                },
                fly: {
                    "0%": {
                        left: "-10%",
                    },
                    "75%, 100%": {
                        left: "110%",
                    },
                },
                shimmer: {
                    "100%": {
                        transform: "translateX(100%)",
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
