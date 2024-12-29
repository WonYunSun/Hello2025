import { Button } from "@/components/common";
import Link from "next/link";
import React from "react";

export const ErrorPage = () => {
    return (
        <div className="inner flex items-center justify-center">
            <div>
                <div className=" text-center text-lg text-textLight mb-[40px]">편지함을 찾을 수 없어요.</div>
                <Link href={"/"}>
                    <Button type="button" color="btn-blue" full label="홈으로 가기" />
                </Link>
            </div>
        </div>
    );
};
