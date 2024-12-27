import React from "react";
import Image from "next/image";

type LetterProps = {
    selectedEnvelope: string;
    sendername: string;
    sender_id: string;
    onclick: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const Letter = ({ selectedEnvelope, sendername, onclick }: LetterProps) => {
    return (
        <div onClick={onclick} className="mx-auto my-0">
            <div>
                <span className="font-light">from</span> <span className="font-medium">{sendername}</span>
            </div>
            <Image
                src={selectedEnvelope}
                width={126}
                alt="envelope"
                className="hover:scale-105 transition ease-in-out delay-20 cursor-pointer pt-[5px]"
            ></Image>
        </div>
    );
};

export default Letter;
