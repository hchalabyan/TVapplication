export const typographySize = {
    base: 'text-base',
    md: 'text-medium',
    lg: 'text-baseLg',
    xl: 'text-big',
    "base-lg": "text-baseLg",
};
export const typographyType = {
    regular: `font-tajawal`,
    medium: `font-tajawal font-[600]`,
    bold: `font-tajawal font-[700]`,
};
export const typographyColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white',
    hover: 'text-hover',
    text: 'text-grey',
    black: 'text-black',
    active: 'text-active',
    "light-grey": "text-lightGrey",
    grey: 'text-grey',
};
export const getTypographyClassName = (size, bold = 'regular', color) => {
    return `${typographySize[size]} ${typographyType[bold]} ${typographyColor[color]}`;
};
