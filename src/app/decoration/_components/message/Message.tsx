"use client";
import { useState } from "react";
import { Decoration } from "@/lib/types/decoration";
import MessageList from "./MessageList";
import Layout from "../layout/Layout";

type MessageProps = {
    previousMessage: Decoration["message"];
    onNext: (data: Pick<Decoration, "message">) => void;
    onPrev: () => void;
};

const Message = ({ previousMessage, onNext, onPrev }: MessageProps) => {
    const [messageData, setMessageData] = useState<Decoration["message"]>(previousMessage);

    const handleNext = () => {
        onNext({ message: messageData });
    };

    return (
        <Layout title="메세지를 작성해주세요" nextButtonLabel="편지 남기기" onPrev={onPrev} handleClick={handleNext}>
            <MessageList message={messageData} onMessage={setMessageData} />
        </Layout>
    );
};

export default Message;
