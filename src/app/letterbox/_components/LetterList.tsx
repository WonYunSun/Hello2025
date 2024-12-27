"use client";

import React, { useState } from "react";
import Image from "next/image";
import Letter from "./Letter";
import blueEnvelope from "@/assets/images/blue-envelope.svg";
import greenEnvelope from "@/assets/images/green-envelope.svg";
import navyEnvelope from "@/assets/images/navy-envelope.svg";
import pinkEnvelope from "@/assets/images/pink-envelope.svg";
import redEnvelope from "@/assets/images/red-envelope.svg";

import iconForward from "@/assets/images/icon-forward.svg";
import LetterModal from "./LetterModal";

// 봉투 이미지 매핑

type LetterType = {
    id: string;
    sender_id: string;
    recipient_id: string;
    content: string;
    created_at: string;
    envelope_type: string;
    paper_type: string;
    is_private: boolean;
    sendername: string;
};

type LetterListProps = {
    letters: LetterType[];
};

const ITEMS_PER_PAGE = 12;

const LetterList = ({ letters }: LetterListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLetter, setSelectedLetter] = useState<LetterType | null>(null);
    const totalPage = Math.ceil(letters.length / ITEMS_PER_PAGE);
    const envelopeItems: { [key: string]: string } = {
        "red-envelope": redEnvelope,
        "green-envelope": greenEnvelope,
        "blue-envelope": blueEnvelope,
        "pink-envelope": pinkEnvelope,
        "navy-envelope": navyEnvelope
    };
    // 현재 페이지에 해당하는 편지 목록
    const currentData = letters.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const goToNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleClick = (letter: LetterType) => {
        setSelectedLetter(letter); // 선택된 편지 데이터 저장
        setIsModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
        setSelectedLetter(null); // 선택된 편지 초기화
    };

    return (
        <div>
            {/* 편지 목록 */}
            <div className="grid grid-cols-3 grid-rows-4 pt-[56px] gap-1 ">
                {currentData.map((letter) => {
                    const selectedEnvelope = envelopeItems[letter.envelope_type] || envelopeItems["red-envelope"]; // 기본값 설정
                    return (
                        <Letter
                            key={letter.id}
                            sender_id={letter.sender_id}
                            sendername={letter.sendername}
                            selectedEnvelope={selectedEnvelope}
                            onclick={() => handleClick(letter)}
                        />
                    );
                })}
            </div>

            {/* 페이지네이션 UI */}
            <div className="pb-[34px] pt-[34px] flex justify-center items-center">
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    <Image src={iconForward} alt="이전" className="rotate-180"></Image>
                </button>
                <span className="ml-[10px] mr-[10px]">
                    {currentPage} / {totalPage}
                </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPage}>
                    <Image src={iconForward} alt="다음"></Image>
                </button>
            </div>

            {/* 모달 컴포넌트 */}
            <LetterModal isOpen={isModalOpen} onClose={closeModal} contents={selectedLetter} />
        </div>
    );
};

export default LetterList;
