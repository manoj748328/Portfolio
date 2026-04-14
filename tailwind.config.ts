import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // We link these to the CSS variables we'll create in globals.css
                brand: "var(--brand-sage)",
                "brand-contrast": "var(--brand-white)",
            },
        },
    },
    plugins: [],
};
export default config;