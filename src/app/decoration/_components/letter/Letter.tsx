"use client";
import React, { useState } from "react";
import { DecorationData } from "../DecorationForms";
import Layout from "../layout/Layout";
import LetterList from "./LetterList";

type LetterProps = {
    prevSelectedLetter: DecorationData["letter"];
    onNext: (data: Pick<DecorationData, "letter">) => void;
    onPrev: () => void;
};

const Letter = ({ prevSelectedLetter, onNext, onPrev }: LetterProps) => {
    const [selectedLetter, setSelectedLetter] = useState<DecorationData["letter"]>(prevSelectedLetter);

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
