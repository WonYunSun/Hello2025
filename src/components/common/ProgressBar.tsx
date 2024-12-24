"use client";

import React, { useEffect, useState } from "react";

type ProgressBarProps = { start: number; end: number };

const ProgressBar: React.FC<ProgressBarProps> = ({ start = 0, end = 120 }) => {
    const [width, setWidth] = useState(start);

    useEffect(() => {
        setWidth(end);
    }, [end]);

    return (
        <div className="w-full max-w-[600px] h-2 fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#cccccc]">
            <div
                className={`transition-all ease-out duration-1000 h-2 fixed top-0 bg-primary`}
                style={{ width: `${width}px` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
