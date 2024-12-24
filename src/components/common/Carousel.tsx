import { ReactNode } from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
    children: ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
    const  settings: Settings = {
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
