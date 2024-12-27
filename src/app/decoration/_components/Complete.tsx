"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common";
import snake from "@/assets/images/snake.svg";

const Complete = () => {
    const [uid, setUid] = useState<string | null>(null);

    useEffect(() => {
        const url = new URL(window.location.href);
        const pathSegments = url.pathname.split("/");
        const extractedUid = pathSegments[pathSegments.length - 1];
        setUid(extractedUid);
    }, []);

    return (
        <section className="w-full h-full flex flex-col justify-between">
            <main className="flex flex-col justify-between h-[520px] place-items-center">
                <div className="grid pt-[120px] text-center place-items-center">
                    <h1 className="font-bold text-[40px] leading-tight">
                        작성 <span className="text-primary">완료</span>되었습니다
                    </h1>
                    <h3 className="text-[16px] font-semibold pt-3">편지함에서 확인해보세요!</h3>
                </div>
                <Image width={150} height={150} src={snake} alt="snake" />
            </main>

            <Link href={`/letterbox/${uid}`}>
                <Button type="button" color="btn-blue" full={true} label="편지함 가기" />
            </Link>
        </section>
    );
};

export default Complete;
