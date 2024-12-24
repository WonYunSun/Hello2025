import { Button } from "@/components/common";
import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    senderId: string; // 클릭한 카드의 sender_id를 전달받음
};

const LetterModal = ({ isOpen, onClose, senderId }: ModalProps) => {
    if (!isOpen) return null; // 모달이 열려 있지 않으면 아무것도 렌더링하지 않음

    return (
        <div
            onClick={onClose}
            className=" backdrop-blur-sm fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col  z-50"
        >
            <div className="w-[600px] h-[640px]  bg-white p-6 ">
                <h2>Sender: {senderId}</h2>
                <p>모달 내용이 여기에 표시됩니다.</p>
            </div>
            <div className="w-[600px] flex justify-between pt-[21px]">
                <Button type="button" color="btn-red" label="삭제" full={false} handleClick={onClose} />
                <Button type="button" color="btn-white" label="닫기" full={false} handleClick={onClose} />
            </div>
        </div>
    );
};

export default LetterModal;
