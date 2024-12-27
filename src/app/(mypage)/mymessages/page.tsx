"use client";
import SmallButton from "@/components/ui/SmallButton";
import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/utils/supabase/client";
import { useUserStore } from "@/stores/userStore";

type Letter = {
    id: string;
    content: string;
    recipient_id: string;
    sender_id: string | null;
    receiver_name?: string;
};

const MyMessages: React.FC = () => {
    const [messages, setMessages] = useState<Letter[]>([]);
    const { user } = useUserStore();
    const supabase = createClient();

    useEffect(() => {
        const fetchMessages = async () => {
            if (!user) return;
            const letters = await fetchLetters(user.id);
            const messagesWithUsernames = await Promise.all(letters.map(fetchReceiverName));
            setMessages(messagesWithUsernames);
        };

        fetchMessages();
    }, [user]);

    const fetchLetters = async (userId: string): Promise<Letter[]> => {
        const { data: letters, error } = await supabase.from("letters").select("*").eq("sender_id", userId);

        if (error) {
            console.error("편지 가져오기 오류:", error);
            return [];
        }

        return letters as Letter[]; // 타입 캐스팅
    };

    const fetchReceiverName = async (letter: Letter): Promise<Letter> => {
        const { data: userData, error } = await supabase
            .from("users")
            .select("username")
            .eq("id", letter.recipient_id)
            .single();

        if (error) {
            console.error("수신자 가져오기 오류:", error);
            return { ...letter, receiver_name: "알 수 없음" };
        }

        return { ...letter, receiver_name: userData.username };
    };

    return (
        <div className="inner">
            <section className="mb-6 flex justify-between relative">
                <h1 className="title">내가 작성한 편지</h1>
                <SmallButton icon="icon-back.svg" to={"/settings"} />
            </section>
            <p className="font-semibold">
                총 <span className="text-primary">{messages.length}</span>개의 편지를 남겼습니다
            </p>

            <ul className="scroll-custom w-full pr-3 mt-10 h-[73vh] overflow-auto ">
                {messages.length === 0 ? (
                    <li className="p-[25px] text-center">작성한 편지가 없습니다.</li>
                ) : (
                    messages.map((message) => (
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
                    ))
                )}
            </ul>
        </div>
    );
};

export default MyMessages;
