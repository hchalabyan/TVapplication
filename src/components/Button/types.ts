import React from "react";
import {icons} from "@/components/Icon/constants";

export type ButtonTypes = 'Light' | 'Dark'
type IconName = keyof typeof icons | ''

export interface IButtonProps {
    buttonType?: ButtonTypes
    isActive?: boolean
    onClick?: () => void
    className?: string
    children: React.ReactNode
    iconsName?: IconName
    isArrow?: boolean
}