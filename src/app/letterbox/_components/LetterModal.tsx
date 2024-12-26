import { Button } from "@/components/common";
import React from "react";

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

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    contents: LetterType | null;
};

const LetterModal = ({ isOpen, onClose, contents }: ModalProps) => {
    if (!isOpen || !contents) return null;

    return (
        <div
            onClick={onClose}
            className=" backdrop-blur-sm fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col  z-50"
        >
            <div className="w-[600px] h-[640px]  bg-white p-6 ">
                <h2>Sender: {contents.sender_id}</h2>
                <p>{contents.content}</p>
            </div>
            <div className="w-[600px] flex justify-between pt-[21px]">
                <Button type="button" color="btn-red" label="삭제" full={false} handleClick={onClose} />
                <Button type="button" color="btn-white" label="닫기" full={false} handleClick={onClose} />
            </div>
        </div>
    );
};

export default LetterModal;
