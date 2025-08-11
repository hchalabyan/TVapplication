import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Mousewheel, Navigation, Scrollbar} from 'swiper/modules'
import classes from "./Swiper.module.scss"
import {useData} from "@/hooks";

export const SwiperSlider = () => {
    const {trendingData, onMovieClick, setFeatured} = useData()

    const onClickHandler = (id: string) => {
        onMovieClick(id);
        const clickedMovie = trendingData.find((m) => m.Id === id);
        if (clickedMovie) setFeatured(clickedMovie);
    }
    return (
        <div
            className={classes.SliderContainer}
        >
            <div>
                <Swiper
                    modules={[Navigation, Scrollbar, Mousewheel]}
                    mousewheel={{forceToAxis: true}}
                    spaceBetween={10}
                    slidesPerView={1}
                    freeMode={true}
                    scrollbar={{draggable: true}}
                    breakpoints={{
                        320: {slidesPerView: 2},
                        768: {slidesPerView: 4},
                        1024: {slidesPerView: 5},
                        1280: {slidesPerView: 7},
                        1920: {slidesPerView: 8},
                    }}
                >
                    {trendingData?.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={classes.ImageWrapper}>
                                    <img
                                        src={`/slider/${item.CoverImage}`}
                                        alt="Text"
                                        height={278}
                                        key={index}
                                        onClick={() => onClickHandler(item?.Id)}
                                        className={classes.ImageItem}
                                    />
                                </div>

                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

        </div>


    )
}