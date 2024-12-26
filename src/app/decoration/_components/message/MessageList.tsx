"use client";
import { ChangeEvent } from "react";
import { InputForm } from "@/components/common";
import CheckboxInput from "@/components/common/CheckboxInput";
import { Decoration } from "@/lib/types/decoration";

type MessageListProps = {
    message: Decoration["message"];
    onMessage: (message: Decoration["message"]) => void;
};

const MessageList = ({ message, onMessage }: MessageListProps) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onMessage({ ...message, [name]: value });
    };

    const handleCheckboxChange = () => {
        onMessage({ ...message, isPrivate: !message.isPrivate });
    };

    return (
        <section>
            <div className="flex flex-col gap-3 mb-[18px]">
                <label htmlFor="name" className="font-semibold text-xl leading-none tracking-tight text-textDark">
                    보내는 사람
                </label>
                <InputForm
                    id="name"
                    type="text"
                    name="name"
                    placeholder="이름"
                    full={true}
                    maxLength={8}
                    value={message.name}
                    handleChange={handleInputChange}
                />
            </div>
            <div className="relative mb-6 p-5 pb-10 border-[1px] bg-white border-beigeLight rounded-[5px]">
                <textarea
                    rows={10}
                    name="text"
                    maxLength={850}
                    placeholder="따듯한 메세지를 적어주세요!"
                    value={message.text}
                    onChange={handleInputChange}
                    className="resize-none w-full text-lg scroll-invisible"
                />
                <span className="text-gray-400 absolute right-5 bottom-5">{message.text.length}/850</span>
            </div>
            <CheckboxInput
                label="편지함 주인에게만 공개할래요"
                checked={message.isPrivate}
                onChange={handleCheckboxChange}
            />
        </section>
    );
};

export default MessageList;
