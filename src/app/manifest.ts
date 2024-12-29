import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Hello 2025",
        short_name: "Hello 2025",
        description: "새해 인사를 전해보세요!",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: "/icons/icon-192x192.svg",
                sizes: "192x192",
                type: "image/svg+xml"
            }
        ]
    };
}
