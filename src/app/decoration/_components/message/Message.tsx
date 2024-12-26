"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Decoration } from "@/lib/types/decoration";
import { createClient } from "@/lib/utils/supabase/client";
import MessageList from "./MessageList";
import Layout from "../layout/Layout";

type MessageProps = {
    decorationData: Decoration;
    onNext: (data: Pick<Decoration, "message">) => void;
    onPrev: (message: Decoration["message"]) => void;
};

const Message = ({ decorationData, onNext, onPrev }: MessageProps) => {
    const [messageData, setMessageData] = useState<Decoration["message"]>(decorationData.message);

    const handleNext = async () => {
        const supabase = await createClient();
        const session = await supabase.auth.getSession();

        const userId = session.data.session?.user.id || "none"; // TODO : 익명 사용자 uuid 결정하기!
        const envelope_type = decorationData.envelope.src.split("/").pop()?.split(".")[0]; // ex) red-envelope
        const paper_type = decorationData.letter.src.split("/").pop()?.split(".")[0]; // ex) color-letter

        const payload = {
            id: uuidv4(),
            recipient_id: "9a993022-9bd9-427c-a371-9b8135377070", // 임시값
            sender_id: userId,
            content: messageData.text,
            envelope_type,
            paper_type,
            is_private: messageData.isPrivate,
            sendername: messageData.name
        };

        const res = await fetch("/api/decoration", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            console.error("Failed to send data");
            return;
        }

        // 다음 단계로 이동
        onNext({ message: messageData });
    };

    const handlePrev = () => {
        onPrev(messageData);
    };

    return (
        <Layout
            title="메세지를 작성해주세요"
            nextButtonLabel="편지 남기기"
            onPrev={handlePrev}
            handleClick={handleNext}
        >
            <MessageList message={messageData} onMessage={setMessageData} />
        </Layout>
    );
};

export default Message;
