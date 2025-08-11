import { jsx as _jsx } from "react/jsx-runtime";
import classes from './typography.module.scss';
import clsx from 'clsx';
const safeClass = (key) => (key && classes[key]) || null;
export const TypographyBase = ({ size = 'base', bold = 'regular', color, transform, children, className, ...props }) => {
    return (_jsx("p", { className: clsx(safeClass(size), safeClass(bold), safeClass(color), safeClass(transform), className), ...props, children: children }));
};
