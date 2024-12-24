import React from "react";

type ProgressBarProps = {};

const ProgressBar: React.FC<ProgressBarProps> = () => {
    return (
        <div className="w-full max-w-[600px] h-2 fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#cccccc]"></div>
    );
};

export default ProgressBar;
