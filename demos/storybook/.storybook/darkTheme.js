import { create } from '@storybook/theming/create';
import * as colors from '@pxblue/colors';

export const pxblueDarkTheme = create({
    base: 'dark',

    colorPrimary: colors.blue[500],
    colorSecondary: colors.white[500],

    // UI
    appBg: colors.black[700],
    appContentBg: colors.black[700],
    appBorderColor: colors.gray[200],
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: colors.white[500],
    textInverseColor: colors.white[700],

    // Toolbar default and active colors
    barTextColor: colors.black[50],
    barSelectedColor: colors.white[700],
    barBg: colors.blue[500],

    // Form colors
    inputBg: colors.black[500],
    inputBorder: colors.gray[500],
    inputTextColor: colors.white[700],
    inputBorderRadius: 4,

    /*
    // This section needs to be added within individual storybook applications.
    brandTitle: 'PX Blue Angular Component Library',
    brandImage: 'https://pxblue.github.io/static/media/pxblue.d5fa6462.svg',
    brandUrl: 'https://pxblue.github.io',
     */

    // This section can be used to apply classes to our Markdown documents.
    addonNotesTheme: {
        a: {
            color: colors.blue[200]+'!important'
        },
        h1: {
            color: colors.blue[200]
        },
        h2: {
            color: colors.blue[200],
        },
        h3: {
            color: colors.blue[200],
        },
        h4: {
            color: colors.blue[200],
        },
        h5: {
            color: colors.blue[200],
        },
        h6: {
            color: colors.blue[200]
        },
        table: {
            width: '100%',
        },
        'tr:nth-of-type(even)': {
            backgroundColor: colors.gray[700] + '!important'
        },
        'tr:nth-of-type(odd)': {
            backgroundColor: colors.gray[900] + '!important'
        },
        blockquote: {
            color: colors.white[500] + '!important'
        },
        pre: {
            backgroundColor: colors.black[800] + '!important',
        },
        code: {
            backgroundColor: colors.black[800] + '!important',
            border: 'none!important',
            color: colors.white[50] + '!important',
        }
    }
});