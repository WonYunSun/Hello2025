import React from "react";
import Image from "next/image";

type LetterProps = {
    selectedEnvelope: string;
    sender_id: string;
};
const Letter = ({ selectedEnvelope, sender_id }: LetterProps) => {
    return (
        <div>
            <div>
                <span className="font-light">from</span> <span className="font-medium">{sender_id}</span>
            </div>
            <Image src={selectedEnvelope} width={156} height={97} alt="envelope"></Image>
        </div>
    );
};

export default Letter;
