"use client";
import { useState } from "react";
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
    const [messageData, setMessageData] = useState<Decoration["message"]>(decorationData.message);

    const handleNext = async () => {
        await sendMessage(decorationData, messageData);
        onNext({ message: messageData }); // 다음 단계로 이동
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
