import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import GlobalLoading from "../components/GlobalLoading";
import localFont from "next/font/local";
import Providers from "@/components/providers/TQProvider";
import BgDeco from "@/components/ui/BgDeco";

const pretendard = localFont({
    src: "../assets/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "100 900",
    variable: "--font-pretendard"
});

export const metadata: Metadata = {
    title: "Hello 2025",
    description: "새해 인사를 전해보세요!",
    icons: {
        icon: "/icon.png"
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
