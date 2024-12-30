import React, { useRef } from "react";
import { Button } from "@/components/common";
import { AGREEMENTS, TERMS } from "@/constants/terms";

type Props = {
    setModalOpen: (arg: boolean) => void;
};

const Term = ({ title, content }: { title: string; content: string }) => {
    return (
        <>
            <br />
            <h1 className="text-[20px] font-semibold">{title}</h1>
            <br />
            <span>{content}</span>
            <br />
        </>
    );
};

const TermsModal = ({ setModalOpen }: Props) => {
    const modalBackground = useRef(null);

    return (
        <div
            ref={modalBackground}
            onClick={(e) => {
                if (e.target === modalBackground.current) {
                    setModalOpen(false);
                }
            }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1000] grid place-content-center gap-5"
        >
            <div className="w-[450px] max-h-[600px] bg-white p-5 rounded-[10px] shadow-lg z-[1001] overflow-auto modalscrollbar">
                <h1 className="title">Hello! 2025 이용약관</h1>
                {TERMS.map(([key, value], i) => (
                    <div key={i}>
                        <Term title={key} content={value} />
                    </div>
                ))}
                <br /> <br /> <br />
                <h1 className="title">개인정보 처리방침</h1>
                <br />
                <span>{`조팔이들(이하 "회사")는 Hello! 2025(이하 "사이트")를 운영함에 있어, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 준수하며, 고객의 개인정보 보호를 소중히 여기고 안전하게 처리하기 위해 최선을 다하고 있습니다. 본 개인정보 처리방침은 회사가 제공하는 서비스 이용과 관련하여 고객의 개인정보 처리에 관한 정책을 설명합니다.`}</span>
                <br />
                {AGREEMENTS.map(([key, value], i) => (
                    <div key={i}>
                        <Term title={key} content={value} />
                    </div>
                ))}
            </div>
            <div className="w-[450px] shadow-lg">
                <Button type="button" color="btn-red" full label="닫기" handleClick={() => setModalOpen(false)} />
            </div>
        </div>
    );
};

export default TermsModal;
