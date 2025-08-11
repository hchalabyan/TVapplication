import React, {useEffect, useState} from "react";
import {useData} from "@/hooks";
import classes from "./Featured.module.scss";
import {TypographyBase} from "@/components/Typography";
import {formatDuration, getYearFromDate} from "@/types";
import {Button} from "@/components";

export const Featured = () => {
    const {featuredData} = useData();
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        setShowVideo(false); // reset video on featuredData change

        if (!featuredData?.VideoUrl) return;

        const timer = setTimeout(() => setShowVideo(true), 2000);
        return () => clearTimeout(timer);
    }, [featuredData]);

    if (!featuredData) return null;

    const {
        Duration,
        Date,
        MpaRating,
        Category,
        Description,
        VideoUrl,
        CoverImage,
        TitleImage,
    } = featuredData;

    return (
        <div className={classes.CoverBackground}>
            {!showVideo && CoverImage && (
                <img
                    src={`/slider/${CoverImage}`}
                    alt={`${Category} Cover`}
                    className={classes.BackgroundImage}
                />
            )}

            {showVideo && VideoUrl && (
                <video
                    className={classes.BackgroundVideo}
                    src={VideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            )}

            <div className={classes.DescriptionBlock}>
                <TypographyBase
                    color="text"
                    size="base"
                    bold="bold"
                    transform="uppercase"
                >
                    {Category}
                </TypographyBase>

                {TitleImage && (
                    <img
                        src={`/slider/${TitleImage}`}
                        alt={`${Category} Title`}
                        className={classes.TitleImage}
                    />
                )}

                <div className={classes.InfoBlock}>
                    <TypographyBase size="base-lg" color="light-grey">
                        {getYearFromDate(Date)}
                    </TypographyBase>
                    <TypographyBase size="base-lg" color="light-grey">
                        {MpaRating}
                    </TypographyBase>
                    <TypographyBase size="base-lg" color="light-grey">
                        {formatDuration(Number(Duration))}
                    </TypographyBase>
                </div>

                <div className={classes.TypographyWrapper}>
                    <TypographyBase size="lg" color="light-grey">
                        {Description}
                    </TypographyBase>
                </div>

                <div className={classes.ButtonWrapper}>
                    <Button isArrow buttonType="Light">
                        Play
                    </Button>
                    <Button buttonType="Dark">More Info</Button>
                </div>
            </div>
        </div>
    );
};
