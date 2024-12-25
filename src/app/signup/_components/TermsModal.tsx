import React from "react";

const TermsModal = ({ modalBackground, setModalOpen }) => {
    return (
        <div
            ref={modalBackground}
            onClick={(e) => {
                if (e.target === modalBackground.current) {
                    setModalOpen(false);
                }
            }}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-[1000]"
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg z-[1001]">
                이용약관
            </div>
        </div>
    );
};

export default TermsModal;
