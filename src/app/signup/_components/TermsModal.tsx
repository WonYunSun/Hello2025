import React, { useRef } from "react";
import { Button } from "@/components/common";

type Props = {
    setModalOpen: (arg: boolean) => void;
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
            <div className="w-[450px] max-h-[600px] bg-white p-5 rounded-[10px] shadow-lg z-[1001] overflow-auto">
                <h1>이용약관</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
                <h1>개인정보 보호</h1>
            </div>
            <div className="w-[450px] shadow-lg">
                <Button type="button" color="btn-red" full label="닫기" handleClick={() => setModalOpen(false)} />
            </div>
        </div>
    );
};

export default TermsModal;
