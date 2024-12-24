"use client";
import React, { useState } from "react";
import { DecorationData } from "../DecorationForms";
import EnvelopeList from "./EnvelopeList";
import Layout from "../layout/Layout";

type EnvelopeProps = {
    prevSelectedEnvelope: string;
    onNext: (data: Pick<DecorationData, "envelope">) => void;
};

const Envelope = ({ prevSelectedEnvelope, onNext }: EnvelopeProps) => {
    const [selectedEnvelope, setSelectedEnvelope] = useState<string>(prevSelectedEnvelope);

    const handleNext = () => {
        onNext({ envelope: selectedEnvelope });
    };

    return (
        <Layout title="편지 봉투를 골라주세요" nextButtonLabel="다음으로" handleClick={handleNext}>
            <EnvelopeList
                prevSelectedEnvelope={prevSelectedEnvelope}
                selectedEnvelope={selectedEnvelope}
                onEnvelopeSelect={setSelectedEnvelope}
            />
        </Layout>
    );
};

export default Envelope;
