"use client";
import Image from "next/image";
import bgDeco from "@/assets/images/bg-deco.svg";
import Squares from "./Squares";
import useBgDecoVisibility from "@/lib/hooks/useBgDecoVisibility";

const BgDeco = () => {
    const shouldHideBgDeco = useBgDecoVisibility();

    return (
        <>
            {!shouldHideBgDeco ? (
                <div className="w-full h-full absolute top-0 left-0 border-[3px] border-beige pointer-events-none">
                    <Image
                        src={bgDeco}
                        alt=""
                        width={600}
                        height={300}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="absolute left-0 top-0 w-[32px] h-[32px] flex flex-wrap">
                        <Squares />
                    </div>
                    <div className="absolute right-0 top-0 w-[32px] h-[32px] flex flex-wrap rotate-90">
                        <Squares />
                    </div>
                    <div className="absolute left-0 bottom-0 w-[32px] h-[32px] flex flex-wrap -rotate-90">
                        <Squares />
                    </div>
                    <div className="absolute right-0 bottom-0 w-[32px] h-[32px] flex flex-wrap rotate-180">
                        <Squares />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default BgDeco;
