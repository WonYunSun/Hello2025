"use client";

import { Button } from "@/components/common";
import LetterList from "../_components/LetterList";
import { useEffect, useState } from "react";

type Props = {
    params: {
        id: string;
    };
};
type LetterType = {
    id: string;
    sender_id: string;
    recipient_id: string;
    content: string;
    created_at: string;
    envelope_type: number;
    paper_type: number;
    is_public: boolean;
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

const LetterBox = ({ params }: Props) => {
    const [letters, setLetters] = useState<LettersType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
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

            <Button
                type="button"
                color="btn-blue"
                full
                label="편지 남기기"
                handleClick={() => {
                    console.log("Button clicked");
                }}
            />
            <div className="min-w-[100px] pt-[24px] text-center">
                <button className="font-bold text-lg" onClick={() => {}}>
                    내 편지함으로 돌아가기
                </button>
            </div>
        </div>
    );
};

export default LetterBox;
