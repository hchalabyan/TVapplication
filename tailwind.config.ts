import {borderRadius, colors, fontFamily, fontSize, fontWeight,} from './src/utils/theme';

module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/styles/**/*.css',
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.primary,
                secondary: colors.secondary,
                text: colors.grey,
                active: colors.active,
                white: colors.white,
                black: colors.black,
            },
            fontFamily: {
                tajawal: fontFamily.tajawal
            },

        },
        fontSize: {
            base: fontSize.base,
            medium: fontSize.medium,
            baseLg: fontSize["base-lg"],
            big: fontSize.big,
        },
        fontWeight: {
            regular: fontWeight.regular,
            medium: fontWeight.medium,
            bold: fontWeight.bold,
        },
        borderRadius: {
            small: borderRadius.small,
            large: borderRadius.large,
            round: borderRadius.round,
        },
    },

    plugins: [],
};
