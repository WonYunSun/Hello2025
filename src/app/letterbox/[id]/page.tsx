"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/common";
import SmallButton from "@/components/ui/SmallButton";
import Loading from "@/components/ui/Loading";
import AlertModal from "@/components/common/AlertModal";
import { useUserStore } from "@/stores/userStore";
import type { Database } from "@/lib/types/supabase";
import { ErrorPage } from "../_components/ErrorPage";
import LetterList from "../_components/LetterList";

type Props = {
    params: {
        id: string;
    };
};
type LetterType = Database["public"]["Tables"]["letters"]["Row"];
type User = Database["public"]["Tables"]["users"]["Row"];
type LettersType = {
    user: User;
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
    const { user } = useUserStore();

    const copyLetterboxLink = async () => {
        const currentUrl = window.location.href;
        try {
            await navigator.clipboard.writeText(currentUrl);
            setShowAlert(true); // 알림 표시

            // 1.5초 후 알림 숨기기
            setTimeout(() => {
                setShowAlert(false);
            }, 1500);
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

    const isOwner = user?.id === params.id;

    if (isLoading) return <Loading />;
    if (error) return <ErrorPage />;
    if (!letters) return <ErrorPage />;

    return (
        <div className="inner flex flex-col justify-center h-screen">
            <section className="mb-6 flex justify-between relative">
                <div>
                    <div className="title">
                        <span className="text-primary">{letters.user.username}</span>님의 편지함입니다.
                    </div>
                    <h3 className="text-[16px] font-semibold mt-[15px]">
                        {!letters.user.count_visibility && !isOwner ? (
                            <></>
                        ) : (
                            <>
                                총 <span className="text-primary font-semibold">{letters.letters.length}</span>개의
                                편지가 도착했습니다.
                            </>
                        )}
                    </h3>
                </div>
                {user !== null && <SmallButton icon="/icon-user.svg" to={"/settings"} />}
            </section>

            {/* {!letters.user.allow_anonymous && !isOwner ? (
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center text-lg text-textLight">이 편지함은 비공개 편지함입니다.</div>
                </div>
            ) : ( */}

            {letters.letters.length === 0 ? (
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center text-lg text-textLight">아직 도착한 편지가 없어요.</div>
                </div>
            ) : (
                <div className="flex-grow">
                    <LetterList letters={letters.letters} letter_visibility={letters.user.letter_visibility} />
                </div>
            )}

            {/* 알림 모달 */}
            <AlertModal show={showAlert} message="편지함 링크가 복사되었습니다!" />

            {isOwner ? (
                <Button
                    type="button"
                    color="btn-blue"
                    full
                    label="내 편지함 공유하기"
                    handleClick={copyLetterboxLink}
                />
            ) : user || letters.user.allow_anonymous ? (
                <Link href={`/decoration/${params.id}`}>
                    <Button type="button" color="btn-blue" full label="편지 남기기" />
                </Link>
            ) : (
                <Button type="button" color="btn-blue" full label="로그인 후 이용가능합니다." disabled={true} />
            )}

            {!isOwner && (
                <div className="min-w-[100px] pt-[18px] text-center">
                    <Link href={user ? `/letterbox/${user.id}` : "/signup"}>
                        <button className="font-bold text-lg">내 편지함으로 돌아가기</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LetterBox;
