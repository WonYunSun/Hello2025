import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/common";
import colorLetter from "@/assets/images/color-letter.svg";
import patternLetter from "@/assets/images/pattern-letter.svg";
import type { Database } from "@/lib/types/supabase";
import { useUserStore } from "@/stores/userStore";

type LetterType = Database["public"]["Tables"]["letters"]["Row"];

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    contents: LetterType | null;
    letter_visibility: boolean | null;
};

const LetterModal = ({ isOpen, onClose, contents, letter_visibility }: ModalProps) => {
    const { user } = useUserStore(); // 현재 로그인한 사용자 정보
    const params = useParams(); // URL 파라미터 가져오기
    const currentId = params?.id as string | undefined; // URL의 id 값
    const isOwner = user?.id === currentId;
    const [isDeleting, setIsDeleting] = useState(false); // 삭제 상태 관리

    // 현재 날짜가 1월 1일 이전인지 확인
    const currentDate = new Date();
    const isBeforeNewYear = currentDate < new Date(currentDate.getFullYear(), 0, 1);

    if (!isOpen || !contents) return null;
    const paperImages: { [key: string]: string } = {
        "color-letter": colorLetter,
        "pattern-letter": patternLetter
    };
    const selectedPaper = paperImages[contents.paper_type] || colorLetter;

    const deleteLetter = async () => {
        if (!contents?.id) return;

        setIsDeleting(true);

        try {
            const res = await fetch(`/api/letters?id=${contents.id}`, {
                method: "DELETE"
            });

            const data = await res.json();

            if (res.ok) {
                // 편지 삭제 후 모달 닫기
                onClose();
                alert("편지가 삭제되었습니다.");
                window.location.reload();
            } else {
                alert(`삭제 실패: ${data.error}`);
            }
        } catch (error) {
            alert("편지 삭제 중 오류가 발생했습니다.");
        } finally {
            setIsDeleting(false);
        }
    };

    if (!isOpen || !contents) return null;

    return (
        <div
            onClick={onClose}
            className="backdrop-blur-sm fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col z-50"
        >
            <div className="w-[600px] max-w-[90%] " onClick={(e) => e.stopPropagation()}>
                <div
                    className="w-full aspect-[1/1.067] bg-white p-[4rem]"
                    style={{
                        backgroundImage: `url(${selectedPaper.src})`, // 배경 이미지 설정
                        backgroundSize: "cover" // 배경 이미지 크기 조정
                    }}
                >
                    <div className="pb-5 text-[20px] font-semibold">From {contents.sendername}</div>
                    {/* 조건부 렌더링 */}
                    {!isBeforeNewYear ? (
                        // 1월 1일 이전인 경우
                        <div className="pt-[40%] text-center text-lg text-textLight">
                            이 편지는 1월 1일 이후에 확인할 수 있습니다.
                        </div>
                    ) : (contents.is_private || !letter_visibility) && !isOwner ? (
                        // 비공개 편지인 경우
                        <div className="pt-[40%] text-center text-lg text-textLight">이 편지는 비공개 편지입니다.</div>
                    ) : (
                        // 그 외의 경우 (내용 표시)
                        <p>{contents.content}</p>
                    )}
                </div>
                <div className="w-[600px] max-w-[100%] flex justify-between pt-[20px]">
                    {isOwner ? (
                        <Button
                            type="button"
                            color="btn-red"
                            label={isDeleting ? "삭제 중..." : "삭제"}
                            full={false}
                            handleClick={deleteLetter}
                            disabled={isDeleting} // 삭제 중 버튼 비활성화
                        />
                    ) : (
                        <div></div>
                    )}

                    <Button type="button" color="btn-white" label="닫기" full={false} handleClick={onClose} />
                </div>
            </div>
        </div>
    );
};

export default LetterModal;
