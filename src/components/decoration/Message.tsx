"use client";
import React from "react";
import { DecorationData } from "./DecorationForms";

type MessageProps = {
    decorationData: DecorationData;
    onPrev: () => void;
};

export default function Message({ decorationData, onPrev }: MessageProps) {
    const handleClick = () => {
        const finalData = { ...decorationData, message: "test-message" };
        console.log(finalData);
    };
    return (
        <>
            <button onClick={handleClick}>메세지</button>
            <button onClick={onPrev}>이전</button>
        </>
    );
}
