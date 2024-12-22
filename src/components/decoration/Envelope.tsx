"use client";
import React from "react";
import { DecorationData } from "./DecorationForms";

type EnvelopeProps = {
    onNext: (data: Pick<DecorationData, "envelope">) => void;
};

export default function Envelope({ onNext }: EnvelopeProps) {
    const handleClick = () => {
        onNext({ envelope: "test-envelope" });
    };

    return <button onClick={handleClick}>편지봉투</button>;
}
