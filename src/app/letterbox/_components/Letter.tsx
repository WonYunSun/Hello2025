import React from "react";
import Image from "next/image";

type LetterProps = {
    selectedEnvelope: string;
    sendername: string;
    sender_id: string;
    onclick: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const Letter = ({ selectedEnvelope, sender_id, sendername, onclick }: LetterProps) => {
    return (
        <div onClick={onclick}>
            <div>
                <span className="font-light">from</span> <span className="font-medium">{sendername}</span>
            </div>
            <Image src={selectedEnvelope} width={156} height={97} alt="envelope"></Image>
        </div>
    );
};

export default Letter;
