import { Suspense } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "@/components/providers/TQProvider";
import BgDeco from "@/components/ui/BgDeco";
import GlobalLoading from "../components/GlobalLoading";
import "./globals.css";

const pretendard = localFont({
    src: "../assets/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "100 900",
    variable: "--font-pretendard"
});

export const metadata: Metadata = {
    title: "Hello 2025",
    description: "2025년 맞이 모바일 연하장을 보내보세요!",
    icons: {
        icon: "/icons/icon-192x192.png"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            {/* tanstack query provier */}
            <Providers>
                <body className={pretendard.className}>
                    <div className="bg-container relative">
                        <BgDeco />
                        <Suspense fallback={<GlobalLoading />}>{children}</Suspense>
                    </div>
                </body>
            </Providers>
        </html>
    );
}
