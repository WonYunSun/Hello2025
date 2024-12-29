"use client";
import { ReactNode } from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
    children: ReactNode;
    initialSlideIndex: number;
};

const Carousel = ({ children, initialSlideIndex = 0 }: CarouselProps) => {
    const settings: Settings = {
        initialSlide: initialSlideIndex, // 시작 슬라이드 인덱스
        infinite: true, // 무한 루프 설정
        speed: 500, // 슬라이드 전환 속도 (ms)
        focusOnSelect: true, // 슬라이드 선택 시 해당 슬라이드로 이동
        slidesToShow: 4, // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1 // 한 번에 스크롤할 슬라이드 개수
    };

    return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
