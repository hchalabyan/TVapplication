import React from "react";
import {IButtonProps} from "./types";
import {Icon} from "@/components";
import classes from "./Button.module.scss"
import clsx from "clsx";

export const Button: React.FC<IButtonProps> = ({
                                                   buttonType,
                                                   isArrow,
                                                   isActive,
                                                   onClick,
                                                   iconsName,
                                                   className,
                                                   children
                                               }) => {
    return (
        <button
            className={clsx(
                classes.Base,
                classes[buttonType],
                isActive && classes.Active,
                className
            )}
            onClick={onClick}
        >
            {iconsName && <Icon name={iconsName}/>}
            {isArrow && <div className={classes.Arrow}/>}
            <span className={classes.TextBase}>{children}</span>
        </button>
    )
}