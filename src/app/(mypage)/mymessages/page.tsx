import SmallButton from "@/components/ui/SmallButton";
import React from "react";

const MyMessages = () => {
    return (
        <div className="inner">
            <section className="mb-6 flex justify-between relative">
                <h1 className="title">내가 작성한 편지</h1>
                <SmallButton icon="icon-back.svg" to={"/settings"} />
            </section>
            <p className="font-semibold">
                총 <span className="text-primary">5</span>개의 편지를 남겼습니다
            </p>

            <ul className="scroll-custom w-full pr-3 mt-10 h-[73vh] overflow-auto ">
                <li className="p-[25px] bg-white border-dashed border-[2px] border-beige rounded-[10px]">
                    <p className="font-semibold">
                        <span className="text-[14px] text-beige">To. </span>
                        <span className="text-[18px] ">김철수</span>
                    </p>
                    <p className="mt-4 font-medium">
                        지난 한 해 동안 함께한 소중한 순간들을 돌아보며, 당신과의 인연에 감사한 마음이 듭니다. 올 한
                        해도 건강과 행복이 항상 함께하시기를 바라며, 새로운 도전과 기회가 여러분을 기다리고 있기를
                        희망합니다.
                    </p>
                </li>
                <li className="p-[25px] bg-white border-dashed border-[2px] border-beige rounded-[10px] mt-5">
                    <p className="font-semibold">
                        <span className="text-[14px] text-beige">To. </span>
                        <span className="text-[18px] ">김철수</span>
                    </p>
                    <p className="mt-4 font-medium">
                        지난 한 해 동안 함께한 소중한 순간들을 돌아보며, 당신과의 인연에 감사한 마음이 듭니다. 올 한
                        해도 건강과 행복이 항상 함께하시기를 바라며, 새로운 도전과 기회가 여러분을 기다리고 있기를
                        희망합니다.
                    </p>
                </li>
                <li className="p-[25px] bg-white border-dashed border-[2px] border-beige rounded-[10px] mt-5">
                    <p className="font-semibold">
                        <span className="text-[14px] text-beige">To. </span>
                        <span className="text-[18px] ">김철수</span>
                    </p>
                    <p className="mt-4 font-medium">
                        지난 한 해 동안 함께한 소중한 순간들을 돌아보며, 당신과의 인연에 감사한 마음이 듭니다. 올 한
                        해도 건강과 행복이 항상 함께하시기를 바라며, 새로운 도전과 기회가 여러분을 기다리고 있기를
                        희망합니다.
                    </p>
                </li>
                <li className="p-[25px] bg-white border-dashed border-[2px] border-beige rounded-[10px] mt-5">
                    <p className="font-semibold">
                        <span className="text-[14px] text-beige">To. </span>
                        <span className="text-[18px] ">김철수</span>
                    </p>
                    <p className="mt-4 font-medium">
                        지난 한 해 동안 함께한 소중한 순간들을 돌아보며, 당신과의 인연에 감사한 마음이 듭니다. 올 한
                        해도 건강과 행복이 항상 함께하시기를 바라며, 새로운 도전과 기회가 여러분을 기다리고 있기를
                        희망합니다.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default MyMessages;
