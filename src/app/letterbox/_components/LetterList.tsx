"use client";

import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import blueEnvelope from "@/assets/images/blue-envelope.svg";
import greenEnvelope from "@/assets/images/green-envelope.svg";
import navyEnvelope from "@/assets/images/navy-envelope.svg";
import pinkEnvelope from "@/assets/images/pink-envelope.svg";
import redEnvelope from "@/assets/images/red-envelope.svg";
import { useInfiniteQuery } from "@tanstack/react-query";

// 더미 데이터
const envelopeItems = [
    { src: redEnvelope, alt: "red-envelope" },
    { src: greenEnvelope, alt: "green-envelope" },
    { src: blueEnvelope, alt: "blue-envelope" },
    { src: pinkEnvelope, alt: "pink-envelope" },
    { src: navyEnvelope, alt: "navy-envelope" }
];

const letters = [
    { id: 1, envelope_type: 1, sender_id: "1" }, // redEnvelope
    { id: 2, envelope_type: 2, sender_id: "2" }, // blueEnvelope
    { id: 3, envelope_type: 3, sender_id: "3" }, // navyEnvelope
    { id: 4, envelope_type: 4, sender_id: "4" }, // pinkEnvelope
    { id: 5, envelope_type: 5, sender_id: "5" }, // greenEnvelope
    { id: 6, envelope_type: 1, sender_id: "6" }, // redEnvelope
    { id: 7, envelope_type: 2, sender_id: "7" }, // blueEnvelope
    { id: 8, envelope_type: 3, sender_id: "8" }, // navyEnvelope
    { id: 9, envelope_type: 4, sender_id: "9" }, // pinkEnvelope
    { id: 10, envelope_type: 5, sender_id: "10" }, // greenEnvelope
    { id: 11, envelope_type: 1, sender_id: "11" }, // redEnvelope
    { id: 12, envelope_type: 2, sender_id: "12" }, // blueEnvelope
    { id: 13, envelope_type: 3, sender_id: "13" }, // navyEnvelope
    { id: 14, envelope_type: 4, sender_id: "14" }, // pinkEnvelope
    { id: 15, envelope_type: 5, sender_id: "15" }, // greenEnvelope
    { id: 16, envelope_type: 1, sender_id: "16" }, // redEnvelope
    { id: 17, envelope_type: 2, sender_id: "17" }, // blueEnvelope
    { id: 18, envelope_type: 3, sender_id: "18" }, // navyEnvelope
    { id: 19, envelope_type: 4, sender_id: "19" }, // pinkEnvelope
    { id: 20, envelope_type: 5, sender_id: "20" }, // greenEnvelope
    { id: 21, envelope_type: 1, sender_id: "21" }, // redEnvelope
    { id: 22, envelope_type: 2, sender_id: "22" }, // blueEnvelope
    { id: 23, envelope_type: 3, sender_id: "23" }, // navyEnvelope
    { id: 24, envelope_type: 4, sender_id: "24" }, // pinkEnvelope
    { id: 25, envelope_type: 5, sender_id: "25" }, // greenEnvelope
    { id: 26, envelope_type: 1, sender_id: "26" }, // redEnvelope
    { id: 27, envelope_type: 2, sender_id: "27" }, // blueEnvelope
    { id: 28, envelope_type: 3, sender_id: "28" }, // navyEnvelope
    { id: 29, envelope_type: 4, sender_id: "29" }, // pinkEnvelope
    { id: 30, envelope_type: 5, sender_id: "30" } // greenEnvelope
];

const ITEMS_PER_PAGE = 12;

// 페이지 데이터를 반환하는 함수
const fetchLetters = async ({ pageParam = 1 }: { pageParam?: number }) => {
    const startIndex = (pageParam - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedLetters = letters.slice(startIndex, endIndex);

    return {
        letters: paginatedLetters,
        nextPage: paginatedLetters.length === ITEMS_PER_PAGE ? pageParam + 1 : undefined,
        prevPage: pageParam > 1 ? pageParam - 1 : undefined,
        totalPage: Math.ceil(letters.length / ITEMS_PER_PAGE)
    };
};

type LetterData = {
    id: number;
    envelope_type: number;
    sender_id: string;
};

type FetchLettersResponse = {
    letters: LetterData[];
    nextPage?: number;
    prevPage?: number;
    totalPage?: number;
};

const LetterList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);
    const { data, fetchNextPage, fetchPreviousPage, hasNextPage, isFetchingNextPage, isPending, isError } =
        useInfiniteQuery<FetchLettersResponse>({
            queryKey: ["letters"],
            queryFn: ({ pageParam = 1 }) => fetchLetters({ pageParam }),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => lastPage.nextPage,
            getPreviousPageParam: (prevPage) => prevPage.prevPage
        });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    // currentData는 현재 페이지에 해당하는 데이터
    const currentData = data?.pages[currentPage - 1]?.letters || [];

    const goToNextPage = () => {
        if (data.pages[currentPage - 1].nextPage) {
            fetchNextPage();
            setCurrentPage((prev) => prev + 1);
        }
    };

    const goToPreviousPage = () => {
        if (data.pages[currentPage - 1].prevPage) setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-4 pt-[56px]  gap-4">
                {currentData.map((letter) => (
                    <Letter
                        key={letter.id}
                        sender_id={letter.sender_id}
                        selectedEnvelope={envelopeItems[letter.envelope_type - 1]?.src || redEnvelope}
                    />
                ))}
            </div>

            {/* 페이지네이션 UI */}
            <div className="pb-[34px] pt-[34px] text-center">
                <button onClick={goToPreviousPage}>이전</button>
                <span className="ml-[10px] mr-[10px] ">
                    {" "}
                    {currentPage}/{data.pages[0].totalPage}
                </span>
                <button onClick={goToNextPage}>다음</button>
            </div>
        </div>
    );
};

export default LetterList;
