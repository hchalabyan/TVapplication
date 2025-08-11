import React from "react";
import clsx from "clsx";
import {IHomeProps} from "@/components/Home/types";
import classes from "./Home.module.scss";
import {Featured, SideBar, SwiperSlider} from "@/components";
import {TypographyBase} from "@/components/Typography";

export const Home: React.FC<IHomeProps> = () => {
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