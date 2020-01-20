import { create } from '@storybook/theming/create';
import * as colors from '@pxblue/colors';

export default create({
    base: colors.blue[500],

    colorPrimary: colors.blue[500],
    colorSecondary: colors.blue[500],

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: colors.gray[100],
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: colors.black[500],
    textInverseColor: 'white',

    // Toolbar default and active colors
    barTextColor: colors.white[50],
    barSelectedColor: colors.white[900],
    barBg: colors.blue[500],

    // Form colors
    inputBg: colors.white[200],
    inputBorder: colors.gray[100],
    inputTextColor: colors.black[500],
    inputBorderRadius: 4,

    brandTitle: 'PX Blue React Component Library',
    brandImage: 'https://pxblue.github.io/static/media/pxblue.d5fa6462.svg',
    brandUrl: 'https://pxblue.github.io',
});
