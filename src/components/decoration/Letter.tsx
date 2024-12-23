"use client";
import React from "react";
import { DecorationData } from "./DecorationForms";

type LetterProps = {
    onNext: (data: Pick<DecorationData, "letter">) => void;
    onPrev: () => void;
};

export default function Letter({ onNext, onPrev }: LetterProps) {
    const handleClick = () => {
        onNext({ letter: "letter-envelope" });
    };

    return (
        <>
            <button onClick={handleClick}>편지지</button>
            <button onClick={onPrev}>이전</button>
        </>
    );
}
