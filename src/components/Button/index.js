import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "@/components";
import classes from "./Button.module.scss";
import clsx from "clsx";
export const Button = ({ buttonType, isArrow, isActive, onClick, iconsName, className, children }) => {
    return (_jsxs("button", { className: clsx(classes.Base, buttonType ? classes[buttonType] : null, isActive && classes.Active, className), onClick: onClick, children: [iconsName && _jsx(Icon, { name: iconsName }), isArrow && _jsx("div", { className: classes.Arrow }), _jsx("span", { className: classes.TextBase, children: children })] }));
};
