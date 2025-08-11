import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import classes from "./Home.module.scss";
import { Featured, SideBar, SwiperSlider } from "@/components";
import { TypographyBase } from "@/components/Typography";
export const Home = () => {
    return (_jsxs("div", { className: clsx(classes.Container), children: [_jsx(SideBar, {}), _jsx(Featured, {}), _jsxs("div", { className: classes.RelativeSection, children: [_jsx(TypographyBase, { size: 'lg', color: 'light-grey', children: "Trending Now" }), _jsx(SwiperSlider, {})] })] }));
};
