import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3B61B9", //기본 파랑
                background: "#FFFAF5", //기본 배경 색상
                warning: "#ef6f7e",
                textDark: "#1F2328"
            }
        }
    },
    plugins: []
};
export default config;
