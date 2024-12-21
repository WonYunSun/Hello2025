import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import GlobalLoading from "../components/GlobalLoading";
import localFont from "next/font/local";
import Providers from "@/components/providers/TQProvider";

const pretendard = localFont({
    src: "../../public/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "100 900",
    variable: "--font-pretendard"
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
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
                    <div className="w-full h-full bg-background">
                        <Suspense fallback={<GlobalLoading />}>{children}</Suspense>
                    </div>
                </body>
            </Providers>
        </html>
    );
}
