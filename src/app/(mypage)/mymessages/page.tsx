"use client";
import React from "react";
import SmallButton from "@/components/ui/SmallButton";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/Loading";

type Letter = {
    id: string;
    content: string;
    recipient_id: string;
    sender_id: string | null;
    receiver_name?: string;
};

const fetchUserMessages = async () => {
    const response = await fetch(`/api/myletters`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("편지 데이터 가져오기 실패");
    }

    const data = await response.json();
    return data.letters;
};

const MyMessages: React.FC = () => {
    const {
        data: messages = [],
        isPending,
        isError
    } = useQuery<Letter[], Error>({
        queryKey: ["myLetters"],
        queryFn: fetchUserMessages
    });

    return (
        <div className="inner">
            <section className="mb-6 flex justify-between relative">
                <h1 className="title">내가 작성한 편지</h1>
                <SmallButton icon="/icon-back.svg" to={"/settings"} />
            </section>

            {isPending ? (
                <Loading />
            ) : isError ? (
                <div className="mt-20 text-center text-lg text-textLight">편지 데이터를 가져오는 데 실패했습니다.</div>
            ) : messages.length === 0 ? (
                <div className="mt-20 text-center text-lg text-textLight">작성한 편지가 없습니다.</div>
            ) : (
                <>
                    <p className="font-semibold">
                        총 <span className="text-primary">{messages.length}</span>개의 편지를 남겼습니다
                    </p>
                    <ul className="scroll-custom w-full pr-3 mt-10 h-[73vh] overflow-auto">
                        {messages.map((message) => (
                            <li
                                key={message.id}
                                className="p-[25px] bg-white border-dashed border-[2px] border-beige rounded-[10px] mt-5"
                            >
                                <p className="font-semibold">
                                    <span className="text-[14px] text-beige">To. </span>
                                    <span className="text-[18px] ">{message.receiver_name}</span>
                                </p>
                                <p className="mt-4 font-medium">{message.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default MyMessages;
