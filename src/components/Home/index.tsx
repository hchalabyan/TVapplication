import React from "react";
import clsx from "clsx";
import classes from "./Home.module.scss";
import {Featured, SideBar, SwiperSlider} from "@/components";
import {TypographyBase} from "@/components/Typography";

export const Home = () => {
    return (

        <div className={clsx(classes.Container)}>
            <SideBar/>
            <Featured/>
            <div className={classes.RelativeSection}>
                <TypographyBase size='lg' color='light-grey'>Trending Now</TypographyBase>
                <SwiperSlider/>
            </div>

        </div>
    )
}