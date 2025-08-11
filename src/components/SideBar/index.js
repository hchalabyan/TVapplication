import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import classes from "./SideBar.module.scss";
import { Icon } from "@/components";
import clsx from "clsx";
import { TypographyBase } from "@/components/Typography";
export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const bottomMenu = ["Language", "Get Help", "Exit"];
    const mainMenu = [
        { icon: _jsx(Icon, { name: 'search' }), label: "Search" },
        { icon: _jsx(Icon, { name: 'home' }), label: "Home" },
        { icon: _jsx(Icon, { name: 'video' }), label: "TV Shows" },
        { icon: _jsx(Icon, { name: 'movie' }), label: "Movies" },
        { icon: _jsx(Icon, { name: 'alias' }), label: "Genres" },
        { icon: _jsx(Icon, { name: 'history' }), label: "Watch Later" },
    ];
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: clsx(classes.Overlay, isOpen && classes.Show), onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false) }), _jsxs("div", { className: clsx(classes.Sidebar, isOpen && classes.Open), onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false), children: [_jsxs("div", { className: clsx(classes.Profile, isOpen && classes.ShowProfile), children: [_jsx(Icon, { name: 'man', className: classes.Avatar }), _jsx(TypographyBase, { size: 'base-lg', bold: 'bold', color: 'light-grey', children: "Daniel" })] }), _jsx("div", { className: classes.Menu, children: mainMenu.map((item, idx) => (_jsxs("div", { className: clsx(classes.MenuItem, !isOpen && classes.Centered, idx === 1 && isOpen && classes.ItemSection), children: [_jsx("div", { className: clsx(classes.IconWrapper, idx === 1 && classes.ActiveSection), children: item.icon }), isOpen && _jsx(TypographyBase, { size: 'md', color: 'light-grey', children: item.label })] }, idx))) }), _jsx("div", { className: clsx(classes.BottomMenu, !isOpen && classes.Collapsed), children: bottomMenu.map((label, idx) => (_jsx("div", { className: classes.MenuItem, children: _jsx(TypographyBase, { size: 'base-lg', transform: 'uppercase', color: 'grey', bold: 'bold', children: label }) }, idx))) })] })] }));
};
