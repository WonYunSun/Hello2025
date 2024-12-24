"use client";
import { DecorationData } from "../DecorationForms";
import MessageList from "./MessageList";
import Layout from "../layout/Layout";

type MessageProps = {
    decorationData: DecorationData;
    onPrev: () => void;
};

const Message = ({ decorationData, onPrev }: MessageProps) => {
    const handleSubmit = () => {
        const finalData = { ...decorationData, message: "test-message" };
        console.log(finalData);
    };

    return (
        <Layout title="메세지를 작성해주세요" nextButtonLabel="편지 남기기" onPrev={onPrev} handleClick={handleSubmit}>
            <MessageList />
        </Layout>
    );
};

export default Message;
