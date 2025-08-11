import { jsx as _jsx } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mousewheel, Navigation, Scrollbar } from 'swiper/modules';
import classes from "./Swiper.module.scss";
import { useData } from "@/hooks";
export const SwiperSlider = () => {
    const { trendingData, onMovieClick, setFeatured } = useData();
    const onClickHandler = (id) => {
        onMovieClick(id);
        const clickedMovie = trendingData.find((m) => m.Id === id);
        if (clickedMovie)
            setFeatured(clickedMovie);
    };
    return (_jsx("div", { className: classes.SliderContainer, children: _jsx("div", { children: _jsx(Swiper, { modules: [Navigation, Scrollbar, Mousewheel], mousewheel: { forceToAxis: true }, spaceBetween: 10, slidesPerView: 1, freeMode: true, scrollbar: { draggable: true }, breakpoints: {
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 7 },
                    1920: { slidesPerView: 8 },
                }, children: trendingData?.map((item, index) => {
                    return (_jsx(SwiperSlide, { children: _jsx("div", { className: classes.ImageWrapper, children: _jsx("img", { src: `/slider/${item.CoverImage}`, alt: "Text", height: 278, onClick: () => onClickHandler(item?.Id), className: classes.ImageItem }, index) }) }, index));
                }) }) }) }));
};
