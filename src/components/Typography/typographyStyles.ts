import {typographyColors, typographySizes, typographyTypes} from './types'


export const typographySize: Record<typographySizes, string> = {
    base: 'text-base',
    md: 'text-medium',
    lg: 'text-baseLg',
    xl: 'text-big',
    "base-lg": "text-baseLg",
}

export const typographyType: Record<typographyTypes, string> = {
    regular: `font-tajawal`,
    medium: `font-tajawal font-[600]`,
    bold: `font-tajawal font-[700]`,
}

export const typographyColor: Record<typographyColors, string> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white',
    hover: 'text-hover',
    text: 'text-grey',
    black: 'text-black',
    active: 'text-active',
    "light-grey": "text-lightGrey",
    grey: 'text-grey',
}

export const getTypographyClassName = (
    size: typographySizes,
    bold: typographyTypes = 'regular',
    color: typographyColors,
) => {
    return `${typographySize[size]} ${typographyType[bold]} ${typographyColor[color]}`
}
