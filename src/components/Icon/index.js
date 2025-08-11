import { jsx as _jsx } from "react/jsx-runtime";
import { icons } from './constants';
export const Icon = ({ name, className, ...rest }) => {
    const src = icons[name];
    if (!src) {
        return null;
    }
    return (_jsx("img", { className: className, src: src, alt: name, ...rest }));
};
