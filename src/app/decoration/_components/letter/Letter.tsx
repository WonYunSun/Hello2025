"use client";
import React, { useState } from "react";
import type { Decoration } from "@/lib/types/decoration";
import Layout from "../layout/Layout";
import LetterList from "./LetterList";

type LetterProps = {
    prevSelectedLetter: Decoration["letter"];
    onNext: (data: Pick<Decoration, "letter">) => void;
    onPrev: () => void;
};

const Letter = ({ prevSelectedLetter, onNext, onPrev }: LetterProps) => {
    const [selectedLetter, setSelectedLetter] = useState<Decoration["letter"]>(prevSelectedLetter);

    const handleNext = () => {
        onNext({ letter: selectedLetter });
    };

    return (
        <Layout title="편지지를 골라주세요" nextButtonLabel="다음으로" onPrev={onPrev} handleClick={handleNext}>
            <LetterList selectedLetter={selectedLetter} onLetterSelect={setSelectedLetter} />
        </Layout>
    );
};

export default Letter;
