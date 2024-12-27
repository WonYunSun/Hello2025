"use client";

import { Button } from "@/components/common";
import LetterList from "../_components/LetterList";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/utils/supabase/client";
import { AuthUser } from "@supabase/supabase-js";
import SmallButton from "@/components/ui/SmallButton";
import { useUserStore } from "@/stores/userStore";
import { Database } from "@/lib/types/supabase";

type Props = {
    params: {
        id: string;
    };
};
type LetterType = Database["public"]["Tables"]["letters"]["Row"];

type LettersType = {
    username: string;
    letters: LetterType[];
};

const fetchLetters = async (id: string): Promise<LettersType> => {
    const res = await fetch(`/api/letters?id=${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch letters");
    }
    return res.json();
};

const LetterBox = ({ params }: Props) => {
    const [letters, setLetters] = useState<LettersType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
    const [showAlert, setShowAlert] = useState(false);
    const copyLetterboxLink = async () => {
        const currentUrl = window.location.href;
        try {
            await navigator.clipboard.writeText(currentUrl);
            setShowAlert(true); // 알림 표시
        } catch (e) {
            alert("초대코드 복사 실패");
        }
    };
    const { user, userTable } = useUserStore();

    useEffect(() => {
        const getLetters = async () => {
            try {
                const data = await fetchLetters(params.id);
                setLetters(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        getLetters();
    }, [params.id]);

    useEffect(() => {
        if (showAlert) {
            setTimeout(() => setShowAlert(false), 1500); // 2초 후 알림 사라짐
        }
    }, [showAlert]);

    const isOwner = user?.id === params.id;

    if (isLoading) return <div className="inner flex items-center justify-center">Loading...</div>;
    if (error) return <div className="inner flex items-center justify-center">편지함을 찾을 수 없어요.</div>;
    if (!letters) return <div className="inner flex items-center justify-center">편지함을 찾을 수 없어요.</div>;

    return (
        <div className="inner flex flex-col justify-center h-screen">
            <section className="mb-6 flex justify-between relative">
                <div>
                    <div className="title">
                        <span className="text-primary">{letters.username}</span>님의 편지함입니다.
                    </div>
                    <h3 className="text-[16px] font-semibold mt-[15px]">
                        총 <span className="text-primary font-semibold">{letters.letters.length}</span>개의 편지가
                        도착했습니다.
                    </h3>
                </div>
                {user !== null && <SmallButton icon="icon-back.svg" to={"/settings"} />}
            </section>

            {letters.letters.length === 0 ? (
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center text-lg text-textLight">아직 도착한 편지가 없어요.</div>
                </div>
            ) : (
                <div className="flex-grow">
                    <LetterList letters={letters.letters} />
                </div>
            )}

            {isOwner ? (
                <Button
                    type="button"
                    color="btn-blue"
                    full
                    label="내 편지함 공유하기"
                    handleClick={copyLetterboxLink}
                />
            ) : (
                <Link href={`/decoration/${params.id}`}>
                    <Button type="button" color="btn-blue" full label="편지 남기기" />
                </Link>
            )}

            {/* 알림 모달 */}
            {showAlert && (
                <div
                    className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded shadow-lg transition-all duration-500 opacity-100"
                    style={{ transition: "opacity 1s ease-in-out, transform 1s ease" }}
                >
                    편지함 링크가 복사되었습니다!
                </div>
            )}
            {!isOwner && (
                <div className="min-w-[100px] pt-[18px] text-center">
                    <Link href={`/letterbox/${user?.id}`}>
                        <button className="font-bold text-lg">내 편지함으로 돌아가기</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LetterBox;
