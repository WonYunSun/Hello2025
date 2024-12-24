"use client";

const MailboxSettingSection = () => {
    return (
        <section className="pt-7 pb-7">
            <div className="mb-3 flex justify-between">
                <p className="text-[20px] font-bold tracking-tight">내 편지함 설정</p>
            </div>
            <ul className="p-5 border-[1px] bg-background border-beige rounded-[5px]">
                <li className="flex justify-between">
                    <p className="text-[18px] font-semibold">메시지를 남길 수 있는 사람</p>
                    <button className="font-semibold text-gray-400">누구나</button>
                </li>
                <li className="flex justify-between">
                    <p className="text-[18px] font-semibold mt-1">받은 편지 내용</p>
                    <button className="font-semibold text-gray-400">전체공개</button>
                </li>
                <li className="flex justify-between">
                    <p className="text-[18px] font-semibold mt-1">받은 편지 개수 전체 공개</p>
                    <button className="font-semibold text-gray-400">공개</button>
                </li>
            </ul>
        </section>
    );
};

export default MailboxSettingSection;
