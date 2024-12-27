import { Button } from "@/components/common";
import React from "react";
import colorLetter from "@/assets/images/color-letter.svg";
import patternLetter from "@/assets/images/pattern-letter.svg";
type LetterType = {
    id: string;
    sender_id: string;
    sendername: string;
    recipient_id: string;
    content: string;
    created_at: string;
    envelope_type: string;
    paper_type: string;
    is_private: boolean;
};

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    contents: LetterType | null;
};

const LetterModal = ({ isOpen, onClose, contents }: ModalProps) => {
    if (!isOpen || !contents) return null;
    console.log(contents);
    const paperImages: { [key: string]: string } = {
        "color-letter": colorLetter,
        "pattern-letter": patternLetter
    };
    const selectedPaper = paperImages[contents.paper_type] || colorLetter;

    return (
        <div
            onClick={onClose}
            className=" backdrop-blur-sm fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col  z-50"
        >
            <div onClick={(e) => e.stopPropagation()}>
                <div
                    className="w-[600px] h-[640px]  bg-white p-[4rem] "
                    style={{
                        backgroundImage: `url(${selectedPaper.src})`, // 배경 이미지 설정
                        backgroundSize: "cover" // 배경 이미지 크기 조정
                    }}
                >
                    <div className="pb-5 text-[20px] font-semibold">From {contents.sendername}</div>
                    <p>{contents.content}</p>
                </div>
                <div className="w-[600px] flex justify-between pt-[21px]">
                    <Button type="button" color="btn-red" label="삭제" full={false} handleClick={() => {}} />
                    <Button type="button" color="btn-white" label="닫기" full={false} handleClick={onClose} />
                </div>
            </div>
        </div>
    );
};

export default LetterModal;
