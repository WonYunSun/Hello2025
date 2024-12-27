import Image from "next/image";

import titleImage from "@/assets/images/title.svg";
import pineTree from "@/assets/images/pine-tree.svg";
import deco from "@/assets/images/deco.svg";
import ground from "@/assets/images/ground.svg";

import GoogleLoginBtn from "./_components/GoogleLoginBtn";
import KakaoLoginBtn from "./_components/KakaoLoginBtn";
import GithubLoginBtn from "./_components/GithubLoginBtn";

const LoginPage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="flex flex-col items-center relative mt-24 md:mt-18.3vh">
                <Image src={titleImage} width={301.15} height={186} alt="title_img" className="w-[60%] md:w-[301px]" />
                <span className="mt-6 text-[16px] md:text-[20px] text-[#544A40] font-medium">
                    소중한 사람들과 새해 인사를 나눠보세요!
                </span>
                <picture className="absolute -bottom-8 md:-bottom-12 left-0 z-10">
                    <Image
                        src={pineTree}
                        width={119.2}
                        height={105.08}
                        alt="pine_tree_img"
                        className="w-[80px] md:w-[119px]"
                    />
                </picture>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-4 mt-12 md:mt-24 w-full">
                <GoogleLoginBtn />
                <KakaoLoginBtn />
                <GithubLoginBtn />
            </div>
            <picture className="absolute z-20 bottom-10 w-full flex justify-center">
                <Image src={deco} width={567.47} height={248} alt="deco_img" className="w-[90%] md:w-[567px]" />
            </picture>
            <picture className="fixed bottom-0 z-10 w-full">
                <Image src={ground} width={600} height={125} alt="ground_img" />
            </picture>
        </div>
    );
};

export default LoginPage;
