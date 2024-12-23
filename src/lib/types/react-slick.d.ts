declare module "react-slick" {
    import { Component, ReactNode } from "react";

    export type Settings = {
        className?: string;
        centerMode?: boolean;
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        focusOnSelect?: boolean;
        slidesToShow?: number;
        slidesToScroll?: number;
        arrows?: boolean;
        autoplay?: boolean;
        centerPadding?: number;
    };

    export default class Slider extends Component<Settings> {}
}
