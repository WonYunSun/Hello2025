"use client";
import React from "react";
import Image from "next/image";
import snake from "@/assets/images/snake.svg";
import { Button } from "@/components/common";
import { DecorationData } from "./DecorationForms";
import MessageList from "./MessageList";

type MessageProps = {
    decorationData: DecorationData;
    onPrev: () => void;
};

const Message = ({ decorationData, onPrev }: MessageProps) => {
    const handleClick = () => {
        const finalData = { ...decorationData, message: "test-message" };
        console.log(finalData);
    };

    return (
        <section className="w-full h-full flex flex-col justify-between">
            <header className="relative">
                <h1 className="title">
                    <span className="text-primary">김철수</span>님 에게 보낼
                    <br />
                    메세지를 작성해주세요
                </h1>
                <div className="absolute top-16 right-0">
                    <Image src={snake} width={65} height={70} alt="snake" />
                </div>
            </header>
            <MessageList />
            <div className="flex gap-5">
                <Button type="button" color="btn-white" full={false} label="이전" handleClick={onPrev} />
                <Button type="button" color="btn-blue" full={true} label="다음으로" handleClick={handleClick} />
            </div>
        </section>
    );
};

export default Message;
