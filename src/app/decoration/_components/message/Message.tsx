"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Decoration } from "@/lib/types/decoration";
import { sendMessage } from "@/lib/api/message";
import Layout from "../layout/Layout";
import MessageList from "./MessageList";

type MessageProps = {
    decorationData: Decoration;
    onNext: (data: Pick<Decoration, "message">) => void;
    onPrev: (message: Decoration["message"]) => void;
};

const Message = ({ decorationData, onNext, onPrev }: MessageProps) => {
    const [uid, setUid] = useState<string | null>(null);
    const [messageData, setMessageData] = useState<Decoration["message"]>(decorationData.message);

    const handleNext = async () => {
        await sendMessage(uid, decorationData, messageData);
        onNext({ message: messageData }); // 다음 단계로 이동
    };

    const handlePrev = () => {
        onPrev(messageData);
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const pathSegments = url.pathname.split("/");
        const extractedUid = pathSegments[pathSegments.length - 1];
        setUid(extractedUid);
    }, []);

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
