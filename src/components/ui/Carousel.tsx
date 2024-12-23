import { ReactNode } from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
    children: ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
    const settings: Settings = {
        infinite: false,
        speed: 500,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
