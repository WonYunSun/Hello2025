import Image from "next/image";
import React from "react";

const NewPostbox = () => {
    return (
        <div>
            <div className="title">
                <div>
                    <span className="text-primary">어떤 이름</span>으로
                </div>
                <div>편지함을 만드시겠어요?</div>
            </div>
            <Image width={65.54} height={71} src="/assets/snake.png" alt="snake" />
            <div className="grid text-[20px]">
                닉네임
                <input type="text" placeholder="0/8" />
            </div>
            <div className="text-[16px]">
                <div>
                    <input type="checkbox" />
                    전체 동의
                </div>
                <div>
                    <input type="checkbox" />
                    (필수) 만 14세 이상이에요
                </div>
                <div>
                    <input type="checkbox" />
                    (필수) 이용약관 및 개인정보수집이용 동의
                </div>
            </div>
            <button className="bg-[#3B61B9] text-white w-[500px] h-[60px]">다음으로</button>
        </div>
    );
};

export default NewPostbox;
