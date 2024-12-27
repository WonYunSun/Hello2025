import { Button } from "@/components/common";
import React from "react";
import colorLetter from "@/assets/images/color-letter.svg";
import patternLetter from "@/assets/images/pattern-letter.svg";
import { Database } from "@/lib/types/supabase";
import { useUserStore } from "@/stores/userStore";
import { useParams } from "next/navigation";

type LetterType = Database["public"]["Tables"]["letters"]["Row"];

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    contents: LetterType | null;
};

const LetterModal = ({ isOpen, onClose, contents }: ModalProps) => {
    const { user } = useUserStore(); // 현재 로그인한 사용자 정보
    const params = useParams(); // URL 파라미터 가져오기
    const currentId = params?.id as string | undefined; // URL의 id 값
    const isOwner = user?.id === currentId;
    console.log(isOwner);
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
                    {/* 조건부 렌더링 */}
                    {contents.is_private && !isOwner ? (
                        <div className="pt-[40%] text-center text-lg text-textLight">이 편지는 비공개 편지입니다.</div>
                    ) : (
                        <p>{contents.content}</p>
                    )}
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
