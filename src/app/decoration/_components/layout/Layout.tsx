"use client";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import snake from "@/assets/images/snake.svg";
import { Button } from "@/components/common";
import Loading from "@/components/ui/Loading";
import { useQuery } from "@tanstack/react-query";
import { getUsername } from "@/lib/api/message";

type LayoutProps = {
    children: ReactNode;
    title: string;
    nextButtonLabel?: string;
    onPrev?: () => void;
    handleClick?: () => void;
};

const Layout = ({ children, title, nextButtonLabel = "다음으로", onPrev, handleClick }: LayoutProps) => {
    const [uid, setUid] = useState<string | null>(null);
    const { data: username, isPending } = useQuery({
        queryKey: ["username"],
        queryFn: () => getUsername(uid),
        enabled: !!uid
    });

    useEffect(() => {
        const url = new URL(window.location.href);
        const pathSegments = url.pathname.split("/");
        const extractedUid = pathSegments[pathSegments.length - 1];
        setUid(extractedUid);
    }, []);

    if (isPending) return <Loading />;

    return (
        <section className="w-full h-full flex flex-col justify-between">
            <header className="relative">
                <h1 className="title">
                    <span className="text-primary">{username}</span>님 에게 보낼
                    <br />
                    {title}
                </h1>
                <div className="absolute top-16 right-0">
                    <Image src={snake} width={65} height={70} alt="snake" />
                </div>
            </header>
            {children}
            <div className="flex gap-5">
                {onPrev ? (
                    <Button type="button" color="btn-white" full={false} label="이전" handleClick={onPrev} />
                ) : (
                    <Link href="/">
                        <Button type="button" color="btn-white" full={false} label="이전" />
                    </Link>
                )}
                <Button type="button" color="btn-blue" full={true} label={nextButtonLabel} handleClick={handleClick} />
            </div>
        </section>
    );
};

export default Layout;
