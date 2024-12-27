"use client";

import { Button } from "@/components/common";
import LetterList from "../_components/LetterList";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/utils/supabase/client";

type Props = {
    params: {
        id: string;
    };
};
type LetterType = {
    id: string;
    sender_id: string;
    recipient_id: string;
    sendername: string;
    content: string;
    created_at: string;
    envelope_type: number;
    paper_type: string;
    is_private: boolean;
};
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
const supabase = createClient();
const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error("Error fetching session:", error);
        return null;
    }

    // session이 null이 아닌 경우에만 user를 반환
    const session = data?.session;
    if (session) {
        console.log(session.user); // 세션 정보에서 사용자 정보 출력
        return session.user;
    } else {
        console.log("No active session");
        return null;
    }
};
const LetterBox = ({ params }: Props) => {
    const user = getSession();
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

    if (isLoading) return <div className="inner">Loading...</div>;
    if (error) return <div className="inner">Error: {error}</div>;
    if (!letters) return <div className="inner">No letters found.</div>;

    return (
        <div className="inner">
            <div className="title">
                <span className="text-primary">{letters.username}</span>님의 편지함입니다.
                <h3 className="text-[16px] font-semibold">
                    총 <span className="text-primary font-semibold">{letters.letters.length}</span>개의 편지가
                    도착했습니다.
                </h3>
            </div>
            {letters.letters.length === 0 ? (
                <div className="inner">아직 도착한 편지가 없어요.</div>
            ) : (
                <LetterList letters={letters.letters} />
            )}
            <button onClick={copyLetterboxLink}>내 편지함 공유하기</button>
            <Link
                href={{
                    pathname: "/decoration",
                    query: { id: params.id }
                }}
            >
                <Button type="button" color="btn-blue" full label="편지 남기기" />
            </Link>
            {/* 알림 모달 */}
            {showAlert && (
                <div
                    className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded shadow-lg transition-all duration-500 opacity-100"
                    style={{ transition: "opacity 1s ease-in-out, transform 1s ease" }}
                >
                    편지함 링크가 복사되었습니다!
                </div>
            )}

            <div className="min-w-[100px] pt-[24px] text-center">
                <button className="font-bold text-lg" onClick={() => {}}>
                    내 편지함으로 돌아가기
                </button>
            </div>
        </div>
    );
};

export default LetterBox;
