import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useData } from "@/hooks";
import classes from "./Featured.module.scss";
import { TypographyBase } from "@/components/Typography";
import { formatDuration, getYearFromDate } from "@/types";
import { Button } from "@/components";
export const Featured = () => {
    const { featuredData } = useData();
    const [showVideo, setShowVideo] = useState(false);
    useEffect(() => {
        setShowVideo(false); // reset video on featuredData change
        if (!featuredData?.VideoUrl)
            return;
        const timer = setTimeout(() => setShowVideo(true), 2000);
        return () => clearTimeout(timer);
    }, [featuredData]);
    if (!featuredData)
        return null;
    const { Duration, Date, MpaRating, Category, Description, VideoUrl, CoverImage, TitleImage, } = featuredData;
    return (_jsxs("div", { className: classes.CoverBackground, children: [!showVideo && CoverImage && (_jsx("img", { src: `/slider/${CoverImage}`, alt: `${Category} Cover`, className: classes.BackgroundImage })), showVideo && VideoUrl && (_jsx("video", { className: classes.BackgroundVideo, src: VideoUrl, autoPlay: true, muted: true, loop: true, playsInline: true })), _jsxs("div", { className: classes.DescriptionBlock, children: [_jsx(TypographyBase, { color: "text", size: "base", bold: "bold", transform: "uppercase", children: Category }), TitleImage && (_jsx("img", { src: `/slider/${TitleImage}`, alt: `${Category} Title`, className: classes.TitleImage })), _jsxs("div", { className: classes.InfoBlock, children: [_jsx(TypographyBase, { size: "base-lg", color: "light-grey", children: getYearFromDate(Date) }), _jsx(TypographyBase, { size: "base-lg", color: "light-grey", children: MpaRating }), _jsx(TypographyBase, { size: "base-lg", color: "light-grey", children: formatDuration(Number(Duration)) })] }), _jsx("div", { className: classes.TypographyWrapper, children: _jsx(TypographyBase, { size: "lg", color: "light-grey", children: Description }) }), _jsxs("div", { className: classes.ButtonWrapper, children: [_jsx(Button, { isArrow: true, buttonType: "Light", children: "Play" }), _jsx(Button, { buttonType: "Dark", children: "More Info" })] })] })] }));
};
